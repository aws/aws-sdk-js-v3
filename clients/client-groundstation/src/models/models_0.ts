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
   * <note>
   *             <p>This field should not be used. Use agentCpuCores instead.</p>
   *          </note>
   *          <p>List of CPU cores reserved for processes other than the agent running on the EC2 instance.</p>
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
   * <p>Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p>
   *             </li>
   *             <li>
   *                <p>For <code>AntennaDownlinkconfig</code>, valid values are between 10 kHz to 54 MHz.</p>
   *             </li>
   *             <li>
   *                <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p>
   *             </li>
   *          </ul>
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
   * <p>Bandwidth of a spectral <code>Config</code>. AWS Ground Station currently has the following bandwidth limitations:</p>
   *          <ul>
   *             <li>
   *                <p>For <code>AntennaDownlinkDemodDecodeconfig</code>, valid values are between 125 kHz to 650 MHz.</p>
   *             </li>
   *             <li>
   *                <p>For <code>AntennaDownlinkconfig</code> valid values are between 10 kHz to 54 MHz.</p>
   *             </li>
   *             <li>
   *                <p>For <code>AntennaUplinkConfig</code>, valid values are between 10 kHz to 54 MHz.</p>
   *             </li>
   *          </ul>
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
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
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
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
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
 * <p>Information about an uplink echo <code>Config</code>.</p>
 *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the
 *          specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code>
 *          is used in a contact.</p>
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
 * <p>Object containing the parameters of a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
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
   * <p>Information about an uplink echo <code>Config</code>.</p>
   *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
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
   * <p>ARN of a <code>Config</code>
   *          </p>
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
   * <p>Additional details for a <code>Config</code>, if type is <code>dataflow-endpoint</code> or <code>antenna-downlink-demod-decode</code>
   *          </p>
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
   * <p>
   *          Projected time in UTC your satellite will rise above the
   *          <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>.
   *          This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was
   *          active during contact execution for completed contacts.
   *       </p>
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * <p>
   *          Projected time in UTC your satellite will set below the
   *          <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>.
   *          This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was
   *          active during contact execution for completed contacts.
   *       </p>
   * @public
   */
  visibilityEndTime?: Date | undefined;
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
   * <p>
   *          Projected time in UTC your satellite will rise above the
   *          <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>.
   *          This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was
   *          active during contact execution for completed contacts.
   *          <i>This field is not present for contacts with a <code>SCHEDULING</code> or <code>SCHEDULED</code> status.</i>
   *          </p>
   * @public
   */
  visibilityStartTime?: Date | undefined;

  /**
   * <p>
   *          Projected time in UTC your satellite will set below the
   *          <a href="https://docs.aws.amazon.com/ground-station/latest/ug/site-masks.html">receive mask</a>.
   *          This time is based on the satellite's current active ephemeris for future contacts and the ephemeris that was
   *          active during contact execution for completed contacts.
   *          <i>This field is not present for contacts with a <code>SCHEDULING</code> or <code>SCHEDULED</code> status.</i>
   *          </p>
   * @public
   */
  visibilityEndTime?: Date | undefined;
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
  satelliteArn: string | undefined;

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
}

/**
 * <p/>
 * @public
 */
export interface CreateDataflowEndpointGroupRequest {
  /**
   * <p>Endpoint details of each endpoint in the dataflow endpoint group.</p>
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
 * <p>Object stored in S3 containing ephemeris data.</p>
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
   * <p>For versioned S3 objects, the version to use for the ephemeris.</p>
   * @public
   */
  version?: string | undefined;
}

/**
 * <p>
 *             Ephemeris data in Orbit Ephemeris Message (OEM) format.
 *         </p>
 *          <p>
 *             AWS Ground Station processes OEM Customer Provided Ephemerides according to the <a href="https://public.ccsds.org/Pubs/502x0b3e1.pdf">CCSDS standard</a> with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-custom-ephemeris-data.html#oem-ephemeris-format">OEM ephemeris format</a> in the AWS Ground Station user guide.
 *         </p>
 * @public
 */
export interface OEMEphemeris {
  /**
   * <p>Identifies the S3 object to be used as the ephemeris.</p>
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * <p>The data for an OEM ephemeris, supplied directly in the request rather than through an S3 object.</p>
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
   * <p>Time in UTC at which the time range starts.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>Time in UTC at which the time range ends.</p>
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
   * <p>The valid time range for the TLE. Gaps or overlap are not permitted.</p>
   * @public
   */
  validTimeRange: TimeRange | undefined;
}

/**
 * <p>Two-line element set (TLE) ephemeris.</p>
 * @public
 */
export interface TLEEphemeris {
  /**
   * <p>Identifies the S3 object to be used as the ephemeris.</p>
   * @public
   */
  s3Object?: S3Object | undefined;

  /**
   * <p>The data for a TLE ephemeris, supplied directly in the request rather than through an S3 object.</p>
   * @public
   */
  tleData?: TLEData[] | undefined;
}

/**
 * <p>Ephemeris data.</p>
 * @public
 */
export type EphemerisData = EphemerisData.OemMember | EphemerisData.TleMember | EphemerisData.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisData {
  /**
   * <p>Two-line element set (TLE) ephemeris.</p>
   * @public
   */
  export interface TleMember {
    tle: TLEEphemeris;
    oem?: never;
    $unknown?: never;
  }

  /**
   * <p>
   *             Ephemeris data in Orbit Ephemeris Message (OEM) format.
   *         </p>
   *          <p>
   *             AWS Ground Station processes OEM Customer Provided Ephemerides according to the <a href="https://public.ccsds.org/Pubs/502x0b3e1.pdf">CCSDS standard</a> with some extra restrictions. OEM files should be in KVN format. For more detail about the OEM format that AWS Ground Station supports, see <a href="https://docs.aws.amazon.com/ground-station/latest/ug/providing-custom-ephemeris-data.html#oem-ephemeris-format">OEM ephemeris format</a> in the AWS Ground Station user guide.
   *         </p>
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: OEMEphemeris;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tle?: never;
    oem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tle: (value: TLEEphemeris) => T;
    oem: (value: OEMEphemeris) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EphemerisData, visitor: Visitor<T>): T => {
    if (value.tle !== undefined) return visitor.tle(value.tle);
    if (value.oem !== undefined) return visitor.oem(value.oem);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 */
export interface CreateEphemerisRequest {
  /**
   * <p>AWS Ground Station satellite ID for this ephemeris.</p>
   * @public
   */
  satelliteId: string | undefined;

  /**
   * <p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p>
   *          <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>
   * @public
   */
  enabled?: boolean | undefined;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
   * @public
   */
  priority?: number | undefined;

  /**
   * <p>An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.</p>
   * @public
   */
  expirationTime?: Date | undefined;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>The ARN of a KMS key used to encrypt the ephemeris in Ground Station.</p>
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
 * <p>AWS Key Management Service (KMS) Key.</p>
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
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
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
   * <p>Source S3 object used for the ephemeris.</p>
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
    $unknown?: never;
  }

  /**
   * <p>Description of ephemeris.</p>
   * @public
   */
  export interface OemMember {
    tle?: never;
    oem: EphemerisDescription;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    tle?: never;
    oem?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    tle: (value: EphemerisDescription) => T;
    oem: (value: EphemerisDescription) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: EphemerisTypeDescription, visitor: Visitor<T>): T => {
    if (value.tle !== undefined) return visitor.tle(value.tle);
    if (value.oem !== undefined) return visitor.oem(value.oem);
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
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
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
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
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
   * <p>Reason that an ephemeris failed validation. Only provided for ephemerides with <code>INVALID</code> status.</p>
   * @public
   */
  invalidReason?: EphemerisInvalidReason | undefined;
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
   * <p>The status of the ephemeris.</p>
   * @public
   */
  status?: EphemerisStatus | undefined;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
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
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Source S3 object used for the ephemeris.</p>
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
  satelliteId: string | undefined;

  /**
   * <p>The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.</p>
   * @public
   */
  startTime: Date | undefined;

  /**
   * <p>The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.</p>
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
   * <p>Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.</p>
   * @public
   */
  enabled: boolean | undefined;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
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
   * <p>UUID of a customer-provided ephemeris.</p>
   *          <p>This field is not populated for default ephemerides from Space Track.</p>
   * @public
   */
  ephemerisId?: string | undefined;

  /**
   * <p>The epoch of a default, ephemeris from Space Track in UTC.</p>
   *          <p>This field is not populated for customer-provided ephemerides.</p>
   * @public
   */
  epoch?: Date | undefined;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   *          <p>A name is only returned for customer-provider ephemerides that have a name associated.</p>
   * @public
   */
  name?: string | undefined;
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
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
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
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
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
