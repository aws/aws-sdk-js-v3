import { _Core, _UnmarshalledCore } from "./_Core";

/**
 * Information about a core definition version.
 */
export interface _CoreDefinitionVersion {
  /**
   * A list of cores in the core definition version.
   */
  Cores?: Array<_Core> | Iterable<_Core>;
}

export interface _UnmarshalledCoreDefinitionVersion
  extends _CoreDefinitionVersion {
  /**
   * A list of cores in the core definition version.
   */
  Cores?: Array<_UnmarshalledCore>;
}
