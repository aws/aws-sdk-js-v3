import { _Entitlement, _UnmarshalledEntitlement } from "./_Entitlement";
import { _Output, _UnmarshalledOutput } from "./_Output";
import { _Source, _UnmarshalledSource } from "./_Source";

/**
 * The settings for a flow, including its source, outputs, and entitlements.
 */
export interface _Flow {
  /**
   * The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS.
   */
  AvailabilityZone: string;

  /**
   * A description of the flow. This value is not used or seen outside of the current AWS Elemental MediaConnect account.
   */
  Description?: string;

  /**
   * The IP address from which video will be sent to output destinations.
   */
  EgressIp?: string;

  /**
   * The entitlements in this flow.
   */
  Entitlements: Array<_Entitlement> | Iterable<_Entitlement>;

  /**
   * The Amazon Resource Name (ARN), a unique identifier for any AWS resource, of the flow.
   */
  FlowArn: string;

  /**
   * The name of the flow.
   */
  Name: string;

  /**
   * The outputs in this flow.
   */
  Outputs: Array<_Output> | Iterable<_Output>;

  /**
   * The settings for the source of the flow.
   */
  Source: _Source;

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

export interface _UnmarshalledFlow extends _Flow {
  /**
   * The entitlements in this flow.
   */
  Entitlements: Array<_UnmarshalledEntitlement>;

  /**
   * The outputs in this flow.
   */
  Outputs: Array<_UnmarshalledOutput>;

  /**
   * The settings for the source of the flow.
   */
  Source: _UnmarshalledSource;
}
