import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateNetworkProfileInput shape
 */
export interface CreateNetworkProfileInput {
  /**
   * <p>The Amazon Resource Name (ARN) of the project for which you want to create a network profile.</p>
   */
  projectArn: string;

  /**
   * <p>The name you wish to specify for the new network profile.</p>
   */
  name: string;

  /**
   * <p>The description of the network profile.</p>
   */
  description?: string;

  /**
   * <p>The type of network profile you wish to create. Valid values are listed below.</p>
   */
  type?: "CURATED" | "PRIVATE" | string;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   */
  uplinkBandwidthBits?: number;

  /**
   * <p>The data throughput rate in bits per second, as an integer from 0 to 104857600.</p>
   */
  downlinkBandwidthBits?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   */
  uplinkDelayMs?: number;

  /**
   * <p>Delay time for all packets to destination in milliseconds as an integer from 0 to 2000.</p>
   */
  downlinkDelayMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   */
  uplinkJitterMs?: number;

  /**
   * <p>Time variation in the delay of received packets in milliseconds as an integer from 0 to 2000.</p>
   */
  downlinkJitterMs?: number;

  /**
   * <p>Proportion of transmitted packets that fail to arrive from 0 to 100 percent.</p>
   */
  uplinkLossPercent?: number;

  /**
   * <p>Proportion of received packets that fail to arrive from 0 to 100 percent.</p>
   */
  downlinkLossPercent?: number;

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
