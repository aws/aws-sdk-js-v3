/**
 * Usage information for the identity pool.
 */
export interface _IdentityPoolUsage {
  /**
   * A name-spaced GUID (for example, us-east-1:23EC4050-6AEA-7089-A2DD-08002EXAMPLE) created by Amazon Cognito. GUID generation is unique within a region.
   */
  IdentityPoolId?: string;

  /**
   * Number of sync sessions for the identity pool.
   */
  SyncSessionsCount?: number;

  /**
   * Data storage information for the identity pool.
   */
  DataStorage?: number;

  /**
   * Date on which the identity pool was last modified.
   */
  LastModifiedDate?: Date | string | number;
}

export interface _UnmarshalledIdentityPoolUsage extends _IdentityPoolUsage {
  /**
   * Date on which the identity pool was last modified.
   */
  LastModifiedDate?: Date;
}
