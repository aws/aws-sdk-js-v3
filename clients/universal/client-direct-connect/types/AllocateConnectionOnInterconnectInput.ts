import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * AllocateConnectionOnInterconnectInput shape
 */
export interface AllocateConnectionOnInterconnectInput {
  /**
   * <p>The bandwidth of the connection. The possible values are 50Mbps, 100Mbps, 200Mbps, 300Mbps, 400Mbps, 500Mbps, 1Gbps, 2Gbps, 5Gbps, and 10Gbps. Note that only those AWS Direct Connect Partners who have met specific requirements are allowed to create a 1Gbps, 2Gbps, 5Gbps or 10Gbps hosted connection.</p>
   */
  bandwidth: string;

  /**
   * <p>The name of the provisioned connection.</p>
   */
  connectionName: string;

  /**
   * <p>The ID of the AWS account of the customer for whom the connection will be provisioned.</p>
   */
  ownerAccount: string;

  /**
   * <p>The ID of the interconnect on which the connection will be provisioned.</p>
   */
  interconnectId: string;

  /**
   * <p>The dedicated VLAN provisioned to the connection.</p>
   */
  vlan: number;

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
