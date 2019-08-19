/**
 * Usage information for the identity.
 */
export interface _IdentityUsage {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityId?: string;

  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * Date on which the identity was last modified.
   */
  LastModifiedDate?: Date | string | number;

  /**
   * Number of datasets for the identity.
   */
  DatasetCount?: number;

  /**
   * Total data storage for this identity.
   */
  DataStorage?: number;
}

export interface _UnmarshalledIdentityUsage extends _IdentityUsage {
  /**
   * Date on which the identity was last modified.
   */
  LastModifiedDate?: Date;
}
