// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GroundStationServiceException as __BaseException } from "./GroundStationServiceException";

/**
 * <p>Dependency encountered an error.</p>
 * @public
 */
export class DependencyException extends __BaseException {
  readonly name: "DependencyException" = "DependencyException";
  readonly $fault: "server" = "server";
  /**
   * <p/>
   * @public
   */
  parameterName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DependencyException, __BaseException>) {
    super({
      name: "DependencyException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DependencyException.prototype);
    this.parameterName = opts.parameterName;
  }
}

/**
 * @public
 */
export interface GetAgentConfigurationRequest {
  /**
   * <p>UUID of agent to get configuration information for.</p>
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentConfigurationResponse {
  /**
   * <p>UUID of agent.</p>
   * @public
   */
  agentId?: string | undefined;

  /**
   * <p>Tasking document for agent.</p>
   * @public
   */
  taskingDocument?: string | undefined;
}

/**
 * <p>One or more parameters are not valid.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  parameterName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
    this.parameterName = opts.parameterName;
  }
}

/**
 * <p>Resource was not found.</p>
 * @public
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
 * <p>Version information for agent components.</p>
 * @public
 */
export interface ComponentVersion {
  /**
   * <p>Component type.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>List of versions.</p>
   * @public
   */
  versions: string[] | undefined;
}

/**
 * <p>Detailed information about the agent.</p>
 * @public
 */
export interface AgentDetails {
  /**
   * <p>Current agent version.</p>
   * @public
   */
  agentVersion: string | undefined;

  /**
   * <p>ID of EC2 instance agent is running on.</p>
   * @public
   */
  instanceId: string | undefined;

  /**
   * <p>Type of EC2 instance agent is running on.</p>
   * @public
   */
  instanceType: string | undefined;

  /**
   * <note> <p>This field should not be used. Use agentCpuCores instead.</p> </note> <p>List of CPU cores reserved for processes other than the agent running on the EC2 instance.</p>
   * @public
   */
  reservedCpuCores?: number[] | undefined;

  /**
   * <p>List of CPU cores reserved for the agent.</p>
   * @public
   */
  agentCpuCores?: number[] | undefined;

  /**
   * <p>List of versions being used by agent components.</p>
   * @public
   */
  componentVersions: ComponentVersion[] | undefined;
}

/**
 * <p>Data for agent discovery.</p>
 * @public
 */
export interface DiscoveryData {
  /**
   * <p>List of public IP addresses to associate with agent.</p>
   * @public
   */
  publicIpAddresses: string[] | undefined;

  /**
   * <p>List of private IP addresses to associate with agent.</p>
   * @public
   */
  privateIpAddresses: string[] | undefined;

  /**
   * <p>List of capabilities to associate with agent.</p>
   * @public
   */
  capabilityArns: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterAgentRequest {
  /**
   * <p>Data for associating an agent with the capabilities it is managing.</p>
   * @public
   */
  discoveryData: DiscoveryData | undefined;

  /**
   * <p>Detailed information about the agent being registered.</p>
   * @public
   */
  agentDetails: AgentDetails | undefined;

  /**
   * <p>Tags assigned to an <code>Agent</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAgentResponse {
  /**
   * <p>UUID of registered agent.</p>
   * @public
   */
  agentId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AgentStatus = {
  ACTIVE: "ACTIVE",
  FAILED: "FAILED",
  INACTIVE: "INACTIVE",
  SUCCESS: "SUCCESS",
} as const;

/**
 * @public
 */
export type AgentStatus = (typeof AgentStatus)[keyof typeof AgentStatus];

/**
 * <p>Aggregate status of Agent components.</p>
 * @public
 */
export interface AggregateStatus {
  /**
   * <p>Aggregate status.</p>
   * @public
   */
  status: AgentStatus | undefined;

  /**
   * <p>Sparse map of failure signatures.</p>
   * @public
   */
  signatureMap?: Record<string, boolean> | undefined;
}

/**
 * <p>Data on the status of agent components.</p>
 * @public
 */
export interface ComponentStatusData {
  /**
   * <p>The Component type.</p>
   * @public
   */
  componentType: string | undefined;

  /**
   * <p>Capability ARN of the component.</p>
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * <p>Component status.</p>
   * @public
   */
  status: AgentStatus | undefined;

  /**
   * <p>Bytes sent by the component.</p>
   * @public
   */
  bytesSent?: number | undefined;

  /**
   * <p>Bytes received by the component.</p>
   * @public
   */
  bytesReceived?: number | undefined;

  /**
   * <p>Packets dropped by component.</p>
   * @public
   */
  packetsDropped?: number | undefined;

  /**
   * <p>Dataflow UUID associated with the component.</p>
   * @public
   */
  dataflowId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * <p>UUID of agent to update.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>GUID of agent task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Aggregate status for agent.</p>
   * @public
   */
  aggregateStatus: AggregateStatus | undefined;

  /**
   * <p>List of component statuses for agent.</p>
   * @public
   */
  componentStatuses: ComponentStatusData[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusResponse {
  /**
   * <p>UUID of updated agent.</p>
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const AngleUnits = {
  DEGREE_ANGLE: "DEGREE_ANGLE",
  RADIAN: "RADIAN",
} as const;

/**
 * @public
 */
export type AngleUnits = (typeof AngleUnits)[keyof typeof AngleUnits];

/**
 * <p>Details about an antenna demod decode <code>Config</code> used in a contact.</p>
 * @public
 */
export interface AntennaDemodDecodeDetails {
  /**
   * <p>Name of an antenna demod decode output node used in a contact.</p>
   * @public
   */
  outputNode?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const BandwidthUnits = {
  GHZ: "GHz",
  KHZ: "kHz",
  MHZ: "MHz",
} as const;

/**
 * @public
 */
export type BandwidthUnits = (typeof BandwidthUnits)[keyof typeof BandwidthUnits];

/**
 * <p>Object that describes the frequency bandwidth. </p>
 * @public
 */
export interface FrequencyBandwidth {
  /**
   * <p>Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:</p> <ul> <li> <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p> </li> <li> <p>For <code>AntennaDownlinkconfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> <li> <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> </ul>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Frequency bandwidth units.</p>
   * @public
   */
  units: BandwidthUnits | undefined;
}

/**
 * @public
 * @enum
 */
export const FrequencyUnits = {
  GHZ: "GHz",
  KHZ: "kHz",
  MHZ: "MHz",
} as const;

/**
 * @public
 */
export type FrequencyUnits = (typeof FrequencyUnits)[keyof typeof FrequencyUnits];

/**
 * <p>Object that describes the frequency.</p>
 * @public
 */
export interface Frequency {
  /**
   * <p>Frequency value. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Frequency units.</p>
   * @public
   */
  units: FrequencyUnits | undefined;
}

/**
 * @public
 * @enum
 */
export const Polarization = {
  LEFT_HAND: "LEFT_HAND",
  NONE: "NONE",
  RIGHT_HAND: "RIGHT_HAND",
} as const;

/**
 * @public
 */
export type Polarization = (typeof Polarization)[keyof typeof Polarization];

/**
 * <p>Object that describes a spectral <code>Config</code>.</p>
 * @public
 */
export interface SpectrumConfig {
  /**
   * <p>Center frequency of a spectral <code>Config</code>. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
   * @public
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Bandwidth of a spectral <code>Config</code>. AWS Ground Station currently has the following bandwidth limitations:</p> <ul> <li> <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p> </li> <li> <p>For <code>AntennaDownlinkconfig</code> valid values are between 10 kHz to 54 MHz.</p> </li> <li> <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p> </li> </ul>
   * @public
   */
  bandwidth: FrequencyBandwidth | undefined;

  /**
   * <p>Polarization of a spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
   * @public
   */
  polarization?: Polarization | undefined;
}

/**
 * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
 * @public
 */
export interface AntennaDownlinkConfig {
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   * @public
   */
  spectrumConfig: SpectrumConfig | undefined;
}

/**
 * <p>Information about the decode <code>Config</code>.</p>
 * @public
 */
export interface DecodeConfig {
  /**
   * <p>Unvalidated JSON of a decode <code>Config</code>.</p>
   * @public
   */
  unvalidatedJSON: string | undefined;
}

/**
 * <p>Information about the demodulation <code>Config</code>.</p>
 * @public
 */
export interface DemodulationConfig {
  /**
   * <p>Unvalidated JSON of a demodulation <code>Config</code>.</p>
   * @public
   */
  unvalidatedJSON: string | undefined;
}

/**
 * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
 * @public
 */
export interface AntennaDownlinkDemodDecodeConfig {
  /**
   * <p>Information about the spectral <code>Config</code>.</p>
   * @public
   */
  spectrumConfig: SpectrumConfig | undefined;

  /**
   * <p>Information about the demodulation <code>Config</code>.</p>
   * @public
   */
  demodulationConfig: DemodulationConfig | undefined;

  /**
   * <p>Information about the decode <code>Config</code>.</p>
   * @public
   */
  decodeConfig: DecodeConfig | undefined;
}

/**
 * <p>Information about the uplink spectral <code>Config</code>.</p>
 * @public
 */
export interface UplinkSpectrumConfig {
  /**
   * <p>Center frequency of an uplink spectral <code>Config</code>. Valid values are between 2025 to 2120 MHz.</p>
   * @public
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Polarization of an uplink spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
   * @public
   */
  polarization?: Polarization | undefined;
}

/**
 * @public
 * @enum
 */
export const EirpUnits = {
  DBW: "dBW",
} as const;

/**
 * @public
 */
export type EirpUnits = (typeof EirpUnits)[keyof typeof EirpUnits];

/**
 * <p>Object that represents EIRP.</p>
 * @public
 */
export interface Eirp {
  /**
   * <p>Value of an EIRP. Valid values are between 20.0 to 50.0 dBW.</p>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Units of an EIRP.</p>
   * @public
   */
  units: EirpUnits | undefined;
}

/**
 * <p>Information about the uplink <code>Config</code> of an antenna.</p>
 * @public
 */
export interface AntennaUplinkConfig {
  /**
   * <p>Whether or not uplink transmit is disabled.</p>
   * @public
   */
  transmitDisabled?: boolean | undefined;

  /**
   * <p>Information about the uplink spectral <code>Config</code>.</p>
   * @public
   */
  spectrumConfig: UplinkSpectrumConfig | undefined;

  /**
   * <p>EIRP of the target.</p>
   * @public
   */
  targetEirp: Eirp | undefined;
}

/**
 * @public
 * @enum
 */
export const AuditResults = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type AuditResults = (typeof AuditResults)[keyof typeof AuditResults];

/**
 * <p>Information about the socket address.</p>
 * @public
 */
export interface SocketAddress {
  /**
   * <p>Name of a socket address.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Port of a socket address.</p>
   * @public
   */
  port: number | undefined;
}

/**
 * <p>Egress address of AgentEndpoint with an optional mtu.</p>
 * @public
 */
export interface ConnectionDetails {
  /**
   * <p>A socket address.</p>
   * @public
   */
  socketAddress: SocketAddress | undefined;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   * @public
   */
  mtu?: number | undefined;
}

/**
 * <p>An integer range that has a minimum and maximum value.</p>
 * @public
 */
export interface IntegerRange {
  /**
   * <p>A minimum value.</p>
   * @public
   */
  minimum: number | undefined;

  /**
   * <p>A maximum value.</p>
   * @public
   */
  maximum: number | undefined;
}

/**
 * <p>A socket address with a port range.</p>
 * @public
 */
export interface RangedSocketAddress {
  /**
   * <p>IPv4 socket address.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Port range of a socket address.</p>
   * @public
   */
  portRange: IntegerRange | undefined;
}

/**
 * <p>Ingress address of AgentEndpoint with a port range and an optional mtu.</p>
 * @public
 */
export interface RangedConnectionDetails {
  /**
   * <p>A ranged socket address.</p>
   * @public
   */
  socketAddress: RangedSocketAddress | undefined;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   * @public
   */
  mtu?: number | undefined;
}

/**
 * <p>Information about AwsGroundStationAgentEndpoint.</p>
 * @public
 */
export interface AwsGroundStationAgentEndpoint {
  /**
   * <p>Name string associated with AgentEndpoint. Used as a human-readable identifier for AgentEndpoint.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The egress address of AgentEndpoint.</p>
   * @public
   */
  egressAddress: ConnectionDetails | undefined;

  /**
   * <p>The ingress address of AgentEndpoint.</p>
   * @public
   */
  ingressAddress: RangedConnectionDetails | undefined;

  /**
   * <p>The status of AgentEndpoint.</p>
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * <p>The results of the audit.</p>
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * <p>Time-tagged azimuth elevation pointing data.</p> <p>Specifies the antenna pointing direction at a specific time offset from the segment's reference epoch.</p>
 * @public
 */
export interface TimeAzEl {
  /**
   * <p>Time offset in atomic seconds from the segment's reference epoch.</p> <p>All <code>dt</code> values within a segment must be in ascending order with no duplicates.</p> <p> <code>dt</code> values may be:</p> <ul> <li> <p>negative</p> </li> <li> <p>expressed as fractions of a second</p> </li> <li> <p>expressed in scientific notation</p> </li> </ul>
   * @public
   */
  dt: number | undefined;

  /**
   * <p>Azimuth angle at the specified time.</p> <p>Valid ranges by unit:</p> <ul> <li> <p> <code>DEGREE_ANGLE</code>: -180 to 360 degrees, measured clockwise from true north</p> </li> <li> <p> <code>RADIAN</code>: -π to 2π radians, measured clockwise from true north</p> </li> </ul>
   * @public
   */
  az: number | undefined;

  /**
   * <p>Elevation angle at the specified time.</p> <p>Valid ranges by unit:</p> <ul> <li> <p> <code>DEGREE_ANGLE</code>: -90 to 90 degrees, where 0 is the horizon, 90 is zenith, and negative values are below the horizon </p> </li> <li> <p> <code>RADIAN</code>: -π/2 to π/2 radians, where 0 is the horizon, π/2 is zenith, and negative values are below the horizon </p> </li> </ul>
   * @public
   */
  el: number | undefined;
}

/**
 * <p>Time range specified using ISO 8601 format timestamps.</p>
 * @public
 */
export interface ISO8601TimeRange {
  /**
   * <p>Start time in ISO 8601 format in Coordinated Universal Time (UTC).</p> <p>Example: <code>2026-11-15T10:28:48.000Z</code> </p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>End time in ISO 8601 format in Coordinated Universal Time (UTC).</p> <p>Example: <code>2024-01-15T12:00:00.000Z</code> </p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>A time segment containing azimuth elevation pointing data.</p> <p> Each segment defines a continuous time period with pointing angle data points. AWS Ground Station uses 4th order Lagrange interpolation between the provided points, so each segment must contain at least five data points. </p>
 * @public
 */
export interface AzElSegment {
  /**
   * <p>The reference time for this segment in ISO 8601 format in Coordinated Universal Time (UTC).</p> <p>All time values within the segment's <a>AzElSegment$azElList</a> are specified as offsets in atomic seconds from this reference epoch.</p> <p>Example: <code>2024-01-15T12:00:00.000Z</code> </p>
   * @public
   */
  referenceEpoch: Date | undefined;

  /**
   * <p>The valid time range for this segment.</p> <p> Specifies the start and end timestamps in ISO 8601 format in Coordinated Universal Time (UTC). The segment's pointing data must cover this entire time range. </p>
   * @public
   */
  validTimeRange: ISO8601TimeRange | undefined;

  /**
   * <p>List of time-tagged azimuth elevation data points.</p> <p> Must contain at least five points to support 4th order Lagrange interpolation. Points must be in chronological order with no duplicates. </p>
   * @public
   */
  azElList: TimeAzEl[] | undefined;
}

/**
 * <p>Azimuth elevation segment collection.</p> <p>Contains five or more time-ordered segments that define antenna pointing angles over the ephemeris validity period.</p>
 * @public
 */
export interface AzElSegments {
  /**
   * <p>The unit of measure for azimuth and elevation angles. All angles in all segments must use the same unit.</p>
   * @public
   */
  angleUnit: AngleUnits | undefined;

  /**
   * <p>List of azimuth elevation segments.</p> <p>Must contain between 1 and 100 segments. Segments must be in chronological order with no overlaps.</p>
   * @public
   */
  azElSegmentList: AzElSegment[] | undefined;
}

/**
 * <p>Object stored in Amazon S3 containing ephemeris data.</p>
 * @public
 */
export interface S3Object {
  /**
   * <p>An Amazon S3 Bucket name.</p>
   * @public
   */
  bucket?: string | undefined;

  /**
   * <p>An Amazon S3 key for the ephemeris.</p>
   * @public
   */
  key?: string | undefined;

  /**
   * <p>For versioned Amazon S3 objects, the version to use for the ephemeris.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>Container for azimuth elevation segment data.</p> <p>Specify either <a>AzElSegmentsData$s3Object</a> to reference data in Amazon S3, or <a>AzElSegmentsData$azElData</a> to provide data inline.</p>
 * @public
 */
export type AzElSegmentsData =
  | AzElSegmentsData.AzElDataMember
  | AzElSegmentsData.S3ObjectMember
  | AzElSegmentsData.$UnknownMember;

/**
 * @public
 */
export namespace AzElSegmentsData {
  /**
   * <p>The Amazon S3 object containing azimuth elevation segment data.</p> <p>The Amazon S3 object must contain JSON-formatted azimuth elevation data matching the <a>AzElSegments</a> structure.</p>
   * @public
   */
  export interface S3ObjectMember {
    s3Object: S3Object;
    azElData?: never;
    $unknown?: never;
  }

  /**
   * <p>Azimuth elevation segment data provided directly in the request.</p> <p>Use this option for smaller datasets or when Amazon S3 access is not available.</p>
   * @public
   */
  export interface AzElDataMember {
    s3Object?: never;
    azElData: AzElSegments;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    s3Object?: never;
    azElData?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    s3Object: (value: S3Object) => T;
    azElData: (value: AzElSegments) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: AzElSegmentsData, visitor: Visitor<T>): T => {
    if (value.s3Object !== undefined) return visitor.s3Object(value.s3Object);
    if (value.azElData !== undefined) return visitor.azElData(value.azElData);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Azimuth elevation ephemeris data.</p> <p> Use this ephemeris type to provide pointing angles directly, rather than satellite orbital elements. Use this when you need precise antenna pointing but have imprecise or unknown satellite trajectory information. </p> <p> The azimuth elevation data specifies the antenna pointing direction at specific times relative to a ground station location. AWS Ground Station uses 4th order Lagrange interpolation to compute pointing angles between the provided data points. </p> <p> AWS Ground Station automatically filters interpolated pointing angles, including only those that are above the site mask elevation of the specified ground station. </p> <p> For more detail about providing azimuth elevation ephemerides to AWS Ground Station, see the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-azimuth-elevation-ephemeris-data.html">azimuth elevation ephemeris section</a> of the AWS Ground Station User Guide. </p>
 * @public
 */
export interface AzElEphemeris {
  /**
   * <p>The ground station name for which you're providing azimuth elevation data.</p> <p>This ephemeris is specific to this ground station and can't be used at other locations.</p>
   * @public
   */
  groundStation: string | undefined;

  /**
   * <p>Azimuth elevation segment data.</p> <p>You can provide data inline in the request or through an Amazon S3 object reference.</p>
   * @public
   */
  data: AzElSegmentsData | undefined;
}

/**
 * <p>Filter for selecting contacts that use a specific <a>AzElEphemeris</a>.</p>
 * @public
 */
export interface AzElEphemerisFilter {
  /**
   * <p>Unique identifier of the azimuth elevation ephemeris.</p>
   * @public
   */
  id: string | undefined;
}

/**
 * <p>Program track settings for <a>AzElEphemeris</a>.</p>
 * @public
 */
export interface AzElProgramTrackSettings {
  /**
   * <p>Unique identifier of the azimuth elevation ephemeris.</p>
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface CancelContactRequest {
  /**
   * <p>UUID of a contact.</p>
   * @public
   */
  contactId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ContactIdResponse {
  /**
   * <p>UUID of a contact.</p>
   * @public
   */
  contactId?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const CapabilityHealth = {
  HEALTHY: "HEALTHY",
  UNHEALTHY: "UNHEALTHY",
} as const;

/**
 * @public
 */
export type CapabilityHealth = (typeof CapabilityHealth)[keyof typeof CapabilityHealth];

/**
 * @public
 * @enum
 */
export const CapabilityHealthReason = {
  DATAPLANE_FAILURE: "DATAPLANE_FAILURE",
  HEALTHY: "HEALTHY",
  INITIALIZING_DATAPLANE: "INITIALIZING_DATAPLANE",
  INVALID_IP_OWNERSHIP: "INVALID_IP_OWNERSHIP",
  NOT_AUTHORIZED_TO_CREATE_SLR: "NOT_AUTHORIZED_TO_CREATE_SLR",
  NO_REGISTERED_AGENT: "NO_REGISTERED_AGENT",
  UNVERIFIED_IP_OWNERSHIP: "UNVERIFIED_IP_OWNERSHIP",
} as const;

/**
 * @public
 */
export type CapabilityHealthReason = (typeof CapabilityHealthReason)[keyof typeof CapabilityHealthReason];

/**
 * @public
 * @enum
 */
export const ConfigCapabilityType = {
  ANTENNA_DOWNLINK: "antenna-downlink",
  ANTENNA_DOWNLINK_DEMOD_DECODE: "antenna-downlink-demod-decode",
  ANTENNA_UPLINK: "antenna-uplink",
  DATAFLOW_ENDPOINT: "dataflow-endpoint",
  S3_RECORDING: "s3-recording",
  TRACKING: "tracking",
  UPLINK_ECHO: "uplink-echo",
} as const;

/**
 * @public
 */
export type ConfigCapabilityType = (typeof ConfigCapabilityType)[keyof typeof ConfigCapabilityType];

/**
 * <p/>
 * @public
 */
export interface ConfigIdResponse {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId?: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * <p>ARN of a <code>Config</code>.</p>
   * @public
   */
  configArn?: string | undefined;
}

/**
 * <p>Information about the dataflow endpoint <code>Config</code>.</p>
 * @public
 */
export interface DataflowEndpointConfig {
  /**
   * <p>Name of a dataflow endpoint.</p>
   * @public
   */
  dataflowEndpointName: string | undefined;

  /**
   * <p>Region of a dataflow endpoint.</p>
   * @public
   */
  dataflowEndpointRegion?: string | undefined;
}

/**
 * <p>Information about an S3 recording <code>Config</code>.</p>
 * @public
 */
export interface S3RecordingConfig {
  /**
   * <p>ARN of the bucket to record to.</p>
   * @public
   */
  bucketArn: string | undefined;

  /**
   * <p>ARN of the role Ground Station assumes to write data to the bucket.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>S3 Key prefix to prefice data files.</p>
   * @public
   */
  prefix?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const Criticality = {
  PREFERRED: "PREFERRED",
  REMOVED: "REMOVED",
  REQUIRED: "REQUIRED",
} as const;

/**
 * @public
 */
export type Criticality = (typeof Criticality)[keyof typeof Criticality];

/**
 * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile.</p>
 * @public
 */
export interface TrackingConfig {
  /**
   * <p>Current setting for autotrack.</p>
   * @public
   */
  autotrack: Criticality | undefined;
}

/**
 * <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
 * @public
 */
export interface UplinkEchoConfig {
  /**
   * <p>Whether or not an uplink <code>Config</code> is enabled.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>ARN of an uplink <code>Config</code>.</p>
   * @public
   */
  antennaUplinkConfigArn: string | undefined;
}

/**
 * <p>Object containing the parameters of a <code>Config</code>.</p> <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 * @public
 */
export type ConfigTypeData =
  | ConfigTypeData.AntennaDownlinkConfigMember
  | ConfigTypeData.AntennaDownlinkDemodDecodeConfigMember
  | ConfigTypeData.AntennaUplinkConfigMember
  | ConfigTypeData.DataflowEndpointConfigMember
  | ConfigTypeData.S3RecordingConfigMember
  | ConfigTypeData.TrackingConfigMember
  | ConfigTypeData.UplinkEchoConfigMember
  | ConfigTypeData.$UnknownMember;

/**
 * @public
 */
export namespace ConfigTypeData {
  /**
   * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
   * @public
   */
  export interface AntennaDownlinkConfigMember {
    antennaDownlinkConfig: AntennaDownlinkConfig;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. </p>
   * @public
   */
  export interface TrackingConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig: TrackingConfig;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about the dataflow endpoint <code>Config</code>.</p>
   * @public
   */
  export interface DataflowEndpointConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig: DataflowEndpointConfig;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
   * @public
   */
  export interface AntennaDownlinkDemodDecodeConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.</p>
   * @public
   */
  export interface AntennaUplinkConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig: AntennaUplinkConfig;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about an uplink echo <code>Config</code>.</p> <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
   * @public
   */
  export interface UplinkEchoConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig: UplinkEchoConfig;
    s3RecordingConfig?: never;
    $unknown?: never;
  }

  /**
   * <p>Information about an S3 recording <code>Config</code>.</p>
   * @public
   */
  export interface S3RecordingConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig: S3RecordingConfig;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    antennaDownlinkConfig: (value: AntennaDownlinkConfig) => T;
    trackingConfig: (value: TrackingConfig) => T;
    dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
    antennaDownlinkDemodDecodeConfig: (value: AntennaDownlinkDemodDecodeConfig) => T;
    antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
    uplinkEchoConfig: (value: UplinkEchoConfig) => T;
    s3RecordingConfig: (value: S3RecordingConfig) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigTypeData, visitor: Visitor<T>): T => {
    if (value.antennaDownlinkConfig !== undefined) return visitor.antennaDownlinkConfig(value.antennaDownlinkConfig);
    if (value.trackingConfig !== undefined) return visitor.trackingConfig(value.trackingConfig);
    if (value.dataflowEndpointConfig !== undefined) return visitor.dataflowEndpointConfig(value.dataflowEndpointConfig);
    if (value.antennaDownlinkDemodDecodeConfig !== undefined)
      return visitor.antennaDownlinkDemodDecodeConfig(value.antennaDownlinkDemodDecodeConfig);
    if (value.antennaUplinkConfig !== undefined) return visitor.antennaUplinkConfig(value.antennaUplinkConfig);
    if (value.uplinkEchoConfig !== undefined) return visitor.uplinkEchoConfig(value.uplinkEchoConfig);
    if (value.s3RecordingConfig !== undefined) return visitor.s3RecordingConfig(value.s3RecordingConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p/>
 * @public
 */
export interface CreateConfigRequest {
  /**
   * <p>Name of a <code>Config</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Parameters of a <code>Config</code>.</p>
   * @public
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p>Account limits for this resource have been exceeded.</p>
 * @public
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   * @public
   */
  parameterName?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceLimitExceededException, __BaseException>) {
    super({
      name: "ResourceLimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceLimitExceededException.prototype);
    this.parameterName = opts.parameterName;
  }
}

/**
 * <p/>
 * @public
 */
export interface DeleteConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType: ConfigCapabilityType | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType: ConfigCapabilityType | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetConfigResponse {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId: string | undefined;

  /**
   * <p>ARN of a <code>Config</code> </p>
   * @public
   */
  configArn: string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * <p>Data elements in a <code>Config</code>.</p>
   * @public
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListConfigsRequest {
  /**
   * <p>Maximum number of <code>Configs</code> returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>An item in a list of <code>Config</code> objects.</p>
 * @public
 */
export interface ConfigListItem {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId?: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * <p>ARN of a <code>Config</code>.</p>
   * @public
   */
  configArn?: string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListConfigsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of <code>Config</code> items.</p>
   * @public
   */
  configList?: ConfigListItem[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface UpdateConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId: string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType: ConfigCapabilityType | undefined;

  /**
   * <p>Parameters of a <code>Config</code>.</p>
   * @public
   */
  configData: ConfigTypeData | undefined;
}

/**
 * <p>Connection details for Ground Station to Agent and Agent to customer</p>
 * @public
 */
export interface DownlinkConnectionDetails {
  /**
   * <p>Ingress address of AgentEndpoint with a port range and an optional mtu.</p>
   * @public
   */
  agentIpAndPortAddress: RangedConnectionDetails | undefined;

  /**
   * <p>Egress address of AgentEndpoint with an optional mtu.</p>
   * @public
   */
  egressAddressAndPort: ConnectionDetails | undefined;
}

/**
 * <p>Dataflow details for a downlink endpoint</p>
 * @public
 */
export type DownlinkDataflowDetails =
  | DownlinkDataflowDetails.AgentConnectionDetailsMember
  | DownlinkDataflowDetails.$UnknownMember;

/**
 * @public
 */
export namespace DownlinkDataflowDetails {
  /**
   * <p>Downlink connection details for customer to Agent and Agent to Ground Station</p>
   * @public
   */
  export interface AgentConnectionDetailsMember {
    agentConnectionDetails: DownlinkConnectionDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentConnectionDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agentConnectionDetails: (value: DownlinkConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: DownlinkDataflowDetails, visitor: Visitor<T>): T => {
    if (value.agentConnectionDetails !== undefined) return visitor.agentConnectionDetails(value.agentConnectionDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details for a downlink agent endpoint</p>
 * @public
 */
export interface DownlinkAwsGroundStationAgentEndpointDetails {
  /**
   * <p>Downlink dataflow endpoint name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Dataflow details for the downlink endpoint</p>
   * @public
   */
  dataflowDetails: DownlinkDataflowDetails | undefined;

  /**
   * <p>Status of the agent associated with the downlink dataflow endpoint</p>
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * <p>Health audit results for the downlink dataflow endpoint</p>
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * @public
 * @enum
 */
export const EndpointStatus = {
  created: "created",
  creating: "creating",
  deleted: "deleted",
  deleting: "deleting",
  failed: "failed",
} as const;

/**
 * @public
 */
export type EndpointStatus = (typeof EndpointStatus)[keyof typeof EndpointStatus];

/**
 * <p>Information about a dataflow endpoint.</p>
 * @public
 */
export interface DataflowEndpoint {
  /**
   * <p>Name of a dataflow endpoint.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Socket address of a dataflow endpoint.</p>
   * @public
   */
  address?: SocketAddress | undefined;

  /**
   * <p>Status of a dataflow endpoint.</p>
   * @public
   */
  status?: EndpointStatus | undefined;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   * @public
   */
  mtu?: number | undefined;
}

/**
 * <p>Information about endpoints.</p>
 * @public
 */
export interface SecurityDetails {
  /**
   * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The security groups to attach to the elastic network interfaces.</p>
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>ARN to a role needed for connecting streams to your instances. </p>
   * @public
   */
  roleArn: string | undefined;
}

/**
 * <p>Connection details for customer to Agent and Agent to Ground Station</p>
 * @public
 */
export interface UplinkConnectionDetails {
  /**
   * <p>Egress address of AgentEndpoint with an optional mtu.</p>
   * @public
   */
  ingressAddressAndPort: ConnectionDetails | undefined;

  /**
   * <p>Ingress address of AgentEndpoint with a port range and an optional mtu.</p>
   * @public
   */
  agentIpAndPortAddress: RangedConnectionDetails | undefined;
}

/**
 * <p>Dataflow details for an uplink endpoint</p>
 * @public
 */
export type UplinkDataflowDetails =
  | UplinkDataflowDetails.AgentConnectionDetailsMember
  | UplinkDataflowDetails.$UnknownMember;

/**
 * @public
 */
export namespace UplinkDataflowDetails {
  /**
   * <p>Uplink connection details for customer to Agent and Agent to Ground Station</p>
   * @public
   */
  export interface AgentConnectionDetailsMember {
    agentConnectionDetails: UplinkConnectionDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    agentConnectionDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    agentConnectionDetails: (value: UplinkConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: UplinkDataflowDetails, visitor: Visitor<T>): T => {
    if (value.agentConnectionDetails !== undefined) return visitor.agentConnectionDetails(value.agentConnectionDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Details for an uplink agent endpoint</p>
 * @public
 */
export interface UplinkAwsGroundStationAgentEndpointDetails {
  /**
   * <p>Uplink dataflow endpoint name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Dataflow details for the uplink endpoint</p>
   * @public
   */
  dataflowDetails: UplinkDataflowDetails | undefined;

  /**
   * <p>Status of the agent associated with the uplink dataflow endpoint</p>
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * <p>Health audit results for the uplink dataflow endpoint</p>
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * <p>Information about the endpoint details.</p>
 * @public
 */
export interface EndpointDetails {
  /**
   * <p>Endpoint security details including a list of subnets, a list of security groups and a role to connect streams to instances.</p>
   * @public
   */
  securityDetails?: SecurityDetails | undefined;

  /**
   * <p>A dataflow endpoint.</p>
   * @public
   */
  endpoint?: DataflowEndpoint | undefined;

  /**
   * <p>An agent endpoint.</p>
   * @public
   */
  awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint | undefined;

  /**
   * <p>Definition for an uplink agent endpoint</p>
   * @public
   */
  uplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpointDetails | undefined;

  /**
   * <p>Definition for a downlink agent endpoint</p>
   * @public
   */
  downlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpointDetails | undefined;

  /**
   * <p>A dataflow endpoint health status. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.</p>
   * @public
   */
  healthStatus?: CapabilityHealth | undefined;

  /**
   * <p>Health reasons for a dataflow endpoint. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.</p>
   * @public
   */
  healthReasons?: CapabilityHealthReason[] | undefined;
}

/**
 * <p>Details about an S3 recording <code>Config</code> used in a contact.</p>
 * @public
 */
export interface S3RecordingDetails {
  /**
   * <p>ARN of the bucket used.</p>
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * <p>Key template used for the S3 Recording Configuration</p>
   * @public
   */
  keyTemplate?: string | undefined;
}

/**
 * <p>Details for certain <code>Config</code> object types in a contact.</p>
 * @public
 */
export type ConfigDetails =
  | ConfigDetails.AntennaDemodDecodeDetailsMember
  | ConfigDetails.EndpointDetailsMember
  | ConfigDetails.S3RecordingDetailsMember
  | ConfigDetails.$UnknownMember;

/**
 * @public
 */
export namespace ConfigDetails {
  /**
   * <p>Information about the endpoint details.</p>
   * @public
   */
  export interface EndpointDetailsMember {
    endpointDetails: EndpointDetails;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for antenna demod decode <code>Config</code> in a contact.</p>
   * @public
   */
  export interface AntennaDemodDecodeDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for an S3 recording <code>Config</code> in a contact.</p>
   * @public
   */
  export interface S3RecordingDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails: S3RecordingDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    endpointDetails: (value: EndpointDetails) => T;
    antennaDemodDecodeDetails: (value: AntennaDemodDecodeDetails) => T;
    s3RecordingDetails: (value: S3RecordingDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigDetails, visitor: Visitor<T>): T => {
    if (value.endpointDetails !== undefined) return visitor.endpointDetails(value.endpointDetails);
    if (value.antennaDemodDecodeDetails !== undefined)
      return visitor.antennaDemodDecodeDetails(value.antennaDemodDecodeDetails);
    if (value.s3RecordingDetails !== undefined) return visitor.s3RecordingDetails(value.s3RecordingDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p/>
 * @public
 */
export interface DescribeContactRequest {
  /**
   * <p>UUID of a contact.</p>
   * @public
   */
  contactId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ContactStatus = {
  AVAILABLE: "AVAILABLE",
  AWS_CANCELLED: "AWS_CANCELLED",
  AWS_FAILED: "AWS_FAILED",
  CANCELLED: "CANCELLED",
  CANCELLING: "CANCELLING",
  COMPLETED: "COMPLETED",
  FAILED: "FAILED",
  FAILED_TO_SCHEDULE: "FAILED_TO_SCHEDULE",
  PASS: "PASS",
  POSTPASS: "POSTPASS",
  PREPASS: "PREPASS",
  SCHEDULED: "SCHEDULED",
  SCHEDULING: "SCHEDULING",
} as const;

/**
 * @public
 */
export type ContactStatus = (typeof ContactStatus)[keyof typeof ContactStatus];

/**
 * <p>Dataflow details for the destination side.</p>
 * @public
 */
export interface Destination {
  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId?: string | undefined;

  /**
   * <p>Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.</p>
   * @public
   */
  configDetails?: ConfigDetails | undefined;

  /**
   * <p>Region of a dataflow destination.</p>
   * @public
   */
  dataflowDestinationRegion?: string | undefined;
}

/**
 * <p>Dataflow details for the source side.</p>
 * @public
 */
export interface Source {
  /**
   * <p>Type of a <code>Config</code>.</p>
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   * @public
   */
  configId?: string | undefined;

  /**
   * <p>Additional details for a <code>Config</code>, if type is <code>dataflow-endpoint</code> or <code>antenna-downlink-demod-decode</code> </p>
   * @public
   */
  configDetails?: ConfigDetails | undefined;

  /**
   * <p>Region of a dataflow source.</p>
   * @public
   */
  dataflowSourceRegion?: string | undefined;
}

/**
 * <p>Information about a dataflow edge used in a contact.</p>
 * @public
 */
export interface DataflowDetail {
  /**
   * <p>Dataflow details for the source side.</p>
   * @public
   */
  source?: Source | undefined;

  /**
   * <p>Dataflow details for the destination side.</p>
   * @public
   */
  destination?: Destination | undefined;

  /**
   * <p>Error message for a dataflow.</p>
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EphemerisType = {
  AZ_EL: "AZ_EL",
  OEM: "OEM",
  SERVICE_MANAGED: "SERVICE_MANAGED",
  TLE: "TLE",
} as const;

/**
 * @public
 */
export type EphemerisType = (typeof EphemerisType)[keyof typeof EphemerisType];

/**
 * <p>Ephemeris data for a contact.</p>
 * @public
 */
export interface EphemerisResponseData {
  /**
   * <p>Unique identifier of the ephemeris. Appears only for custom ephemerides.</p>
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * <p>Type of ephemeris.</p>
   * @public
   */
  ephemerisType: EphemerisType | undefined;
}

/**
 * <p>Elevation angle of the satellite in the sky during a contact.</p>
 * @public
 */
export interface Elevation {
  /**
   * <p>Elevation angle value.</p>
   * @public
   */
  value: number | undefined;

  /**
   * <p>Elevation angle units.</p>
   * @public
   */
  unit: AngleUnits | undefined;
}

/**
 * <p>Program track settings for an antenna during a contact.</p>
 * @public
 */
export type ProgramTrackSettings = ProgramTrackSettings.AzElMember | ProgramTrackSettings.$UnknownMember;

/**
 * @public
 */
export namespace ProgramTrackSettings {
  /**
   * <p>Program track settings for <a>AzElEphemeris</a>.</p>
   * @public
   */
  export interface AzElMember {
    azEl: AzElProgramTrackSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    azEl?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    azEl: (value: AzElProgramTrackSettings) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ProgramTrackSettings, visitor: Visitor<T>): T => {
    if (value.azEl !== undefined) return visitor.azEl(value.azEl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p>Overrides the default tracking configuration on an antenna during a contact.</p>
 * @public
 */
export interface TrackingOverrides {
  /**
   * <p>Program track settings to override for antenna tracking during the contact.</p>
   * @public
   */
  programTrackSettings: ProgramTrackSettings | undefined;
}

/**
 * <p/>
 * @public
 */
export interface DescribeContactResponse {
  /**
   * <p>UUID of a contact.</p>
   * @public
   */
  contactId?: string | undefined;

  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * <p>ARN of a satellite.</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   * @public
   */
  prePassStartTime?: Date | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   * @public
   */
  postPassEndTime?: Date | undefined;

  /**
   * <p>Ground station for a contact.</p>
   * @public
   */
  groundStation?: string | undefined;

  /**
   * <p>Status of a contact.</p>
   * @public
   */
  contactStatus?: ContactStatus | undefined;

  /**
   * <p>Error message for a contact.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   * @public
   */
  maximumElevation?: Elevation | undefined;

  /**
   * <p>Tags assigned to a contact.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Region of a contact.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>List describing source and destination details for each dataflow edge.</p>
   * @public
   */
  dataflowList?: DataflowDetail[] | undefined;

  /**
   * <p> Projected time in UTC your satellite will rise above the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. </p>
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * <p> Projected time in UTC your satellite will set below the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. </p>
   * @public
   */
  visibilityEndTime?: Date | undefined;

  /**
   * <p>Tracking configuration overrides specified when the contact was reserved.</p>
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;

  /**
   * <p>The ephemeris that determines antenna pointing directions for the contact.</p>
   * @public
   */
  ephemeris?: EphemerisResponseData | undefined;
}

/**
 * <p>Filter for selecting contacts that use a specific ephemeris".</p>
 * @public
 */
export type EphemerisFilter = EphemerisFilter.AzElMember | EphemerisFilter.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisFilter {
  /**
   * <p>Filter for <a>AzElEphemeris</a>.</p>
   * @public
   */
  export interface AzElMember {
    azEl: AzElEphemerisFilter;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    azEl?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    azEl: (value: AzElEphemerisFilter) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EphemerisFilter, visitor: Visitor<T>): T => {
    if (value.azEl !== undefined) return visitor.azEl(value.azEl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p/>
 * @public
 */
export interface ListContactsRequest {
  /**
   * <p>Maximum number of contacts returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>Status of a contact reservation.</p>
   * @public
   */
  statusList: ContactStatus[] | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   * @public
   */
  groundStation?: string | undefined;

  /**
   * <p>ARN of a satellite.</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * <p>Filter for selecting contacts that use a specific ephemeris".</p>
   * @public
   */
  ephemeris?: EphemerisFilter | undefined;
}

/**
 * <p>Data describing a contact.</p>
 * @public
 */
export interface ContactData {
  /**
   * <p>UUID of a contact.</p>
   * @public
   */
  contactId?: string | undefined;

  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * <p>ARN of a satellite.</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   * @public
   */
  startTime?: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   * @public
   */
  endTime?: Date | undefined;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   * @public
   */
  prePassStartTime?: Date | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   * @public
   */
  postPassEndTime?: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   * @public
   */
  groundStation?: string | undefined;

  /**
   * <p>Status of a contact.</p>
   * @public
   */
  contactStatus?: ContactStatus | undefined;

  /**
   * <p>Error message of a contact.</p>
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   * @public
   */
  maximumElevation?: Elevation | undefined;

  /**
   * <p>Region of a contact.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Tags assigned to a contact.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p> Projected time in UTC your satellite will rise above the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. <i>This field is not present for contacts with a <code>SCHEDULING</code> or <code>SCHEDULED</code> status.</i> </p>
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * <p> Projected time in UTC your satellite will set below the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>. This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. <i>This field is not present for contacts with a <code>SCHEDULING</code> or <code>SCHEDULED</code> status.</i> </p>
   * @public
   */
  visibilityEndTime?: Date | undefined;

  /**
   * <p>The ephemeris that determines antenna pointing for the contact.</p>
   * @public
   */
  ephemeris?: EphemerisResponseData | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListContactsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of contacts.</p>
   * @public
   */
  contactList?: ContactData[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ReserveContactRequest {
  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn: string | undefined;

  /**
   * <p>ARN of a satellite</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   * @public
   */
  groundStation: string | undefined;

  /**
   * <p>Tags assigned to a contact.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Tracking configuration overrides for the contact.</p>
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;
}

/**
 * <p/>
 * @public
 */
export interface CreateDataflowEndpointGroupRequest {
  /**
   * <p>Endpoint details of each endpoint in the dataflow endpoint group. All dataflow endpoints within a single dataflow endpoint group must be of the same type. You cannot mix <a href="https://docs.aws.amazon.com/ground-station/latest/APIReference/API_AwsGroundStationAgentEndpoint.html"> AWS Ground Station Agent endpoints</a> with <a href="https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html">Dataflow endpoints</a> in the same group. If your use case requires both types of endpoints, you must create separate dataflow endpoint groups for each type. </p>
   * @public
   */
  endpointDetails: EndpointDetails[] | undefined;

  /**
   * <p>Tags of a dataflow endpoint group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;
}

/**
 * <p/>
 * @public
 */
export interface DataflowEndpointGroupIdResponse {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;
}

/**
 * <p>Definition for a downlink agent endpoint</p>
 * @public
 */
export interface DownlinkAwsGroundStationAgentEndpoint {
  /**
   * <p>Downlink dataflow endpoint name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Dataflow details for the downlink endpoint</p>
   * @public
   */
  dataflowDetails: DownlinkDataflowDetails | undefined;
}

/**
 * <p>Definition for an uplink agent endpoint</p>
 * @public
 */
export interface UplinkAwsGroundStationAgentEndpoint {
  /**
   * <p>Uplink dataflow endpoint name</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Dataflow details for the uplink endpoint</p>
   * @public
   */
  dataflowDetails: UplinkDataflowDetails | undefined;
}

/**
 * <p>Endpoint definition used for creating a dataflow endpoint</p>
 * @public
 */
export type CreateEndpointDetails =
  | CreateEndpointDetails.DownlinkAwsGroundStationAgentEndpointMember
  | CreateEndpointDetails.UplinkAwsGroundStationAgentEndpointMember
  | CreateEndpointDetails.$UnknownMember;

/**
 * @public
 */
export namespace CreateEndpointDetails {
  /**
   * <p>Definition for an uplink agent endpoint</p>
   * @public
   */
  export interface UplinkAwsGroundStationAgentEndpointMember {
    uplinkAwsGroundStationAgentEndpoint: UplinkAwsGroundStationAgentEndpoint;
    downlinkAwsGroundStationAgentEndpoint?: never;
    $unknown?: never;
  }

  /**
   * <p>Definition for a downlink agent endpoint</p>
   * @public
   */
  export interface DownlinkAwsGroundStationAgentEndpointMember {
    uplinkAwsGroundStationAgentEndpoint?: never;
    downlinkAwsGroundStationAgentEndpoint: DownlinkAwsGroundStationAgentEndpoint;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    uplinkAwsGroundStationAgentEndpoint?: never;
    downlinkAwsGroundStationAgentEndpoint?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    uplinkAwsGroundStationAgentEndpoint: (value: UplinkAwsGroundStationAgentEndpoint) => T;
    downlinkAwsGroundStationAgentEndpoint: (value: DownlinkAwsGroundStationAgentEndpoint) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: CreateEndpointDetails, visitor: Visitor<T>): T => {
    if (value.uplinkAwsGroundStationAgentEndpoint !== undefined)
      return visitor.uplinkAwsGroundStationAgentEndpoint(value.uplinkAwsGroundStationAgentEndpoint);
    if (value.downlinkAwsGroundStationAgentEndpoint !== undefined)
      return visitor.downlinkAwsGroundStationAgentEndpoint(value.downlinkAwsGroundStationAgentEndpoint);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateDataflowEndpointGroupV2Request {
  /**
   * <p>Dataflow endpoint group's endpoint definitions</p>
   * @public
   */
  endpoints: CreateEndpointDetails[] | undefined;

  /**
   * <p>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * <p>Tags of a V2 dataflow endpoint group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataflowEndpointGroupV2Response {
  /**
   * <p>Dataflow endpoint group ID</p>
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;
}

/**
 * <p>Request would cause a service quota to be exceeded.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>Parameter name that caused the exception</p>
   * @public
   */
  parameterName?: string | undefined;

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
    this.parameterName = opts.parameterName;
  }
}

/**
 * <p>Ephemeris data in Orbit Ephemeris Message (OEM) format.</p> <p> AWS Ground Station processes OEM ephemerides according to the <a href="https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/01//502x0b3e1.pdf">CCSDS standard</a> with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-oem-ephemeris-data.html#oem-ephemeris-format">OEM ephemeris format</a> in the AWS Ground Station user guide. </p>
 * @public
 */
export interface OEMEphemeris {
  /**
   * <p>The Amazon S3 object that contains the ephemeris data.</p>
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * <p>OEM data that you provide directly instead of using an Amazon S3 object.</p>
   * @public
   */
  oemData?: string | undefined;
}

/**
 * <p>A time range with a start and end time.</p>
 * @public
 */
export interface TimeRange {
  /**
   * <p>Unix epoch timestamp in UTC at which the time range starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>Unix epoch timestamp in UTC at which the time range ends.</p>
   * @public
   */
  endTime: Date | undefined;
}

/**
 * <p>Two-line element set (TLE) data.</p>
 * @public
 */
export interface TLEData {
  /**
   * <p>First line of two-line element set (TLE) data.</p>
   * @public
   */
  tleLine1: string | undefined;

  /**
   * <p>Second line of two-line element set (TLE) data.</p>
   * @public
   */
  tleLine2: string | undefined;

  /**
   * <p>The valid time range for the TLE. Time ranges must be continuous without gaps or overlaps.</p>
   * @public
   */
  validTimeRange: TimeRange | undefined;
}

/**
 * <p>Two-line element set (TLE) ephemeris.</p> <p> For more detail about providing Two-line element sets to AWS Ground Station, see the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-tle-ephemeris-data.html">TLE section</a> of the AWS Ground Station user guide. </p>
 * @public
 */
export interface TLEEphemeris {
  /**
   * <p>The Amazon S3 object that contains the ephemeris data.</p>
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * <p>TLE data that you provide directly instead of using an Amazon S3 object.</p>
   * @public
   */
  tleData?: TLEData[] | undefined;
}

/**
 * <p>Ephemeris data.</p>
 * @public
 */
export type EphemerisData =
  | EphemerisData.AzElMember
  | EphemerisData.OemMember
  | EphemerisData.TleMember
  | EphemerisData.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisData {
  /**
   * <p>Two-line element set (TLE) ephemeris.</p> <p> For more detail about providing Two-line element sets to AWS Ground Station, see the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-tle-ephemeris-data.html">TLE section</a> of the AWS Ground Station user guide. </p>
   * @public
   */
  export interface TleMember {
    tle: TLEEphemeris;
    oem?: never;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * <p>Ephemeris data in Orbit Ephemeris Message (OEM) format.</p> <p> AWS Ground Station processes OEM ephemerides according to the <a href="https://ccsds.org/wp-content/uploads/gravity_forms/5-448e85c647331d9cbaf66c096458bdd5/2025/01//502x0b3e1.pdf">CCSDS standard</a> with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-oem-ephemeris-data.html#oem-ephemeris-format">OEM ephemeris format</a> in the AWS Ground Station user guide. </p>
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: OEMEphemeris;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * <p>Azimuth elevation ephemeris data.</p> <p> Use this ephemeris type to provide pointing angles directly, rather than satellite orbital elements. Use this when you need precise antenna pointing but have imprecise or unknown satellite trajectory information. </p> <p> The azimuth elevation data specifies the antenna pointing direction at specific times relative to a ground station location. AWS Ground Station uses 4th order Lagrange interpolation to compute pointing angles between the provided data points. </p> <p> AWS Ground Station automatically filters interpolated pointing angles, including only those that are above the site mask elevation of the specified ground station. </p> <p> For more detail about providing azimuth elevation ephemerides to AWS Ground Station, see the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-azimuth-elevation-ephemeris-data.html">azimuth elevation ephemeris section</a> of the AWS Ground Station User Guide. </p>
   * @public
   */
  export interface AzElMember {
    tle?: never;
    oem?: never;
    azEl: AzElEphemeris;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tle?: never;
    oem?: never;
    azEl?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tle: (value: TLEEphemeris) => T;
    oem: (value: OEMEphemeris) => T;
    azEl: (value: AzElEphemeris) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EphemerisData, visitor: Visitor<T>): T => {
    if (value.tle !== undefined) return visitor.tle(value.tle);
    if (value.oem !== undefined) return visitor.oem(value.oem);
    if (value.azEl !== undefined) return visitor.azEl(value.azEl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateEphemerisRequest {
  /**
   * <p>The satellite ID that associates this ephemeris with a satellite in AWS Ground Station.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>Set to <code>true</code> to enable the ephemeris after validation. Set to <code>false</code> to keep it disabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>A priority score that determines which ephemeris to use when multiple ephemerides overlap.</p> <p>Higher numbers take precedence. The default is 1. Must be 1 or greater.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>A name that you can use to identify the ephemeris.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of the KMS key to use for encrypting the ephemeris.</p>
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * <p>Ephemeris data.</p>
   * @public
   */
  ephemeris?: EphemerisData | undefined;

  /**
   * <p>Tags assigned to an ephemeris.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EphemerisIdResponse {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId?: string | undefined;
}

/**
 * <p>KMS key info.</p>
 * @public
 */
export type KmsKey =
  | KmsKey.KmsAliasArnMember
  | KmsKey.KmsAliasNameMember
  | KmsKey.KmsKeyArnMember
  | KmsKey.$UnknownMember;

/**
 * @public
 */
export namespace KmsKey {
  /**
   * <p>KMS Key Arn.</p>
   * @public
   */
  export interface KmsKeyArnMember {
    kmsKeyArn: string;
    kmsAliasArn?: never;
    kmsAliasName?: never;
    $unknown?: never;
  }

  /**
   * <p>KMS Alias Arn.</p>
   * @public
   */
  export interface KmsAliasArnMember {
    kmsKeyArn?: never;
    kmsAliasArn: string;
    kmsAliasName?: never;
    $unknown?: never;
  }

  /**
   * <p>KMS Alias Name.</p>
   * @public
   */
  export interface KmsAliasNameMember {
    kmsKeyArn?: never;
    kmsAliasArn?: never;
    kmsAliasName: string;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kmsKeyArn?: never;
    kmsAliasArn?: never;
    kmsAliasName?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    kmsKeyArn: (value: string) => T;
    kmsAliasArn: (value: string) => T;
    kmsAliasName: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: KmsKey, visitor: Visitor<T>): T => {
    if (value.kmsKeyArn !== undefined) return visitor.kmsKeyArn(value.kmsKeyArn);
    if (value.kmsAliasArn !== undefined) return visitor.kmsAliasArn(value.kmsAliasArn);
    if (value.kmsAliasName !== undefined) return visitor.kmsAliasName(value.kmsAliasName);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * <p/>
 * @public
 */
export interface CreateMissionProfileRequest {
  /**
   * <p>Name of a mission profile.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a Ground Station Contact State Change event indicating an upcoming pass.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a Ground Station Contact State Change event indicating the pass has finished.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   * @public
   */
  minimumViableContactDurationSeconds: number | undefined;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.</p>
   * @public
   */
  dataflowEdges: string[][] | undefined;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   * @public
   */
  trackingConfigArn: string | undefined;

  /**
   * <p>Tags assigned to a mission profile.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface MissionProfileIdResponse {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface DeleteDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetDataflowEndpointGroupResponse {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;

  /**
   * <p>ARN of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupArn?: string | undefined;

  /**
   * <p>Details of a dataflow endpoint.</p>
   * @public
   */
  endpointsDetails?: EndpointDetails[] | undefined;

  /**
   * <p>Tags assigned to a dataflow endpoint group.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListDataflowEndpointGroupsRequest {
  /**
   * <p>Maximum number of dataflow endpoint groups returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Item in a list of <code>DataflowEndpoint</code> groups.</p>
 * @public
 */
export interface DataflowEndpointListItem {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;

  /**
   * <p>ARN of a dataflow endpoint group.</p>
   * @public
   */
  dataflowEndpointGroupArn?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListDataflowEndpointGroupsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>A list of dataflow endpoint groups.</p>
   * @public
   */
  dataflowEndpointGroupList?: DataflowEndpointListItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * <p>The specified resource is in use by non-terminal state contacts and cannot be modified or deleted.</p>
 * @public
 */
export class ResourceInUseException extends __BaseException {
  readonly name: "ResourceInUseException" = "ResourceInUseException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceInUseException, __BaseException>) {
    super({
      name: "ResourceInUseException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceInUseException.prototype);
  }
}

/**
 * <p/>
 * @public
 */
export interface DeleteMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EphemerisErrorCode = {
  AZ_EL_SEGMENTS_OUT_OF_ORDER: "AZ_EL_SEGMENTS_OUT_OF_ORDER",
  AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME: "AZ_EL_SEGMENT_END_TIME_BEFORE_START_TIME",
  AZ_EL_SEGMENT_END_TIME_INVALID: "AZ_EL_SEGMENT_END_TIME_INVALID",
  AZ_EL_SEGMENT_END_TIME_TOO_LATE: "AZ_EL_SEGMENT_END_TIME_TOO_LATE",
  AZ_EL_SEGMENT_LIST_MISSING: "AZ_EL_SEGMENT_LIST_MISSING",
  AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID: "AZ_EL_SEGMENT_REFERENCE_EPOCH_INVALID",
  AZ_EL_SEGMENT_START_TIME_INVALID: "AZ_EL_SEGMENT_START_TIME_INVALID",
  AZ_EL_SEGMENT_TIMES_OVERLAP: "AZ_EL_SEGMENT_TIMES_OVERLAP",
  AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID: "AZ_EL_SEGMENT_VALID_TIME_RANGE_INVALID",
  AZ_EL_TOTAL_DURATION_EXCEEDED: "AZ_EL_TOTAL_DURATION_EXCEEDED",
  CENTER_BODY_UNSUPPORTED: "CENTER_BODY_UNSUPPORTED",
  CREATION_DATE_MISSING: "CREATION_DATE_MISSING",
  END_TIME_IN_PAST: "END_TIME_IN_PAST",
  EXPIRATION_TIME_TOO_EARLY: "EXPIRATION_TIME_TOO_EARLY",
  FILE_FORMAT_INVALID: "FILE_FORMAT_INVALID",
  INSUFFICIENT_KMS_PERMISSIONS: "INSUFFICIENT_KMS_PERMISSIONS",
  INSUFFICIENT_TIME_AZ_EL: "INSUFFICIENT_TIME_AZ_EL",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  INTERPOLATION_DEGREE_INVALID: "INTERPOLATION_DEGREE_INVALID",
  INTERPOLATION_MISSING: "INTERPOLATION_MISSING",
  MEAN_MOTION_INVALID: "MEAN_MOTION_INVALID",
  MISMATCHED_SATCAT_ID: "MISMATCHED_SATCAT_ID",
  OBJECT_ID_MISSING: "OBJECT_ID_MISSING",
  OBJECT_NAME_MISSING: "OBJECT_NAME_MISSING",
  OEM_VERSION_UNSUPPORTED: "OEM_VERSION_UNSUPPORTED",
  ORIGINATOR_MISSING: "ORIGINATOR_MISSING",
  REF_FRAME_EPOCH_UNSUPPORTED: "REF_FRAME_EPOCH_UNSUPPORTED",
  REF_FRAME_UNSUPPORTED: "REF_FRAME_UNSUPPORTED",
  START_TIME_IN_FUTURE: "START_TIME_IN_FUTURE",
  START_TIME_METADATA_TOO_EARLY: "START_TIME_METADATA_TOO_EARLY",
  STOP_TIME_METADATA_TOO_LATE: "STOP_TIME_METADATA_TOO_LATE",
  TIME_AZ_EL_ANGLE_UNITS_INVALID: "TIME_AZ_EL_ANGLE_UNITS_INVALID",
  TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID: "TIME_AZ_EL_AZ_DEGREE_RANGE_INVALID",
  TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID: "TIME_AZ_EL_AZ_RADIAN_RANGE_INVALID",
  TIME_AZ_EL_EL_DEGREE_RANGE_INVALID: "TIME_AZ_EL_EL_DEGREE_RANGE_INVALID",
  TIME_AZ_EL_EL_RADIAN_RANGE_INVALID: "TIME_AZ_EL_EL_RADIAN_RANGE_INVALID",
  TIME_AZ_EL_ITEMS_OUT_OF_ORDER: "TIME_AZ_EL_ITEMS_OUT_OF_ORDER",
  TIME_SYSTEM_UNSUPPORTED: "TIME_SYSTEM_UNSUPPORTED",
} as const;

/**
 * @public
 */
export type EphemerisErrorCode = (typeof EphemerisErrorCode)[keyof typeof EphemerisErrorCode];

/**
 * <p>Detailed error information for ephemeris validation failures.</p> <p>Provides an error code and descriptive message to help diagnose and resolve validation issues.</p>
 * @public
 */
export interface EphemerisErrorReason {
  /**
   * <p>The error code identifying the type of validation failure.</p> <p>See the <a href="https://docs.aws.amazon.com/ground-station/latest/ug/troubleshooting-invalid-ephemerides.html">Troubleshooting Invalid Ephemerides guide</a> for error code details.</p>
   * @public
   */
  errorCode: EphemerisErrorCode | undefined;

  /**
   * <p>A human-readable message describing the validation failure.</p> <p>Provides specific details about what failed and may include suggestions for remediation.</p>
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EphemerisInvalidReason = {
  /**
   * Provided KMS key is invalid
   */
  KMS_KEY_INVALID: "KMS_KEY_INVALID",
  /**
   * Provided spacecraft identifiers such as spacecraft NORAD Id are invalid
   */
  METADATA_INVALID: "METADATA_INVALID",
  /**
   * Start, end, or expiration time(s) are invalid for the provided ephemeris
   */
  TIME_RANGE_INVALID: "TIME_RANGE_INVALID",
  /**
   * Provided ephemeris defines invalid spacecraft trajectory
   */
  TRAJECTORY_INVALID: "TRAJECTORY_INVALID",
  /**
   * Internal Service Error occurred while processing ephemeris
   */
  VALIDATION_ERROR: "VALIDATION_ERROR",
} as const;

/**
 * @public
 */
export type EphemerisInvalidReason = (typeof EphemerisInvalidReason)[keyof typeof EphemerisInvalidReason];

/**
 * @public
 * @enum
 */
export const EphemerisStatus = {
  DISABLED: "DISABLED",
  ENABLED: "ENABLED",
  ERROR: "ERROR",
  EXPIRED: "EXPIRED",
  INVALID: "INVALID",
  VALIDATING: "VALIDATING",
} as const;

/**
 * @public
 */
export type EphemerisStatus = (typeof EphemerisStatus)[keyof typeof EphemerisStatus];

/**
 * <p>Description of ephemeris.</p>
 * @public
 */
export interface EphemerisDescription {
  /**
   * <p>Source Amazon S3 object used for the ephemeris.</p>
   * @public
   */
  sourceS3Object?: S3Object | undefined;

  /**
   * <p>Supplied ephemeris data.</p>
   * @public
   */
  ephemerisData?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export type EphemerisTypeDescription =
  | EphemerisTypeDescription.AzElMember
  | EphemerisTypeDescription.OemMember
  | EphemerisTypeDescription.TleMember
  | EphemerisTypeDescription.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisTypeDescription {
  /**
   * <p>Description of ephemeris.</p>
   * @public
   */
  export interface TleMember {
    tle: EphemerisDescription;
    oem?: never;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * <p>Description of ephemeris.</p>
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: EphemerisDescription;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * <p>Description of ephemeris.</p>
   * @public
   */
  export interface AzElMember {
    tle?: never;
    oem?: never;
    azEl: EphemerisDescription;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tle?: never;
    oem?: never;
    azEl?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tle: (value: EphemerisDescription) => T;
    oem: (value: EphemerisDescription) => T;
    azEl: (value: EphemerisDescription) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EphemerisTypeDescription, visitor: Visitor<T>): T => {
    if (value.tle !== undefined) return visitor.tle(value.tle);
    if (value.oem !== undefined) return visitor.oem(value.oem);
    if (value.azEl !== undefined) return visitor.azEl(value.azEl);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface DescribeEphemerisResponse {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * <p>The AWS Ground Station satellite ID associated with ephemeris.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>The status of the ephemeris.</p>
   * @public
   */
  status?: EphemerisStatus | undefined;

  /**
   * <p>A priority score that determines which ephemeris to use when multiple ephemerides overlap.</p> <p>Higher numbers take precedence. The default is 1. Must be 1 or greater.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>The time the ephemeris was uploaded in UTC.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>Whether or not the ephemeris is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>A name that you can use to identify the ephemeris.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Tags assigned to an ephemeris.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Supplied ephemeris data.</p>
   * @public
   */
  suppliedData?: EphemerisTypeDescription | undefined;

  /**
   * <p>Reason that an ephemeris failed validation. Appears only when the status is <code>INVALID</code>.</p>
   * @public
   */
  invalidReason?: EphemerisInvalidReason | undefined;

  /**
   * <p>Detailed error information for ephemerides with <code>INVALID</code> status.</p> <p>Provides specific error codes and messages to help diagnose validation failures.</p>
   * @public
   */
  errorReasons?: EphemerisErrorReason[] | undefined;
}

/**
 * <p>Ephemeris item.</p>
 * @public
 */
export interface EphemerisItem {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * <p>The type of ephemeris.</p>
   * @public
   */
  ephemerisType?: EphemerisType | undefined;

  /**
   * <p>The status of the ephemeris.</p>
   * @public
   */
  status?: EphemerisStatus | undefined;

  /**
   * <p>A priority score that determines which ephemeris to use when multiple ephemerides overlap.</p> <p>Higher numbers take precedence. The default is 1. Must be 1 or greater.</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>Whether or not the ephemeris is enabled.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>The time the ephemeris was uploaded in UTC.</p>
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * <p>A name that you can use to identify the ephemeris.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Source Amazon S3 object used for the ephemeris.</p>
   * @public
   */
  sourceS3Object?: S3Object | undefined;
}

/**
 * @public
 */
export interface ListEphemeridesRequest {
  /**
   * <p>The AWS Ground Station satellite ID to list ephemeris for.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>Filter ephemerides by type. If not specified, all ephemeris types will be returned.</p>
   * @public
   */
  ephemerisType?: EphemerisType | undefined;

  /**
   * <p>The start time for the list operation in UTC. Returns ephemerides with expiration times within your specified time range.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time for the list operation in UTC. Returns ephemerides with expiration times within your specified time range.</p>
   * @public
   */
  endTime: Date | undefined;

  /**
   * <p>The list of ephemeris status to return.</p>
   * @public
   */
  statusList?: EphemerisStatus[] | undefined;

  /**
   * <p>Maximum number of ephemerides to return.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEphemeridesResponse {
  /**
   * <p>Pagination token.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of ephemerides.</p>
   * @public
   */
  ephemerides?: EphemerisItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   * @public
   */
  ephemerisId: string | undefined;

  /**
   * <p>Enable or disable the ephemeris. Changing this value doesn't require re-validation.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>A name that you can use to identify the ephemeris.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>A priority score that determines which ephemeris to use when multiple ephemerides overlap.</p> <p>Higher numbers take precedence. The default is 1. Must be 1 or greater.</p>
   * @public
   */
  priority?: number | undefined;
}

/**
 * @public
 * @enum
 */
export const EphemerisSource = {
  CUSTOMER_PROVIDED: "CUSTOMER_PROVIDED",
  SPACE_TRACK: "SPACE_TRACK",
} as const;

/**
 * @public
 */
export type EphemerisSource = (typeof EphemerisSource)[keyof typeof EphemerisSource];

/**
 * <p>Metadata describing a particular ephemeris.</p>
 * @public
 */
export interface EphemerisMetaData {
  /**
   * <p>The <code>EphemerisSource</code> that generated a given ephemeris.</p>
   * @public
   */
  source: EphemerisSource | undefined;

  /**
   * <p>UUID of a customer-provided ephemeris.</p> <p>This field is not populated for default ephemerides from Space Track.</p>
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * <p>The epoch of a default, ephemeris from Space Track in UTC.</p> <p>This field is not populated for customer-provided ephemerides.</p>
   * @public
   */
  epoch?: Date | undefined;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p> <p>A name is only returned for customer-provider ephemerides that have a name associated.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentTaskResponseUrlRequest {
  /**
   * <p>UUID of agent requesting the response URL.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>GUID of the agent task for which the response URL is being requested.</p>
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentTaskResponseUrlResponse {
  /**
   * <p>UUID of the agent.</p>
   * @public
   */
  agentId: string | undefined;

  /**
   * <p>GUID of the agent task.</p>
   * @public
   */
  taskId: string | undefined;

  /**
   * <p>Presigned URL for uploading agent task response logs.</p>
   * @public
   */
  presignedLogUrl: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetMinuteUsageRequest {
  /**
   * <p>The month being requested, with a value of 1-12.</p>
   * @public
   */
  month: number | undefined;

  /**
   * <p>The year being requested, in the format of YYYY.</p>
   * @public
   */
  year: number | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetMinuteUsageResponse {
  /**
   * <p>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</p>
   * @public
   */
  isReservedMinutesCustomer?: boolean | undefined;

  /**
   * <p>Total number of reserved minutes allocated, specific to the month being requested.</p>
   * @public
   */
  totalReservedMinuteAllocation?: number | undefined;

  /**
   * <p>Upcoming minutes scheduled for an account, specific to the month being requested.</p>
   * @public
   */
  upcomingMinutesScheduled?: number | undefined;

  /**
   * <p>Total scheduled minutes for an account, specific to the month being requested.</p>
   * @public
   */
  totalScheduledMinutes?: number | undefined;

  /**
   * <p>Estimated number of minutes remaining for an account, specific to the month being requested.</p>
   * @public
   */
  estimatedMinutesRemaining?: number | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetMissionProfileResponse {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId?: string | undefined;

  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * <p>Name of a mission profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Region of a mission profile.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   * @public
   */
  minimumViableContactDurationSeconds?: number | undefined;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.</p>
   * @public
   */
  dataflowEdges?: string[][] | undefined;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   * @public
   */
  trackingConfigArn?: string | undefined;

  /**
   * <p>Tags assigned to a mission profile.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetSatelliteRequest {
  /**
   * <p>UUID of a satellite.</p>
   * @public
   */
  satelliteId: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface GetSatelliteResponse {
  /**
   * <p>UUID of a satellite.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>ARN of a satellite.</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>NORAD satellite ID number.</p>
   * @public
   */
  noradSatelliteID?: number | undefined;

  /**
   * <p>A list of ground stations to which the satellite is on-boarded.</p>
   * @public
   */
  groundStations?: string[] | undefined;

  /**
   * <p>The current ephemeris being used to compute the trajectory of the satellite.</p>
   * @public
   */
  currentEphemeris?: EphemerisMetaData | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListGroundStationsRequest {
  /**
   * <p>Satellite ID to retrieve on-boarded ground stations.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>Maximum number of ground stations returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Information about the ground station data.</p>
 * @public
 */
export interface GroundStationData {
  /**
   * <p>UUID of a ground station.</p>
   * @public
   */
  groundStationId?: string | undefined;

  /**
   * <p>Name of a ground station.</p>
   * @public
   */
  groundStationName?: string | undefined;

  /**
   * <p>Ground station Region.</p>
   * @public
   */
  region?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListGroundStationsResponse {
  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of ground stations.</p>
   * @public
   */
  groundStationList?: GroundStationData[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>ARN of a resource.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags assigned to a resource.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListMissionProfilesRequest {
  /**
   * <p>Maximum number of mission profiles returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Item in a list of mission profiles.</p>
 * @public
 */
export interface MissionProfileListItem {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId?: string | undefined;

  /**
   * <p>ARN of a mission profile.</p>
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * <p>Region of a mission profile.</p>
   * @public
   */
  region?: string | undefined;

  /**
   * <p>Name of a mission profile.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListMissionProfilesResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of mission profiles.</p>
   * @public
   */
  missionProfileList?: MissionProfileListItem[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface UpdateMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   * @public
   */
  missionProfileId: string | undefined;

  /**
   * <p>Name of a mission profile.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a Ground Station Contact State Change event indicating the pass has finished.</p>
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a Ground Station Contact State Change event indicating the pass has finished.</p>
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   * @public
   */
  minimumViableContactDurationSeconds?: number | undefined;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i> <code>Config</code> and a <i>to</i> <code>Config</code>.</p>
   * @public
   */
  dataflowEdges?: string[][] | undefined;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   * @public
   */
  trackingConfigArn?: string | undefined;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListSatellitesRequest {
  /**
   * <p>Maximum number of satellites returned.</p>
   * @public
   */
  maxResults?: number | undefined;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * <p>Item in a list of satellites.</p>
 * @public
 */
export interface SatelliteListItem {
  /**
   * <p>UUID of a satellite.</p>
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * <p>ARN of a satellite.</p>
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * <p>NORAD satellite ID number.</p>
   * @public
   */
  noradSatelliteID?: number | undefined;

  /**
   * <p>A list of ground stations to which the satellite is on-boarded.</p>
   * @public
   */
  groundStations?: string[] | undefined;

  /**
   * <p>The current ephemeris being used to compute the trajectory of the satellite.</p>
   * @public
   */
  currentEphemeris?: EphemerisMetaData | undefined;
}

/**
 * <p/>
 * @public
 */
export interface ListSatellitesResponse {
  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>List of satellites.</p>
   * @public
   */
  satellites?: SatelliteListItem[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>ARN of a resource tag.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags assigned to a resource.</p>
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * <p/>
 * @public
 */
export interface TagResourceResponse {}

/**
 * <p/>
 * @public
 */
export interface UntagResourceRequest {
  /**
   * <p>ARN of a resource.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys of a resource tag.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * <p/>
 * @public
 */
export interface UntagResourceResponse {}
