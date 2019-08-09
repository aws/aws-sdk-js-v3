import {
  _GlobalClusterMember,
  _UnmarshalledGlobalClusterMember
} from "./_GlobalClusterMember";

/**
 * <p>A data type representing an Aurora global database.</p>
 */
export interface _GlobalCluster {
  /**
   * <p> Contains a user-supplied global database cluster identifier. This identifier is the unique key that identifies a global database cluster. </p>
   */
  GlobalClusterIdentifier?: string;

  /**
   * <p> The AWS Region-unique, immutable identifier for the global database cluster. This identifier is found in AWS CloudTrail log entries whenever the AWS KMS key for the DB cluster is accessed. </p>
   */
  GlobalClusterResourceId?: string;

  /**
   * <p>The Amazon Resource Name (ARN) for the global database cluster.</p>
   */
  GlobalClusterArn?: string;

  /**
   * <p>Specifies the current state of this global database cluster.</p>
   */
  Status?: string;

  /**
   * <p> The Aurora database engine used by the global database cluster. </p>
   */
  Engine?: string;

  /**
   * <p>Indicates the database engine version.</p>
   */
  EngineVersion?: string;

  /**
   * <p> The default database name within the new global database cluster. </p>
   */
  DatabaseName?: string;

  /**
   * <p> The storage encryption setting for the global database cluster. </p>
   */
  StorageEncrypted?: boolean;

  /**
   * <p> The deletion protection setting for the new global database cluster. </p>
   */
  DeletionProtection?: boolean;

  /**
   * <p> The list of cluster IDs for secondary clusters within the global database cluster. Currently limited to 1 item. </p>
   */
  GlobalClusterMembers?:
    | Array<_GlobalClusterMember>
    | Iterable<_GlobalClusterMember>;
}

export interface _UnmarshalledGlobalCluster extends _GlobalCluster {
  /**
   * <p> The list of cluster IDs for secondary clusters within the global database cluster. Currently limited to 1 item. </p>
   */
  GlobalClusterMembers?: Array<_UnmarshalledGlobalClusterMember>;
}
