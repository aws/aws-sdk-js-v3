/**
 * <p> A data structure with information about any primary and secondary clusters associated with an Aurora global database. </p>
 */
export interface _GlobalClusterMember {
  /**
   * <p> The Amazon Resource Name (ARN) for each Aurora cluster. </p>
   */
  DBClusterArn?: string;

  /**
   * <p> The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Aurora global database. </p>
   */
  Readers?: Array<string> | Iterable<string>;

  /**
   * <p> Specifies whether the Aurora cluster is the primary cluster (that is, has read-write capability) for the Aurora global database with which it is associated. </p>
   */
  IsWriter?: boolean;
}

export interface _UnmarshalledGlobalClusterMember extends _GlobalClusterMember {
  /**
   * <p> The Amazon Resource Name (ARN) for each read-only secondary cluster associated with the Aurora global database. </p>
   */
  Readers?: Array<string>;
}
