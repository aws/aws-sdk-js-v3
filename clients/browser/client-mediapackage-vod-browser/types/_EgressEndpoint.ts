/**
 * The endpoint URL used to access an Asset using one PackagingConfiguration.
 */
export interface _EgressEndpoint {
  /**
   * The ID of the PackagingConfiguration being applied to the Asset.
   */
  PackagingConfigurationId?: string;

  /**
   * The URL of the parent manifest for the repackaged Asset.
   */
  Url?: string;
}

export type _UnmarshalledEgressEndpoint = _EgressEndpoint;
