import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export enum AngleUnits {
  DEGREE_ANGLE = "DEGREE_ANGLE",
  RADIAN = "RADIAN",
}

/**
 * <p>Details about an antenna demod decode <code>Config</code> used in a contact.</p>
 */
export interface AntennaDemodDecodeDetails {
  /**
   * <p>Name of an antenna demod decode output node used in a contact.</p>
   */
  outputNode?: string;
}

export namespace AntennaDemodDecodeDetails {
  export const filterSensitiveLog = (obj: AntennaDemodDecodeDetails): any => ({
    ...obj,
  });
}

export enum BandwidthUnits {
  GHZ = "GHz",
  KHZ = "kHz",
  MHZ = "MHz",
}

/**
 * <p>Object that describes the frequency bandwidth. </p>
 */
export interface FrequencyBandwidth {
  /**
   * <p>Frequency bandwidth value. AWS Ground Station currently has the following bandwidth limitations:</p>
   *             <ul>
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

export namespace FrequencyBandwidth {
  export const filterSensitiveLog = (obj: FrequencyBandwidth): any => ({
    ...obj,
  });
}

export enum FrequencyUnits {
  GHZ = "GHz",
  KHZ = "kHz",
  MHZ = "MHz",
}

/**
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

export namespace Frequency {
  export const filterSensitiveLog = (obj: Frequency): any => ({
    ...obj,
  });
}

export enum Polarization {
  LEFT_HAND = "LEFT_HAND",
  NONE = "NONE",
  RIGHT_HAND = "RIGHT_HAND",
}

/**
 * <p>Object that describes a spectral <code>Config</code>.</p>
 */
export interface SpectrumConfig {
  /**
   * <p>Center frequency of a spectral <code>Config</code>. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.</p>
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Bandwidth of a spectral <code>Config</code>. AWS Ground Station currently has the following bandwidth limitations:</p>
   *             <ul>
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

export namespace SpectrumConfig {
  export const filterSensitiveLog = (obj: SpectrumConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
 */
export interface AntennaDownlinkConfig {
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   */
  spectrumConfig: SpectrumConfig | undefined;
}

export namespace AntennaDownlinkConfig {
  export const filterSensitiveLog = (obj: AntennaDownlinkConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the decode <code>Config</code>.</p>
 */
export interface DecodeConfig {
  /**
   * <p>Unvalidated JSON of a decode <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

export namespace DecodeConfig {
  export const filterSensitiveLog = (obj: DecodeConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the demodulation <code>Config</code>.</p>
 */
export interface DemodulationConfig {
  /**
   * <p>Unvalidated JSON of a demodulation <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

export namespace DemodulationConfig {
  export const filterSensitiveLog = (obj: DemodulationConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace AntennaDownlinkDemodDecodeConfig {
  export const filterSensitiveLog = (obj: AntennaDownlinkDemodDecodeConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace UplinkSpectrumConfig {
  export const filterSensitiveLog = (obj: UplinkSpectrumConfig): any => ({
    ...obj,
  });
}

export enum EirpUnits {
  DBW = "dBW",
}

/**
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

export namespace Eirp {
  export const filterSensitiveLog = (obj: Eirp): any => ({
    ...obj,
  });
}

/**
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

export namespace AntennaUplinkConfig {
  export const filterSensitiveLog = (obj: AntennaUplinkConfig): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface CancelContactRequest {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId: string | undefined;
}

export namespace CancelContactRequest {
  export const filterSensitiveLog = (obj: CancelContactRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface ContactIdResponse {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;
}

export namespace ContactIdResponse {
  export const filterSensitiveLog = (obj: ContactIdResponse): any => ({
    ...obj,
  });
}

/**
 * <p>Dependency encountered an error.</p>
 */
export interface DependencyException extends __SmithyException, $MetadataBearer {
  name: "DependencyException";
  $fault: "server";
  message?: string;
  /**
   * <p/>
   */
  parameterName?: string;
}

export namespace DependencyException {
  export const filterSensitiveLog = (obj: DependencyException): any => ({
    ...obj,
  });
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException extends __SmithyException, $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
  /**
   * <p/>
   */
  parameterName?: string;
}

export namespace InvalidParameterException {
  export const filterSensitiveLog = (obj: InvalidParameterException): any => ({
    ...obj,
  });
}

/**
 * <p>Resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export const filterSensitiveLog = (obj: ResourceNotFoundException): any => ({
    ...obj,
  });
}

export enum ConfigCapabilityType {
  ANTENNA_DOWNLINK = "antenna-downlink",
  ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode",
  ANTENNA_UPLINK = "antenna-uplink",
  DATAFLOW_ENDPOINT = "dataflow-endpoint",
  TRACKING = "tracking",
  UPLINK_ECHO = "uplink-echo",
}

/**
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

export namespace ConfigIdResponse {
  export const filterSensitiveLog = (obj: ConfigIdResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace DataflowEndpointConfig {
  export const filterSensitiveLog = (obj: DataflowEndpointConfig): any => ({
    ...obj,
  });
}

export enum Criticality {
  PREFERRED = "PREFERRED",
  REMOVED = "REMOVED",
  REQUIRED = "REQUIRED",
}

/**
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
 */
export interface TrackingConfig {
  /**
   * <p>Current setting for autotrack.</p>
   */
  autotrack: Criticality | string | undefined;
}

export namespace TrackingConfig {
  export const filterSensitiveLog = (obj: TrackingConfig): any => ({
    ...obj,
  });
}

/**
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

export namespace UplinkEchoConfig {
  export const filterSensitiveLog = (obj: UplinkEchoConfig): any => ({
    ...obj,
  });
}

/**
 * <p>Object containing the parameters of a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export type ConfigTypeData =
  | ConfigTypeData.AntennaDownlinkConfigMember
  | ConfigTypeData.AntennaDownlinkDemodDecodeConfigMember
  | ConfigTypeData.AntennaUplinkConfigMember
  | ConfigTypeData.DataflowEndpointConfigMember
  | ConfigTypeData.TrackingConfigMember
  | ConfigTypeData.UplinkEchoConfigMember
  | ConfigTypeData.$UnknownMember;

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
    $unknown?: never;
  }

  export interface $UnknownMember {
    antennaDownlinkConfig?: never;
    trackingConfig?: never;
    dataflowEndpointConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    uplinkEchoConfig?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    antennaDownlinkConfig: (value: AntennaDownlinkConfig) => T;
    trackingConfig: (value: TrackingConfig) => T;
    dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
    antennaDownlinkDemodDecodeConfig: (value: AntennaDownlinkDemodDecodeConfig) => T;
    antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
    uplinkEchoConfig: (value: UplinkEchoConfig) => T;
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
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: ConfigTypeData): any => {
    if (obj.antennaDownlinkConfig !== undefined)
      return { antennaDownlinkConfig: AntennaDownlinkConfig.filterSensitiveLog(obj.antennaDownlinkConfig) };
    if (obj.trackingConfig !== undefined)
      return { trackingConfig: TrackingConfig.filterSensitiveLog(obj.trackingConfig) };
    if (obj.dataflowEndpointConfig !== undefined)
      return { dataflowEndpointConfig: DataflowEndpointConfig.filterSensitiveLog(obj.dataflowEndpointConfig) };
    if (obj.antennaDownlinkDemodDecodeConfig !== undefined)
      return {
        antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig.filterSensitiveLog(
          obj.antennaDownlinkDemodDecodeConfig
        ),
      };
    if (obj.antennaUplinkConfig !== undefined)
      return { antennaUplinkConfig: AntennaUplinkConfig.filterSensitiveLog(obj.antennaUplinkConfig) };
    if (obj.uplinkEchoConfig !== undefined)
      return { uplinkEchoConfig: UplinkEchoConfig.filterSensitiveLog(obj.uplinkEchoConfig) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
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
  tags?: { [key: string]: string };
}

export namespace CreateConfigRequest {
  export const filterSensitiveLog = (obj: CreateConfigRequest): any => ({
    ...obj,
    ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
  });
}

/**
 * <p>Account limits for this resource have been exceeded.</p>
 */
export interface ResourceLimitExceededException extends __SmithyException, $MetadataBearer {
  name: "ResourceLimitExceededException";
  $fault: "client";
  message?: string;
  /**
   * <p/>
   */
  parameterName?: string;
}

export namespace ResourceLimitExceededException {
  export const filterSensitiveLog = (obj: ResourceLimitExceededException): any => ({
    ...obj,
  });
}

/**
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

export namespace DeleteConfigRequest {
  export const filterSensitiveLog = (obj: DeleteConfigRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GetConfigRequest {
  export const filterSensitiveLog = (obj: GetConfigRequest): any => ({
    ...obj,
  });
}

/**
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
  tags?: { [key: string]: string };
}

export namespace GetConfigResponse {
  export const filterSensitiveLog = (obj: GetConfigResponse): any => ({
    ...obj,
    ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
  });
}

/**
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

export namespace ListConfigsRequest {
  export const filterSensitiveLog = (obj: ListConfigsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace ConfigListItem {
  export const filterSensitiveLog = (obj: ConfigListItem): any => ({
    ...obj,
  });
}

/**
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

export namespace ListConfigsResponse {
  export const filterSensitiveLog = (obj: ListConfigsResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace UpdateConfigRequest {
  export const filterSensitiveLog = (obj: UpdateConfigRequest): any => ({
    ...obj,
    ...(obj.configData && { configData: ConfigTypeData.filterSensitiveLog(obj.configData) }),
  });
}

/**
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

export namespace SocketAddress {
  export const filterSensitiveLog = (obj: SocketAddress): any => ({
    ...obj,
  });
}

export enum EndpointStatus {
  created = "created",
  creating = "creating",
  deleted = "deleted",
  deleting = "deleting",
  failed = "failed",
}

/**
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

export namespace DataflowEndpoint {
  export const filterSensitiveLog = (obj: DataflowEndpoint): any => ({
    ...obj,
  });
}

/**
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

export namespace SecurityDetails {
  export const filterSensitiveLog = (obj: SecurityDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the endpoint details.</p>
 */
export interface EndpointDetails {
  /**
   * <p>Endpoint security details.</p>
   */
  securityDetails?: SecurityDetails;

  /**
   * <p>A dataflow endpoint.</p>
   */
  endpoint?: DataflowEndpoint;
}

export namespace EndpointDetails {
  export const filterSensitiveLog = (obj: EndpointDetails): any => ({
    ...obj,
  });
}

/**
 * <p>Details for certain <code>Config</code> object types in a contact.</p>
 */
export type ConfigDetails =
  | ConfigDetails.AntennaDemodDecodeDetailsMember
  | ConfigDetails.EndpointDetailsMember
  | ConfigDetails.$UnknownMember;

export namespace ConfigDetails {
  /**
   * <p>Information about the endpoint details.</p>
   */
  export interface EndpointDetailsMember {
    endpointDetails: EndpointDetails;
    antennaDemodDecodeDetails?: never;
    $unknown?: never;
  }

  /**
   * <p>Details for antenna demod decode <code>Config</code> in a contact.</p>
   */
  export interface AntennaDemodDecodeDetailsMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails: AntennaDemodDecodeDetails;
    $unknown?: never;
  }

  export interface $UnknownMember {
    endpointDetails?: never;
    antennaDemodDecodeDetails?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    endpointDetails: (value: EndpointDetails) => T;
    antennaDemodDecodeDetails: (value: AntennaDemodDecodeDetails) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: ConfigDetails, visitor: Visitor<T>): T => {
    if (value.endpointDetails !== undefined) return visitor.endpointDetails(value.endpointDetails);
    if (value.antennaDemodDecodeDetails !== undefined)
      return visitor.antennaDemodDecodeDetails(value.antennaDemodDecodeDetails);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  export const filterSensitiveLog = (obj: ConfigDetails): any => {
    if (obj.endpointDetails !== undefined)
      return { endpointDetails: EndpointDetails.filterSensitiveLog(obj.endpointDetails) };
    if (obj.antennaDemodDecodeDetails !== undefined)
      return { antennaDemodDecodeDetails: AntennaDemodDecodeDetails.filterSensitiveLog(obj.antennaDemodDecodeDetails) };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
  };
}

/**
 * <p/>
 */
export interface DescribeContactRequest {
  /**
   * <p>UUID of a contact.</p>
   */
  contactId: string | undefined;
}

export namespace DescribeContactRequest {
  export const filterSensitiveLog = (obj: DescribeContactRequest): any => ({
    ...obj,
  });
}

export enum ContactStatus {
  AVAILABLE = "AVAILABLE",
  AWS_CANCELLED = "AWS_CANCELLED",
  AWS_FAILED = "AWS_FAILED",
  CANCELLED = "CANCELLED",
  CANCELLING = "CANCELLING",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  FAILED_TO_SCHEDULE = "FAILED_TO_SCHEDULE",
  PASS = "PASS",
  POSTPASS = "POSTPASS",
  PREPASS = "PREPASS",
  SCHEDULED = "SCHEDULED",
  SCHEDULING = "SCHEDULING",
}

/**
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

export namespace Destination {
  export const filterSensitiveLog = (obj: Destination): any => ({
    ...obj,
    ...(obj.configDetails && { configDetails: ConfigDetails.filterSensitiveLog(obj.configDetails) }),
  });
}

/**
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
   * <p>Additional details for a <code>Config</code>, if type is dataflow endpoint or antenna demod decode.</p>
   */
  configDetails?: ConfigDetails;

  /**
   * <p>Region of a dataflow source.</p>
   */
  dataflowSourceRegion?: string;
}

export namespace Source {
  export const filterSensitiveLog = (obj: Source): any => ({
    ...obj,
    ...(obj.configDetails && { configDetails: ConfigDetails.filterSensitiveLog(obj.configDetails) }),
  });
}

/**
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

export namespace DataflowDetail {
  export const filterSensitiveLog = (obj: DataflowDetail): any => ({
    ...obj,
    ...(obj.source && { source: Source.filterSensitiveLog(obj.source) }),
    ...(obj.destination && { destination: Destination.filterSensitiveLog(obj.destination) }),
  });
}

/**
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

export namespace Elevation {
  export const filterSensitiveLog = (obj: Elevation): any => ({
    ...obj,
  });
}

/**
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
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>End time of a contact.</p>
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
  tags?: { [key: string]: string };

  /**
   * <p>Region of a contact.</p>
   */
  region?: string;

  /**
   * <p>List describing source and destination details for each dataflow edge.</p>
   */
  dataflowList?: DataflowDetail[];
}

export namespace DescribeContactResponse {
  export const filterSensitiveLog = (obj: DescribeContactResponse): any => ({
    ...obj,
    ...(obj.dataflowList && { dataflowList: obj.dataflowList.map((item) => DataflowDetail.filterSensitiveLog(item)) }),
  });
}

/**
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
   * <p>Start time of a contact.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact.</p>
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

export namespace ListContactsRequest {
  export const filterSensitiveLog = (obj: ListContactsRequest): any => ({
    ...obj,
  });
}

/**
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
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>End time of a contact.</p>
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
  tags?: { [key: string]: string };
}

export namespace ContactData {
  export const filterSensitiveLog = (obj: ContactData): any => ({
    ...obj,
  });
}

/**
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

export namespace ListContactsResponse {
  export const filterSensitiveLog = (obj: ListContactsResponse): any => ({
    ...obj,
  });
}

/**
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
   * <p>Start time of a contact.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>End time of a contact.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation: string | undefined;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ReserveContactRequest {
  export const filterSensitiveLog = (obj: ReserveContactRequest): any => ({
    ...obj,
  });
}

/**
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
  tags?: { [key: string]: string };
}

export namespace CreateDataflowEndpointGroupRequest {
  export const filterSensitiveLog = (obj: CreateDataflowEndpointGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface DataflowEndpointGroupIdResponse {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;
}

export namespace DataflowEndpointGroupIdResponse {
  export const filterSensitiveLog = (obj: DataflowEndpointGroupIdResponse): any => ({
    ...obj,
  });
}

/**
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
  tags?: { [key: string]: string };
}

export namespace CreateMissionProfileRequest {
  export const filterSensitiveLog = (obj: CreateMissionProfileRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface MissionProfileIdResponse {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId?: string;
}

export namespace MissionProfileIdResponse {
  export const filterSensitiveLog = (obj: MissionProfileIdResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface DeleteDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

export namespace DeleteDataflowEndpointGroupRequest {
  export const filterSensitiveLog = (obj: DeleteDataflowEndpointGroupRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface GetDataflowEndpointGroupRequest {
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

export namespace GetDataflowEndpointGroupRequest {
  export const filterSensitiveLog = (obj: GetDataflowEndpointGroupRequest): any => ({
    ...obj,
  });
}

/**
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
  tags?: { [key: string]: string };
}

export namespace GetDataflowEndpointGroupResponse {
  export const filterSensitiveLog = (obj: GetDataflowEndpointGroupResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace ListDataflowEndpointGroupsRequest {
  export const filterSensitiveLog = (obj: ListDataflowEndpointGroupsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace DataflowEndpointListItem {
  export const filterSensitiveLog = (obj: DataflowEndpointListItem): any => ({
    ...obj,
  });
}

/**
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

export namespace ListDataflowEndpointGroupsResponse {
  export const filterSensitiveLog = (obj: ListDataflowEndpointGroupsResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface DeleteMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

export namespace DeleteMissionProfileRequest {
  export const filterSensitiveLog = (obj: DeleteMissionProfileRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GetMinuteUsageRequest {
  export const filterSensitiveLog = (obj: GetMinuteUsageRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GetMinuteUsageResponse {
  export const filterSensitiveLog = (obj: GetMinuteUsageResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface GetMissionProfileRequest {
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

export namespace GetMissionProfileRequest {
  export const filterSensitiveLog = (obj: GetMissionProfileRequest): any => ({
    ...obj,
  });
}

/**
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
  tags?: { [key: string]: string };
}

export namespace GetMissionProfileResponse {
  export const filterSensitiveLog = (obj: GetMissionProfileResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface GetSatelliteRequest {
  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId: string | undefined;
}

export namespace GetSatelliteRequest {
  export const filterSensitiveLog = (obj: GetSatelliteRequest): any => ({
    ...obj,
  });
}

/**
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
}

export namespace GetSatelliteResponse {
  export const filterSensitiveLog = (obj: GetSatelliteResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace ListGroundStationsRequest {
  export const filterSensitiveLog = (obj: ListGroundStationsRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace GroundStationData {
  export const filterSensitiveLog = (obj: GroundStationData): any => ({
    ...obj,
  });
}

/**
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

export namespace ListGroundStationsResponse {
  export const filterSensitiveLog = (obj: ListGroundStationsResponse): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>ARN of a resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export const filterSensitiveLog = (obj: ListTagsForResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Tags assigned to a resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export const filterSensitiveLog = (obj: ListTagsForResourceResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace ListMissionProfilesRequest {
  export const filterSensitiveLog = (obj: ListMissionProfilesRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace MissionProfileListItem {
  export const filterSensitiveLog = (obj: MissionProfileListItem): any => ({
    ...obj,
  });
}

/**
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

export namespace ListMissionProfilesResponse {
  export const filterSensitiveLog = (obj: ListMissionProfilesResponse): any => ({
    ...obj,
  });
}

/**
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
}

export namespace UpdateMissionProfileRequest {
  export const filterSensitiveLog = (obj: UpdateMissionProfileRequest): any => ({
    ...obj,
  });
}

/**
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

export namespace ListSatellitesRequest {
  export const filterSensitiveLog = (obj: ListSatellitesRequest): any => ({
    ...obj,
  });
}

/**
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
}

export namespace SatelliteListItem {
  export const filterSensitiveLog = (obj: SatelliteListItem): any => ({
    ...obj,
  });
}

/**
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

export namespace ListSatellitesResponse {
  export const filterSensitiveLog = (obj: ListSatellitesResponse): any => ({
    ...obj,
  });
}

/**
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
  tags: { [key: string]: string } | undefined;
}

export namespace TagResourceRequest {
  export const filterSensitiveLog = (obj: TagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface TagResourceResponse {}

export namespace TagResourceResponse {
  export const filterSensitiveLog = (obj: TagResourceResponse): any => ({
    ...obj,
  });
}

/**
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

export namespace UntagResourceRequest {
  export const filterSensitiveLog = (obj: UntagResourceRequest): any => ({
    ...obj,
  });
}

/**
 * <p/>
 */
export interface UntagResourceResponse {}

export namespace UntagResourceResponse {
  export const filterSensitiveLog = (obj: UntagResourceResponse): any => ({
    ...obj,
  });
}
