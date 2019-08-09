import { _TagSpecification } from "./_TagSpecification";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AllocateHostsInput shape
 */
export interface AllocateHostsInput {
  /**
   * <p>Indicates whether the host accepts any untargeted instance launches that match its instance type configuration, or if it only accepts Host tenancy instance launches that specify its unique host ID. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/how-dedicated-hosts-work.html#dedicated-hosts-understanding"> Understanding Instance Placement and Host Affinity</a> in the <i>Amazon EC2 User Guide for Linux Instances</i>.</p> <p>Default: <code>on</code> </p>
   */
  AutoPlacement?: "on" | "off" | string;

  /**
   * <p>The Availability Zone in which to allocate the Dedicated Host.</p>
   */
  AvailabilityZone: string;

  /**
   * <p>Unique, case-sensitive identifier that you provide to ensure the idempotency of the request. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/Run_Instance_Idempotency.html">How to Ensure Idempotency</a>.</p>
   */
  ClientToken?: string;

  /**
   * <p>Specifies the instance type for which to configure your Dedicated Hosts. When you specify the instance type, that is the only instance type that you can launch onto that host.</p>
   */
  InstanceType: string;

  /**
   * <p>The number of Dedicated Hosts to allocate to your account with these parameters.</p>
   */
  Quantity: number;

  /**
   * <p>The tags to apply to the Dedicated Host during creation.</p>
   */
  TagSpecifications?: Array<_TagSpecification> | Iterable<_TagSpecification>;

  /**
   * <p>Indicates whether to enable or disable host recovery for the Dedicated Host. Host recovery is disabled by default. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-hosts-recovery.html"> Host Recovery</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p> <p>Default: <code>off</code> </p>
   */
  HostRecovery?: "on" | "off" | string;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
