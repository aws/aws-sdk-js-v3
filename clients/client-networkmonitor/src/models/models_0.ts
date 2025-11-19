// smithy-typescript generated code
import { AddressFamily, MonitorState, ProbeState, Protocol } from "./enums";

/**
 * <p>Creates a monitor probe.</p>
 * @public
 */
export interface CreateMonitorProbeInput {
  /**
   * <p>The ARN of the subnet.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The destination IP address. This must be either <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This must be either <code>TCP</code> or <code>ICMP</code>.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The size of the packets sent between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   * @public
   */
  probeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * <p>The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>Displays a list of all of the probes created for a monitor.</p>
   * @public
   */
  probes?: CreateMonitorProbeInput[] | undefined;

  /**
   * <p>The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid
   *             values are either <code>30</code> or <code>60</code>.  <code>60</code> is the default if
   *             no period is chosen.</p>
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * <p>The ARN of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The state of the monitor.</p>
   * @public
   */
  state: MonitorState | undefined;

  /**
   * <p>The number of seconds that metrics are aggregated by and sent to Amazon CloudWatch.
   *             This will be either <code>30</code> or <code>60</code>. </p>
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * <p>The list of key-value pairs assigned to the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Defines a probe when creating a probe or monitor.</p>
 * @public
 */
export interface ProbeInput {
  /**
   * <p>The ARN of the subnet.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The destination IP address. This must be either <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This must be either <code>TCP</code> or <code>ICMP</code>.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The size of the packets sent between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProbeInput {
  /**
   * <p>The name of the monitor to associated with the probe. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>Describes the details of an individual probe for a monitor.</p>
   * @public
   */
  probe: ProbeInput | undefined;

  /**
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   * @public
   */
  clientToken?: string | undefined;

  /**
   * <p>The list of key-value pairs created and assigned to the probe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProbeOutput {
  /**
   * <p>The ID of the probe for which details are returned.</p>
   * @public
   */
  probeId?: string | undefined;

  /**
   * <p>The ARN of the probe.</p>
   * @public
   */
  probeArn?: string | undefined;

  /**
   * <p>The ARN of the probe.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This must be either <code>TCP</code> or <code>ICMP</code>.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The size of the packets sent between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>Indicates whether the IP address is <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The ID of the source VPC or subnet.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The state of the probe.</p>
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * <p>The time and date that the probe was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time and date when the probe was last modified. </p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>The list of key-value pairs assigned to the probe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * <p>The name of the monitor to delete.  </p>
   * @public
   */
  monitorName: string | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorOutput {}

/**
 * @public
 */
export interface DeleteProbeInput {
  /**
   * <p>The name of the monitor to delete. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The ID of the probe to delete. </p>
   * @public
   */
  probeId: string | undefined;
}

/**
 * @public
 */
export interface DeleteProbeOutput {}

/**
 * @public
 */
export interface GetMonitorInput {
  /**
   * <p>The name of the monitor that details are returned for.</p>
   * @public
   */
  monitorName: string | undefined;
}

/**
 * <p>Describes information about a network monitor probe.</p>
 * @public
 */
export interface Probe {
  /**
   * <p>The ID of the probe.</p>
   * @public
   */
  probeId?: string | undefined;

  /**
   * <p>The ARN of the probe.</p>
   * @public
   */
  probeArn?: string | undefined;

  /**
   * <p>The ARN of the probe source subnet.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The destination for the probe. This should be either an <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The destination port for the probe. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The network protocol for the destination. This can be either <code>TCP</code> or <code>ICMP</code>. If the protocol is <code>TCP</code>, then <code>port</code> is also required.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The size of the packets traveling between the <code>source</code> and <code>destination</code>. This must be a number between <code>56</code> and </p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>The IPv4 or IPv6 address for the probe.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The ID of the source VPC subnet.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The state of the probe.</p>
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * <p>The time and date the probe was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time and date that the probe was last modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>The list of key-value pairs created and assigned to the probe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * <p>The ARN of the selected monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>Lists the status of the <code>state</code> of each monitor. </p>
   * @public
   */
  state: MonitorState | undefined;

  /**
   * <p>The aggregation period for the specified monitor.</p>
   * @public
   */
  aggregationPeriod: number | undefined;

  /**
   * <p>The list of key-value pairs assigned to the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>The details about each probe associated with that monitor. </p>
   * @public
   */
  probes?: Probe[] | undefined;

  /**
   * <p>The time and date when the monitor was created.</p>
   * @public
   */
  createdAt: Date | undefined;

  /**
   * <p>The time and date when the monitor was last modified.</p>
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetProbeInput {
  /**
   * <p>The name of the monitor associated with the probe. Run <code>ListMonitors</code> to get a list of monitor names.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The ID of the probe to get information about. Run <code>GetMonitor</code> action to get a list of probes and probe IDs for the  monitor.</p>
   * @public
   */
  probeId: string | undefined;
}

/**
 * @public
 */
export interface GetProbeOutput {
  /**
   * <p>The ID of the probe for which details are returned.</p>
   * @public
   */
  probeId?: string | undefined;

  /**
   * <p>The ARN of the probe.</p>
   * @public
   */
  probeArn?: string | undefined;

  /**
   * <p>The ARN of the probe.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This must be either <code>TCP</code> or <code>ICMP</code>.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The size of the packets sent between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>Indicates whether the IP address is <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The ID of the source VPC or subnet.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The state of the probe.</p>
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * <p>The time and date that the probe was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time and date that the probe was last modified.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>The list of key-value pairs assigned to the probe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>The list of all monitors and their states.</p>
   * @public
   */
  state?: string | undefined;
}

/**
 * <p>Displays summary information about a monitor.</p>
 * @public
 */
export interface MonitorSummary {
  /**
   * <p>The ARN of the monitor.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The state of the monitor.</p>
   * @public
   */
  state: MonitorState | undefined;

  /**
   * <p>The time, in seconds, that metrics are collected and sent to Amazon CloudWatch. Valid values are either <code>30</code> or <code>60</code>.</p>
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * <p>The list of key-value pairs assigned to the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * <p>Lists individual details about each of your monitors.</p>
   * @public
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * <p>The token for the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * <p>The </p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>Lists the tags assigned to the resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * <p>The name of the monitor to update. </p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The aggregation time, in seconds, to change to. This must be either <code>30</code> or <code>60</code>. </p>
   * @public
   */
  aggregationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * <p>The ARN of the monitor that was updated.</p>
   * @public
   */
  monitorArn: string | undefined;

  /**
   * <p>The name of the monitor that was updated.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The state of the updated monitor.</p>
   * @public
   */
  state: MonitorState | undefined;

  /**
   * <p>The changed aggregation period.</p>
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * <p>The list of key-value pairs associated with the monitor.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateProbeInput {
  /**
   * <p>The name of the monitor that the probe was updated for.</p>
   * @public
   */
  monitorName: string | undefined;

  /**
   * <p>The ID of the probe to update.</p>
   * @public
   */
  probeId: string | undefined;

  /**
   * <p>The state of the probe update.</p>
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * <p>The updated IP address for the probe destination. This must be either an IPv4 or IPv6 address.</p>
   * @public
   */
  destination?: string | undefined;

  /**
   * <p>The updated port for the probe destination. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The updated network protocol for the destination. This can be either <code>TCP</code> or <code>ICMP</code>. If the protocol is <code>TCP</code>, then <code>port</code> is also required.</p>
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * <p>he updated packets size for network traffic between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   * @public
   */
  packetSize?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProbeOutput {
  /**
   * <p>The updated ID of the probe.</p>
   * @public
   */
  probeId?: string | undefined;

  /**
   * <p>The updated ARN of the probe.</p>
   * @public
   */
  probeArn?: string | undefined;

  /**
   * <p>The updated ARN of the source subnet.</p>
   * @public
   */
  sourceArn: string | undefined;

  /**
   * <p>The updated destination IP address for the probe.</p>
   * @public
   */
  destination: string | undefined;

  /**
   * <p>The updated destination port. This must be a number between <code>1</code> and <code>65536</code>.</p>
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * <p>The updated protocol for the probe.</p>
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * <p>The updated packet size for the probe. </p>
   * @public
   */
  packetSize?: number | undefined;

  /**
   * <p>The updated IP address family. This must be either <code>IPV4</code> or <code>IPV6</code>.</p>
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * <p>The updated ID of the source VPC subnet ID.</p>
   * @public
   */
  vpcId?: string | undefined;

  /**
   * <p>The state of the updated probe.</p>
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * <p>The time and date that the probe was created.</p>
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * <p>The time and date that the probe was last updated.</p>
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * <p>Update tags for a probe.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * <p>The ARN of the monitor or probe to tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs assigned to the monitor or probe.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceOutput {}

/**
 * @public
 */
export interface UntagResourceInput {
  /**
   * <p>The ARN of the monitor or probe that the tag should be removed from. </p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The key-value pa</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
