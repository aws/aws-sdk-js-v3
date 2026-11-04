// smithy-typescript generated code
import type { AddressFamily, MonitorState, ProbeState, Protocol } from "./enums";

/**
 * Creates a monitor probe.
 *
 * @public
 */
export interface CreateMonitorProbeInput {
  /**
   * The ARN of the subnet.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The destination IP address. This must be either `IPV4` or `IPV6`.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The port associated with the `destination`. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The protocol used for the network traffic between the `source` and `destination`. This must be either `TCP` or `ICMP`.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The size of the packets sent between the source and destination. This must be a number between `56` and `8500`.
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * The list of key-value pairs created and assigned to the monitor.
   *
   * @public
   */
  probeTags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 200 characters.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * Displays a list of all of the probes created for a monitor.
   *
   * @public
   */
  probes?: CreateMonitorProbeInput[] | undefined;

  /**
   * The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either `30` or `60`. `60` is the default if no period is chosen.
   *
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of key-value pairs created and assigned to the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * The ARN of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The state of the monitor.
   *
   * @public
   */
  state: MonitorState | undefined;

  /**
   * The number of seconds that metrics are aggregated by and sent to Amazon CloudWatch. This will be either `30` or `60`.
   *
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * The list of key-value pairs assigned to the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Defines a probe when creating a probe or monitor.
 *
 * @public
 */
export interface ProbeInput {
  /**
   * The ARN of the subnet.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The destination IP address. This must be either `IPV4` or `IPV6`.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The port associated with the `destination`. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The protocol used for the network traffic between the `source` and `destination`. This must be either `TCP` or `ICMP`.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The size of the packets sent between the source and destination. This must be a number between `56` and `8500`.
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * The list of key-value pairs created and assigned to the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProbeInput {
  /**
   * The name of the monitor to associated with the probe.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * Describes the details of an individual probe for a monitor.
   *
   * @public
   */
  probe: ProbeInput | undefined;

  /**
   * Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * The list of key-value pairs created and assigned to the probe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateProbeOutput {
  /**
   * The ID of the probe for which details are returned.
   *
   * @public
   */
  probeId?: string | undefined;

  /**
   * The ARN of the probe.
   *
   * @public
   */
  probeArn?: string | undefined;

  /**
   * The ARN of the probe.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The port associated with the `destination`. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The protocol used for the network traffic between the `source` and `destination`. This must be either `TCP` or `ICMP`.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The size of the packets sent between the source and destination. This must be a number between `56` and `8500`.
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * Indicates whether the IP address is `IPV4` or `IPV6`.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The ID of the source VPC or subnet.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The state of the probe.
   *
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * The time and date that the probe was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time and date when the probe was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The list of key-value pairs assigned to the probe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * The name of the monitor to delete.
   *
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
   * The name of the monitor to delete.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The ID of the probe to delete.
   *
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
   * The name of the monitor that details are returned for.
   *
   * @public
   */
  monitorName: string | undefined;
}

/**
 * Describes information about a network monitor probe.
 *
 * @public
 */
export interface Probe {
  /**
   * The ID of the probe.
   *
   * @public
   */
  probeId?: string | undefined;

  /**
   * The ARN of the probe.
   *
   * @public
   */
  probeArn?: string | undefined;

  /**
   * The ARN of the probe source subnet.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The destination for the probe. This should be either an `IPV4` or `IPV6`.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The destination port for the probe. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The network protocol for the destination. This can be either `TCP` or `ICMP`. If the protocol is `TCP`, then `port` is also required.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The size of the packets traveling between the `source` and `destination`. This must be a number between `56` and
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * The IPv4 or IPv6 address for the probe.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The ID of the source VPC subnet.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The state of the probe.
   *
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * The time and date the probe was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time and date that the probe was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The list of key-value pairs created and assigned to the probe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * The ARN of the selected monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * Lists the status of the `state` of each monitor.
   *
   * @public
   */
  state: MonitorState | undefined;

  /**
   * The aggregation period for the specified monitor.
   *
   * @public
   */
  aggregationPeriod: number | undefined;

  /**
   * The list of key-value pairs assigned to the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * The details about each probe associated with that monitor.
   *
   * @public
   */
  probes?: Probe[] | undefined;

  /**
   * The time and date when the monitor was created.
   *
   * @public
   */
  createdAt: Date | undefined;

  /**
   * The time and date when the monitor was last modified.
   *
   * @public
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetProbeInput {
  /**
   * The name of the monitor associated with the probe. Run `ListMonitors` to get a list of monitor names.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The ID of the probe to get information about. Run `GetMonitor` action to get a list of probes and probe IDs for the monitor.
   *
   * @public
   */
  probeId: string | undefined;
}

/**
 * @public
 */
export interface GetProbeOutput {
  /**
   * The ID of the probe for which details are returned.
   *
   * @public
   */
  probeId?: string | undefined;

  /**
   * The ARN of the probe.
   *
   * @public
   */
  probeArn?: string | undefined;

  /**
   * The ARN of the probe.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The destination IP address for the monitor. This must be either an IPv4 or IPv6 address.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The port associated with the `destination`. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The protocol used for the network traffic between the `source` and `destination`. This must be either `TCP` or `ICMP`.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The size of the packets sent between the source and destination. This must be a number between `56` and `8500`.
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * Indicates whether the IP address is `IPV4` or `IPV6`.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The ID of the source VPC or subnet.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The state of the probe.
   *
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * The time and date that the probe was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time and date that the probe was last modified.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * The list of key-value pairs assigned to the probe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return with a single call. To retrieve the remaining results, make another call with the returned `nextToken` value.
   *
   * If `MaxResults` is given a value larger than 100, only 100 results are returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * The list of all monitors and their states.
   *
   * @public
   */
  state?: string | undefined;
}

/**
 * Displays summary information about a monitor.
 *
 * @public
 */
export interface MonitorSummary {
  /**
   * The ARN of the monitor.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The state of the monitor.
   *
   * @public
   */
  state: MonitorState | undefined;

  /**
   * The time, in seconds, that metrics are collected and sent to Amazon CloudWatch. Valid values are either `30` or `60`.
   *
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * The list of key-value pairs assigned to the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * Lists individual details about each of your monitors.
   *
   * @public
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * The token for the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * The
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * Lists the tags assigned to the resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * The name of the monitor to update.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The aggregation time, in seconds, to change to. This must be either `30` or `60`.
   *
   * @public
   */
  aggregationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * The ARN of the monitor that was updated.
   *
   * @public
   */
  monitorArn: string | undefined;

  /**
   * The name of the monitor that was updated.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The state of the updated monitor.
   *
   * @public
   */
  state: MonitorState | undefined;

  /**
   * The changed aggregation period.
   *
   * @public
   */
  aggregationPeriod?: number | undefined;

  /**
   * The list of key-value pairs associated with the monitor.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface UpdateProbeInput {
  /**
   * The name of the monitor that the probe was updated for.
   *
   * @public
   */
  monitorName: string | undefined;

  /**
   * The ID of the probe to update.
   *
   * @public
   */
  probeId: string | undefined;

  /**
   * The state of the probe update.
   *
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * The updated IP address for the probe destination. This must be either an IPv4 or IPv6 address.
   *
   * @public
   */
  destination?: string | undefined;

  /**
   * The updated port for the probe destination. This is required only if the `protocol` is `TCP` and must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The updated network protocol for the destination. This can be either `TCP` or `ICMP`. If the protocol is `TCP`, then `port` is also required.
   *
   * @public
   */
  protocol?: Protocol | undefined;

  /**
   * he updated packets size for network traffic between the source and destination. This must be a number between `56` and `8500`.
   *
   * @public
   */
  packetSize?: number | undefined;
}

/**
 * @public
 */
export interface UpdateProbeOutput {
  /**
   * The updated ID of the probe.
   *
   * @public
   */
  probeId?: string | undefined;

  /**
   * The updated ARN of the probe.
   *
   * @public
   */
  probeArn?: string | undefined;

  /**
   * The updated ARN of the source subnet.
   *
   * @public
   */
  sourceArn: string | undefined;

  /**
   * The updated destination IP address for the probe.
   *
   * @public
   */
  destination: string | undefined;

  /**
   * The updated destination port. This must be a number between `1` and `65536`.
   *
   * @public
   */
  destinationPort?: number | undefined;

  /**
   * The updated protocol for the probe.
   *
   * @public
   */
  protocol: Protocol | undefined;

  /**
   * The updated packet size for the probe.
   *
   * @public
   */
  packetSize?: number | undefined;

  /**
   * The updated IP address family. This must be either `IPV4` or `IPV6`.
   *
   * @public
   */
  addressFamily?: AddressFamily | undefined;

  /**
   * The updated ID of the source VPC subnet ID.
   *
   * @public
   */
  vpcId?: string | undefined;

  /**
   * The state of the updated probe.
   *
   * @public
   */
  state?: ProbeState | undefined;

  /**
   * The time and date that the probe was created.
   *
   * @public
   */
  createdAt?: Date | undefined;

  /**
   * The time and date that the probe was last updated.
   *
   * @public
   */
  modifiedAt?: Date | undefined;

  /**
   * Update tags for a probe.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * The ARN of the monitor or probe to tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of key-value pairs assigned to the monitor or probe.
   *
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
   * The ARN of the monitor or probe that the tag should be removed from.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The key-value pa
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
