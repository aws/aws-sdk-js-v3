// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { NetworkMonitorServiceException as __BaseException } from "./NetworkMonitorServiceException";

/**
 * @public
 * <p>You do not have sufficient access to perform this action.</p>
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const AddressFamily = {
  IPV4: "IPV4",
  IPV6: "IPV6",
} as const;

/**
 * @public
 */
export type AddressFamily = (typeof AddressFamily)[keyof typeof AddressFamily];

/**
 * @public
 * <p>This operation attempted to create a resource that already exists.</p>
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * @public
 * @enum
 */
export const Protocol = {
  ICMP: "ICMP",
  TCP: "TCP",
} as const;

/**
 * @public
 */
export type Protocol = (typeof Protocol)[keyof typeof Protocol];

/**
 * @public
 * <p>Creates a monitor probe.</p>
 */
export interface CreateMonitorProbeInput {
  /**
   * @public
   * <p>The ARN of the subnet.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The destination IP address. This will be either <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This will be either <code>TCP</code> or <code>ICMP</code>.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The size of the packets sent between the source and destination. This will be a number between <code>56</code> and <code>8500</code>.</p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   */
  probeTags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateMonitorInput {
  /**
   * @public
   * <p>The name identifying the monitor. It can contain only letters, underscores (_), or dashes (-), and can be up to 255 characters.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>Displays a list of all of the probes created for a monitor.</p>
   */
  probes?: CreateMonitorProbeInput[];

  /**
   * @public
   * <p>The time, in seconds, that metrics are aggregated and sent to Amazon CloudWatch. Valid values are either <code>30</code> or <code>60</code>. </p>
   */
  aggregationPeriod?: number;

  /**
   * @public
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const MonitorState = {
  ACTIVE: "ACTIVE",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type MonitorState = (typeof MonitorState)[keyof typeof MonitorState];

/**
 * @public
 */
export interface CreateMonitorOutput {
  /**
   * @public
   * <p>The ARN of the monitor.</p>
   */
  monitorArn: string | undefined;

  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The state of the monitor.</p>
   */
  state: MonitorState | undefined;

  /**
   * @public
   * <p>The number of seconds that metrics are aggregated by and sent to Amazon CloudWatch. This will be either <code>30</code> or <code>60</code>. </p>
   */
  aggregationPeriod?: number;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the monitor.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The request processing has failed because of an unknown error, exception or failure.</p>
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  $retryable = {};
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * @public
 * <p>This request exceeds a service quota.</p>
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
  }
}

/**
 * @public
 * <p>The request was denied due to request throttling</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  $retryable = {
    throttling: true,
  };
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * @public
 * <p>One of the parameters for the request is not valid.</p>
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 * <p>Defines a probe when creating a probe or monitor.</p>
 */
export interface ProbeInput {
  /**
   * @public
   * <p>The ARN of the subnet.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The destination IP address. This will be either <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This will be either <code>TCP</code> or <code>ICMP</code>.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The size of the packets sent between the source and destination. This will be a number between <code>56</code> and <code>8500</code>.</p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>The list of key-value pairs created and assigned to the monitor.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface CreateProbeInput {
  /**
   * @public
   * <p>The name of the monitor to associated with the probe. To get a list of available monitors, use <code>ListMonitors</code>.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>Describes the details of an individual probe for a monitor.</p>
   */
  probe: ProbeInput | undefined;

  /**
   * @public
   * <p>Unique, case-sensitive identifier to ensure the idempotency of the request. Only returned if a client token was provided in the request.</p>
   */
  clientToken?: string;

  /**
   * @public
   * <p>The list of key-value pairs created and assigned to the probe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * @enum
 */
export const ProbeState = {
  ACTIVE: "ACTIVE",
  DELETED: "DELETED",
  DELETING: "DELETING",
  ERROR: "ERROR",
  INACTIVE: "INACTIVE",
  PENDING: "PENDING",
} as const;

/**
 * @public
 */
export type ProbeState = (typeof ProbeState)[keyof typeof ProbeState];

/**
 * @public
 */
export interface CreateProbeOutput {
  /**
   * @public
   * <p>The ID of the probe for which details are returned.</p>
   */
  probeId?: string;

  /**
   * @public
   * <p>The ARN of the probe.</p>
   */
  probeArn?: string;

  /**
   * @public
   * <p>The ARN of the probe.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The destination IP address for the monitor. This will be either an IPv4 or IPv6 address.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This will be either <code>TCP</code> or <code>ICMP</code>.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The size of the packets sent between the source and destination. This will be a number between <code>56</code> and <code>8500</code>.</p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>Indicates whether the IP address is <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The ID of the source VPC or subnet.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The state of the probe.</p>
   */
  state?: ProbeState;

  /**
   * @public
   * <p>The time and date that the probe was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time and date when the probe was last modified. </p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the probe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>The specified resource does not exist.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteMonitorInput {
  /**
   * @public
   * <p>The name of the monitor to delete. Use the <code>ListMonitors</code> action to get a list of your current monitors. </p>
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
   * @public
   * <p>The name of the monitor to delete. For a list of the available monitors, use the <code>ListMonitors</code> action.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The ID of the probe to delete. Run <code>GetMonitor</code> to get a lst of all probes and probe IDs associated with the monitor.</p>
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
   * @public
   * <p>The name of the monitor that details are returned for.</p>
   */
  monitorName: string | undefined;
}

/**
 * @public
 * <p>Describes information about a monitor probe.</p>
 */
export interface Probe {
  /**
   * @public
   * <p>The ID of the probe.</p>
   */
  probeId?: string;

  /**
   * @public
   * <p>The ARN of the probe.</p>
   */
  probeArn?: string;

  /**
   * @public
   * <p>The ARN of the probe source subnet.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The destination for the probe. This should be either an <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The destination port for the probe. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The network protocol for the destination. This can be either <code>TCP</code> or <code>ICMP</code>. If the protocol is <code>TCP</code>, then <code>port</code> is also required.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The size of the packets traveling between the <code>source</code> and <code>destination</code>. This must be a number between <code>56</code> and </p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>The IPv4 or IPv6 address for the probe.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The ID of the source VPC subnet.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The state of the probe.</p>
   */
  state?: ProbeState;

  /**
   * @public
   * <p>The time and date the probe was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time and date that the probe was last modified.</p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>The list of key-value pairs created and assigned to the probe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface GetMonitorOutput {
  /**
   * @public
   * <p>The ARN of the selected monitor.</p>
   */
  monitorArn: string | undefined;

  /**
   * @public
   * <p>The name of the monitor. To get a list of the current monitors and their names, use the <code>ListMonitors</code> action.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>Returns a list of the state of each monitor. </p>
   */
  state: MonitorState | undefined;

  /**
   * @public
   * <p>The aggregation period for the specified monitor.</p>
   */
  aggregationPeriod: number | undefined;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the monitor.</p>
   */
  tags?: Record<string, string>;

  /**
   * @public
   * <p>The details about each probe associated with that monitor. </p>
   */
  probes?: Probe[];

  /**
   * @public
   * <p>The time and date when the monitor was created.</p>
   */
  createdAt: Date | undefined;

  /**
   * @public
   * <p>The time and date when the monitor was last modified.</p>
   */
  modifiedAt: Date | undefined;
}

/**
 * @public
 */
export interface GetProbeInput {
  /**
   * @public
   * <p>The name of the monitor associated with the probe. Run <code>ListMonitors</code> to get a list of monitor names.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The ID of the probe to get information about. Run <code>GetMonitor</code> action to get a list of probes and probe IDs for the  monitor.</p>
   */
  probeId: string | undefined;
}

/**
 * @public
 */
export interface GetProbeOutput {
  /**
   * @public
   * <p>The ID of the probe for which details are returned.</p>
   */
  probeId?: string;

  /**
   * @public
   * <p>The ARN of the probe.</p>
   */
  probeArn?: string;

  /**
   * @public
   * <p>The ARN of the probe.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The destination IP address for the monitor. This will be either an IPv4 or IPv6 address.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The port associated with the <code>destination</code>. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The protocol used for the network traffic between the <code>source</code> and <code>destination</code>. This will be either <code>TCP</code> or <code>ICMP</code>.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The size of the packets sent between the source and destination. This will be a number between <code>56</code> and <code>8500</code>.</p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>Indicates whether the IP address is <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The ID of the source VPC or subnet.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The state of the probe.</p>
   */
  state?: ProbeState;

  /**
   * @public
   * <p>The time and date that the probe was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time and date that the probe was last modified.</p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the probe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMonitorsInput {
  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;

  /**
   * @public
   * <p>The maximum number of results to return with a single call.
   * 	To retrieve the remaining results, make another call with the returned <code>nextToken</code> value.</p>
   *          <p>If <code>MaxResults</code> is given a value larger than 100, only 100 results are
   *       returned.</p>
   */
  maxResults?: number;

  /**
   * @public
   * <p>The list of all monitors and their states.</p>
   */
  state?: string;
}

/**
 * @public
 * <p>Displays summary information about a monitor.</p>
 */
export interface MonitorSummary {
  /**
   * @public
   * <p>The ARN of the monitor.</p>
   */
  monitorArn: string | undefined;

  /**
   * @public
   * <p>The name of the monitor.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The state of the monitor.</p>
   */
  state: MonitorState | undefined;

  /**
   * @public
   * <p>The time, in seconds, that metrics are collected and sent to Amazon CloudWatch. Valid values are either <code>30</code> or <code>60</code>.</p>
   */
  aggregationPeriod?: number;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the monitor.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface ListMonitorsOutput {
  /**
   * @public
   * <p>Lists individual details about each of your monitors.</p>
   */
  monitors: MonitorSummary[] | undefined;

  /**
   * @public
   * <p>The token for the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceInput {
  /**
   * @public
   * <p>The </p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * @public
   * <p>Lists the tags assigned to the resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateMonitorInput {
  /**
   * @public
   * <p>The name of the monitor to update. Run <code>ListMonitors</code> to get a list of monitor names.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The aggregation time, in seconds, to change to. This must be either <code>30</code> or <code>60</code>. </p>
   */
  aggregationPeriod: number | undefined;
}

/**
 * @public
 */
export interface UpdateMonitorOutput {
  /**
   * @public
   * <p>The ARN of the monitor that was updated.</p>
   */
  monitorArn: string | undefined;

  /**
   * @public
   * <p>The name of the monitor that was updated.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>The state of the updated monitor.</p>
   */
  state: MonitorState | undefined;

  /**
   * @public
   * <p>The changed aggregation period.</p>
   */
  aggregationPeriod?: number;

  /**
   * @public
   * <p>The list of key-value pairs associated with the monitor.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface UpdateProbeInput {
  /**
   * @public
   * <p>The name of the monitor that the probe was updated for.</p>
   */
  monitorName: string | undefined;

  /**
   * @public
   * <p>Run <code>GetMonitor</code> to get a list of probes and probe IDs.</p>
   */
  probeId: string | undefined;

  /**
   * @public
   * <p>The state of the probe update.</p>
   */
  state?: ProbeState;

  /**
   * @public
   * <p>The updated IP address for the probe destination. This must be either an IPv4 or IPv6 address.</p>
   */
  destination?: string;

  /**
   * @public
   * <p>The updated port for the probe destination. This is required only if the <code>protocol</code> is <code>TCP</code> and must be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The updated network protocol for the destination. This can be either <code>TCP</code> or <code>ICMP</code>. If the protocol is <code>TCP</code>, then <code>port</code> is also required.</p>
   */
  protocol?: Protocol;

  /**
   * @public
   * <p>he updated packets size for network traffic between the source and destination. This must be a number between <code>56</code> and <code>8500</code>.</p>
   */
  packetSize?: number;
}

/**
 * @public
 */
export interface UpdateProbeOutput {
  /**
   * @public
   * <p>The updated ID of the probe.</p>
   */
  probeId?: string;

  /**
   * @public
   * <p>The updated ARN of the probe.</p>
   */
  probeArn?: string;

  /**
   * @public
   * <p>The updated ARN of the source subnet.</p>
   */
  sourceArn: string | undefined;

  /**
   * @public
   * <p>The updated destination IP address for the probe.</p>
   */
  destination: string | undefined;

  /**
   * @public
   * <p>The updated destination port. This will be a number between <code>1</code> and <code>65536</code>.</p>
   */
  destinationPort?: number;

  /**
   * @public
   * <p>The updated protocol for the probe.</p>
   */
  protocol: Protocol | undefined;

  /**
   * @public
   * <p>The updated packet size for the probe. </p>
   */
  packetSize?: number;

  /**
   * @public
   * <p>The updated IP address family. This will be either <code>IPV4</code> or <code>IPV6</code>.</p>
   */
  addressFamily?: AddressFamily;

  /**
   * @public
   * <p>The updated ID of the source VPC subnet ID.</p>
   */
  vpcId?: string;

  /**
   * @public
   * <p>The state of the updated probe.</p>
   */
  state?: ProbeState;

  /**
   * @public
   * <p>The time and date that the probe was created.</p>
   */
  createdAt?: Date;

  /**
   * @public
   * <p>The time and date that the probe was last updated.</p>
   */
  modifiedAt?: Date;

  /**
   * @public
   * <p>Update tags for a probe.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface TagResourceInput {
  /**
   * @public
   * <p>The ARN of the monitor or probe to tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The list of key-value pairs assigned to the monitor or probe.</p>
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
   * @public
   * <p>The ARN of the monitor or probe that the tag should be removed from. </p>
   */
  resourceArn: string | undefined;

  /**
   * @public
   * <p>The key-value pa</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceOutput {}
