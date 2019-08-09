import { _Resource, _UnmarshalledResource } from "./_Resource";

/**
 * Information about a resource definition version.
 */
export interface _ResourceDefinitionVersion {
  /**
   * A list of resources.
   */
  Resources?: Array<_Resource> | Iterable<_Resource>;
}

export interface _UnmarshalledResourceDefinitionVersion
  extends _ResourceDefinitionVersion {
  /**
   * A list of resources.
   */
  Resources?: Array<_UnmarshalledResource>;
}
