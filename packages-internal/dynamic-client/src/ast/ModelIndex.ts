import { hasOwn } from "@aws-sdk/core/util";
import type { SchemaTraitsObject } from "@smithy/types";

import { mapTraits } from "./mapTraits";
import type { AstReference, AstShape, AstTraits, SmithyAst } from "./types";

/**
 * Splits an absolute shape ID (`namespace#name`) into its parts.
 *
 * @internal
 */
export function parseShapeId(shapeId: string): { namespace: string; name: string } {
  const hash = shapeId.indexOf("#");
  return {
    namespace: shapeId.slice(0, hash),
    name: shapeId.slice(hash + 1),
  };
}

/**
 * Indexes a Smithy JSON AST for random access during schema construction.
 *
 * @internal
 */
export class ModelIndex {
  public readonly serviceId: string;

  private readonly shapes: Record<string, AstShape>;

  /**
   * @param ast - a parsed Smithy JSON AST.
   */
  public constructor(ast: SmithyAst) {
    this.shapes = ast.shapes ?? {};
    this.serviceId = this.findServiceId();
  }

  /**
   * @returns the service shape ID.
   */
  public getServiceId(): string {
    return this.serviceId;
  }

  /**
   * @returns the service shape.
   */
  public getService(): AstShape {
    return this.shapes[this.serviceId];
  }

  /**
   * @param shapeId - absolute shape ID.
   * @returns the shape, or `undefined` when absent (e.g. prelude shapes).
   */
  public getShape(shapeId: string): AstShape | undefined {
    return this.shapes[shapeId];
  }

  /**
   * Iterates over all shapes in the model.
   */
  public forEachShape(callback: (shapeId: string, shape: AstShape) => void): void {
    for (const shapeId in this.shapes) {
      if (hasOwn(this.shapes, shapeId)) {
        callback(shapeId, this.shapes[shapeId]);
      }
    }
  }

  /**
   * @returns the runtime trait object for a shape or member, or `0` when none.
   */
  public getTraits(node: { traits?: AstTraits } | undefined): SchemaTraitsObject | 0 {
    return mapTraits(node?.traits);
  }

  /**
   * Protocol traits are service traits whose definition carries
   * `smithy.api#protocolDefinition`.
   *
   * @returns the list of candidate protocol trait shape IDs on the service.
   */
  public getProtocolTraits(): string[] {
    const service = this.getService();
    const traits = service?.traits;
    if (!traits) {
      return [];
    }
    const result: string[] = [];
    for (const traitId in traits) {
      if (!hasOwn(traits, traitId)) continue;
      const def = this.shapes[traitId];
      if (def?.traits && "smithy.api#protocolDefinition" in def.traits) {
        result.push(traitId);
        continue;
      }
      // The trait definition is not in the AST; defer the decision to
      // protocol selection, which matches against known protocol shape IDs.
      if (!def) {
        result.push(traitId);
      }
    }
    return result;
  }

  /**
   * @returns absolute shape IDs of all operations reachable from the service,
   *   including operations bound through nested resources.
   */
  public getOperationIds(): string[] {
    const result: string[] = [];
    const seenResources = new Set<string>();

    const collectOps = (refs: AstReference[] | undefined): void => {
      if (!refs) {
        return;
      }
      for (const ref of refs) {
        result.push(ref.target);
      }
    };

    const collectResources = (refs: AstReference[] | undefined): void => {
      if (!refs) {
        return;
      }
      for (const ref of refs) {
        if (seenResources.has(ref.target)) {
          continue;
        }
        seenResources.add(ref.target);
        const resource = this.shapes[ref.target];
        if (!resource) {
          continue;
        }
        collectOps(resource.operations);
        collectOps((resource as any).collectionOperations);
        // Lifecycle operations are single references, not arrays.
        for (const lifecycle of ["create", "put", "read", "update", "delete", "list"] as const) {
          const lifecycleRef = (resource as any)[lifecycle] as AstReference | undefined;
          if (lifecycleRef) {
            result.push(lifecycleRef.target);
          }
        }
        collectResources(resource.resources);
      }
    };

    const service = this.getService();
    collectOps(service?.operations);
    collectResources(service?.resources);

    return result;
  }

  private findServiceId(): string {
    let serviceId: string | undefined;
    for (const shapeId in this.shapes) {
      if (this.shapes[shapeId].type === "service") {
        if (serviceId !== undefined) {
          throw new Error(
            `@smithy/dynamic-client - the AST contains more than one service (${serviceId}, ${shapeId}); expected exactly one.`
          );
        }
        serviceId = shapeId;
      }
    }
    if (serviceId === undefined) {
      throw new Error("@smithy/dynamic-client - the AST contains no service shape.");
    }
    return serviceId;
  }
}
