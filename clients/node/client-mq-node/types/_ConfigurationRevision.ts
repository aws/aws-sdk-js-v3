/**
 * Returns information about the specified configuration revision.
 */
export interface _ConfigurationRevision {
  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date | string | number;

  /**
   * The description of the configuration revision.
   */
  Description?: string;

  /**
   * Required. The revision number of the configuration.
   */
  Revision?: number;
}

export interface _UnmarshalledConfigurationRevision
  extends _ConfigurationRevision {
  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;
}
