import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
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
export declare namespace AntennaDownlinkConfig {
    function isa(o: any): o is AntennaDownlinkConfig;
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
export declare namespace AntennaDownlinkDemodDecodeConfig {
    function isa(o: any): o is AntennaDownlinkDemodDecodeConfig;
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
export declare namespace AntennaUplinkConfig {
    function isa(o: any): o is AntennaUplinkConfig;
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
export declare namespace CancelContactRequest {
    function isa(o: any): o is CancelContactRequest;
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
export declare namespace ConfigIdResponse {
    function isa(o: any): o is ConfigIdResponse;
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
export declare namespace ConfigListItem {
    function isa(o: any): o is ConfigListItem;
}
/**
 * <p>Object containing the parameters for a <code>Config</code>.</p>
 *          <p>See the subtype definitions for what each type of <code>Config</code> contains.</p>
 */
export declare type ConfigTypeData = ConfigTypeData.AntennaDownlinkConfigMember | ConfigTypeData.AntennaDownlinkDemodDecodeConfigMember | ConfigTypeData.AntennaUplinkConfigMember | ConfigTypeData.DataflowEndpointConfigMember | ConfigTypeData.TrackingConfigMember | ConfigTypeData.UplinkEchoConfigMember | ConfigTypeData.$UnknownMember;
export declare namespace ConfigTypeData {
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
        antennaDownlinkDemodDecodeConfig: (value: AntennaDownlinkDemodDecodeConfig) => T;
        antennaUplinkConfig: (value: AntennaUplinkConfig) => T;
        dataflowEndpointConfig: (value: DataflowEndpointConfig) => T;
        trackingConfig: (value: TrackingConfig) => T;
        uplinkEchoConfig: (value: UplinkEchoConfig) => T;
        _: (name: string, value: any) => T;
    }
    export function visit<T>(value: ConfigTypeData, visitor: Visitor<T>): T;
    export {};
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ContactData {
    function isa(o: any): o is ContactData;
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
export declare namespace ContactIdResponse {
    function isa(o: any): o is ContactIdResponse;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateConfigRequest {
    function isa(o: any): o is CreateConfigRequest;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace CreateDataflowEndpointGroupRequest {
    function isa(o: any): o is CreateDataflowEndpointGroupRequest;
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
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>ARN of a tracking <code>Config</code>.</p>
     */
    trackingConfigArn: string | undefined;
}
export declare namespace CreateMissionProfileRequest {
    function isa(o: any): o is CreateMissionProfileRequest;
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
export declare namespace DataflowEndpoint {
    function isa(o: any): o is DataflowEndpoint;
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
export declare namespace DataflowEndpointConfig {
    function isa(o: any): o is DataflowEndpointConfig;
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
export declare namespace DataflowEndpointGroupIdResponse {
    function isa(o: any): o is DataflowEndpointGroupIdResponse;
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
export declare namespace DataflowEndpointListItem {
    function isa(o: any): o is DataflowEndpointListItem;
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
export declare namespace DecodeConfig {
    function isa(o: any): o is DecodeConfig;
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
export declare namespace DeleteConfigRequest {
    function isa(o: any): o is DeleteConfigRequest;
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
export declare namespace DeleteDataflowEndpointGroupRequest {
    function isa(o: any): o is DeleteDataflowEndpointGroupRequest;
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
export declare namespace DeleteMissionProfileRequest {
    function isa(o: any): o is DeleteMissionProfileRequest;
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
export declare namespace DemodulationConfig {
    function isa(o: any): o is DemodulationConfig;
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
export declare namespace DescribeContactRequest {
    function isa(o: any): o is DescribeContactRequest;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace DescribeContactResponse {
    function isa(o: any): o is DescribeContactResponse;
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
export declare namespace EndpointDetails {
    function isa(o: any): o is EndpointDetails;
}
export declare enum EndpointStatus {
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
export declare namespace GetConfigRequest {
    function isa(o: any): o is GetConfigRequest;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetConfigResponse {
    function isa(o: any): o is GetConfigResponse;
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
export declare namespace GetDataflowEndpointGroupRequest {
    function isa(o: any): o is GetDataflowEndpointGroupRequest;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetDataflowEndpointGroupResponse {
    function isa(o: any): o is GetDataflowEndpointGroupResponse;
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
export declare namespace GetMissionProfileRequest {
    function isa(o: any): o is GetMissionProfileRequest;
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
    tags?: {
        [key: string]: string;
    };
    /**
     * <p>ARN of a tracking <code>Config</code>.</p>
     */
    trackingConfigArn?: string;
}
export declare namespace GetMissionProfileResponse {
    function isa(o: any): o is GetMissionProfileResponse;
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
export declare namespace ListConfigsRequest {
    function isa(o: any): o is ListConfigsRequest;
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
export declare namespace ListConfigsResponse {
    function isa(o: any): o is ListConfigsResponse;
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
export declare namespace ListContactsRequest {
    function isa(o: any): o is ListContactsRequest;
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
export declare namespace ListContactsResponse {
    function isa(o: any): o is ListContactsResponse;
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
export declare namespace ListDataflowEndpointGroupsRequest {
    function isa(o: any): o is ListDataflowEndpointGroupsRequest;
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
export declare namespace ListDataflowEndpointGroupsResponse {
    function isa(o: any): o is ListDataflowEndpointGroupsResponse;
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
export declare namespace ListMissionProfilesRequest {
    function isa(o: any): o is ListMissionProfilesRequest;
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
export declare namespace ListMissionProfilesResponse {
    function isa(o: any): o is ListMissionProfilesResponse;
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
export declare namespace MissionProfileIdResponse {
    function isa(o: any): o is MissionProfileIdResponse;
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
export declare namespace MissionProfileListItem {
    function isa(o: any): o is MissionProfileListItem;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ReserveContactRequest {
    function isa(o: any): o is ReserveContactRequest;
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
export declare namespace TrackingConfig {
    function isa(o: any): o is TrackingConfig;
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
export declare namespace UpdateConfigRequest {
    function isa(o: any): o is UpdateConfigRequest;
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
export declare namespace UpdateMissionProfileRequest {
    function isa(o: any): o is UpdateMissionProfileRequest;
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
export declare namespace UplinkEchoConfig {
    function isa(o: any): o is UplinkEchoConfig;
}
export declare enum AngleUnits {
    DEGREE_ANGLE = "DEGREE_ANGLE",
    RADIAN = "RADIAN"
}
export declare enum BandwidthUnits {
    GHZ = "GHz",
    KHZ = "kHz",
    MHZ = "MHz"
}
export declare enum ConfigCapabilityType {
    ANTENNA_DOWNLINK = "antenna-downlink",
    ANTENNA_DOWNLINK_DEMOD_DECODE = "antenna-downlink-demod-decode",
    ANTENNA_UPLINK = "antenna-uplink",
    DATAFLOW_ENDPOINT = "dataflow-endpoint",
    TRACKING = "tracking",
    UPLINK_ECHO = "uplink-echo"
}
export declare enum ContactStatus {
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
export declare enum Criticality {
    PREFERRED = "PREFERRED",
    REMOVED = "REMOVED",
    REQUIRED = "REQUIRED"
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
export declare namespace DependencyException {
    function isa(o: any): o is DependencyException;
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
export declare namespace Eirp {
    function isa(o: any): o is Eirp;
}
export declare enum EirpUnits {
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
export declare namespace Elevation {
    function isa(o: any): o is Elevation;
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
export declare namespace Frequency {
    function isa(o: any): o is Frequency;
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
export declare namespace FrequencyBandwidth {
    function isa(o: any): o is FrequencyBandwidth;
}
export declare enum FrequencyUnits {
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
export declare namespace GetMinuteUsageRequest {
    function isa(o: any): o is GetMinuteUsageRequest;
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
export declare namespace GetMinuteUsageResponse {
    function isa(o: any): o is GetMinuteUsageResponse;
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
export declare namespace GetSatelliteRequest {
    function isa(o: any): o is GetSatelliteRequest;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace GetSatelliteResponse {
    function isa(o: any): o is GetSatelliteResponse;
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
export declare namespace GroundStationData {
    function isa(o: any): o is GroundStationData;
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
export declare namespace InvalidParameterException {
    function isa(o: any): o is InvalidParameterException;
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
export declare namespace ListGroundStationsRequest {
    function isa(o: any): o is ListGroundStationsRequest;
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
export declare namespace ListGroundStationsResponse {
    function isa(o: any): o is ListGroundStationsResponse;
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
export declare namespace ListSatellitesRequest {
    function isa(o: any): o is ListSatellitesRequest;
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
export declare namespace ListSatellitesResponse {
    function isa(o: any): o is ListSatellitesResponse;
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
export declare namespace ListTagsForResourceRequest {
    function isa(o: any): o is ListTagsForResourceRequest;
}
/**
 * <p/>
 */
export interface ListTagsForResourceResponse {
    __type?: "ListTagsForResourceResponse";
    /**
     * <p>Tags assigned to a resource.</p>
     */
    tags?: {
        [key: string]: string;
    };
}
export declare namespace ListTagsForResourceResponse {
    function isa(o: any): o is ListTagsForResourceResponse;
}
export declare enum Polarization {
    LEFT_HAND = "LEFT_HAND",
    NONE = "NONE",
    RIGHT_HAND = "RIGHT_HAND"
}
/**
 * <p>Resource was not found.</p>
 */
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
    name: "ResourceNotFoundException";
    $fault: "client";
    message?: string;
}
export declare namespace ResourceNotFoundException {
    function isa(o: any): o is ResourceNotFoundException;
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
export declare namespace SatelliteListItem {
    function isa(o: any): o is SatelliteListItem;
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
export declare namespace SecurityDetails {
    function isa(o: any): o is SecurityDetails;
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
export declare namespace SocketAddress {
    function isa(o: any): o is SocketAddress;
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
export declare namespace SpectrumConfig {
    function isa(o: any): o is SpectrumConfig;
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
    tags?: {
        [key: string]: string;
    };
}
export declare namespace TagResourceRequest {
    function isa(o: any): o is TagResourceRequest;
}
/**
 * <p/>
 */
export interface TagResourceResponse {
    __type?: "TagResourceResponse";
}
export declare namespace TagResourceResponse {
    function isa(o: any): o is TagResourceResponse;
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
export declare namespace UntagResourceRequest {
    function isa(o: any): o is UntagResourceRequest;
}
/**
 * <p/>
 */
export interface UntagResourceResponse {
    __type?: "UntagResourceResponse";
}
export declare namespace UntagResourceResponse {
    function isa(o: any): o is UntagResourceResponse;
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
export declare namespace UplinkSpectrumConfig {
    function isa(o: any): o is UplinkSpectrumConfig;
}
