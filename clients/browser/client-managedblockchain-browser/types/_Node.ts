import {
  _NodeFrameworkAttributes,
  _UnmarshalledNodeFrameworkAttributes
} from "./_NodeFrameworkAttributes";

/**
 * <p>Configuration properties of a peer node.</p>
 */
export interface _Node {
  /**
   * <p>The unique identifier of the network that the node is in.</p>
   */
  NetworkId?: string;

  /**
   * <p>The unique identifier of the member to which the node belongs.</p>
   */
  MemberId?: string;

  /**
   * <p>The unique identifier of the node.</p>
   */
  Id?: string;

  /**
   * <p>The instance type of the node.</p>
   */
  InstanceType?: string;

  /**
   * <p>The Availability Zone in which the node exists.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Attributes of the blockchain framework being used.</p>
   */
  FrameworkAttributes?: _NodeFrameworkAttributes;

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
}

export interface _UnmarshalledNode extends _Node {
  /**
   * <p>Attributes of the blockchain framework being used.</p>
   */
  FrameworkAttributes?: _UnmarshalledNodeFrameworkAttributes;

  /**
   * <p>The date and time that the node was created.</p>
   */
  CreationDate?: Date;
}
