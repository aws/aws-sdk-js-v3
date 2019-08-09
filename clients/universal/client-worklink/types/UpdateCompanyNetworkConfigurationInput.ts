import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateCompanyNetworkConfigurationInput shape
 */
export interface UpdateCompanyNetworkConfigurationInput {
  /**
   * <p>The ARN of the fleet.</p>
   */
  FleetArn: string;

  /**
   * <p>The VPC with connectivity to associated websites.</p>
   */
  VpcId: string;

  /**
   * <p>The subnets used for X-ENI connections from Amazon WorkLink rendering containers.</p>
   */
  SubnetIds: Array<string> | Iterable<string>;

  /**
   * <p>The security groups associated with access to the provided subnets.</p>
   */
  SecurityGroupIds: Array<string> | Iterable<string>;

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
