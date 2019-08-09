import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the inputs for the <code>CreateHsm</code> operation.</p>
 */
export interface CreateHsmInput {
  /**
   * <p>The identifier of the subnet in your VPC in which to place the HSM.</p>
   */
  SubnetId: string;

  /**
   * <p>The SSH public key to install on the HSM.</p>
   */
  SshKey: string;

  /**
   * <p>The IP address to assign to the HSM's ENI.</p> <p>If an IP address is not specified, an IP address will be randomly chosen from the CIDR range of the subnet.</p>
   */
  EniIp?: string;

  /**
   * <p>The ARN of an IAM role to enable the AWS CloudHSM service to allocate an ENI on your behalf.</p>
   */
  IamRoleArn: string;

  /**
   * <p>The external ID from <code>IamRoleArn</code>, if present.</p>
   */
  ExternalId?: string;

  /**
   * <p>Specifies the type of subscription for the HSM.</p> <ul> <li> <p> <b>PRODUCTION</b> - The HSM is being used in a production environment.</p> </li> <li> <p> <b>TRIAL</b> - The HSM is being used in a product trial.</p> </li> </ul>
   */
  SubscriptionType: "PRODUCTION" | string;

  /**
   * <p>A user-defined token to ensure idempotence. Subsequent calls to this operation with the same token will be ignored.</p>
   */
  ClientToken?: string;

  /**
   * <p>The IP address for the syslog monitoring server. The AWS CloudHSM service only supports one syslog monitoring server.</p>
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
