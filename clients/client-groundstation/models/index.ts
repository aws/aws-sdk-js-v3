import {
  SmithyException as __SmithyException,
  isa as __isa
} from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

/**
 * <p>Information about how AWS Ground Station should configure an
 *          antenna for downlink during a contact.</p>
 */
export interface AntennaDownlinkConfig {
  __type?: "AntennaDownlinkConfig";
  /**
   * <p>Object that describes a spectral <code>Config</code>.</p>
   */
  spectrumConfig: SpectrumConfig | undefined;
}

export namespace AntennaDownlinkConfig {
  export function isa(o: any): o is AntennaDownlinkConfig {
    return __isa(o, "AntennaDownlinkConfig");
  }
}

/**
 * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
 */
export interface AntennaDownlinkDemodDecodeConfig {
  __type?: "AntennaDownlinkDemodDecodeConfig";
  /**
   * <p>Information about the decode <code>Config</code>.</p>
   */
  decodeConfig: DecodeConfig | undefined;

  /**
   * <p>Information about the demodulation <code>Config</code>.</p>
   */
  demodulationConfig: DemodulationConfig | undefined;

  /**
   * <p>Information about the spectral <code>Config</code>.</p>
   */
  spectrumConfig: SpectrumConfig | undefined;
}

export namespace AntennaDownlinkDemodDecodeConfig {
  export function isa(o: any): o is AntennaDownlinkDemodDecodeConfig {
    return __isa(o, "AntennaDownlinkDemodDecodeConfig");
  }
}

/**
 * <p>Information about the uplink <code>Config</code> of an antenna.</p>
 */
export interface AntennaUplinkConfig {
  __type?: "AntennaUplinkConfig";
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
  export function isa(o: any): o is AntennaUplinkConfig {
    return __isa(o, "AntennaUplinkConfig");
  }
}

/**
 * <p/>
 */
export interface CancelContactRequest {
  __type?: "CancelContactRequest";
  /**
   * <p>UUID of a contact.</p>
   */
  contactId: string | undefined;
}

export namespace CancelContactRequest {
  export function isa(o: any): o is CancelContactRequest {
    return __isa(o, "CancelContactRequest");
  }
}

/**
 * <p/>
 */
export interface ConfigIdResponse {
  __type?: "ConfigIdResponse";
  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;
}

export namespace ConfigIdResponse {
  export function isa(o: any): o is ConfigIdResponse {
    return __isa(o, "ConfigIdResponse");
  }
}

/**
 * <p>An item in a list of <code>Config</code> objects.</p>
 */
export interface ConfigListItem {
  __type?: "ConfigListItem";
  /**
   * <p>ARN of a <code>Config</code>.</p>
   */
  configArn?: string;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId?: string;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name?: string;
}

export namespace ConfigListItem {
  export function isa(o: any): o is ConfigListItem {
    return __isa(o, "ConfigListItem");
  }
}

/**
 * <p>Object containing the parameters for a <code>Config</code>.</p>
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
  interface $Base {
    __type?: "ConfigTypeData";
  }
  /**
   * <p>Information about how AWS Ground Station should configure an antenna for downlink during a contact.</p>
   */
  export interface AntennaDownlinkConfigMember extends $Base {
    antennaDownlinkConfig: AntennaDownlinkConfig;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig?: never;
    trackingConfig?: never;
    uplinkEchoConfig?: never;
    $unknown?: never;
  }
  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for downlink demod decode during a contact.</p>
   */
  export interface AntennaDownlinkDemodDecodeConfigMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig: AntennaDownlinkDemodDecodeConfig;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig?: never;
    trackingConfig?: never;
    uplinkEchoConfig?: never;
    $unknown?: never;
  }
  /**
   * <p>Information about how AWS Ground Station should conﬁgure an antenna for uplink during a contact.</p>
   */
  export interface AntennaUplinkConfigMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig: AntennaUplinkConfig;
    dataflowEndpointConfig?: never;
    trackingConfig?: never;
    uplinkEchoConfig?: never;
    $unknown?: never;
  }
  /**
   * <p>Information about the dataflow endpoint <code>Config</code>.</p>
   */
  export interface DataflowEndpointConfigMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig: DataflowEndpointConfig;
    trackingConfig?: never;
    uplinkEchoConfig?: never;
    $unknown?: never;
  }
  /**
   * <p>Object that determines whether tracking should be used during a contact executed with this <code>Config</code> in the mission profile. </p>
   */
  export interface TrackingConfigMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig?: never;
    trackingConfig: TrackingConfig;
    uplinkEchoConfig?: never;
    $unknown?: never;
  }
  /**
   * <p>Information about an uplink echo <code>Config</code>.</p>
   *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code> is used in a contact.</p>
   */
  export interface UplinkEchoConfigMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig?: never;
    trackingConfig?: never;
    uplinkEchoConfig: UplinkEchoConfig;
    $unknown?: never;
  }
  export interface $UnknownMember extends $Base {
    antennaDownlinkConfig?: never;
    antennaDownlinkDemodDecodeConfig?: never;
    antennaUplinkConfig?: never;
    dataflowEndpointConfig?: never;
    trackingConfig?: never;
    uplinkEchoConfig?: never;
    $unknown: [string, any];
  }
  export interface Visitor<T> {
    antennaDownlinkConfig: (value: AntennaDownlinkConfig) => T;
    antennaDownlinkDemodDecodeConfig: (
      value: AntennaDownlinkDemodDecodeConfig
    ) => T;
    antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
    dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
    trackingConfig: (value: TrackingConfig) => T;
    uplinkEchoConfig: (value: UplinkEchoConfig) => T;
    _: (name: string, value: any) => T;
  }
  export function visit<T>(value: ConfigTypeData, visitor: Visitor<T>): T {
    if (value.antennaDownlinkConfig !== undefined)
      return visitor.antennaDownlinkConfig(value.antennaDownlinkConfig);
    if (value.antennaDownlinkDemodDecodeConfig !== undefined)
      return visitor.antennaDownlinkDemodDecodeConfig(
        value.antennaDownlinkDemodDecodeConfig
      );
    if (value.antennaUplinkConfig !== undefined)
      return visitor.antennaUplinkConfig(value.antennaUplinkConfig);
    if (value.dataflowEndpointConfig !== undefined)
      return visitor.dataflowEndpointConfig(value.dataflowEndpointConfig);
    if (value.trackingConfig !== undefined)
      return visitor.trackingConfig(value.trackingConfig);
    if (value.uplinkEchoConfig !== undefined)
      return visitor.uplinkEchoConfig(value.uplinkEchoConfig);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  }
}

/**
 * <p>Data describing a contact.</p>
 */
export interface ContactData {
  __type?: "ContactData";
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?: ContactStatus | string;

  /**
   * <p>End time of a contact.</p>
   */
  endTime?: Date;

  /**
   * <p>Error message of a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: Elevation;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ContactData {
  export function isa(o: any): o is ContactData {
    return __isa(o, "ContactData");
  }
}

/**
 * <p/>
 */
export interface ContactIdResponse {
  __type?: "ContactIdResponse";
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;
}

export namespace ContactIdResponse {
  export function isa(o: any): o is ContactIdResponse {
    return __isa(o, "ContactIdResponse");
  }
}

/**
 * <p/>
 */
export interface CreateConfigRequest {
  __type?: "CreateConfigRequest";
  /**
   * <p>Parameters of a <code>Config</code>.</p>
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateConfigRequest {
  export function isa(o: any): o is CreateConfigRequest {
    return __isa(o, "CreateConfigRequest");
  }
}

/**
 * <p/>
 */
export interface CreateDataflowEndpointGroupRequest {
  __type?: "CreateDataflowEndpointGroupRequest";
  /**
   * <p>Endpoint details of each endpoint in the dataflow endpoint group.</p>
   */
  endpointDetails: Array<EndpointDetails> | undefined;

  /**
   * <p>Tags of a dataflow endpoint group.</p>
   */
  tags?: { [key: string]: string };
}

export namespace CreateDataflowEndpointGroupRequest {
  export function isa(o: any): o is CreateDataflowEndpointGroupRequest {
    return __isa(o, "CreateDataflowEndpointGroupRequest");
  }
}

/**
 * <p/>
 */
export interface CreateMissionProfileRequest {
  __type?: "CreateMissionProfileRequest";
  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a from <code>Config</code> and a to
   *          <code>Config</code>.</p>
   */
  dataflowEdges: Array<Array<string>> | undefined;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds: number | undefined;

  /**
   * <p>Name of a mission profile.</p>
   */
  name: string | undefined;

  /**
   * <p>Tags assigned to a mission profile.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn: string | undefined;
}

export namespace CreateMissionProfileRequest {
  export function isa(o: any): o is CreateMissionProfileRequest {
    return __isa(o, "CreateMissionProfileRequest");
  }
}

/**
 * <p>Information about a dataflow endpoint.</p>
 */
export interface DataflowEndpoint {
  __type?: "DataflowEndpoint";
  /**
   * <p>Socket address of a dataflow endpoint.</p>
   */
  address?: SocketAddress;

  /**
   * <p>Name of a dataflow endpoint.</p>
   */
  name?: string;

  /**
   * <p>Status of a dataflow endpoint.</p>
   */
  status?: EndpointStatus | string;
}

export namespace DataflowEndpoint {
  export function isa(o: any): o is DataflowEndpoint {
    return __isa(o, "DataflowEndpoint");
  }
}

/**
 * <p>Information about the dataflow endpoint <code>Config</code>.</p>
 */
export interface DataflowEndpointConfig {
  __type?: "DataflowEndpointConfig";
  /**
   * <p>Name of a dataflow endpoint.</p>
   */
  dataflowEndpointName: string | undefined;
}

export namespace DataflowEndpointConfig {
  export function isa(o: any): o is DataflowEndpointConfig {
    return __isa(o, "DataflowEndpointConfig");
  }
}

/**
 * <p/>
 */
export interface DataflowEndpointGroupIdResponse {
  __type?: "DataflowEndpointGroupIdResponse";
  /**
   * <p>ID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;
}

export namespace DataflowEndpointGroupIdResponse {
  export function isa(o: any): o is DataflowEndpointGroupIdResponse {
    return __isa(o, "DataflowEndpointGroupIdResponse");
  }
}

/**
 * <p>Item in a list of <code>DataflowEndpoint</code> groups.</p>
 */
export interface DataflowEndpointListItem {
  __type?: "DataflowEndpointListItem";
  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;

  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;
}

export namespace DataflowEndpointListItem {
  export function isa(o: any): o is DataflowEndpointListItem {
    return __isa(o, "DataflowEndpointListItem");
  }
}

/**
 * <p>Information about the decode <code>Config</code>.</p>
 */
export interface DecodeConfig {
  __type?: "DecodeConfig";
  /**
   * <p>Unvalidated JSON of a decode <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

export namespace DecodeConfig {
  export function isa(o: any): o is DecodeConfig {
    return __isa(o, "DecodeConfig");
  }
}

/**
 * <p/>
 */
export interface DeleteConfigRequest {
  __type?: "DeleteConfigRequest";
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
  export function isa(o: any): o is DeleteConfigRequest {
    return __isa(o, "DeleteConfigRequest");
  }
}

/**
 * <p/>
 */
export interface DeleteDataflowEndpointGroupRequest {
  __type?: "DeleteDataflowEndpointGroupRequest";
  /**
   * <p>ID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

export namespace DeleteDataflowEndpointGroupRequest {
  export function isa(o: any): o is DeleteDataflowEndpointGroupRequest {
    return __isa(o, "DeleteDataflowEndpointGroupRequest");
  }
}

/**
 * <p/>
 */
export interface DeleteMissionProfileRequest {
  __type?: "DeleteMissionProfileRequest";
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

export namespace DeleteMissionProfileRequest {
  export function isa(o: any): o is DeleteMissionProfileRequest {
    return __isa(o, "DeleteMissionProfileRequest");
  }
}

/**
 * <p>Information about the demodulation <code>Config</code>.</p>
 */
export interface DemodulationConfig {
  __type?: "DemodulationConfig";
  /**
   * <p>Unvalidated JSON of a demodulation <code>Config</code>.</p>
   */
  unvalidatedJSON: string | undefined;
}

export namespace DemodulationConfig {
  export function isa(o: any): o is DemodulationConfig {
    return __isa(o, "DemodulationConfig");
  }
}

/**
 * <p/>
 */
export interface DescribeContactRequest {
  __type?: "DescribeContactRequest";
  /**
   * <p>UUID of a contact.</p>
   */
  contactId: string | undefined;
}

export namespace DescribeContactRequest {
  export function isa(o: any): o is DescribeContactRequest {
    return __isa(o, "DescribeContactRequest");
  }
}

/**
 * <p/>
 */
export interface DescribeContactResponse {
  __type?: "DescribeContactResponse";
  /**
   * <p>UUID of a contact.</p>
   */
  contactId?: string;

  /**
   * <p>Status of a contact.</p>
   */
  contactStatus?: ContactStatus | string;

  /**
   * <p>End time of a contact.</p>
   */
  endTime?: Date;

  /**
   * <p>Error message for a contact.</p>
   */
  errorMessage?: string;

  /**
   * <p>Ground station for a contact.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum elevation angle of a contact.</p>
   */
  maximumElevation?: Elevation;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  postPassEndTime?: Date;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  prePassStartTime?: Date;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime?: Date;

  /**
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };
}

export namespace DescribeContactResponse {
  export function isa(o: any): o is DescribeContactResponse {
    return __isa(o, "DescribeContactResponse");
  }
}

/**
 * <p>Information about the endpoint details.</p>
 */
export interface EndpointDetails {
  __type?: "EndpointDetails";
  /**
   * <p>A dataflow endpoint.</p>
   */
  endpoint?: DataflowEndpoint;

  /**
   * <p>Endpoint security details.</p>
   */
  securityDetails?: SecurityDetails;
}

export namespace EndpointDetails {
  export function isa(o: any): o is EndpointDetails {
    return __isa(o, "EndpointDetails");
  }
}

export enum EndpointStatus {
  created = "created",
  creating = "creating",
  deleted = "deleted",
  deleting = "deleting",
  failed = "failed"
}

/**
 * <p/>
 */
export interface GetConfigRequest {
  __type?: "GetConfigRequest";
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
  export function isa(o: any): o is GetConfigRequest {
    return __isa(o, "GetConfigRequest");
  }
}

/**
 * <p/>
 */
export interface GetConfigResponse {
  __type?: "GetConfigResponse";
  /**
   * <p>ARN of a <code>Config</code>
   *          </p>
   */
  configArn: string | undefined;

  /**
   * <p>Data elements in a <code>Config</code>.</p>
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType?: ConfigCapabilityType | string;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;

  /**
   * <p>Tags assigned to a <code>Config</code>.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetConfigResponse {
  export function isa(o: any): o is GetConfigResponse {
    return __isa(o, "GetConfigResponse");
  }
}

/**
 * <p/>
 */
export interface GetDataflowEndpointGroupRequest {
  __type?: "GetDataflowEndpointGroupRequest";
  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId: string | undefined;
}

export namespace GetDataflowEndpointGroupRequest {
  export function isa(o: any): o is GetDataflowEndpointGroupRequest {
    return __isa(o, "GetDataflowEndpointGroupRequest");
  }
}

/**
 * <p/>
 */
export interface GetDataflowEndpointGroupResponse {
  __type?: "GetDataflowEndpointGroupResponse";
  /**
   * <p>ARN of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupArn?: string;

  /**
   * <p>UUID of a dataflow endpoint group.</p>
   */
  dataflowEndpointGroupId?: string;

  /**
   * <p>Details of a dataflow endpoint.</p>
   */
  endpointsDetails?: Array<EndpointDetails>;

  /**
   * <p>Tags assigned to a dataflow endpoint group.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetDataflowEndpointGroupResponse {
  export function isa(o: any): o is GetDataflowEndpointGroupResponse {
    return __isa(o, "GetDataflowEndpointGroupResponse");
  }
}

/**
 * <p/>
 */
export interface GetMissionProfileRequest {
  __type?: "GetMissionProfileRequest";
  /**
   * <p>UUID of a mission profile.</p>
   */
  missionProfileId: string | undefined;
}

export namespace GetMissionProfileRequest {
  export function isa(o: any): o is GetMissionProfileRequest {
    return __isa(o, "GetMissionProfileRequest");
  }
}

/**
 * <p/>
 */
export interface GetMissionProfileResponse {
  __type?: "GetMissionProfileResponse";
  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Amount of time prior to contact start you’d like to receive a CloudWatch event indicating an upcoming pass.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a from <code>Config</code> and a to
   *          <code>Config</code>.</p>
   */
  dataflowEdges?: Array<Array<string>>;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;

  /**
   * <p>Tags assigned to a mission profile.</p>
   */
  tags?: { [key: string]: string };

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;
}

export namespace GetMissionProfileResponse {
  export function isa(o: any): o is GetMissionProfileResponse {
    return __isa(o, "GetMissionProfileResponse");
  }
}

/**
 * <p/>
 */
export interface ListConfigsRequest {
  __type?: "ListConfigsRequest";
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
  export function isa(o: any): o is ListConfigsRequest {
    return __isa(o, "ListConfigsRequest");
  }
}

/**
 * <p/>
 */
export interface ListConfigsResponse {
  __type?: "ListConfigsResponse";
  /**
   * <p>List of <code>Config</code> items.</p>
   */
  configList?: Array<ConfigListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListConfigs</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListConfigsResponse {
  export function isa(o: any): o is ListConfigsResponse {
    return __isa(o, "ListConfigsResponse");
  }
}

/**
 * <p/>
 */
export interface ListContactsRequest {
  __type?: "ListContactsRequest";
  /**
   * <p>End time of a contact.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation?: string;

  /**
   * <p>Maximum number of contacts returned.</p>
   */
  maxResults?: number;

  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>Next token returned in the request of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>Start time of a contact.</p>
   */
  startTime: Date | undefined;

  /**
   * <p>Status of a contact reservation.</p>
   */
  statusList: Array<ContactStatus | string> | undefined;
}

export namespace ListContactsRequest {
  export function isa(o: any): o is ListContactsRequest {
    return __isa(o, "ListContactsRequest");
  }
}

/**
 * <p/>
 */
export interface ListContactsResponse {
  __type?: "ListContactsResponse";
  /**
   * <p>List of contacts.</p>
   */
  contactList?: Array<ContactData>;

  /**
   * <p>Next token returned in the response of a previous <code>ListContacts</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListContactsResponse {
  export function isa(o: any): o is ListContactsResponse {
    return __isa(o, "ListContactsResponse");
  }
}

/**
 * <p/>
 */
export interface ListDataflowEndpointGroupsRequest {
  __type?: "ListDataflowEndpointGroupsRequest";
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
  export function isa(o: any): o is ListDataflowEndpointGroupsRequest {
    return __isa(o, "ListDataflowEndpointGroupsRequest");
  }
}

/**
 * <p/>
 */
export interface ListDataflowEndpointGroupsResponse {
  __type?: "ListDataflowEndpointGroupsResponse";
  /**
   * <p>A list of dataflow endpoint groups.</p>
   */
  dataflowEndpointGroupList?: Array<DataflowEndpointListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListDataflowEndpointGroups</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListDataflowEndpointGroupsResponse {
  export function isa(o: any): o is ListDataflowEndpointGroupsResponse {
    return __isa(o, "ListDataflowEndpointGroupsResponse");
  }
}

/**
 * <p/>
 */
export interface ListMissionProfilesRequest {
  __type?: "ListMissionProfilesRequest";
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
  export function isa(o: any): o is ListMissionProfilesRequest {
    return __isa(o, "ListMissionProfilesRequest");
  }
}

/**
 * <p/>
 */
export interface ListMissionProfilesResponse {
  __type?: "ListMissionProfilesResponse";
  /**
   * <p>List of mission profiles</p>
   */
  missionProfileList?: Array<MissionProfileListItem>;

  /**
   * <p>Next token returned in the response of a previous <code>ListMissionProfiles</code> call. Used to get the next page of results.</p>
   */
  nextToken?: string;
}

export namespace ListMissionProfilesResponse {
  export function isa(o: any): o is ListMissionProfilesResponse {
    return __isa(o, "ListMissionProfilesResponse");
  }
}

/**
 * <p/>
 */
export interface MissionProfileIdResponse {
  __type?: "MissionProfileIdResponse";
  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId?: string;
}

export namespace MissionProfileIdResponse {
  export function isa(o: any): o is MissionProfileIdResponse {
    return __isa(o, "MissionProfileIdResponse");
  }
}

/**
 * <p>Item in a list of mission profiles.</p>
 */
export interface MissionProfileListItem {
  __type?: "MissionProfileListItem";
  /**
   * <p>ARN of a mission profile.</p>
   */
  missionProfileArn?: string;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId?: string;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>Region of a mission profile.</p>
   */
  region?: string;
}

export namespace MissionProfileListItem {
  export function isa(o: any): o is MissionProfileListItem {
    return __isa(o, "MissionProfileListItem");
  }
}

/**
 * <p/>
 */
export interface ReserveContactRequest {
  __type?: "ReserveContactRequest";
  /**
   * <p>End time of a contact.</p>
   */
  endTime: Date | undefined;

  /**
   * <p>Name of a ground station.</p>
   */
  groundStation: string | undefined;

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
   * <p>Tags assigned to a contact.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ReserveContactRequest {
  export function isa(o: any): o is ReserveContactRequest {
    return __isa(o, "ReserveContactRequest");
  }
}

/**
 * <p>Object that determines whether tracking should be used during a contact
 *          executed with this <code>Config</code> in the mission profile.</p>
 */
export interface TrackingConfig {
  __type?: "TrackingConfig";
  /**
   * <p>Current setting for autotrack.</p>
   */
  autotrack: Criticality | string | undefined;
}

export namespace TrackingConfig {
  export function isa(o: any): o is TrackingConfig {
    return __isa(o, "TrackingConfig");
  }
}

/**
 * <p/>
 */
export interface UpdateConfigRequest {
  __type?: "UpdateConfigRequest";
  /**
   * <p>Parameters for a <code>Config</code>.</p>
   */
  configData: ConfigTypeData | undefined;

  /**
   * <p>UUID of a <code>Config</code>.</p>
   */
  configId: string | undefined;

  /**
   * <p>Type of a <code>Config</code>.</p>
   */
  configType: ConfigCapabilityType | string | undefined;

  /**
   * <p>Name of a <code>Config</code>.</p>
   */
  name: string | undefined;
}

export namespace UpdateConfigRequest {
  export function isa(o: any): o is UpdateConfigRequest {
    return __isa(o, "UpdateConfigRequest");
  }
}

/**
 * <p/>
 */
export interface UpdateMissionProfileRequest {
  __type?: "UpdateMissionProfileRequest";
  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPostPassDurationSeconds?: number;

  /**
   * <p>Amount of time after a contact ends that you’d like to receive a CloudWatch event indicating the pass has finished.</p>
   */
  contactPrePassDurationSeconds?: number;

  /**
   * <p>A list of lists of ARNs. Each list of ARNs is an edge, with a from <code>Config</code> and a to
   *          <code>Config</code>.</p>
   */
  dataflowEdges?: Array<Array<string>>;

  /**
   * <p>Smallest amount of time in seconds that you’d like to see for an available contact. AWS Ground Station will not present you with contacts shorter than this duration.</p>
   */
  minimumViableContactDurationSeconds?: number;

  /**
   * <p>ID of a mission profile.</p>
   */
  missionProfileId: string | undefined;

  /**
   * <p>Name of a mission profile.</p>
   */
  name?: string;

  /**
   * <p>ARN of a tracking <code>Config</code>.</p>
   */
  trackingConfigArn?: string;
}

export namespace UpdateMissionProfileRequest {
  export function isa(o: any): o is UpdateMissionProfileRequest {
    return __isa(o, "UpdateMissionProfileRequest");
  }
}

/**
 * <p>Information about an uplink echo <code>Config</code>.</p>
 *          <p>Parameters from the <code>AntennaUplinkConfig</code>, corresponding to the
 *          specified <code>AntennaUplinkConfigArn</code>, are used when this <code>UplinkEchoConfig</code>
 *          is used in a contact.</p>
 */
export interface UplinkEchoConfig {
  __type?: "UplinkEchoConfig";
  /**
   * <p>ARN of an uplink <code>Config</code>.</p>
   */
  antennaUplinkConfigArn: string | undefined;

  /**
   * <p>Whether or not an uplink <code>Config</code> is enabled.</p>
   */
  enabled: boolean | undefined;
}

export namespace UplinkEchoConfig {
  export function isa(o: any): o is UplinkEchoConfig {
    return __isa(o, "UplinkEchoConfig");
  }
}

export enum AngleUnits {
  DEGREE_ANGLE = "DEGREE_ANGLE",
  RADIAN = "RADIAN"
}

export enum BandwidthUnits {
  GHZ = "GHz",
  KHZ = "kHz",
  MHZ = "MHz"
}

export enum ConfigCapabilityType {
  ANTENNA_DOWNLINK = "antenna-downlink",
  ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode",
  ANTENNA_UPLINK = "antenna-uplink",
  DATAFLOW_ENDPOINT = "dataflow-endpoint",
  TRACKING = "tracking",
  UPLINK_ECHO = "uplink-echo"
}

export enum ContactStatus {
  AVAILABLE = "AVAILABLE",
  AWS_CANCELLED = "AWS_CANCELLED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  FAILED = "FAILED",
  FAILED_TO_SCHEDULE = "FAILED_TO_SCHEDULE",
  PASS = "PASS",
  POSTPASS = "POSTPASS",
  PREPASS = "PREPASS",
  SCHEDULED = "SCHEDULED",
  SCHEDULING = "SCHEDULING"
}

export enum Criticality {
  PREFERRED = "PREFERRED",
  REMOVED = "REMOVED",
  REQUIRED = "REQUIRED"
}

/**
 * <p>Dependency encountered an error.</p>
 */
export interface DependencyException
  extends __SmithyException,
    $MetadataBearer {
  name: "DependencyException";
  $fault: "server";
  message?: string;
  /**
   * <p/>
   */
  parameterName?: string;
}

export namespace DependencyException {
  export function isa(o: any): o is DependencyException {
    return __isa(o, "DependencyException");
  }
}

/**
 * <p>Object that represents EIRP.</p>
 */
export interface Eirp {
  __type?: "Eirp";
  /**
   * <p>Units of an EIRP.</p>
   */
  units: EirpUnits | string | undefined;

  /**
   * <p>Value of an EIRP.</p>
   */
  value: number | undefined;
}

export namespace Eirp {
  export function isa(o: any): o is Eirp {
    return __isa(o, "Eirp");
  }
}

export enum EirpUnits {
  DBW = "dBW"
}

/**
 * <p>Elevation angle of the satellite in the sky during a contact.</p>
 */
export interface Elevation {
  __type?: "Elevation";
  /**
   * <p>Elevation angle units.</p>
   */
  unit: AngleUnits | string | undefined;

  /**
   * <p>Elevation angle value.</p>
   */
  value: number | undefined;
}

export namespace Elevation {
  export function isa(o: any): o is Elevation {
    return __isa(o, "Elevation");
  }
}

/**
 * <p>Object that describes the frequency.</p>
 */
export interface Frequency {
  __type?: "Frequency";
  /**
   * <p>Frequency units.</p>
   */
  units: FrequencyUnits | string | undefined;

  /**
   * <p>Frequency value.</p>
   */
  value: number | undefined;
}

export namespace Frequency {
  export function isa(o: any): o is Frequency {
    return __isa(o, "Frequency");
  }
}

/**
 * <p>Object that describes the frequency bandwidth.</p>
 */
export interface FrequencyBandwidth {
  __type?: "FrequencyBandwidth";
  /**
   * <p>Frequency bandwidth units.</p>
   */
  units: BandwidthUnits | string | undefined;

  /**
   * <p>Frequency bandwidth value.</p>
   */
  value: number | undefined;
}

export namespace FrequencyBandwidth {
  export function isa(o: any): o is FrequencyBandwidth {
    return __isa(o, "FrequencyBandwidth");
  }
}

export enum FrequencyUnits {
  GHZ = "GHz",
  KHZ = "kHz",
  MHZ = "MHz"
}

/**
 * <p/>
 */
export interface GetMinuteUsageRequest {
  __type?: "GetMinuteUsageRequest";
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
  export function isa(o: any): o is GetMinuteUsageRequest {
    return __isa(o, "GetMinuteUsageRequest");
  }
}

/**
 * <p/>
 */
export interface GetMinuteUsageResponse {
  __type?: "GetMinuteUsageResponse";
  /**
   * <p>Estimated number of minutes remaining for an account, specific to the month being requested.</p>
   */
  estimatedMinutesRemaining?: number;

  /**
   * <p>Returns whether or not an account has signed up for the reserved minutes pricing plan, specific to the month being requested.</p>
   */
  isReservedMinutesCustomer?: boolean;

  /**
   * <p>Total number of reserved minutes allocated, specific to the month being requested.</p>
   */
  totalReservedMinuteAllocation?: number;

  /**
   * <p>Total scheduled minutes for an account, specific to the month being requested.</p>
   */
  totalScheduledMinutes?: number;

  /**
   * <p>Upcoming minutes scheduled for an account, specific to the month being requested.</p>
   */
  upcomingMinutesScheduled?: number;
}

export namespace GetMinuteUsageResponse {
  export function isa(o: any): o is GetMinuteUsageResponse {
    return __isa(o, "GetMinuteUsageResponse");
  }
}

/**
 * <p/>
 */
export interface GetSatelliteRequest {
  __type?: "GetSatelliteRequest";
  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId: string | undefined;
}

export namespace GetSatelliteRequest {
  export function isa(o: any): o is GetSatelliteRequest {
    return __isa(o, "GetSatelliteRequest");
  }
}

/**
 * <p/>
 */
export interface GetSatelliteResponse {
  __type?: "GetSatelliteResponse";
  /**
   * <p>When a satellite was created.</p>
   */
  dateCreated?: Date;

  /**
   * <p>When a satellite was last updated.</p>
   */
  lastUpdated?: Date;

  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>UUID of a satellite.</p>
   */
  satelliteId?: string;

  /**
   * <p>Tags assigned to a satellite.</p>
   */
  tags?: { [key: string]: string };
}

export namespace GetSatelliteResponse {
  export function isa(o: any): o is GetSatelliteResponse {
    return __isa(o, "GetSatelliteResponse");
  }
}

/**
 * <p>Information about the ground station data.</p>
 */
export interface GroundStationData {
  __type?: "GroundStationData";
  /**
   * <p>ID of a ground station.</p>
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
  export function isa(o: any): o is GroundStationData {
    return __isa(o, "GroundStationData");
  }
}

/**
 * <p>One or more parameters are not valid.</p>
 */
export interface InvalidParameterException
  extends __SmithyException,
    $MetadataBearer {
  name: "InvalidParameterException";
  $fault: "client";
  message?: string;
  /**
   * <p/>
   */
  parameterName?: string;
}

export namespace InvalidParameterException {
  export function isa(o: any): o is InvalidParameterException {
    return __isa(o, "InvalidParameterException");
  }
}

/**
 * <p/>
 */
export interface ListGroundStationsRequest {
  __type?: "ListGroundStationsRequest";
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
  export function isa(o: any): o is ListGroundStationsRequest {
    return __isa(o, "ListGroundStationsRequest");
  }
}

/**
 * <p/>
 */
export interface ListGroundStationsResponse {
  __type?: "ListGroundStationsResponse";
  /**
   * <p>List of ground stations.</p>
   */
  groundStationList?: Array<GroundStationData>;

  /**
   * <p>Next token that can be supplied in the next call to get the next page of ground stations.</p>
   */
  nextToken?: string;
}

export namespace ListGroundStationsResponse {
  export function isa(o: any): o is ListGroundStationsResponse {
    return __isa(o, "ListGroundStationsResponse");
  }
}

/**
 * <p/>
 */
export interface ListSatellitesRequest {
  __type?: "ListSatellitesRequest";
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
  export function isa(o: any): o is ListSatellitesRequest {
    return __isa(o, "ListSatellitesRequest");
  }
}

/**
 * <p/>
 */
export interface ListSatellitesResponse {
  __type?: "ListSatellitesResponse";
  /**
   * <p>Next token that can be supplied in the next call to get the next page of satellites.</p>
   */
  nextToken?: string;

  /**
   * <p>List of satellites.</p>
   */
  satellites?: Array<SatelliteListItem>;
}

export namespace ListSatellitesResponse {
  export function isa(o: any): o is ListSatellitesResponse {
    return __isa(o, "ListSatellitesResponse");
  }
}

/**
 * <p/>
 */
export interface ListTagsForResourceRequest {
  __type?: "ListTagsForResourceRequest";
  /**
   * <p>ARN of a resource.</p>
   */
  resourceArn: string | undefined;
}

export namespace ListTagsForResourceRequest {
  export function isa(o: any): o is ListTagsForResourceRequest {
    return __isa(o, "ListTagsForResourceRequest");
  }
}

/**
 * <p/>
 */
export interface ListTagsForResourceResponse {
  __type?: "ListTagsForResourceResponse";
  /**
   * <p>Tags assigned to a resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace ListTagsForResourceResponse {
  export function isa(o: any): o is ListTagsForResourceResponse {
    return __isa(o, "ListTagsForResourceResponse");
  }
}

export enum Polarization {
  LEFT_HAND = "LEFT_HAND",
  NONE = "NONE",
  RIGHT_HAND = "RIGHT_HAND"
}

/**
 * <p>Resource was not found.</p>
 */
export interface ResourceNotFoundException
  extends __SmithyException,
    $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  message?: string;
}

export namespace ResourceNotFoundException {
  export function isa(o: any): o is ResourceNotFoundException {
    return __isa(o, "ResourceNotFoundException");
  }
}

/**
 * <p>Item in a list of satellites.</p>
 */
export interface SatelliteListItem {
  __type?: "SatelliteListItem";
  /**
   * <p>NORAD satellite ID number.</p>
   */
  noradSatelliteID?: number;

  /**
   * <p>ARN of a satellite.</p>
   */
  satelliteArn?: string;

  /**
   * <p>ID of a satellite.</p>
   */
  satelliteId?: string;
}

export namespace SatelliteListItem {
  export function isa(o: any): o is SatelliteListItem {
    return __isa(o, "SatelliteListItem");
  }
}

/**
 * <p>Information about endpoints.</p>
 */
export interface SecurityDetails {
  __type?: "SecurityDetails";
  /**
   * <p>ARN to a role needed for connecting streams to your instances. </p>
   */
  roleArn: string | undefined;

  /**
   * <p>The security groups to attach to the elastic network interfaces.</p>
   */
  securityGroupIds: Array<string> | undefined;

  /**
   * <p>A list of subnets where AWS Ground Station places elastic network interfaces to send streams to your instances.</p>
   */
  subnetIds: Array<string> | undefined;
}

export namespace SecurityDetails {
  export function isa(o: any): o is SecurityDetails {
    return __isa(o, "SecurityDetails");
  }
}

/**
 * <p>Information about the socket address.</p>
 */
export interface SocketAddress {
  __type?: "SocketAddress";
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
  export function isa(o: any): o is SocketAddress {
    return __isa(o, "SocketAddress");
  }
}

/**
 * <p>Object that describes a spectral <code>Config</code>.</p>
 */
export interface SpectrumConfig {
  __type?: "SpectrumConfig";
  /**
   * <p>Bandwidth of a spectral <code>Config</code>.</p>
   */
  bandwidth: FrequencyBandwidth | undefined;

  /**
   * <p>Center frequency of a spectral <code>Config</code>.</p>
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Polarization of a spectral <code>Config</code>.</p>
   */
  polarization?: Polarization | string;
}

export namespace SpectrumConfig {
  export function isa(o: any): o is SpectrumConfig {
    return __isa(o, "SpectrumConfig");
  }
}

/**
 * <p/>
 */
export interface TagResourceRequest {
  __type?: "TagResourceRequest";
  /**
   * <p>ARN of a resource tag.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Tags assigned to a resource.</p>
   */
  tags?: { [key: string]: string };
}

export namespace TagResourceRequest {
  export function isa(o: any): o is TagResourceRequest {
    return __isa(o, "TagResourceRequest");
  }
}

/**
 * <p/>
 */
export interface TagResourceResponse {
  __type?: "TagResourceResponse";
}

export namespace TagResourceResponse {
  export function isa(o: any): o is TagResourceResponse {
    return __isa(o, "TagResourceResponse");
  }
}

/**
 * <p/>
 */
export interface UntagResourceRequest {
  __type?: "UntagResourceRequest";
  /**
   * <p>ARN of a resource.</p>
   */
  resourceArn: string | undefined;

  /**
   * <p>Keys of a resource tag.</p>
   */
  tagKeys: Array<string> | undefined;
}

export namespace UntagResourceRequest {
  export function isa(o: any): o is UntagResourceRequest {
    return __isa(o, "UntagResourceRequest");
  }
}

/**
 * <p/>
 */
export interface UntagResourceResponse {
  __type?: "UntagResourceResponse";
}

export namespace UntagResourceResponse {
  export function isa(o: any): o is UntagResourceResponse {
    return __isa(o, "UntagResourceResponse");
  }
}

/**
 * <p>Information about the uplink spectral <code>Config</code>.</p>
 */
export interface UplinkSpectrumConfig {
  __type?: "UplinkSpectrumConfig";
  /**
   * <p>Center frequency of an uplink spectral <code>Config</code>.</p>
   */
  centerFrequency: Frequency | undefined;

  /**
   * <p>Polarization of an uplink spectral <code>Config</code>.</p>
   */
  polarization?: Polarization | string;
}

export namespace UplinkSpectrumConfig {
  export function isa(o: any): o is UplinkSpectrumConfig {
    return __isa(o, "UplinkSpectrumConfig");
  }
}
