/**
 * <p>Contains directory limit information for a region.</p>
 */
export interface _DirectoryLimits {
  /**
   * <p>The maximum number of cloud directories allowed in the region.</p>
   */
  CloudOnlyDirectoriesLimit?: number;

  /**
   * <p>The current number of cloud directories in the region.</p>
   */
  CloudOnlyDirectoriesCurrentCount?: number;

  /**
   * <p>Indicates if the cloud directory limit has been reached.</p>
   */
  CloudOnlyDirectoriesLimitReached?: boolean;

  /**
   * <p>The maximum number of AWS Managed Microsoft AD directories allowed in the region.</p>
   */
  CloudOnlyMicrosoftADLimit?: number;

  /**
   * <p>The current number of AWS Managed Microsoft AD directories in the region.</p>
   */
  CloudOnlyMicrosoftADCurrentCount?: number;

  /**
   * <p>Indicates if the AWS Managed Microsoft AD directory limit has been reached.</p>
   */
  CloudOnlyMicrosoftADLimitReached?: boolean;

  /**
   * <p>The maximum number of connected directories allowed in the region.</p>
   */
  ConnectedDirectoriesLimit?: number;

  /**
   * <p>The current number of connected directories in the region.</p>
   */
  ConnectedDirectoriesCurrentCount?: number;

  /**
   * <p>Indicates if the connected directory limit has been reached.</p>
   */
  ConnectedDirectoriesLimitReached?: boolean;
}

export type _UnmarshalledDirectoryLimits = _DirectoryLimits;
