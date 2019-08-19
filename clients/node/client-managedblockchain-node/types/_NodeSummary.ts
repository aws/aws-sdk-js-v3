/**
 * <p>A summary of configuration properties for a peer node.</p>
 */
export interface _NodeSummary {
  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The status of the node.</p>
   */
  Status?:
    | "CREATING"
    | "AVAILABLE"
    | "CREATE_FAILED"
    | "DELETING"
    | "DELETED"
    | "FAILED"
    | string;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date | string | number;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>The EC2 instance type for the node.</p>
   */
  InstanceType?: string;
}

export interface _UnmarshalledNodeSummary extends _NodeSummary {
  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;
}
