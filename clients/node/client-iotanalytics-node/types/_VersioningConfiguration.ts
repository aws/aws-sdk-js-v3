/**
 * <p>Information about the versioning of data set contents.</p>
 */
export interface _VersioningConfiguration {
  /**
   * <p>If true, unlimited versions of data set contents will be kept.</p>
   */
  unlimited?: boolean;

  /**
   * <p>How many versions of data set contents will be kept. The "unlimited" parameter must be false.</p>
   */
  maxVersions?: number;
}

export type _UnmarshalledVersioningConfiguration = _VersioningConfiguration;
