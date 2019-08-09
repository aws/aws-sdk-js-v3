/**
 * <p>An array of settings that describes characteristics of a network profile.</p>
 */
export interface _NetworkProfile {
  /**
   * <p>The Amazon Resource Name (ARN) of the network profile.</p>
   */
  arn?: string;

  /**
   * <p>The name of the network profile.</p>
   */
  name?: string;

  /**
   * <p>The description of the network profile.</p>
   */
  description?: string;

  /**
   * <p>The type of network profile. Valid values are listed below.</p>
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
}

export type _UnmarshalledNetworkProfile = _NetworkProfile;
