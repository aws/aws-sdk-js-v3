import type { TypeRegistry } from "@smithy/core/schema";

import type { ModelIndex } from "../ast/ModelIndex";
import type { ClientProtocolCtor } from "./types";

/**
 * Settings passed to a selected protocol constructor by the base client.
 *
 * @internal
 */
export interface ProtocolSettings {
  defaultNamespace: string;
  errorTypeRegistries?: TypeRegistry[];
  xmlNamespace?: string;
  version?: string;
  serviceTarget?: string;
  awsQueryCompatible?: boolean;
}

/**
 * The outcome of protocol selection: the chosen constructor and the settings
 * the base client uses to instantiate it.
 *
 * @internal
 */
export interface SelectedProtocol {
  protocol: ClientProtocolCtor;
  protocolSettings: ProtocolSettings;
}

/**
 * Selects the protocol for a service by matching the service's protocol trait
 * shape IDs against the shape ID reported by each candidate protocol.
 *
 * Candidates are considered in the service's trait order first (model
 * preference), falling back to the order of the `protocols` array. The first
 * match wins.
 *
 * @param index - the AST model index.
 * @param protocols - candidate protocol constructors in caller preference order.
 * @param errorTypeRegistries - registries of modeled errors for the protocol.
 *
 * @returns the selected protocol and its settings.
 *
 * @throws when no candidate protocol matches a service protocol trait.
 *
 * @internal
 */
export function selectProtocol(
  index: ModelIndex,
  protocols: ClientProtocolCtor[],
  errorTypeRegistries: TypeRegistry[]
): SelectedProtocol {
  if (protocols.length === 0) {
    throw new Error(
      "@smithy/dynamic-client - no candidate protocols were provided; pass at least one protocol constructor."
    );
  }

  const serviceTraitIds = index.getProtocolTraits();
  const byShapeId = new Map<string, ClientProtocolCtor>();
  for (const ctor of protocols) {
    byShapeId.set(shapeIdOf(ctor), ctor);
  }

  const { namespace } = splitService(index.getServiceId());
  const service = index.getService();
  const serviceTraits = service?.traits ?? {};

  const xmlNsTrait = serviceTraits["smithy.api#xmlNamespace"] as { uri?: string } | undefined;
  const xmlNamespace = xmlNsTrait?.uri ?? "";
  const version = service?.version ?? "";
  const serviceTarget = parseServiceName(index.getServiceId());

  const protocolSettings: ProtocolSettings = {
    defaultNamespace: namespace,
    errorTypeRegistries,
    xmlNamespace,
    version,
    serviceTarget,
    awsQueryCompatible: !!serviceTraits["aws.protocols#awsQueryCompatible"],
  };

  // Prefer the model's declared protocol order.
  for (const traitId of serviceTraitIds) {
    const ctor = byShapeId.get(traitId);
    if (ctor) {
      return { protocol: ctor, protocolSettings };
    }
  }

  throw new Error(
    `@smithy/dynamic-client - none of the candidate protocols [${[...byShapeId.keys()].join(
      ", "
    )}] match the service protocol traits [${serviceTraitIds.join(", ")}].`
  );
}

/**
 * Reads a protocol constructor's shape ID by instantiating it with inert
 * settings. Protocol shape IDs are constants, so the throwaway instance is
 * only used to read {@link getShapeId}.
 *
 * @internal
 */
function shapeIdOf(ctor: ClientProtocolCtor): string {
  const instance = new ctor({
    defaultNamespace: "",
    errorTypeRegistries: [],
    xmlNamespace: "",
    version: "",
    serviceTarget: "",
  });
  return instance.getShapeId();
}

/**
 * Extracts the service name (the part after `#`) from an absolute shape ID.
 * For example, `com.amazonaws.dynamodb#DynamoDB_20120810` → `DynamoDB_20120810`.
 *
 * @internal
 */
function parseServiceName(serviceId: string): string {
  const hash = serviceId.indexOf("#");
  return hash >= 0 ? serviceId.slice(hash + 1) : serviceId;
}

/**
 * @internal
 */
function splitService(serviceId: string): { namespace: string } {
  return { namespace: serviceId.slice(0, serviceId.indexOf("#")) };
}
