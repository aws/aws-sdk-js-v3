/**
 * <p>Replication parameters for replicating a server.</p>
 */
export interface _ServerReplicationParameters {
  /**
   * <p>Seed time for creating a replication job for the server.</p>
   */
  seedTime?: Date | string | number;

  /**
   * <p>Frequency of creating replication jobs for the server.</p>
   */
  frequency?: number;

  /**
   * <p/>
   */
  runOnce?: boolean;

  /**
   * <p>License type for creating a replication job for the server.</p>
   */
  licenseType?: "AWS" | "BYOL" | string;

  /**
   * <p>Number of recent AMIs to keep when creating a replication job for this server.</p>
   */
  numberOfRecentAmisToKeep?: number;

  /**
   * <p>When true, the replication job produces encrypted AMIs. See also <code>KmsKeyId</code> below.</p>
   */
  encrypted?: boolean;

  /**
   * <p/> <p>KMS key ID for replication jobs that produce encrypted AMIs. Can be any of the following: </p> <ul> <li> <p>KMS key ID</p> </li> <li> <p>KMS key alias</p> </li> <li> <p>ARN referring to KMS key ID</p> </li> <li> <p>ARN referring to KMS key alias</p> </li> </ul> <p> If encrypted is <i>true</i> but a KMS key id is not specified, the customer's default KMS key for EBS is used. </p>
   */
  kmsKeyId?: string;
}

export interface _UnmarshalledServerReplicationParameters
  extends _ServerReplicationParameters {
  /**
   * <p>Seed time for creating a replication job for the server.</p>
   */
  seedTime?: Date;
}
