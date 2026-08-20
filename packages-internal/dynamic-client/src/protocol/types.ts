import type { TypeRegistry } from "@smithy/core/schema";

/**
 * A client protocol instance, narrowed to the members the dynamic client relies
 * on. Concrete protocols (e.g. `SmithyRpcV2CborProtocol`) implement much more,
 * but only the shape ID is needed for selection.
 *
 * @internal
 */
export interface ClientProtocolInstance {
  getShapeId(): string;
}

/**
 * A constructor for a client protocol, invoked by the base client with the
 * resolved `{ defaultNamespace, errorTypeRegistries }` settings.
 *
 * @public
 */
export interface ClientProtocolCtor {
  new (settings: {
    defaultNamespace: string;
    errorTypeRegistries?: TypeRegistry[];
    xmlNamespace: string;
    version: string;
    serviceTarget: string;
  }): ClientProtocolInstance;
}
