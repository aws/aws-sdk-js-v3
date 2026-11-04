// smithy-typescript generated code
import type {
  AgentStatus,
  AngleUnits,
  AuditResults,
  BandwidthUnits,
  CapabilityHealth,
  CapabilityHealthReason,
  ConfigCapabilityType,
  ContactStatus,
  Criticality,
  EirpUnits,
  EndpointStatus,
  EphemerisErrorCode,
  EphemerisInvalidReason,
  EphemerisSource,
  EphemerisStatus,
  EphemerisType,
  FrequencyUnits,
  MaintenanceType,
  Polarization,
  ReservationType,
  TelemetrySinkType,
  VersionFailureReasonCode,
  VersionStatus,
} from "./enums";

/**
 * @public
 */
export interface GetAgentConfigurationRequest {
  /**
   * UUID of agent to get configuration information for.
   *
   * @public
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentConfigurationResponse {
  /**
   * UUID of agent.
   *
   * @public
   */
  agentId?: string | undefined;

  /**
   * Tasking document for agent.
   *
   * @public
   */
  taskingDocument?: string | undefined;
}

/**
 * Version information for agent components.
 *
 * @public
 */
export interface ComponentVersion {
  /**
   * Component type.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * List of versions.
   *
   * @public
   */
  versions: string[] | undefined;
}

/**
 * Detailed information about the agent.
 *
 * @public
 */
export interface AgentDetails {
  /**
   * Current agent version.
   *
   * @public
   */
  agentVersion: string | undefined;

  /**
   * ID of EC2 instance agent is running on.
   *
   * @public
   */
  instanceId: string | undefined;

  /**
   * Type of EC2 instance agent is running on.
   *
   * @public
   */
  instanceType: string | undefined;

  /**
   * > **Note:** This field should not be used. Use agentCpuCores instead.
   *
   * List of CPU cores reserved for processes other than the agent running on the EC2 instance.
   *
   * @public
   */
  reservedCpuCores?: number[] | undefined;

  /**
   * List of CPU cores reserved for the agent.
   *
   * @public
   */
  agentCpuCores?: number[] | undefined;

  /**
   * List of versions being used by agent components.
   *
   * @public
   */
  componentVersions: ComponentVersion[] | undefined;
}

/**
 * Data for agent discovery.
 *
 * @public
 */
export interface DiscoveryData {
  /**
   * List of public IP addresses to associate with agent.
   *
   * @public
   */
  publicIpAddresses: string[] | undefined;

  /**
   * List of private IP addresses to associate with agent.
   *
   * @public
   */
  privateIpAddresses: string[] | undefined;

  /**
   * List of capabilities to associate with agent.
   *
   * @public
   */
  capabilityArns: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterAgentRequest {
  /**
   * Data for associating an agent with the capabilities it is managing.
   *
   * @public
   */
  discoveryData: DiscoveryData | undefined;

  /**
   * Detailed information about the agent being registered.
   *
   * @public
   */
  agentDetails: AgentDetails | undefined;

  /**
   * Tags assigned to an `Agent`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface RegisterAgentResponse {
  /**
   * UUID of registered agent.
   *
   * @public
   */
  agentId?: string | undefined;
}

/**
 * Aggregate status of Agent components.
 *
 * @public
 */
export interface AggregateStatus {
  /**
   * Aggregate status.
   *
   * @public
   */
  status: AgentStatus | undefined;

  /**
   * Sparse map of failure signatures.
   *
   * @public
   */
  signatureMap?: Record<string, boolean> | undefined;
}

/**
 * Data on the status of agent components.
 *
 * @public
 */
export interface ComponentStatusData {
  /**
   * The Component type.
   *
   * @public
   */
  componentType: string | undefined;

  /**
   * Capability ARN of the component.
   *
   * @public
   */
  capabilityArn: string | undefined;

  /**
   * Component status.
   *
   * @public
   */
  status: AgentStatus | undefined;

  /**
   * Bytes sent by the component.
   *
   * @public
   */
  bytesSent?: number | undefined;

  /**
   * Bytes received by the component.
   *
   * @public
   */
  bytesReceived?: number | undefined;

  /**
   * Packets dropped by component.
   *
   * @public
   */
  packetsDropped?: number | undefined;

  /**
   * Dataflow UUID associated with the component.
   *
   * @public
   */
  dataflowId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * UUID of agent to update.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * GUID of agent task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Aggregate status for agent.
   *
   * @public
   */
  aggregateStatus: AggregateStatus | undefined;

  /**
   * List of component statuses for agent.
   *
   * @public
   */
  componentStatuses: ComponentStatusData[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusResponse {
  /**
   * UUID of updated agent.
   *
   * @public
   */
  agentId: string | undefined;
}

/**
 * Details about an antenna demod decode `Config` used in a contact.
 *
 * @public
 */
export interface AntennaDemodDecodeDetails {
  /**
   * Name of an antenna demod decode output node used in a contact.
   *
   * @public
   */
  outputNode?: string | undefined;
}

/**
 * Object that describes the frequency bandwidth.
 *
 * @public
 */
export interface FrequencyBandwidth {
  /**
   * Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:
   *
   * - For `AntennaDownlinkDemodDecodeconfig`, valid values are between 125 kHz to 650 MHz.
   * - For `AntennaDownlinkconfig`, valid values are between 10 kHz to 54 MHz.
   * - For `AntennaUplinkConfig`, valid values are between 10 kHz to 54 MHz.
   *
   * @public
   */
  value: number | undefined;

  /**
   * Frequency bandwidth units.
   *
   * @public
   */
  units: BandwidthUnits | undefined;
}

/**
 * Object that describes the frequency.
 *
 * @public
 */
export interface Frequency {
  /**
   * Frequency value. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   *
   * @public
   */
  value: number | undefined;

  /**
   * Frequency units.
   *
   * @public
   */
  units: FrequencyUnits | undefined;
}

/**
 * Object that describes a spectral `Config`.
 *
 * @public
 */
export interface SpectrumConfig {
  /**
   * Center frequency of a spectral `Config`. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   *
   * @public
   */
  centerFrequency: Frequency | undefined;

  /**
   * Bandwidth of a spectral `Config`. AWS Ground Station currently has the following bandwidth limitations:
   *
   * - For `AntennaDownlinkDemodDecodeconfig`, valid values are between 125 kHz to 650 MHz.
   * - For `AntennaDownlinkconfig` valid values are between 10 kHz to 54 MHz.
   * - For `AntennaUplinkConfig`, valid values are between 10 kHz to 54 MHz.
   *
   * @public
   */
  bandwidth: FrequencyBandwidth | undefined;

  /**
   * Polarization of a spectral `Config`. Capturing both `"RIGHT_HAND"` and `"LEFT_HAND"` polarization requires two separate configs.
   *
   * @public
   */
  polarization?: Polarization | undefined;
}

/**
 * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
 *
 * @public
 */
export interface AntennaDownlinkConfig {
  /**
   * Object that describes a spectral `Config`.
   *
   * @public
   */
  spectrumConfig: SpectrumConfig | undefined;
}

/**
 * Information about the decode `Config`.
 *
 * @public
 */
export interface DecodeConfig {
  /**
   * Unvalidated JSON of a decode `Config`.
   *
   * @public
   */
  unvalidatedJSON: string | undefined;
}

/**
 * Information about the demodulation `Config`.
 *
 * @public
 */
export interface DemodulationConfig {
  /**
   * Unvalidated JSON of a demodulation `Config`.
   *
   * @public
   */
  unvalidatedJSON: string | undefined;
}

/**
 * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
 *
 * @public
 */
export interface AntennaDownlinkDemodDecodeConfig {
  /**
   * Information about the spectral `Config`.
   *
   * @public
   */
  spectrumConfig: SpectrumConfig | undefined;

  /**
   * Information about the demodulation `Config`.
   *
   * @public
   */
  demodulationConfig: DemodulationConfig | undefined;

  /**
   * Information about the decode `Config`.
   *
   * @public
   */
  decodeConfig: DecodeConfig | undefined;
}

/**
 * An antenna at a ground station.
 *
 * @public
 */
export interface AntennaListItem {
  /**
   * Name of the ground station the antenna is associated with.
   *
   * @public
   */
  groundStationName: string | undefined;

  /**
   * Name of the antenna.
   *
   * @public
   */
  antennaName: string | undefined;

  /**
   * Region of the antenna.
   *
   * @public
   */
  region: string | undefined;
}

/**
 * Information about the uplink spectral `Config`.
 *
 * @public
 */
export interface UplinkSpectrumConfig {
  /**
   * Center frequency of an uplink spectral `Config`. Valid values are between 2025 to 2120 MHz.
   *
   * @public
   */
  centerFrequency: Frequency | undefined;

  /**
   * Polarization of an uplink spectral `Config`. Capturing both `"RIGHT_HAND"` and `"LEFT_HAND"` polarization requires two separate configs.
   *
   * @public
   */
  polarization?: Polarization | undefined;
}

/**
 * Object that represents EIRP.
 *
 * @public
 */
export interface Eirp {
  /**
   * Value of an EIRP. Valid values are between 20.0 to 50.0 dBW.
   *
   * @public
   */
  value: number | undefined;

  /**
   * Units of an EIRP.
   *
   * @public
   */
  units: EirpUnits | undefined;
}

/**
 * Information about the uplink `Config` of an antenna.
 *
 * @public
 */
export interface AntennaUplinkConfig {
  /**
   * Whether or not uplink transmit is disabled.
   *
   * @public
   */
  transmitDisabled?: boolean | undefined;

  /**
   * Information about the uplink spectral `Config`.
   *
   * @public
   */
  spectrumConfig: UplinkSpectrumConfig | undefined;

  /**
   * EIRP of the target.
   *
   * @public
   */
  targetEirp: Eirp | undefined;
}

/**
 * Information about the socket address.
 *
 * @public
 */
export interface SocketAddress {
  /**
   * Name of a socket address.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Port of a socket address.
   *
   * @public
   */
  port: number | undefined;
}

/**
 * Egress address of AgentEndpoint with an optional mtu.
 *
 * @public
 */
export interface ConnectionDetails {
  /**
   * A socket address.
   *
   * @public
   */
  socketAddress: SocketAddress | undefined;

  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   *
   * @public
   */
  mtu?: number | undefined;
}

/**
 * An integer range that has a minimum and maximum value.
 *
 * @public
 */
export interface IntegerRange {
  /**
   * A minimum value.
   *
   * @public
   */
  minimum: number | undefined;

  /**
   * A maximum value.
   *
   * @public
   */
  maximum: number | undefined;
}

/**
 * A socket address with a port range.
 *
 * @public
 */
export interface RangedSocketAddress {
  /**
   * IPv4 socket address.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Port range of a socket address.
   *
   * @public
   */
  portRange: IntegerRange | undefined;
}

/**
 * Ingress address of AgentEndpoint with a port range and an optional mtu.
 *
 * @public
 */
export interface RangedConnectionDetails {
  /**
   * A ranged socket address.
   *
   * @public
   */
  socketAddress: RangedSocketAddress | undefined;

  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   *
   * @public
   */
  mtu?: number | undefined;
}

/**
 * Information about AwsGroundStationAgentEndpoint.
 *
 * @public
 */
export interface AwsGroundStationAgentEndpoint {
  /**
   * Name string associated with AgentEndpoint. Used as a human-readable identifier for AgentEndpoint.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The egress address of AgentEndpoint.
   *
   * @public
   */
  egressAddress: ConnectionDetails | undefined;

  /**
   * The ingress address of AgentEndpoint.
   *
   * @public
   */
  ingressAddress: RangedConnectionDetails | undefined;

  /**
   * The status of AgentEndpoint.
   *
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * The results of the audit.
   *
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * Time-tagged azimuth elevation pointing data.
 *
 * Specifies the antenna pointing direction at a specific time offset from the segment's reference epoch.
 *
 * @public
 */
export interface TimeAzEl {
  /**
   * Time offset in atomic seconds from the segment's reference epoch.
   *
   * All `dt` values within a segment must be in ascending order with no duplicates.
   *
   * `dt` values may be:
   *
   * - negative
   * - expressed as fractions of a second
   * - expressed in scientific notation
   *
   * @public
   */
  dt: number | undefined;

  /**
   * Azimuth angle at the specified time.
   *
   * Valid ranges by unit:
   *
   * - `DEGREE_ANGLE`: -180 to 360 degrees, measured clockwise from true north
   * - `RADIAN`: -π to 2π radians, measured clockwise from true north
   *
   * @public
   */
  az: number | undefined;

  /**
   * Elevation angle at the specified time.
   *
   * Valid ranges by unit:
   *
   * - `DEGREE_ANGLE`: -90 to 90 degrees, where 0 is the horizon, 90 is zenith, and negative values are below the horizon
   * - `RADIAN`: -π/2 to π/2 radians, where 0 is the horizon, π/2 is zenith, and negative values are below the horizon
   *
   * @public
   */
  el: number | undefined;
}

/**
 * Time range specified using ISO 8601 format timestamps.
 *
 * @public
 */
export interface ISO8601TimeRange {
  /**
   * Start time in ISO 8601 format in Coordinated Universal Time (UTC).
   *
   * Example: `2026-11-15T10:28:48.000Z`
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time in ISO 8601 format in Coordinated Universal Time (UTC).
   *
   * Example: `2024-01-15T12:00:00.000Z`
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * A time segment containing azimuth elevation pointing data.
 *
 * Each segment defines a continuous time period with pointing angle data points. AWS Ground Station uses 4th order Lagrange interpolation between the provided points, so each segment must contain at least five data points.
 *
 * @public
 */
export interface AzElSegment {
  /**
   * The reference time for this segment in ISO 8601 format in Coordinated Universal Time (UTC).
   *
   * All time values within the segment's AzElSegment$azElList are specified as offsets in atomic seconds from this reference epoch.
   *
   * Example: `2024-01-15T12:00:00.000Z`
   *
   * @public
   */
  referenceEpoch: Date | undefined;

  /**
   * The valid time range for this segment.
   *
   * Specifies the start and end timestamps in ISO 8601 format in Coordinated Universal Time (UTC). The segment's pointing data must cover this entire time range.
   *
   * @public
   */
  validTimeRange: ISO8601TimeRange | undefined;

  /**
   * List of time-tagged azimuth elevation data points.
   *
   * Must contain at least five points to support 4th order Lagrange interpolation. Points must be in chronological order with no duplicates.
   *
   * @public
   */
  azElList: TimeAzEl[] | undefined;
}

/**
 * Azimuth elevation segment collection.
 *
 * Contains five or more time-ordered segments that define antenna pointing angles over the ephemeris validity period.
 *
 * @public
 */
export interface AzElSegments {
  /**
   * The unit of measure for azimuth and elevation angles. All angles in all segments must use the same unit.
   *
   * @public
   */
  angleUnit: AngleUnits | undefined;

  /**
   * List of azimuth elevation segments.
   *
   * Must contain between 1 and 100 segments. Segments must be in chronological order with no overlaps.
   *
   * @public
   */
  azElSegmentList: AzElSegment[] | undefined;
}

/**
 * Object stored in Amazon S3 containing ephemeris data.
 *
 * @public
 */
export interface S3Object {
  /**
   * An Amazon S3 Bucket name.
   *
   * @public
   */
  bucket?: string | undefined;

  /**
   * An Amazon S3 key for the ephemeris.
   *
   * @public
   */
  key?: string | undefined;

  /**
   * For versioned Amazon S3 objects, the version to use for the ephemeris.
   *
   * @public
   */
  version?: string | undefined;
}

/**
 * Container for azimuth elevation segment data.
 *
 * Specify either AzElSegmentsData$s3Object to reference data in Amazon S3, or AzElSegmentsData$azElData to provide data inline.
 *
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
   * The Amazon S3 object containing azimuth elevation segment data.
   *
   * The Amazon S3 object must contain JSON-formatted azimuth elevation data matching the AzElSegments structure.
   *
   * @public
   */
  export interface S3ObjectMember {
    s3Object: S3Object;
    azElData?: never;
    $unknown?: never;
  }

  /**
   * Azimuth elevation segment data provided directly in the request.
   *
   * Use this option for smaller datasets or when Amazon S3 access is not available.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    s3Object: (value: S3Object) => T;
    azElData: (value: AzElSegments) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Azimuth elevation ephemeris data.
 *
 * Use this ephemeris type to provide pointing angles directly, rather than satellite orbital elements. Use this when you need precise antenna pointing but have imprecise or unknown satellite trajectory information.
 *
 * The azimuth elevation data specifies the antenna pointing direction at specific times relative to a ground station location. AWS Ground Station uses 4th order Lagrange interpolation to compute pointing angles between the provided data points.
 *
 * AWS Ground Station automatically filters interpolated pointing angles, including only those that are above the site mask elevation of the specified ground station.
 *
 * For more detail about providing azimuth elevation ephemerides to AWS Ground Station, see the [azimuth elevation ephemeris section](https://docs.aws.amazon.com/ground-station/latest/ug/providing-azimuth-elevation-ephemeris-data.html) of the AWS Ground Station User Guide.
 *
 * @public
 */
export interface AzElEphemeris {
  /**
   * The ground station name for which you're providing azimuth elevation data.
   *
   * This ephemeris is specific to this ground station and can't be used at other locations.
   *
   * @public
   */
  groundStation: string | undefined;

  /**
   * Azimuth elevation segment data.
   *
   * You can provide data inline in the request or through an Amazon S3 object reference.
   *
   * @public
   */
  data: AzElSegmentsData | undefined;
}

/**
 * Filter for selecting contacts that use a specific AzElEphemeris.
 *
 * @public
 */
export interface AzElEphemerisFilter {
  /**
   * Unique identifier of the azimuth elevation ephemeris.
   *
   * @public
   */
  id: string | undefined;
}

/**
 * Program track settings for AzElEphemeris.
 *
 * @public
 */
export interface AzElProgramTrackSettings {
  /**
   * Unique identifier of the azimuth elevation ephemeris.
   *
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * Input for the `CancelContact` operation.
 *
 * @public
 */
export interface CancelContactRequest {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId: string | undefined;
}

/**
 * Response containing the ID of a contact.
 *
 * @public
 */
export interface ContactIdResponse {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * Version ID of a contact.
   *
   * @public
   */
  versionId?: number | undefined;
}

/**
 * Response containing the ARN, ID, and type of a `Config`.
 *
 * @public
 */
export interface ConfigIdResponse {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * ARN of a `Config`.
   *
   * @public
   */
  configArn?: string | undefined;
}

/**
 * Information about the dataflow endpoint `Config`.
 *
 * @public
 */
export interface DataflowEndpointConfig {
  /**
   * Name of a dataflow endpoint.
   *
   * @public
   */
  dataflowEndpointName: string | undefined;

  /**
   * Region of a dataflow endpoint.
   *
   * @public
   */
  dataflowEndpointRegion?: string | undefined;
}

/**
 * Information about an S3 recording `Config`.
 *
 * @public
 */
export interface S3RecordingConfig {
  /**
   * ARN of the bucket to record to.
   *
   * @public
   */
  bucketArn: string | undefined;

  /**
   * ARN of the role Ground Station assumes to write data to the bucket.
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * S3 Key prefix to prefice data files.
   *
   * @public
   */
  prefix?: string | undefined;
}

/**
 * Information for telemetry delivery to Kinesis Data Streams.
 *
 * @public
 */
export interface KinesisDataStreamData {
  /**
   * ARN of the IAM Role used by AWS Ground Station to deliver telemetry.
   *
   * @public
   */
  kinesisRoleArn: string | undefined;

  /**
   * ARN of the Kinesis Data Stream to deliver telemetry to.
   *
   * @public
   */
  kinesisDataStreamArn: string | undefined;
}

/**
 * Information about a telemetry sink.
 *
 * @public
 */
export type TelemetrySinkData =
  | TelemetrySinkData.KinesisDataStreamDataMember
  | TelemetrySinkData.$UnknownMember;

/**
 * @public
 */
export namespace TelemetrySinkData {
  /**
   * Information about a telemetry sink of type `KINESIS_DATA_STREAM`.
   *
   * @public
   */
  export interface KinesisDataStreamDataMember {
    kinesisDataStreamData: KinesisDataStreamData;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    kinesisDataStreamData?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kinesisDataStreamData: (value: KinesisDataStreamData) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Information about a telemetry sink `Config`.
 *
 * @public
 */
export interface TelemetrySinkConfig {
  /**
   * The type of telemetry sink.
   *
   * @public
   */
  telemetrySinkType: TelemetrySinkType | undefined;

  /**
   * Information about the telemetry sink specified by the `telemetrySinkType`.
   *
   * @public
   */
  telemetrySinkData: TelemetrySinkData | undefined;
}

/**
 * Object that determines whether tracking should be used during a contact executed with this `Config` in the mission profile.
 *
 * @public
 */
export interface TrackingConfig {
  /**
   * Current setting for autotrack.
   *
   * @public
   */
  autotrack: Criticality | undefined;
}

/**
 * Information about an uplink echo `Config`.
 *
 * Parameters from the `AntennaUplinkConfig`, corresponding to the specified `AntennaUplinkConfigArn`, are used when this `UplinkEchoConfig` is used in a contact.
 *
 * @public
 */
export interface UplinkEchoConfig {
  /**
   * Whether or not an uplink `Config` is enabled.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * ARN of an uplink `Config`.
   *
   * @public
   */
  antennaUplinkConfigArn: string | undefined;
}

/**
 * Object containing the parameters of a `Config`.
 *
 * See the subtype definitions for what each type of `Config` contains.
 *
 * @public
 */
export type ConfigTypeData =
  | ConfigTypeData.AntennaDownlinkConfigMember
  | ConfigTypeData.AntennaDownlinkDemodDecodeConfigMember
  | ConfigTypeData.AntennaUplinkConfigMember
  | ConfigTypeData.DataflowEndpointConfigMember
  | ConfigTypeData.S3RecordingConfigMember
  | ConfigTypeData.TelemetrySinkConfigMember
  | ConfigTypeData.TrackingConfigMember
  | ConfigTypeData.UplinkEchoConfigMember
  | ConfigTypeData.$UnknownMember;

/**
 * @public
 */
export namespace ConfigTypeData {
  /**
   * Information about how AWS Ground Station should configure an antenna for downlink during a contact.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Object that determines whether tracking should be used during a contact executed with this `Config` in the mission profile.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about the dataflow endpoint `Config`.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about an uplink echo `Config`.
   *
   * Parameters from the `AntennaUplinkConfig`, corresponding to the specified `AntennaUplinkConfigArn`, are used when this `UplinkEchoConfig` is used in a contact.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about an S3 recording `Config`.
   *
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
    telemetrySinkConfig?: never;
    $unknown?: never;
  }

  /**
   * Information about a telemetry sink `Config`.
   *
   * @public
   */
  export interface TelemetrySinkConfigMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    s3RecordingConfig?: never;
    telemetrySinkConfig: TelemetrySinkConfig;
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
    telemetrySinkConfig?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    antennaDownlinkConfig: (value: AntennaDownlinkConfig) => T;
    trackingConfig: (value: TrackingConfig) => T;
    dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
    antennaDownlinkDemodDecodeConfig: (value: AntennaDownlinkDemodDecodeConfig) => T;
    antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
    uplinkEchoConfig: (value: UplinkEchoConfig) => T;
    s3RecordingConfig: (value: S3RecordingConfig) => T;
    telemetrySinkConfig: (value: TelemetrySinkConfig) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for the `CreateConfig` operation.
 *
 * @public
 */
export interface CreateConfigRequest {
  /**
   * Name of a `Config`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Parameters of a `Config`.
   *
   * @public
   */
  configData: ConfigTypeData | undefined;

  /**
   * Tags assigned to a `Config`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for the `DeleteConfig` operation.
 *
 * @public
 */
export interface DeleteConfigRequest {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType: ConfigCapabilityType | undefined;
}

/**
 * Input for the `GetConfig` operation.
 *
 * @public
 */
export interface GetConfigRequest {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType: ConfigCapabilityType | undefined;
}

/**
 * Output for the `GetConfig` operation.
 *
 * @public
 */
export interface GetConfigResponse {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId: string | undefined;

  /**
   * ARN of a `Config`
   *
   * @public
   */
  configArn: string | undefined;

  /**
   * Name of a `Config`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * Data elements in a `Config`.
   *
   * @public
   */
  configData: ConfigTypeData | undefined;

  /**
   * Tags assigned to a `Config`.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for the `ListConfigs` operation.
 *
 * @public
 */
export interface ListConfigsRequest {
  /**
   * Maximum number of `Configs` returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListConfigs` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * An item in a list of `Config` objects.
 *
 * @public
 */
export interface ConfigListItem {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * ARN of a `Config`.
   *
   * @public
   */
  configArn?: string | undefined;

  /**
   * Name of a `Config`.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Output for the `ListConfigs` operation.
 *
 * @public
 */
export interface ListConfigsResponse {
  /**
   * Next token returned in the response of a previous `ListConfigs` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of `Config` items.
   *
   * @public
   */
  configList?: ConfigListItem[] | undefined;
}

/**
 * Input for the `UpdateConfig` operation.
 *
 * @public
 */
export interface UpdateConfigRequest {
  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId: string | undefined;

  /**
   * Name of a `Config`.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType: ConfigCapabilityType | undefined;

  /**
   * Parameters of a `Config`.
   *
   * @public
   */
  configData: ConfigTypeData | undefined;
}

/**
 * Connection details for Ground Station to Agent and Agent to customer
 *
 * @public
 */
export interface DownlinkConnectionDetails {
  /**
   * Ingress address of AgentEndpoint with a port range and an optional mtu.
   *
   * @public
   */
  agentIpAndPortAddress: RangedConnectionDetails | undefined;

  /**
   * Egress address of AgentEndpoint with an optional mtu.
   *
   * @public
   */
  egressAddressAndPort: ConnectionDetails | undefined;
}

/**
 * Dataflow details for a downlink endpoint
 *
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
   * Downlink connection details for customer to Agent and Agent to Ground Station
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentConnectionDetails: (value: DownlinkConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details for a downlink agent endpoint
 *
 * @public
 */
export interface DownlinkAwsGroundStationAgentEndpointDetails {
  /**
   * Downlink dataflow endpoint name
   *
   * @public
   */
  name: string | undefined;

  /**
   * Dataflow details for the downlink endpoint
   *
   * @public
   */
  dataflowDetails: DownlinkDataflowDetails | undefined;

  /**
   * Status of the agent associated with the downlink dataflow endpoint
   *
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * Health audit results for the downlink dataflow endpoint
   *
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * Information about a dataflow endpoint.
 *
 * @public
 */
export interface DataflowEndpoint {
  /**
   * Name of a dataflow endpoint.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Socket address of a dataflow endpoint.
   *
   * @public
   */
  address?: SocketAddress | undefined;

  /**
   * Status of a dataflow endpoint.
   *
   * @public
   */
  status?: EndpointStatus | undefined;

  /**
   * Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   *
   * @public
   */
  mtu?: number | undefined;
}

/**
 * Information about endpoints.
 *
 * @public
 */
export interface SecurityDetails {
  /**
   * A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.
   *
   * @public
   */
  subnetIds: string[] | undefined;

  /**
   * The security groups to attach to the elastic network interfaces.
   *
   * @public
   */
  securityGroupIds: string[] | undefined;

  /**
   * ARN to a role needed for connecting streams to your instances.
   *
   * @public
   */
  roleArn: string | undefined;
}

/**
 * Connection details for customer to Agent and Agent to Ground Station
 *
 * @public
 */
export interface UplinkConnectionDetails {
  /**
   * Egress address of AgentEndpoint with an optional mtu.
   *
   * @public
   */
  ingressAddressAndPort: ConnectionDetails | undefined;

  /**
   * Ingress address of AgentEndpoint with a port range and an optional mtu.
   *
   * @public
   */
  agentIpAndPortAddress: RangedConnectionDetails | undefined;
}

/**
 * Dataflow details for an uplink endpoint
 *
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
   * Uplink connection details for customer to Agent and Agent to Ground Station
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    agentConnectionDetails: (value: UplinkConnectionDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Details for an uplink agent endpoint
 *
 * @public
 */
export interface UplinkAwsGroundStationAgentEndpointDetails {
  /**
   * Uplink dataflow endpoint name
   *
   * @public
   */
  name: string | undefined;

  /**
   * Dataflow details for the uplink endpoint
   *
   * @public
   */
  dataflowDetails: UplinkDataflowDetails | undefined;

  /**
   * Status of the agent associated with the uplink dataflow endpoint
   *
   * @public
   */
  agentStatus?: AgentStatus | undefined;

  /**
   * Health audit results for the uplink dataflow endpoint
   *
   * @public
   */
  auditResults?: AuditResults | undefined;
}

/**
 * Information about the endpoint details.
 *
 * @public
 */
export interface EndpointDetails {
  /**
   * Endpoint security details including a list of subnets, a list of security groups and a role to connect streams to instances.
   *
   * @public
   */
  securityDetails?: SecurityDetails | undefined;

  /**
   * A dataflow endpoint.
   *
   * @public
   */
  endpoint?: DataflowEndpoint | undefined;

  /**
   * An agent endpoint.
   *
   * @public
   */
  awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint | undefined;

  /**
   * Definition for an uplink agent endpoint
   *
   * @public
   */
  uplinkAwsGroundStationAgentEndpoint?: UplinkAwsGroundStationAgentEndpointDetails | undefined;

  /**
   * Definition for a downlink agent endpoint
   *
   * @public
   */
  downlinkAwsGroundStationAgentEndpoint?: DownlinkAwsGroundStationAgentEndpointDetails | undefined;

  /**
   * A dataflow endpoint health status. This field is ignored when calling `CreateDataflowEndpointGroup`.
   *
   * @public
   */
  healthStatus?: CapabilityHealth | undefined;

  /**
   * Health reasons for a dataflow endpoint. This field is ignored when calling `CreateDataflowEndpointGroup`.
   *
   * @public
   */
  healthReasons?: CapabilityHealthReason[] | undefined;
}

/**
 * Details about an S3 recording `Config` used in a contact.
 *
 * @public
 */
export interface S3RecordingDetails {
  /**
   * ARN of the bucket used.
   *
   * @public
   */
  bucketArn?: string | undefined;

  /**
   * Key template used for the S3 Recording Configuration
   *
   * @public
   */
  keyTemplate?: string | undefined;
}

/**
 * Details for certain `Config` object types in a contact.
 *
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
   * Information about the endpoint details.
   *
   * @public
   */
  export interface EndpointDetailsMember {
    endpointDetails: EndpointDetails;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * Details for antenna demod decode `Config` in a contact.
   *
   * @public
   */
  export interface AntennaDemodDecodeDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * Details for an S3 recording `Config` in a contact.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    endpointDetails: (value: EndpointDetails) => T;
    antennaDemodDecodeDetails: (value: AntennaDemodDecodeDetails) => T;
    s3RecordingDetails: (value: S3RecordingDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for the `DescribeContact` operation.
 *
 * @public
 */
export interface DescribeContactRequest {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId: string | undefined;
}

/**
 * Dataflow details for the destination side.
 *
 * @public
 */
export interface Destination {
  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Additional details for a `Config`, if type is dataflow endpoint or antenna demod decode.
   *
   * @public
   */
  configDetails?: ConfigDetails | undefined;

  /**
   * Region of a dataflow destination.
   *
   * @public
   */
  dataflowDestinationRegion?: string | undefined;
}

/**
 * Dataflow details for the source side.
 *
 * @public
 */
export interface Source {
  /**
   * Type of a `Config`.
   *
   * @public
   */
  configType?: ConfigCapabilityType | undefined;

  /**
   * UUID of a `Config`.
   *
   * @public
   */
  configId?: string | undefined;

  /**
   * Additional details for a `Config`, if type is `dataflow-endpoint` or `antenna-downlink-demod-decode`
   *
   * @public
   */
  configDetails?: ConfigDetails | undefined;

  /**
   * Region of a dataflow source.
   *
   * @public
   */
  dataflowSourceRegion?: string | undefined;
}

/**
 * Information about a dataflow edge used in a contact.
 *
 * @public
 */
export interface DataflowDetail {
  /**
   * Dataflow details for the source side.
   *
   * @public
   */
  source?: Source | undefined;

  /**
   * Dataflow details for the destination side.
   *
   * @public
   */
  destination?: Destination | undefined;

  /**
   * Error message for a dataflow.
   *
   * @public
   */
  errorMessage?: string | undefined;
}

/**
 * Ephemeris data for a contact.
 *
 * @public
 */
export interface EphemerisResponseData {
  /**
   * Unique identifier of the ephemeris. Appears only for custom ephemerides.
   *
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * Type of ephemeris.
   *
   * @public
   */
  ephemerisType: EphemerisType | undefined;
}

/**
 * Elevation angle of the satellite in the sky during a contact.
 *
 * @public
 */
export interface Elevation {
  /**
   * Elevation angle value.
   *
   * @public
   */
  value: number | undefined;

  /**
   * Elevation angle units.
   *
   * @public
   */
  unit: AngleUnits | undefined;
}

/**
 * Program track settings for OEMEphemeris.
 *
 * @public
 */
export interface OemProgramTrackSettings {
  /**
   * Unique identifier of the OEM ephemeris.
   *
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * Program track settings for TLEEphemeris.
 *
 * @public
 */
export interface TleProgramTrackSettings {
  /**
   * Unique identifier of the TLE ephemeris.
   *
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * Program track settings for an antenna during a contact.
 *
 * @public
 */
export type ProgramTrackSettings =
  | ProgramTrackSettings.AzElMember
  | ProgramTrackSettings.OemMember
  | ProgramTrackSettings.TleMember
  | ProgramTrackSettings.$UnknownMember;

/**
 * @public
 */
export namespace ProgramTrackSettings {
  /**
   * Program track settings for AzElEphemeris.
   *
   * @public
   */
  export interface AzElMember {
    azEl: AzElProgramTrackSettings;
    oem?: never;
    tle?: never;
    $unknown?: never;
  }

  /**
   * Program track settings for OEMEphemeris.
   *
   * @public
   */
  export interface OemMember {
    azEl?: never;
    oem: OemProgramTrackSettings;
    tle?: never;
    $unknown?: never;
  }

  /**
   * Program track settings for TLEEphemeris.
   *
   * @public
   */
  export interface TleMember {
    azEl?: never;
    oem?: never;
    tle: TleProgramTrackSettings;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    azEl?: never;
    oem?: never;
    tle?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    azEl: (value: AzElProgramTrackSettings) => T;
    oem: (value: OemProgramTrackSettings) => T;
    tle: (value: TleProgramTrackSettings) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Overrides the default tracking configuration on an antenna during a contact.
 *
 * @public
 */
export interface TrackingOverrides {
  /**
   * Program track settings to override for antenna tracking during the contact.
   *
   * @public
   */
  programTrackSettings?: ProgramTrackSettings | undefined;
}

/**
 * Version information for a contact.
 *
 * @public
 */
export interface ContactVersion {
  /**
   * Version ID of a contact.
   *
   * @public
   */
  versionId?: number | undefined;

  /**
   * Time the contact version was created in UTC.
   *
   * @public
   */
  created?: Date | undefined;

  /**
   * Time the contact version was activated in UTC. A version is activated when it becomes the current active version of the contact.
   *
   * @public
   */
  activated?: Date | undefined;

  /**
   * Time the contact version was superseded in UTC. A version is superseded when a newer version becomes active.
   *
   * @public
   */
  superseded?: Date | undefined;

  /**
   * Time the contact version was last updated in UTC.
   *
   * @public
   */
  lastUpdated?: Date | undefined;

  /**
   * Status of the contact version.
   *
   * @public
   */
  status?: VersionStatus | undefined;

  /**
   * List of failure codes for the contact version.
   *
   * @public
   */
  failureCodes?: VersionFailureReasonCode[] | undefined;

  /**
   * Failure message for the contact version.
   *
   * @public
   */
  failureMessage?: string | undefined;
}

/**
 * Output for the `DescribeContact` operation.
 *
 * @public
 */
export interface DescribeContactResponse {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * Start time of a contact in UTC.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * End time of a contact in UTC.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.
   *
   * @public
   */
  prePassStartTime?: Date | undefined;

  /**
   * End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.
   *
   * @public
   */
  postPassEndTime?: Date | undefined;

  /**
   * Ground station for a contact.
   *
   * @public
   */
  groundStation?: string | undefined;

  /**
   * Status of a contact.
   *
   * @public
   */
  contactStatus?: ContactStatus | undefined;

  /**
   * Error message for a contact.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Maximum elevation angle of a contact.
   *
   * @public
   */
  maximumElevation?: Elevation | undefined;

  /**
   * Tags assigned to a contact.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Region where the `ReserveContact` API was called to schedule this contact.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * List describing source and destination details for each dataflow edge.
   *
   * @public
   */
  dataflowList?: DataflowDetail[] | undefined;

  /**
   * Projected time in UTC your satellite will rise above the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.
   *
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * Projected time in UTC your satellite will set below the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.
   *
   * @public
   */
  visibilityEndTime?: Date | undefined;

  /**
   * Tracking configuration overrides specified when the contact was reserved.
   *
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;

  /**
   * The ephemeris that determines antenna pointing directions for the contact.
   *
   * @public
   */
  ephemeris?: EphemerisResponseData | undefined;

  /**
   * Version information for a contact.
   *
   * @public
   */
  version?: ContactVersion | undefined;
}

/**
 * @public
 */
export interface DescribeContactVersionRequest {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId: string | undefined;

  /**
   * Version ID of a contact.
   *
   * @public
   */
  versionId: number | undefined;
}

/**
 * @public
 */
export interface DescribeContactVersionResponse {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * ARN of the contact's mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * Start time of a contact in UTC.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * End time of a contact in UTC.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.
   *
   * @public
   */
  prePassStartTime?: Date | undefined;

  /**
   * End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.
   *
   * @public
   */
  postPassEndTime?: Date | undefined;

  /**
   * Ground station for a contact.
   *
   * @public
   */
  groundStation?: string | undefined;

  /**
   * Status of a contact.
   *
   * @public
   */
  contactStatus?: ContactStatus | undefined;

  /**
   * Error message for a contact.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Maximum elevation angle of a contact.
   *
   * @public
   */
  maximumElevation?: Elevation | undefined;

  /**
   * Tags assigned to a contact.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Region where the `ReserveContact` API was called to schedule this contact.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * List describing source and destination details for each dataflow edge.
   *
   * @public
   */
  dataflowList?: DataflowDetail[] | undefined;

  /**
   * Projected time in UTC your satellite will rise above the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.
   *
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * Projected time in UTC your satellite will set below the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts.
   *
   * @public
   */
  visibilityEndTime?: Date | undefined;

  /**
   * Tracking configuration overrides applied to this contact version. For the initial version, these are the overrides specified when the contact was reserved. For subsequent versions, these are the overrides associated with that specific version update.
   *
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;

  /**
   * The ephemeris that determines antenna pointing directions for the contact.
   *
   * @public
   */
  ephemeris?: EphemerisResponseData | undefined;

  /**
   * Version information for a contact.
   *
   * @public
   */
  version?: ContactVersion | undefined;
}

/**
 * Filter for selecting contacts that use a specific ephemeris".
 *
 * @public
 */
export type EphemerisFilter =
  | EphemerisFilter.AzElMember
  | EphemerisFilter.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisFilter {
  /**
   * Filter for AzElEphemeris.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    azEl: (value: AzElEphemerisFilter) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for the `ListContacts` operation.
 *
 * @public
 */
export interface ListContactsRequest {
  /**
   * Maximum number of contacts returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListContacts` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * Status of a contact reservation.
   *
   * @public
   */
  statusList: ContactStatus[] | undefined;

  /**
   * Start time of a contact in UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time of a contact in UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Name of a ground station.
   *
   * @public
   */
  groundStation?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * Filter for selecting contacts that use a specific ephemeris".
   *
   * @public
   */
  ephemeris?: EphemerisFilter | undefined;
}

/**
 * Data describing a contact.
 *
 * @public
 */
export interface ContactData {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * Start time of a contact in UTC.
   *
   * @public
   */
  startTime?: Date | undefined;

  /**
   * End time of a contact in UTC.
   *
   * @public
   */
  endTime?: Date | undefined;

  /**
   * Start time in UTC of the pre-pass period, at which you receive a CloudWatch event indicating an upcoming pass.
   *
   * @public
   */
  prePassStartTime?: Date | undefined;

  /**
   * End time in UTC of the post-pass period, at which you receive a CloudWatch event indicating the pass has finished.
   *
   * @public
   */
  postPassEndTime?: Date | undefined;

  /**
   * Name of a ground station.
   *
   * @public
   */
  groundStation?: string | undefined;

  /**
   * Status of a contact.
   *
   * @public
   */
  contactStatus?: ContactStatus | undefined;

  /**
   * Error message of a contact.
   *
   * @public
   */
  errorMessage?: string | undefined;

  /**
   * Maximum elevation angle of a contact.
   *
   * @public
   */
  maximumElevation?: Elevation | undefined;

  /**
   * Region of a contact.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Tags assigned to a contact.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Projected time in UTC your satellite will rise above the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. *This field is not present for contacts with a `SCHEDULING` or `SCHEDULED` status.*
   *
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * Projected time in UTC your satellite will set below the [receive mask](https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html). This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was active during contact execution for completed contacts. *This field is not present for contacts with a `SCHEDULING` or `SCHEDULED` status.*
   *
   * @public
   */
  visibilityEndTime?: Date | undefined;

  /**
   * The ephemeris that determines antenna pointing for the contact.
   *
   * @public
   */
  ephemeris?: EphemerisResponseData | undefined;

  /**
   * Version information for a contact.
   *
   * @public
   */
  version?: ContactVersion | undefined;
}

/**
 * Output for the `ListContacts` operation.
 *
 * @public
 */
export interface ListContactsResponse {
  /**
   * Next token returned in the response of a previous `ListContacts` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of contacts.
   *
   * @public
   */
  contactList?: ContactData[] | undefined;
}

/**
 * @public
 */
export interface ListContactVersionsRequest {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId: string | undefined;

  /**
   * Maximum number of contact versions returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListContactVersions` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListContactVersionsResponse {
  /**
   * Next token to be used in a subsequent `ListContactVersions` call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of contact versions.
   *
   * @public
   */
  contactVersionsList?: ContactVersion[] | undefined;
}

/**
 * Input for the `ReserveContact` operation.
 *
 * @public
 */
export interface ReserveContactRequest {
  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn: string | undefined;

  /**
   * ARN of a satellite
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * Start time of a contact in UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time of a contact in UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Name of a ground station.
   *
   * @public
   */
  groundStation: string | undefined;

  /**
   * Tags assigned to a contact.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Tracking configuration overrides for the contact.
   *
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;
}

/**
 * @public
 */
export interface UpdateContactRequest {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId: string | undefined;

  /**
   * A client token is a unique, case-sensitive string of up to 64 ASCII characters. It is generated by the client to ensure idempotent operations, allowing safe retries without unintended side effects.
   *
   * @public
   */
  clientToken?: string | undefined;

  /**
   * Overrides the default tracking configuration on an antenna during a contact.
   *
   * @public
   */
  trackingOverrides?: TrackingOverrides | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateContactResponse {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;

  /**
   * Version ID of a contact.
   *
   * @public
   */
  versionId?: number | undefined;
}

/**
 * Details of a contact reservation.
 *
 * @public
 */
export interface ContactReservationDetails {
  /**
   * UUID of a contact.
   *
   * @public
   */
  contactId?: string | undefined;
}

/**
 * Input for the `CreateDataflowEndpointGroup` operation.
 *
 * @public
 */
export interface CreateDataflowEndpointGroupRequest {
  /**
   * Endpoint details of each endpoint in the dataflow endpoint group. All dataflow endpoints within a single dataflow endpoint group must be of the same type. You cannot mix [AWS Ground Station Agent endpoints](https://docs.aws.amazon.com/ground-station/latest/APIReference/API_AwsGroundStationAgentEndpoint.html) with [Dataflow endpoints](https://docs.aws.amazon.com/ground-station/latest/APIReference/API_DataflowEndpoint.html) in the same group. If your use case requires both types of endpoints, you must create separate dataflow endpoint groups for each type.
   *
   * @public
   */
  endpointDetails: EndpointDetails[] | undefined;

  /**
   * Tags of a dataflow endpoint group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state. A [Ground Station Dataflow Endpoint Group State Change event](https://docs.aws.amazon.com/ground-station/latest/ug/monitoring.automating-events.html) will be emitted when the Dataflow Endpoint Group enters and exits the `PREPASS` state.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state. A [Ground Station Dataflow Endpoint Group State Change event](https://docs.aws.amazon.com/ground-station/latest/ug/monitoring.automating-events.html) will be emitted when the Dataflow Endpoint Group enters and exits the `POSTPASS` state.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;
}

/**
 * Response containing the ID of a dataflow endpoint group.
 *
 * @public
 */
export interface DataflowEndpointGroupIdResponse {
  /**
   * UUID of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;
}

/**
 * Definition for a downlink agent endpoint
 *
 * @public
 */
export interface DownlinkAwsGroundStationAgentEndpoint {
  /**
   * Downlink dataflow endpoint name
   *
   * @public
   */
  name: string | undefined;

  /**
   * Dataflow details for the downlink endpoint
   *
   * @public
   */
  dataflowDetails: DownlinkDataflowDetails | undefined;
}

/**
 * Definition for an uplink agent endpoint
 *
 * @public
 */
export interface UplinkAwsGroundStationAgentEndpoint {
  /**
   * Uplink dataflow endpoint name
   *
   * @public
   */
  name: string | undefined;

  /**
   * Dataflow details for the uplink endpoint
   *
   * @public
   */
  dataflowDetails: UplinkDataflowDetails | undefined;
}

/**
 * Endpoint definition used for creating a dataflow endpoint
 *
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
   * Definition for an uplink agent endpoint
   *
   * @public
   */
  export interface UplinkAwsGroundStationAgentEndpointMember {
    uplinkAwsGroundStationAgentEndpoint: UplinkAwsGroundStationAgentEndpoint;
    downlinkAwsGroundStationAgentEndpoint?: never;
    $unknown?: never;
  }

  /**
   * Definition for a downlink agent endpoint
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    uplinkAwsGroundStationAgentEndpoint: (value: UplinkAwsGroundStationAgentEndpoint) => T;
    downlinkAwsGroundStationAgentEndpoint: (value: DownlinkAwsGroundStationAgentEndpoint) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateDataflowEndpointGroupV2Request {
  /**
   * Dataflow endpoint group's endpoint definitions
   *
   * @public
   */
  endpoints: CreateEndpointDetails[] | undefined;

  /**
   * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state. A [Ground Station Dataflow Endpoint Group State Change event](https://docs.aws.amazon.com/ground-station/latest/ug/monitoring.automating-events.html) will be emitted when the Dataflow Endpoint Group enters and exits the `PREPASS` state.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state. A [Ground Station Dataflow Endpoint Group State Change event](https://docs.aws.amazon.com/ground-station/latest/ug/monitoring.automating-events.html) will be emitted when the Dataflow Endpoint Group enters and exits the `POSTPASS` state.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * Tags of a V2 dataflow endpoint group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface CreateDataflowEndpointGroupV2Response {
  /**
   * Dataflow endpoint group ID
   *
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;
}

/**
 * Ephemeris data in Orbit Ephemeris Message (OEM) format.
 *
 * AWS Ground Station processes OEM ephemerides according to the [CCSDS standard](https://ccsds.org/Pubs/502x0b3e1.pdf) with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see [OEM ephemeris format](https://docs.aws.amazon.com/ground-station/latest/ug/providing-oem-ephemeris-data.html#oem-ephemeris-format) in the AWS Ground Station user guide.
 *
 * @public
 */
export interface OEMEphemeris {
  /**
   * The Amazon S3 object that contains the ephemeris data.
   *
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * OEM data that you provide directly instead of using an Amazon S3 object.
   *
   * @public
   */
  oemData?: string | undefined;
}

/**
 * A time range with a start and end time.
 *
 * @public
 */
export interface TimeRange {
  /**
   * Unix epoch timestamp in UTC at which the time range starts.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * Unix epoch timestamp in UTC at which the time range ends.
   *
   * @public
   */
  endTime: Date | undefined;
}

/**
 * Two-line element set (TLE) data.
 *
 * @public
 */
export interface TLEData {
  /**
   * First line of two-line element set (TLE) data.
   *
   * @public
   */
  tleLine1: string | undefined;

  /**
   * Second line of two-line element set (TLE) data.
   *
   * @public
   */
  tleLine2: string | undefined;

  /**
   * The valid time range for the TLE. Time ranges must be continuous without gaps or overlaps.
   *
   * @public
   */
  validTimeRange: TimeRange | undefined;
}

/**
 * Two-line element set (TLE) ephemeris.
 *
 * For more detail about providing Two-line element sets to AWS Ground Station, see the [TLE section](https://docs.aws.amazon.com/ground-station/latest/ug/providing-tle-ephemeris-data.html) of the AWS Ground Station user guide.
 *
 * @public
 */
export interface TLEEphemeris {
  /**
   * The Amazon S3 object that contains the ephemeris data.
   *
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * TLE data that you provide directly instead of using an Amazon S3 object.
   *
   * @public
   */
  tleData?: TLEData[] | undefined;
}

/**
 * Ephemeris data.
 *
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
   * Two-line element set (TLE) ephemeris.
   *
   * For more detail about providing Two-line element sets to AWS Ground Station, see the [TLE section](https://docs.aws.amazon.com/ground-station/latest/ug/providing-tle-ephemeris-data.html) of the AWS Ground Station user guide.
   *
   * @public
   */
  export interface TleMember {
    tle: TLEEphemeris;
    oem?: never;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * Ephemeris data in Orbit Ephemeris Message (OEM) format.
   *
   * AWS Ground Station processes OEM ephemerides according to the [CCSDS standard](https://ccsds.org/Pubs/502x0b3e1.pdf) with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see [OEM ephemeris format](https://docs.aws.amazon.com/ground-station/latest/ug/providing-oem-ephemeris-data.html#oem-ephemeris-format) in the AWS Ground Station user guide.
   *
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: OEMEphemeris;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * Azimuth elevation ephemeris data.
   *
   * Use this ephemeris type to provide pointing angles directly, rather than satellite orbital elements. Use this when you need precise antenna pointing but have imprecise or unknown satellite trajectory information.
   *
   * The azimuth elevation data specifies the antenna pointing direction at specific times relative to a ground station location. AWS Ground Station uses 4th order Lagrange interpolation to compute pointing angles between the provided data points.
   *
   * AWS Ground Station automatically filters interpolated pointing angles, including only those that are above the site mask elevation of the specified ground station.
   *
   * For more detail about providing azimuth elevation ephemerides to AWS Ground Station, see the [azimuth elevation ephemeris section](https://docs.aws.amazon.com/ground-station/latest/ug/providing-azimuth-elevation-ephemeris-data.html) of the AWS Ground Station User Guide.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tle: (value: TLEEphemeris) => T;
    oem: (value: OEMEphemeris) => T;
    azEl: (value: AzElEphemeris) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface CreateEphemerisRequest {
  /**
   * The satellite ID that associates this ephemeris with a satellite in AWS Ground Station.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * Set to `true` to enable the ephemeris after validation. Set to `false` to keep it disabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * A priority score that determines which ephemeris to use when multiple ephemerides overlap.
   *
   * Higher numbers take precedence. The default is 1. Must be 1 or greater.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * An overall expiration time for the ephemeris in UTC, after which it will become `EXPIRED`.
   *
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * A name that you can use to identify the ephemeris.
   *
   * @public
   */
  name: string | undefined;

  /**
   * The ARN of the KMS key to use for encrypting the ephemeris.
   *
   * @public
   */
  kmsKeyArn?: string | undefined;

  /**
   * Ephemeris data.
   *
   * @public
   */
  ephemeris?: EphemerisData | undefined;

  /**
   * Tags assigned to an ephemeris.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface EphemerisIdResponse {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId?: string | undefined;
}

/**
 * KMS key info.
 *
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
   * KMS Key Arn.
   *
   * @public
   */
  export interface KmsKeyArnMember {
    kmsKeyArn: string;
    kmsAliasArn?: never;
    kmsAliasName?: never;
    $unknown?: never;
  }

  /**
   * KMS Alias Arn.
   *
   * @public
   */
  export interface KmsAliasArnMember {
    kmsKeyArn?: never;
    kmsAliasArn: string;
    kmsAliasName?: never;
    $unknown?: never;
  }

  /**
   * KMS Alias Name.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    kmsKeyArn: (value: string) => T;
    kmsAliasArn: (value: string) => T;
    kmsAliasName: (value: string) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Input for the `CreateMissionProfile` operation.
 *
 * @public
 */
export interface CreateMissionProfileRequest {
  /**
   * Name of a mission profile.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Amount of time prior to contact start you'd like to receive a Ground Station Contact State Change event indicating an upcoming pass.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time after a contact ends that you'd like to receive a Ground Station Contact State Change event indicating the pass has finished.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * Smallest amount of time in seconds that you'd like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
   *
   * @public
   */
  minimumViableContactDurationSeconds: number | undefined;

  /**
   * A list of lists of ARNs. Each list of ARNs is an edge, with a *from* `Config` and a *to* `Config`.
   *
   * @public
   */
  dataflowEdges: string[][] | undefined;

  /**
   * ARN of a tracking `Config`.
   *
   * @public
   */
  trackingConfigArn: string | undefined;

  /**
   * ARN of a telemetry sink `Config`.
   *
   * @public
   */
  telemetrySinkConfigArn?: string | undefined;

  /**
   * Tags assigned to a mission profile.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * KMS key to use for encrypting streams.
   *
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * Role to use for encrypting streams with KMS key.
   *
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * Response containing the ID of a mission profile.
 *
 * @public
 */
export interface MissionProfileIdResponse {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId?: string | undefined;
}

/**
 * Input for the `DeleteDataflowEndpointGroup` operation.
 *
 * @public
 */
export interface DeleteDataflowEndpointGroupRequest {
  /**
   * UUID of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * Input for the `GetDataflowEndpointGroup` operation.
 *
 * @public
 */
export interface GetDataflowEndpointGroupRequest {
  /**
   * UUID of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * Output for the `GetDataflowEndpointGroup` operation.
 *
 * @public
 */
export interface GetDataflowEndpointGroupResponse {
  /**
   * UUID of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;

  /**
   * ARN of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupArn?: string | undefined;

  /**
   * Details of a dataflow endpoint.
   *
   * @public
   */
  endpointsDetails?: EndpointDetails[] | undefined;

  /**
   * Tags assigned to a dataflow endpoint group.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `PREPASS` state.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `POSTPASS` state.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;
}

/**
 * Input for the `ListDataflowEndpointGroups` operation.
 *
 * @public
 */
export interface ListDataflowEndpointGroupsRequest {
  /**
   * Maximum number of dataflow endpoint groups returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListDataflowEndpointGroups` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Item in a list of `DataflowEndpoint` groups.
 *
 * @public
 */
export interface DataflowEndpointListItem {
  /**
   * UUID of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupId?: string | undefined;

  /**
   * ARN of a dataflow endpoint group.
   *
   * @public
   */
  dataflowEndpointGroupArn?: string | undefined;
}

/**
 * Output for the `ListDataflowEndpointGroups` operation.
 *
 * @public
 */
export interface ListDataflowEndpointGroupsResponse {
  /**
   * Next token returned in the response of a previous `ListDataflowEndpointGroups` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * A list of dataflow endpoint groups.
   *
   * @public
   */
  dataflowEndpointGroupList?: DataflowEndpointListItem[] | undefined;
}

/**
 * @public
 */
export interface DeleteEphemerisRequest {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * Input for the `DeleteMissionProfile` operation.
 *
 * @public
 */
export interface DeleteMissionProfileRequest {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEphemerisRequest {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId: string | undefined;
}

/**
 * Detailed error information for ephemeris validation failures.
 *
 * Provides an error code and descriptive message to help diagnose and resolve validation issues.
 *
 * @public
 */
export interface EphemerisErrorReason {
  /**
   * The error code identifying the type of validation failure.
   *
   * See the [Troubleshooting Invalid Ephemerides guide](https://docs.aws.amazon.com/ground-station/latest/ug/troubleshooting-invalid-ephemerides.html) for error code details.
   *
   * @public
   */
  errorCode: EphemerisErrorCode | undefined;

  /**
   * A human-readable message describing the validation failure.
   *
   * Provides specific details about what failed and may include suggestions for remediation.
   *
   * @public
   */
  errorMessage: string | undefined;
}

/**
 * Description of ephemeris.
 *
 * @public
 */
export interface EphemerisDescription {
  /**
   * Source Amazon S3 object used for the ephemeris.
   *
   * @public
   */
  sourceS3Object?: S3Object | undefined;

  /**
   * Supplied ephemeris data.
   *
   * @public
   */
  ephemerisData?: string | undefined;
}

/**
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
   * Description of ephemeris.
   *
   * @public
   */
  export interface TleMember {
    tle: EphemerisDescription;
    oem?: never;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * Description of ephemeris.
   *
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: EphemerisDescription;
    azEl?: never;
    $unknown?: never;
  }

  /**
   * Description of ephemeris.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    tle: (value: EphemerisDescription) => T;
    oem: (value: EphemerisDescription) => T;
    azEl: (value: EphemerisDescription) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface DescribeEphemerisResponse {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * The AWS Ground Station satellite ID associated with ephemeris.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * The status of the ephemeris.
   *
   * @public
   */
  status?: EphemerisStatus | undefined;

  /**
   * A priority score that determines which ephemeris to use when multiple ephemerides overlap.
   *
   * Higher numbers take precedence. The default is 1. Must be 1 or greater.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * The time the ephemeris was uploaded in UTC.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * Whether or not the ephemeris is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * A name that you can use to identify the ephemeris.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Tags assigned to an ephemeris.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Supplied ephemeris data.
   *
   * @public
   */
  suppliedData?: EphemerisTypeDescription | undefined;

  /**
   * Reason that an ephemeris failed validation. Appears only when the status is `INVALID`.
   *
   * @public
   */
  invalidReason?: EphemerisInvalidReason | undefined;

  /**
   * Detailed error information for ephemerides with `INVALID` status.
   *
   * Provides specific error codes and messages to help diagnose validation failures.
   *
   * @public
   */
  errorReasons?: EphemerisErrorReason[] | undefined;
}

/**
 * Ephemeris item.
 *
 * @public
 */
export interface EphemerisItem {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * The type of ephemeris.
   *
   * @public
   */
  ephemerisType?: EphemerisType | undefined;

  /**
   * The status of the ephemeris.
   *
   * @public
   */
  status?: EphemerisStatus | undefined;

  /**
   * A priority score that determines which ephemeris to use when multiple ephemerides overlap.
   *
   * Higher numbers take precedence. The default is 1. Must be 1 or greater.
   *
   * @public
   */
  priority?: number | undefined;

  /**
   * Whether or not the ephemeris is enabled.
   *
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * The time the ephemeris was uploaded in UTC.
   *
   * @public
   */
  creationTime?: Date | undefined;

  /**
   * A name that you can use to identify the ephemeris.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Source Amazon S3 object used for the ephemeris.
   *
   * @public
   */
  sourceS3Object?: S3Object | undefined;
}

/**
 * @public
 */
export interface ListEphemeridesRequest {
  /**
   * The AWS Ground Station satellite ID to list ephemeris for.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * Filter ephemerides by type. If not specified, all ephemeris types will be returned.
   *
   * @public
   */
  ephemerisType?: EphemerisType | undefined;

  /**
   * The start time for the list operation in UTC. Returns ephemerides with expiration times within your specified time range.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * The end time for the list operation in UTC. Returns ephemerides with expiration times within your specified time range.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * The list of ephemeris status to return.
   *
   * @public
   */
  statusList?: EphemerisStatus[] | undefined;

  /**
   * Maximum number of ephemerides to return.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListEphemeridesResponse {
  /**
   * Pagination token.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of ephemerides.
   *
   * @public
   */
  ephemerides?: EphemerisItem[] | undefined;
}

/**
 * @public
 */
export interface UpdateEphemerisRequest {
  /**
   * The AWS Ground Station ephemeris ID.
   *
   * @public
   */
  ephemerisId: string | undefined;

  /**
   * Enable or disable the ephemeris. Changing this value doesn't require re-validation.
   *
   * @public
   */
  enabled: boolean | undefined;

  /**
   * A name that you can use to identify the ephemeris.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * A priority score that determines which ephemeris to use when multiple ephemerides overlap.
   *
   * Higher numbers take precedence. The default is 1. Must be 1 or greater.
   *
   * @public
   */
  priority?: number | undefined;
}

/**
 * Metadata describing a particular ephemeris.
 *
 * @public
 */
export interface EphemerisMetaData {
  /**
   * The `EphemerisSource` that generated a given ephemeris.
   *
   * @public
   */
  source: EphemerisSource | undefined;

  /**
   * UUID of a customer-provided ephemeris.
   *
   * This field is not populated for default ephemerides from Space Track.
   *
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * The epoch of a default, ephemeris from Space Track in UTC.
   *
   * This field is not populated for customer-provided ephemerides.
   *
   * @public
   */
  epoch?: Date | undefined;

  /**
   * A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.
   *
   * A name is only returned for customer-provider ephemerides that have a name associated.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface GetAgentTaskResponseUrlRequest {
  /**
   * UUID of agent requesting the response URL.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * GUID of the agent task for which the response URL is being requested.
   *
   * @public
   */
  taskId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentTaskResponseUrlResponse {
  /**
   * UUID of the agent.
   *
   * @public
   */
  agentId: string | undefined;

  /**
   * GUID of the agent task.
   *
   * @public
   */
  taskId: string | undefined;

  /**
   * Presigned URL for uploading agent task response logs.
   *
   * @public
   */
  presignedLogUrl: string | undefined;
}

/**
 * Input for the `GetMinuteUsage` operation.
 *
 * @public
 */
export interface GetMinuteUsageRequest {
  /**
   * The month being requested, with a value of 1-12.
   *
   * @public
   */
  month: number | undefined;

  /**
   * The year being requested, in the format of YYYY.
   *
   * @public
   */
  year: number | undefined;
}

/**
 * Output for the `GetMinuteUsage` operation.
 *
 * @public
 */
export interface GetMinuteUsageResponse {
  /**
   * Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.
   *
   * @public
   */
  isReservedMinutesCustomer?: boolean | undefined;

  /**
   * Total number of reserved minutes allocated, specific to the month being requested.
   *
   * @public
   */
  totalReservedMinuteAllocation?: number | undefined;

  /**
   * Upcoming minutes scheduled for an account, specific to the month being requested.
   *
   * @public
   */
  upcomingMinutesScheduled?: number | undefined;

  /**
   * Total scheduled minutes for an account, specific to the month being requested.
   *
   * @public
   */
  totalScheduledMinutes?: number | undefined;

  /**
   * Estimated number of minutes remaining for an account, specific to the month being requested.
   *
   * @public
   */
  estimatedMinutesRemaining?: number | undefined;
}

/**
 * Input for the `GetMissionProfile` operation.
 *
 * @public
 */
export interface GetMissionProfileRequest {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId: string | undefined;
}

/**
 * Output for the `GetMissionProfile` operation.
 *
 * @public
 */
export interface GetMissionProfileResponse {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId?: string | undefined;

  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * Name of a mission profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Region of a mission profile.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Amount of time prior to contact start you'd like to receive a CloudWatch event indicating an upcoming pass.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time after a contact ends that you'd like to receive a CloudWatch event indicating the pass has finished.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * Smallest amount of time in seconds that you'd like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
   *
   * @public
   */
  minimumViableContactDurationSeconds?: number | undefined;

  /**
   * A list of lists of ARNs. Each list of ARNs is an edge, with a *from* `Config` and a *to* `Config`.
   *
   * @public
   */
  dataflowEdges?: string[][] | undefined;

  /**
   * ARN of a tracking `Config`.
   *
   * @public
   */
  trackingConfigArn?: string | undefined;

  /**
   * ARN of a telemetry sink `Config`.
   *
   * @public
   */
  telemetrySinkConfigArn?: string | undefined;

  /**
   * Tags assigned to a mission profile.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * KMS key to use for encrypting streams.
   *
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * Role to use for encrypting streams with KMS key.
   *
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * Input for the `GetSatellite` operation.
 *
 * @public
 */
export interface GetSatelliteRequest {
  /**
   * UUID of a satellite.
   *
   * @public
   */
  satelliteId: string | undefined;
}

/**
 * Output for the `GetSatellite` operation.
 *
 * @public
 */
export interface GetSatelliteResponse {
  /**
   * UUID of a satellite.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * NORAD satellite ID number.
   *
   * @public
   */
  noradSatelliteID?: number | undefined;

  /**
   * A list of ground stations to which the satellite is on-boarded.
   *
   * @public
   */
  groundStations?: string[] | undefined;

  /**
   * The current ephemeris being used to compute the trajectory of the satellite.
   *
   * @public
   */
  currentEphemeris?: EphemerisMetaData | undefined;
}

/**
 * @public
 */
export interface ListAntennasRequest {
  /**
   * ID of a ground station.
   *
   * @public
   */
  groundStationId: string | undefined;

  /**
   * Maximum number of antennas returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListAntennas` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAntennasResponse {
  /**
   * List of antennas.
   *
   * @public
   */
  antennaList: AntennaListItem[] | undefined;

  /**
   * Next token to be used in a subsequent `ListAntennas` call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListGroundStationReservationsRequest {
  /**
   * ID of a ground station.
   *
   * @public
   */
  groundStationId: string | undefined;

  /**
   * Start time of the reservation window in UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time of the reservation window in UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Types of reservations to filter by.
   *
   * @public
   */
  reservationTypes?: ReservationType[] | undefined;

  /**
   * Maximum number of ground station reservations returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListGroundStationReservations` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Details of a maintenance reservation.
 *
 * @public
 */
export interface MaintenanceReservationDetails {
  /**
   * Type of maintenance.
   *
   * @public
   */
  maintenanceType: MaintenanceType | undefined;
}

/**
 * Details of a ground station reservation.
 *
 * @public
 */
export type ReservationDetails =
  | ReservationDetails.ContactMember
  | ReservationDetails.MaintenanceMember
  | ReservationDetails.$UnknownMember;

/**
 * @public
 */
export namespace ReservationDetails {
  /**
   * Details of a maintenance reservation.
   *
   * @public
   */
  export interface MaintenanceMember {
    maintenance: MaintenanceReservationDetails;
    contact?: never;
    $unknown?: never;
  }

  /**
   * Details of a contact reservation.
   *
   * @public
   */
  export interface ContactMember {
    maintenance?: never;
    contact: ContactReservationDetails;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    maintenance?: never;
    contact?: never;
    $unknown: [string, any];
  }

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    maintenance: (value: MaintenanceReservationDetails) => T;
    contact: (value: ContactReservationDetails) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * Item in a list of ground station reservations.
 *
 * @public
 */
export interface GroundStationReservationListItem {
  /**
   * Type of a ground station reservation.
   *
   * @public
   */
  reservationType: ReservationType | undefined;

  /**
   * ID of a ground station.
   *
   * @public
   */
  groundStationId: string | undefined;

  /**
   * Name of an antenna.
   *
   * @public
   */
  antennaName: string | undefined;

  /**
   * Start time of a ground station reservation in UTC.
   *
   * @public
   */
  startTime: Date | undefined;

  /**
   * End time of a ground station reservation in UTC.
   *
   * @public
   */
  endTime: Date | undefined;

  /**
   * Details of a ground station reservation.
   *
   * @public
   */
  reservationDetails: ReservationDetails | undefined;
}

/**
 * @public
 */
export interface ListGroundStationReservationsResponse {
  /**
   * List of ground station reservations.
   *
   * @public
   */
  reservationList: GroundStationReservationListItem[] | undefined;

  /**
   * Next token to be used in a subsequent `ListGroundStationReservations` call to retrieve the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Input for the `ListGroundStations` operation.
 *
 * @public
 */
export interface ListGroundStationsRequest {
  /**
   * Satellite ID to retrieve on-boarded ground stations.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * Maximum number of ground stations returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token that can be supplied in the next call to get the next page of ground stations.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Information about the ground station data.
 *
 * @public
 */
export interface GroundStationData {
  /**
   * ID of a ground station.
   *
   * @public
   */
  groundStationId?: string | undefined;

  /**
   * Name of a ground station.
   *
   * @public
   */
  groundStationName?: string | undefined;

  /**
   * Ground station Region.
   *
   * @public
   */
  region?: string | undefined;
}

/**
 * Output for the `ListGroundStations` operation.
 *
 * @public
 */
export interface ListGroundStationsResponse {
  /**
   * Next token that can be supplied in the next call to get the next page of ground stations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of ground stations.
   *
   * @public
   */
  groundStationList?: GroundStationData[] | undefined;
}

/**
 * Input for the `ListTagsForResource` operation.
 *
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * ARN of a resource.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * Output for the `ListTagsForResource` operation.
 *
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Tags assigned to a resource.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * Input for the `ListMissionProfiles` operation.
 *
 * @public
 */
export interface ListMissionProfilesRequest {
  /**
   * Maximum number of mission profiles returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token returned in the request of a previous `ListMissionProfiles` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Item in a list of mission profiles.
 *
 * @public
 */
export interface MissionProfileListItem {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId?: string | undefined;

  /**
   * ARN of a mission profile.
   *
   * @public
   */
  missionProfileArn?: string | undefined;

  /**
   * Region of a mission profile.
   *
   * @public
   */
  region?: string | undefined;

  /**
   * Name of a mission profile.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * Output for the `ListMissionProfiles` operation.
 *
 * @public
 */
export interface ListMissionProfilesResponse {
  /**
   * Next token returned in the response of a previous `ListMissionProfiles` call. Used to get the next page of results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of mission profiles.
   *
   * @public
   */
  missionProfileList?: MissionProfileListItem[] | undefined;
}

/**
 * Input for the `UpdateMissionProfile` operation.
 *
 * @public
 */
export interface UpdateMissionProfileRequest {
  /**
   * UUID of a mission profile.
   *
   * @public
   */
  missionProfileId: string | undefined;

  /**
   * Name of a mission profile.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * Amount of time after a contact ends that you'd like to receive a Ground Station Contact State Change event indicating the pass has finished.
   *
   * @public
   */
  contactPrePassDurationSeconds?: number | undefined;

  /**
   * Amount of time after a contact ends that you'd like to receive a Ground Station Contact State Change event indicating the pass has finished.
   *
   * @public
   */
  contactPostPassDurationSeconds?: number | undefined;

  /**
   * Smallest amount of time in seconds that you'd like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.
   *
   * @public
   */
  minimumViableContactDurationSeconds?: number | undefined;

  /**
   * A list of lists of ARNs. Each list of ARNs is an edge, with a *from* `Config` and a *to* `Config`.
   *
   * @public
   */
  dataflowEdges?: string[][] | undefined;

  /**
   * ARN of a tracking `Config`.
   *
   * @public
   */
  trackingConfigArn?: string | undefined;

  /**
   * ARN of a telemetry sink `Config`.
   *
   * @public
   */
  telemetrySinkConfigArn?: string | undefined;

  /**
   * KMS key to use for encrypting streams.
   *
   * @public
   */
  streamsKmsKey?: KmsKey | undefined;

  /**
   * Role to use for encrypting streams with KMS key.
   *
   * @public
   */
  streamsKmsRole?: string | undefined;
}

/**
 * Input for the `ListSatellites` operation.
 *
 * @public
 */
export interface ListSatellitesRequest {
  /**
   * Maximum number of satellites returned.
   *
   * @public
   */
  maxResults?: number | undefined;

  /**
   * Next token that can be supplied in the next call to get the next page of satellites.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * Item in a list of satellites.
 *
 * @public
 */
export interface SatelliteListItem {
  /**
   * UUID of a satellite.
   *
   * @public
   */
  satelliteId?: string | undefined;

  /**
   * ARN of a satellite.
   *
   * @public
   */
  satelliteArn?: string | undefined;

  /**
   * NORAD satellite ID number.
   *
   * @public
   */
  noradSatelliteID?: number | undefined;

  /**
   * A list of ground stations to which the satellite is on-boarded.
   *
   * @public
   */
  groundStations?: string[] | undefined;

  /**
   * The current ephemeris being used to compute the trajectory of the satellite.
   *
   * @public
   */
  currentEphemeris?: EphemerisMetaData | undefined;
}

/**
 * Output for the `ListSatellites` operation.
 *
 * @public
 */
export interface ListSatellitesResponse {
  /**
   * Next token that can be supplied in the next call to get the next page of satellites.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * List of satellites.
   *
   * @public
   */
  satellites?: SatelliteListItem[] | undefined;
}

/**
 * Input for the `TagResource` operation.
 *
 * @public
 */
export interface TagResourceRequest {
  /**
   * ARN of a resource tag.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Tags assigned to a resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * Output for the `TagResource` operation.
 *
 * @public
 */
export interface TagResourceResponse {}

/**
 * Input for the `UntagResource` operation.
 *
 * @public
 */
export interface UntagResourceRequest {
  /**
   * ARN of a resource.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * Keys of a resource tag.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * Output for the `UntagResource` operation.
 *
 * @public
 */
export interface UntagResourceResponse {}
