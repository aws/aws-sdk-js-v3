import type { TypeRegistry } from "@smithy/core/schema";

/**
 * A client protocol instance, narrowed to the members the dynamic client relies
 * on.
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
    xmlNamespace?: string;
    version?: string;
    serviceTarget?: string;
    awsQueryCompatible?: boolean;
  }): ClientProtocolInstance;
}
