// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { GroundStationServiceException as __BaseException } from "./GroundStationServiceException";

/**
 * @public
 * <p>Dependency encountered an error.</p>
 */
export class DependencyException extends __BaseException {
  readonly name: "DependencyException" = "DependencyException";
  readonly $fault: "server" = "server";
  /**
   * <p/>
   */
  parameterName?: string;

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
   */
  agentId: string | undefined;
}

/**
 * @public
 */
export interface GetAgentConfigurationResponse {
  /**
   * <p>UUID of agent.</p>
   */
  agentId?: string;

  /**
   * <p>Tasking document for agent.</p>
   */
  taskingDocument?: string;
}

/**
 * @public
 * <p>One or more parameters are not valid.</p>
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  parameterName?: string;

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
 * @public
 * <p>Resource was not found.</p>
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
 * <p>Version information for agent components.</p>
 */
export interface ComponentVersion {
  /**
   * <p>Component type.</p>
   */
  componentType: string | undefined;

  /**
   * <p>List of versions.</p>
   */
  versions: string[] | undefined;
}

/**
 * @public
 * <p>Detailed information about the agent.</p>
 */
export interface AgentDetails {
  /**
   * <p>Current agent version.</p>
   */
  agentVersion: string | undefined;

  /**
   * <p>ID of EC2 instance agent is running on.</p>
   */
  instanceId: string | undefined;

  /**
   * <p>Type of EC2 instance agent is running on.</p>
   */
  instanceType: string | undefined;

  /**
   * <note>
   *             <p>This field should not be used. Use agentCpuCores instead.</p>
   *          </note>
   *          <p>List of CPU cores reserved for processes other than the agent running on the EC2 instance.</p>
   */
  reservedCpuCores?: number[];

  /**
   * <p>List of CPU cores reserved for the agent.</p>
   */
  agentCpuCores?: number[];

  /**
   * <p>List of versions being used by agent components.</p>
   */
  componentVersions: ComponentVersion[] | undefined;
}

/**
 * @public
 * <p>Data for agent discovery.</p>
 */
export interface DiscoveryData {
  /**
   * <p>List of public IP addresses to associate with agent.</p>
   */
  publicIpAddresses: string[] | undefined;

  /**
   * <p>List of private IP addresses to associate with agent.</p>
   */
  privateIpAddresses: string[] | undefined;

  /**
   * <p>List of capabilities to associate with agent.</p>
   */
  capabilityArns: string[] | undefined;
}

/**
 * @public
 */
export interface RegisterAgentRequest {
  /**
   * <p>Data for associating an agent with the capabilities it is managing.</p>
   */
  discoveryData: DiscoveryData | undefined;

  /**
   * <p>Detailed information about the agent being registered.</p>
   */
  agentDetails: AgentDetails | undefined;
}

/**
 * @public
 */
export interface RegisterAgentResponse {
  /**
   * <p>UUID of registered agent.</p>
   */
  agentId?: string;
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
 * @public
 * <p>Aggregate status of Agent components.</p>
 */
export interface AggregateStatus {
  /**
   * <p>Aggregate status.</p>
   */
  status: AgentStatus | string | undefined;

  /**
   * <p>Sparse map of failure signatures.</p>
   */
  signatureMap?: Record<string, boolean>;
}

/**
 * @public
 * <p>Data on the status of agent components.</p>
 */
export interface ComponentStatusData {
  /**
   * <p>The Component type.</p>
   */
  componentType: string | undefined;

  /**
   * <p>Capability ARN of the component.</p>
   */
  capabilityArn: string | undefined;

  /**
   * <p>Component status.</p>
   */
  status: AgentStatus | string | undefined;

  /**
   * <p>Bytes sent by the component.</p>
   */
  bytesSent?: number;

  /**
   * <p>Bytes received by the component.</p>
   */
  bytesReceived?: number;

  /**
   * <p>Packets dropped by component.</p>
   */
  packetsDropped?: number;

  /**
   * <p>Dataflow UUID associated with the component.</p>
   */
  dataflowId: string | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusRequest {
  /**
   * <p>UUID of agent to update.</p>
   */
  agentId: string | undefined;

  /**
   * <p>GUID of agent task.</p>
   */
  taskId: string | undefined;

  /**
   * <p>Aggregate status for agent.</p>
   */
  aggregateStatus: AggregateStatus | undefined;

  /**
   * <p>List of component statuses for agent.</p>
   */
  componentStatuses: ComponentStatusData[] | undefined;
}

/**
 * @public
 */
export interface UpdateAgentStatusResponse {
  /**
   * <p>UUID of updated agent.</p>
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
 * @public
 * <p>Details about an antenna demod decode <code>Config</code> used in a contact.</p>
 */
export interface AntennaDemodDecodeDetails {
  /**
   * <p>Name of an antenna demod decode output node used in a contact.</p>
   */
  outputNode?: string;
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
 * @public
 * <p>Object that describes the frequency bandwidth. </p>
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
   */
  value: number | undefined;

  /**
   * <p>Frequency bandwidth units.</p>
   */
  units: BandwidthUnits | string | undefined;
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
 * @public
 * <p>Object that describes the frequency.</p>
 */
export interface Frequency {
  /**
   * <p>Frequency value. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
   */
  value: number | undefined;

  /**
   * <p>Frequency units.</p>
   */
  units: FrequencyUnits | string | undefined;
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
 * @public
 * <p>Object that describes a spectral <code>Config</code>.</p>
 */
export interface SpectrumConfig {
  /**
   * <p>Center frequency of a spectral <code>Config</code>. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
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
   */
  bandwidth: FrequencyBandwidth | undefined;

  /**
   * <p>Polarization of a spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
   */
  polarization?: Polarization | string;
}

/**
 * @public
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
 */
export interface AntennaDownlinkConfig {
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   */
  spectrumConfig: SpectrumConfig | undefined;
}

/**
 * @public
 * <p>Information about the decode <code>Config</code>.</p>
 */
export interface DecodeConfig {
  /**
   * <p>Unvalidated JSON of a decode <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

/**
 * @public
 * <p>Information about the demodulation <code>Config</code>.</p>
 */
export interface DemodulationConfig {
  /**
   * <p>Unvalidated JSON of a demodulation <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

/**
 * @public
 * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
 */
export interface AntennaDownlinkDemodDecodeConfig {
  /**
   * <p>Information about the spectral <code>Config</code>.</p>
   */
  spectrumConfig: SpectrumConfig | undefined;

  /**
   * <p>Information about the demodulation <code>Config</code>.</p>
   */
  demodulationConfig: DemodulationConfig | undefined;

  /**
   * <p>Information about the decode <code>Config</code>.</p>
   */
  decodeConfig: DecodeConfig | undefined;
}

/**
 * @public
 * <p>Information about the uplink spectral <code>Config</code>.</p>
 */
export interface UplinkSpectrumConfig {
  /**
   * <p>Center frequency of an uplink spectral <code>Config</code>. Valid values are between 2025 to 2120 MHz.</p>
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Polarization of an uplink spectral <code>Config</code>. Capturing both <code>"RIGHT_HAND"</code> and <code>"LEFT_HAND"</code> polarization requires two separate configs.</p>
   */
  polarization?: Polarization | string;
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
 * @public
 * <p>Object that represents EIRP.</p>
 */
export interface Eirp {
  /**
   * <p>Value of an EIRP. Valid values are between 20.0 to 50.0 dBW.</p>
   */
  value: number | undefined;

  /**
   * <p>Units of an EIRP.</p>
   */
  units: EirpUnits | string | undefined;
}

/**
 * @public
 * <p>Information about the uplink <code>Config</code> of an antenna.</p>
 */
export interface AntennaUplinkConfig {
  /**
   * <p>Whether or not uplink transmit is disabled.</p>
   */
  transmitDisabled?: boolean;

  /**
   * <p>Information about the uplink spectral <code>Config</code>.</p>
   */
  spectrumConfig: UplinkSpectrumConfig | undefined;

  /**
   * <p>EIRP of the target.</p>
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
 * @public
 * <p>Information about the socket address.</p>
 */
export interface SocketAddress {
  /**
   * <p>Name of a socket address.</p>
   */
  name: string | undefined;

  /**
   * <p>Port of a socket address.</p>
   */
  port: number | undefined;
}

/**
 * @public
 * <p>Egress address of AgentEndpoint with an optional mtu.</p>
 */
export interface ConnectionDetails {
  /**
   * <p>A socket address.</p>
   */
  socketAddress: SocketAddress | undefined;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   */
  mtu?: number;
}

/**
 * @public
 * <p>An integer range that has a minimum and maximum value.</p>
 */
export interface IntegerRange {
  /**
   * <p>A minimum value.</p>
   */
  minimum: number | undefined;

  /**
   * <p>A maximum value.</p>
   */
  maximum: number | undefined;
}

/**
 * @public
 * <p>A socket address with a port range.</p>
 */
export interface RangedSocketAddress {
  /**
   * <p>IPv4 socket address.</p>
   */
  name: string | undefined;

  /**
   * <p>Port range of a socket address.</p>
   */
  portRange: IntegerRange | undefined;
}

/**
 * @public
 * <p>Ingress address of AgentEndpoint with a port range and an optional mtu.</p>
 */
export interface RangedConnectionDetails {
  /**
   * <p>A ranged socket address.</p>
   */
  socketAddress: RangedSocketAddress | undefined;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   */
  mtu?: number;
}

/**
 * @public
 * <p>Information about AwsGroundStationAgentEndpoint.</p>
 */
export interface AwsGroundStationAgentEndpoint {
  /**
   * <p>Name string associated with AgentEndpoint. Used as a human-readable identifier for AgentEndpoint.</p>
   */
  name: string | undefined;

  /**
   * <p>The egress address of AgentEndpoint.</p>
   */
  egressAddress: ConnectionDetails | undefined;

  /**
   * <p>The ingress address of AgentEndpoint.</p>
   */
  ingressAddress: RangedConnectionDetails | undefined;

  /**
   * <p>The status of AgentEndpoint.</p>
   */
  agentStatus?: AgentStatus | string;

  /**
   * <p>The results of the audit.</p>
   */
  auditResults?: AuditResults | string;
}

/**
 * @public
 * <p/>
 */
export interface CancelContactRequest {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface ContactIdResponse {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;
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
 * @public
 * <p/>
 */
export interface ConfigIdResponse {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;
}

/**
 * @public
 * <p>Information about the dataflow endpoint <code>Config</code>.</p>
 */
export interface DataflowEndpointConfig {
  /**
   * <p>Name of a dataflow endpoint.</p>
   */
  dataflowEndpointName: string | undefined;

  /**
   * <p>Region of a dataflow endpoint.</p>
   */
  dataflowEndpointRegion?: string;
}

/**
 * @public
 * <p>Information about an S3 recording <code>Config</code>.</p>
 */
export interface S3RecordingConfig {
  /**
   * <p>ARN of the bucket to record to.</p>
   */
  bucketArn: string | undefined;

  /**
   * <p>ARN of the role Ground Station assumes to write data to the bucket.</p>
   */
  roleArn: string | undefined;

  /**
   * <p>S3 Key prefix to prefice data files.</p>
   */
  prefix?: string;
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
 * @public
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
 */
export interface TrackingConfig {
  /**
   * <p>Current setting for autotrack.</p>
   */
  autotrack: Criticality | string | undefined;
}

/**
 * @public
 * <p>Information about an uplink echo <code>Config</code>.</p>
 *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the
 *          specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code>
 *          is used in a contact.</p>
 */
export interface UplinkEchoConfig {
  /**
   * <p>Whether or not an uplink <code>Config</code> is enabled.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>ARN of an uplink <code>Config</code>.</p>
   */
  antennaUplinkConfigArn: string | undefined;
}

/**
 * @public
 * <p>Object containing the parameters of a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
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
 * @public
 * <p/>
 */
export interface CreateConfigRequest {
  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Parameters of a <code>Config</code>.</p>
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p>Account limits for this resource have been exceeded.</p>
 */
export class ResourceLimitExceededException extends __BaseException {
  readonly name: "ResourceLimitExceededException" = "ResourceLimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p/>
   */
  parameterName?: string;

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
 * @public
 * <p/>
 */
export interface DeleteConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType: ConfigCapabilityType | string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType: ConfigCapabilityType | string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetConfigResponse {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>ARN of a <code>Config</code>
   *          </p>
   */
  configArn: string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>Data elements in a <code>Config</code>.</p>
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p/>
 */
export interface ListConfigsRequest {
  /**
   * <p>Maximum number of <code>Configs</code> returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the request of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>An item in a list of <code>Config</code> objects.</p>
 */
export interface ConfigListItem {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name?: string;
}

/**
 * @public
 * <p/>
 */
export interface ListConfigsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>List of <code>Config</code> items.</p>
   */
  configList?: ConfigListItem[];
}

/**
 * @public
 * <p/>
 */
export interface UpdateConfigRequest {
  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType: ConfigCapabilityType | string | undefined;

  /**
   * <p>Parameters of a <code>Config</code>.</p>
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
 * @public
 * <p>Information about a dataflow endpoint.</p>
 */
export interface DataflowEndpoint {
  /**
   * <p>Name of a dataflow endpoint.</p>
   */
  name?: string;

  /**
   * <p>Socket address of a dataflow endpoint.</p>
   */
  address?: SocketAddress;

  /**
   * <p>Status of a dataflow endpoint.</p>
   */
  status?: EndpointStatus | string;

  /**
   * <p>Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.</p>
   */
  mtu?: number;
}

/**
 * @public
 * <p>Information about endpoints.</p>
 */
export interface SecurityDetails {
  /**
   * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
   */
  subnetIds: string[] | undefined;

  /**
   * <p>The security groups to attach to the elastic network interfaces.</p>
   */
  securityGroupIds: string[] | undefined;

  /**
   * <p>ARN to a role needed for connecting streams to your instances. </p>
   */
  roleArn: string | undefined;
}

/**
 * @public
 * <p>Information about the endpoint details.</p>
 */
export interface EndpointDetails {
  /**
   * <p>Endpoint security details including a list of subnets, a list of security groups and a role to connect streams to instances.</p>
   */
  securityDetails?: SecurityDetails;

  /**
   * <p>A dataflow endpoint.</p>
   */
  endpoint?: DataflowEndpoint;

  /**
   * <p>An agent endpoint.</p>
   */
  awsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint;

  /**
   * <p>A dataflow endpoint health status. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.</p>
   */
  healthStatus?: CapabilityHealth | string;

  /**
   * <p>Health reasons for a dataflow endpoint. This field is ignored when calling <code>CreateDataflowEndpointGroup</code>.</p>
   */
  healthReasons?: (CapabilityHealthReason | string)[];
}

/**
 * @public
 * <p>Details about an S3 recording <code>Config</code> used in a contact.</p>
 */
export interface S3RecordingDetails {
  /**
   * <p>ARN of the bucket used.</p>
   */
  bucketArn?: string;

  /**
   * <p>Key template used for the S3 Recording Configuration</p>
   */
  keyTemplate?: string;
}

/**
 * @public
 * <p>Details for certain <code>Config</code> object types in a contact.</p>
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
   */
  export interface EndpointDetailsMember {
    endpointDetails: EndpointDetails;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for antenna demod decode <code>Config</code> in a contact.</p>
   */
  export interface AntennaDemodDecodeDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
    s3RecordingDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for an S3 recording <code>Config</code> in a contact.</p>
   */
  export interface S3RecordingDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails?: never;
    s3RecordingDetails: S3RecordingDetails;
    $unknown?: never;
  }

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
 * @public
 * <p/>
 */
export interface DescribeContactRequest {
  /**
   * <p>UUID of a contact.</p>
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
 * @public
 * <p>Dataflow details for the destination side.</p>
 */
export interface Destination {
  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.</p>
   */
  configDetails?: ConfigDetails;

  /**
   * <p>Region of a dataflow destination.</p>
   */
  dataflowDestinationRegion?: string;
}

/**
 * @public
 * <p>Dataflow details for the source side.</p>
 */
export interface Source {
  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Additional details for a <code>Config</code>, if type is <code>dataflow-endpoint</code> or <code>antenna-downlink-demod-decode</code>
   *          </p>
   */
  configDetails?: ConfigDetails;

  /**
   * <p>Region of a dataflow source.</p>
   */
  dataflowSourceRegion?: string;
}

/**
 * @public
 * <p>Information about a dataflow edge used in a contact.</p>
 */
export interface DataflowDetail {
  /**
   * <p>Dataflow details for the source side.</p>
   */
  source?: Source;

  /**
   * <p>Dataflow details for the destination side.</p>
   */
  destination?: Destination;

  /**
   * <p>Error message for a dataflow.</p>
   */
  errorMessage?: string;
}

/**
 * @public
 * <p>Elevation angle of the satellite in the sky during a contact.</p>
 */
export interface Elevation {
  /**
   * <p>Elevation angle value.</p>
   */
  value: number | undefined;

  /**
   * <p>Elevation angle units.</p>
   */
  unit: AngleUnits | string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface DescribeContactResponse {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact in UTC.</p>
   */
  startTime?: Date;

  /**
   * <p>End time of a contact in UTC.</p>
   */
  endTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Ground station for a contact.</p>
   */
  groundStation?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?: ContactStatus | string;

  /**
   * <p>Error message for a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: Elevation;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Region of a contact.</p>
   */
  region?: string;

  /**
   * <p>List describing source and destination details for each dataflow edge.</p>
   */
  dataflowList?: DataflowDetail[];
}

/**
 * @public
 * <p/>
 */
export interface ListContactsRequest {
  /**
   * <p>Maximum number of contacts returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>Status of a contact reservation.</p>
   */
  statusList: (ContactStatus | string)[] | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;
}

/**
 * @public
 * <p>Data describing a contact.</p>
 */
export interface ContactData {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact in UTC.</p>
   */
  startTime?: Date;

  /**
   * <p>End time of a contact in UTC.</p>
   */
  endTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?: ContactStatus | string;

  /**
   * <p>Error message of a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: Elevation;

  /**
   * <p>Region of a contact.</p>
   */
  region?: string;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p/>
 */
export interface ListContactsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>List of contacts.</p>
   */
  contactList?: ContactData[];
}

/**
 * @public
 * <p/>
 */
export interface ReserveContactRequest {
  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn: string | undefined;

  /**
   * <p>ARN of a satellite</p>
   */
  satelliteArn: string | undefined;

  /**
   * <p>Start time of a contact in UTC.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact in UTC.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation: string | undefined;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p/>
 */
export interface CreateDataflowEndpointGroupRequest {
  /**
   * <p>Endpoint details of each endpoint in the dataflow endpoint group.</p>
   */
  endpointDetails: EndpointDetails[] | undefined;

  /**
   * <p>Tags of a dataflow endpoint group.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.</p>
   */
  contactPostPassDurationSeconds?: number;
}

/**
 * @public
 * <p/>
 */
export interface DataflowEndpointGroupIdResponse {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;
}

/**
 * @public
 * <p>Object stored in S3 containing ephemeris data.</p>
 */
export interface S3Object {
  /**
   * <p>An Amazon S3 Bucket name.</p>
   */
  bucket?: string;

  /**
   * <p>An Amazon S3 key for the ephemeris.</p>
   */
  key?: string;

  /**
   * <p>For versioned S3 objects, the version to use for the ephemeris.</p>
   */
  version?: string;
}

/**
 * @public
 * <p>Ephemeris data in Orbit Ephemeris Message (OEM) format.</p>
 */
export interface OEMEphemeris {
  /**
   * <p>Identifies the S3 object to be used as the ephemeris.</p>
   */
  s3Object?: S3Object;

  /**
   * <p>The data for an OEM ephemeris, supplied directly in the request rather than through an S3 object.</p>
   */
  oemData?: string;
}

/**
 * @public
 * <p>A time range with a start and end time.</p>
 */
export interface TimeRange {
  /**
   * <p>Time in UTC at which the time range starts.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Time in UTC at which the time range ends.</p>
   */
  endTime: Date | undefined;
}

/**
 * @public
 * <p>Two-line element set (TLE) data.</p>
 */
export interface TLEData {
  /**
   * <p>First line of two-line element set (TLE) data.</p>
   */
  tleLine1: string | undefined;

  /**
   * <p>Second line of two-line element set (TLE) data.</p>
   */
  tleLine2: string | undefined;

  /**
   * <p>The valid time range for the TLE. Gaps or overlap are not permitted.</p>
   */
  validTimeRange: TimeRange | undefined;
}

/**
 * @public
 * <p>Two-line element set (TLE) ephemeris.</p>
 */
export interface TLEEphemeris {
  /**
   * <p>Identifies the S3 object to be used as the ephemeris.</p>
   */
  s3Object?: S3Object;

  /**
   * <p>The data for a TLE ephemeris, supplied directly in the request rather than through an S3 object.</p>
   */
  tleData?: TLEData[];
}

/**
 * @public
 * <p>Ephemeris data.</p>
 */
export type EphemerisData = EphemerisData.OemMember | EphemerisData.TleMember | EphemerisData.$UnknownMember;

/**
 * @public
 */
export namespace EphemerisData {
  /**
   * <p>Two-line element set (TLE) ephemeris.</p>
   */
  export interface TleMember {
    tle: TLEEphemeris;
    oem?: never;
    $unknown?: never;
  }

  /**
   * <p>Ephemeris data in Orbit Ephemeris Message (OEM) format.</p>
   */
  export interface OemMember {
    tle?: never;
    oem: OEMEphemeris;
    $unknown?: never;
  }

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
   */
  satelliteId: string | undefined;

  /**
   * <p>Whether to set the ephemeris status to <code>ENABLED</code> after validation.</p>
   *          <p>Setting this to false will set the ephemeris status to <code>DISABLED</code> after validation.</p>
   */
  enabled?: boolean;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
   */
  priority?: number;

  /**
   * <p>An overall expiration time for the ephemeris in UTC, after which it will become <code>EXPIRED</code>.</p>
   */
  expirationTime?: Date;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   */
  name: string | undefined;

  /**
   * <p>The ARN of a KMS key used to encrypt the ephemeris in Ground Station.</p>
   */
  kmsKeyArn?: string;

  /**
   * <p>Ephemeris data.</p>
   */
  ephemeris?: EphemerisData;

  /**
   * <p>Tags assigned to an ephemeris.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 */
export interface EphemerisIdResponse {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   */
  ephemerisId?: string;
}

/**
 * @public
 * <p>AWS Key Management Service (KMS) Key.</p>
 */
export type KmsKey = KmsKey.KmsAliasArnMember | KmsKey.KmsKeyArnMember | KmsKey.$UnknownMember;

/**
 * @public
 */
export namespace KmsKey {
  /**
   * <p>KMS Key Arn.</p>
   */
  export interface KmsKeyArnMember {
    kmsKeyArn: string;
    kmsAliasArn?: never;
    $unknown?: never;
  }

  /**
   * <p>KMS Alias Arn.</p>
   */
  export interface KmsAliasArnMember {
    kmsKeyArn?: never;
    kmsAliasArn: string;
    $unknown?: never;
  }

  export interface $UnknownMember {
    kmsKeyArn?: never;
    kmsAliasArn?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    kmsKeyArn: (value: string) => T;
    kmsAliasArn: (value: string) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: KmsKey, visitor: Visitor<T>): T => {
    if (value.kmsKeyArn !== undefined) return visitor.kmsKeyArn(value.kmsKeyArn);
    if (value.kmsAliasArn !== undefined) return visitor.kmsAliasArn(value.kmsAliasArn);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * <p/>
 */
export interface CreateMissionProfileRequest {
  /**
   * <p>Name of a mission profile.</p>
   */
  name: string | undefined;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds: number | undefined;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
   */
  dataflowEdges: string[][] | undefined;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn: string | undefined;

  /**
   * <p>Tags assigned to a mission profile.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   */
  streamsKmsKey?: KmsKey;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   */
  streamsKmsRole?: string;
}

/**
 * @public
 * <p/>
 */
export interface MissionProfileIdResponse {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId?: string;
}

/**
 * @public
 * <p/>
 */
export interface DeleteDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetDataflowEndpointGroupResponse {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;

  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;

  /**
   * <p>Details of a dataflow endpoint.</p>
   */
  endpointsDetails?: EndpointDetails[];

  /**
   * <p>Tags assigned to a dataflow endpoint group.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a <code>PREPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>PREPASS</code> state.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a <code>POSTPASS</code> state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the <code>POSTPASS</code> state.</p>
   */
  contactPostPassDurationSeconds?: number;
}

/**
 * @public
 * <p/>
 */
export interface ListDataflowEndpointGroupsRequest {
  /**
   * <p>Maximum number of dataflow endpoint groups returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the request of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Item in a list of <code>DataflowEndpoint</code> groups.</p>
 */
export interface DataflowEndpointListItem {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;

  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;
}

/**
 * @public
 * <p/>
 */
export interface ListDataflowEndpointGroupsResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>A list of dataflow endpoint groups.</p>
   */
  dataflowEndpointGroupList?: DataflowEndpointListItem[];
}

/**
 * @public
 */
export interface DeleteEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   */
  ephemerisId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface DeleteMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

/**
 * @public
 */
export interface DescribeEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
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
 * @public
 * <p>Description of ephemeris.</p>
 */
export interface EphemerisDescription {
  /**
   * <p>Source S3 object used for the ephemeris.</p>
   */
  sourceS3Object?: S3Object;

  /**
   * <p>Supplied ephemeris data.</p>
   */
  ephemerisData?: string;
}

/**
 * @public
 * <p/>
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
   */
  export interface TleMember {
    tle: EphemerisDescription;
    oem?: never;
    $unknown?: never;
  }

  /**
   * <p>Description of ephemeris.</p>
   */
  export interface OemMember {
    tle?: never;
    oem: EphemerisDescription;
    $unknown?: never;
  }

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
   */
  ephemerisId?: string;

  /**
   * <p>The AWS Ground Station satellite ID associated with ephemeris.</p>
   */
  satelliteId?: string;

  /**
   * <p>The status of the ephemeris.</p>
   */
  status?: EphemerisStatus | string;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
   */
  priority?: number;

  /**
   * <p>The time the ephemeris was uploaded in UTC.</p>
   */
  creationTime?: Date;

  /**
   * <p>Whether or not the ephemeris is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   */
  name?: string;

  /**
   * <p>Tags assigned to an ephemeris.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>Supplied ephemeris data.</p>
   */
  suppliedData?: EphemerisTypeDescription;

  /**
   * <p>Reason that an ephemeris failed validation. Only provided for ephemerides with <code>INVALID</code> status.</p>
   */
  invalidReason?: EphemerisInvalidReason | string;
}

/**
 * @public
 * <p>Ephemeris item.</p>
 */
export interface EphemerisItem {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   */
  ephemerisId?: string;

  /**
   * <p>The status of the ephemeris.</p>
   */
  status?: EphemerisStatus | string;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
   */
  priority?: number;

  /**
   * <p>Whether or not the ephemeris is enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The time the ephemeris was uploaded in UTC.</p>
   */
  creationTime?: Date;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   */
  name?: string;

  /**
   * <p>Source S3 object used for the ephemeris.</p>
   */
  sourceS3Object?: S3Object;
}

/**
 * @public
 */
export interface ListEphemeridesRequest {
  /**
   * <p>The AWS Ground Station satellite ID to list ephemeris for.</p>
   */
  satelliteId: string | undefined;

  /**
   * <p>The start time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>The end time to list in UTC. The operation will return an ephemeris if its expiration time is within the time range defined by the <code>startTime</code> and <code>endTime</code>.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>The list of ephemeris status to return.</p>
   */
  statusList?: (EphemerisStatus | string)[];

  /**
   * <p>Maximum number of ephemerides to return.</p>
   */
  maxResults?: number;

  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;
}

/**
 * @public
 */
export interface ListEphemeridesResponse {
  /**
   * <p>Pagination token.</p>
   */
  nextToken?: string;

  /**
   * <p>List of ephemerides.</p>
   */
  ephemerides?: EphemerisItem[];
}

/**
 * @public
 */
export interface UpdateEphemerisRequest {
  /**
   * <p>The AWS Ground Station ephemeris ID.</p>
   */
  ephemerisId: string | undefined;

  /**
   * <p>Whether the ephemeris is enabled or not. Changing this value will not require the ephemeris to be re-validated.</p>
   */
  enabled: boolean | undefined;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   */
  name?: string;

  /**
   * <p>Customer-provided priority score to establish the order in which overlapping ephemerides should be used.</p>
   *          <p>The default for customer-provided ephemeris priority is 1, and higher numbers take precedence.</p>
   *          <p>Priority must be 1 or greater</p>
   */
  priority?: number;
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
 * @public
 * <p>Metadata describing a particular ephemeris.</p>
 */
export interface EphemerisMetaData {
  /**
   * <p>The <code>EphemerisSource</code> that generated a given ephemeris.</p>
   */
  source: EphemerisSource | string | undefined;

  /**
   * <p>UUID of a customer-provided ephemeris.</p>
   *          <p>This field is not populated for default ephemerides from Space Track.</p>
   */
  ephemerisId?: string;

  /**
   * <p>The epoch of a default, ephemeris from Space Track in UTC.</p>
   *          <p>This field is not populated for customer-provided ephemerides.</p>
   */
  epoch?: Date;

  /**
   * <p>A name string associated with the ephemeris. Used as a human-readable identifier for the ephemeris.</p>
   *          <p>A name is only returned for customer-provider ephemerides that have a name associated.</p>
   */
  name?: string;
}

/**
 * @public
 * <p/>
 */
export interface GetMinuteUsageRequest {
  /**
   * <p>The month being requested, with a value of 1-12.</p>
   */
  month: number | undefined;

  /**
   * <p>The year being requested, in the format of YYYY.</p>
   */
  year: number | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetMinuteUsageResponse {
  /**
   * <p>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</p>
   */
  isReservedMinutesCustomer?: boolean;

  /**
   * <p>Total number of reserved minutes allocated, specific to the month being requested.</p>
   */
  totalReservedMinuteAllocation?: number;

  /**
   * <p>Upcoming minutes scheduled for an account, specific to the month being requested.</p>
   */
  upcomingMinutesScheduled?: number;

  /**
   * <p>Total scheduled minutes for an account, specific to the month being requested.</p>
   */
  totalScheduledMinutes?: number;

  /**
   * <p>Estimated number of minutes remaining for an account, specific to the month being requested.</p>
   */
  estimatedMinutesRemaining?: number;
}

/**
 * @public
 * <p/>
 */
export interface GetMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetMissionProfileResponse {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
   */
  dataflowEdges?: string[][];

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;

  /**
   * <p>Tags assigned to a mission profile.</p>
   */
  tags?: Record<string, string>;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   */
  streamsKmsKey?: KmsKey;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   */
  streamsKmsRole?: string;
}

/**
 * @public
 * <p/>
 */
export interface GetSatelliteRequest {
  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface GetSatelliteResponse {
  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>A list of ground stations to which the satellite is on-boarded.</p>
   */
  groundStations?: string[];

  /**
   * <p>The current ephemeris being used to compute the trajectory of the satellite.</p>
   */
  currentEphemeris?: EphemerisMetaData;
}

/**
 * @public
 * <p/>
 */
export interface ListGroundStationsRequest {
  /**
   * <p>Satellite ID to retrieve on-boarded ground stations.</p>
   */
  satelliteId?: string;

  /**
   * <p>Maximum number of ground stations returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Information about the ground station data.</p>
 */
export interface GroundStationData {
  /**
   * <p>UUID of a ground station.</p>
   */
  groundStationId?: string;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStationName?: string;

  /**
   * <p>Ground station Region.</p>
   */
  region?: string;
}

/**
 * @public
 * <p/>
 */
export interface ListGroundStationsResponse {
  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   */
  nextToken?: string;

  /**
   * <p>List of ground stations.</p>
   */
  groundStationList?: GroundStationData[];
}

/**
 * @public
 * <p/>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>ARN of a resource.</p>
   */
  resourceArn: string | undefined;
}

/**
 * @public
 * <p/>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags assigned to a resource.</p>
   */
  tags?: Record<string, string>;
}

/**
 * @public
 * <p/>
 */
export interface ListMissionProfilesRequest {
  /**
   * <p>Maximum number of mission profiles returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token returned in the request of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Item in a list of mission profiles.</p>
 */
export interface MissionProfileListItem {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;
}

/**
 * @public
 * <p/>
 */
export interface ListMissionProfilesResponse {
  /**
   * <p>Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>List of mission profiles.</p>
   */
  missionProfileList?: MissionProfileListItem[];
}

/**
 * @public
 * <p/>
 */
export interface UpdateMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a <i>from</i>
   *             <code>Config</code> and a <i>to</i>
   *             <code>Config</code>.</p>
   */
  dataflowEdges?: string[][];

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;

  /**
   * <p>KMS key to use for encrypting streams.</p>
   */
  streamsKmsKey?: KmsKey;

  /**
   * <p>Role to use for encrypting streams with KMS key.</p>
   */
  streamsKmsRole?: string;
}

/**
 * @public
 * <p/>
 */
export interface ListSatellitesRequest {
  /**
   * <p>Maximum number of satellites returned.</p>
   */
  maxResults?: number;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   */
  nextToken?: string;
}

/**
 * @public
 * <p>Item in a list of satellites.</p>
 */
export interface SatelliteListItem {
  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>A list of ground stations to which the satellite is on-boarded.</p>
   */
  groundStations?: string[];

  /**
   * <p>The current ephemeris being used to compute the trajectory of the satellite.</p>
   */
  currentEphemeris?: EphemerisMetaData;
}

/**
 * @public
 * <p/>
 */
export interface ListSatellitesResponse {
  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   */
  nextToken?: string;

  /**
   * <p>List of satellites.</p>
   */
  satellites?: SatelliteListItem[];
}

/**
 * @public
 * <p/>
 */
export interface TagResourceRequest {
  /**
   * <p>ARN of a resource tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags assigned to a resource.</p>
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 * <p/>
 */
export interface TagResourceResponse {}

/**
 * @public
 * <p/>
 */
export interface UntagResourceRequest {
  /**
   * <p>ARN of a resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys of a resource tag.</p>
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 * <p/>
 */
export interface UntagResourceResponse {}
