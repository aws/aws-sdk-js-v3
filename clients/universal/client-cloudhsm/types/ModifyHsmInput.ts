import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the inputs for the <a>ModifyHsm</a> operation.</p>
 */
export interface ModifyHsmInput {
  /**
   * <p>The ARN of the HSM to modify.</p>
   */
  HsmArn: string;

  /**
   * <p>The new identifier of the subnet that the HSM is in. The new subnet must be in the same Availability Zone as the current subnet.</p>
   */
  SubnetId?: string;

  /**
   * <p>The new IP address for the elastic network interface (ENI) attached to the HSM.</p> <p>If the HSM is moved to a different subnet, and an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the new subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The new IAM role ARN.</p>
   */
  IamRoleArn?: string;

  /**
   * <p>The new external ID.</p>
   */
  ExternalId?: string;

  /**
   * <p>The new IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.</p>
   */
  SyslogIp?: string;

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
