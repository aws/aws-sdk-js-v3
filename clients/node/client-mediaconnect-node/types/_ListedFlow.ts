/**
 * Provides a summary of a flow, including its ARN, Availability Zone, and source type.
 */
export interface _ListedFlow {
  /**
   * The Availability Zone that the flow was created in.
   */
  AvailabilityZone: string;

  /**
   * A description of the flow.
   */
  Description: string;

  /**
   * The ARN of the flow.
   */
  FlowArn: string;

  /**
   * The name of the flow.
   */
  Name: string;

  /**
   * The type of source. This value is either owned (originated somewhere other than an AWS Elemental MediaConnect flow owned by another AWS account) or entitled (originated at an AWS Elemental MediaConnect flow owned by another AWS account).
   */
  SourceType: "OWNED" | "ENTITLED" | string;

  /**
   * The current status of the flow.
   */
  Status:
    | "STANDBY"
    | "ACTIVE"
    | "UPDATING"
    | "DELETING"
    | "STARTING"
    | "STOPPING"
    | "ERROR"
    | string;
}

export type _UnmarshalledListedFlow = _ListedFlow;
