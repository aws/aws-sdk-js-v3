"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const smithy_client_1 = require("@aws-sdk/smithy-client");
var AntennaDownlinkConfig;
(function (AntennaDownlinkConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AntennaDownlinkConfig");
    }
    AntennaDownlinkConfig.isa = isa;
})(AntennaDownlinkConfig = exports.AntennaDownlinkConfig || (exports.AntennaDownlinkConfig = {}));
var AntennaDownlinkDemodDecodeConfig;
(function (AntennaDownlinkDemodDecodeConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AntennaDownlinkDemodDecodeConfig");
    }
    AntennaDownlinkDemodDecodeConfig.isa = isa;
})(AntennaDownlinkDemodDecodeConfig = exports.AntennaDownlinkDemodDecodeConfig || (exports.AntennaDownlinkDemodDecodeConfig = {}));
var AntennaUplinkConfig;
(function (AntennaUplinkConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "AntennaUplinkConfig");
    }
    AntennaUplinkConfig.isa = isa;
})(AntennaUplinkConfig = exports.AntennaUplinkConfig || (exports.AntennaUplinkConfig = {}));
var CancelContactRequest;
(function (CancelContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CancelContactRequest");
    }
    CancelContactRequest.isa = isa;
})(CancelContactRequest = exports.CancelContactRequest || (exports.CancelContactRequest = {}));
var ConfigIdResponse;
(function (ConfigIdResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigIdResponse");
    }
    ConfigIdResponse.isa = isa;
})(ConfigIdResponse = exports.ConfigIdResponse || (exports.ConfigIdResponse = {}));
var ConfigListItem;
(function (ConfigListItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "ConfigListItem");
    }
    ConfigListItem.isa = isa;
})(ConfigListItem = exports.ConfigListItem || (exports.ConfigListItem = {}));
var ConfigTypeData;
(function (ConfigTypeData) {
    function visit(value, visitor) {
        if (value.antennaDownlinkConfig !== undefined)
            return visitor.antennaDownlinkConfig(value.antennaDownlinkConfig);
        if (value.antennaDownlinkDemodDecodeConfig !== undefined)
            return visitor.antennaDownlinkDemodDecodeConfig(value.antennaDownlinkDemodDecodeConfig);
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
    ConfigTypeData.visit = visit;
})(ConfigTypeData = exports.ConfigTypeData || (exports.ConfigTypeData = {}));
var ContactData;
(function (ContactData) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContactData");
    }
    ContactData.isa = isa;
})(ContactData = exports.ContactData || (exports.ContactData = {}));
var ContactIdResponse;
(function (ContactIdResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ContactIdResponse");
    }
    ContactIdResponse.isa = isa;
})(ContactIdResponse = exports.ContactIdResponse || (exports.ContactIdResponse = {}));
var CreateConfigRequest;
(function (CreateConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateConfigRequest");
    }
    CreateConfigRequest.isa = isa;
})(CreateConfigRequest = exports.CreateConfigRequest || (exports.CreateConfigRequest = {}));
var CreateDataflowEndpointGroupRequest;
(function (CreateDataflowEndpointGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateDataflowEndpointGroupRequest");
    }
    CreateDataflowEndpointGroupRequest.isa = isa;
})(CreateDataflowEndpointGroupRequest = exports.CreateDataflowEndpointGroupRequest || (exports.CreateDataflowEndpointGroupRequest = {}));
var CreateMissionProfileRequest;
(function (CreateMissionProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "CreateMissionProfileRequest");
    }
    CreateMissionProfileRequest.isa = isa;
})(CreateMissionProfileRequest = exports.CreateMissionProfileRequest || (exports.CreateMissionProfileRequest = {}));
var DataflowEndpoint;
(function (DataflowEndpoint) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataflowEndpoint");
    }
    DataflowEndpoint.isa = isa;
})(DataflowEndpoint = exports.DataflowEndpoint || (exports.DataflowEndpoint = {}));
var DataflowEndpointConfig;
(function (DataflowEndpointConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataflowEndpointConfig");
    }
    DataflowEndpointConfig.isa = isa;
})(DataflowEndpointConfig = exports.DataflowEndpointConfig || (exports.DataflowEndpointConfig = {}));
var DataflowEndpointGroupIdResponse;
(function (DataflowEndpointGroupIdResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataflowEndpointGroupIdResponse");
    }
    DataflowEndpointGroupIdResponse.isa = isa;
})(DataflowEndpointGroupIdResponse = exports.DataflowEndpointGroupIdResponse || (exports.DataflowEndpointGroupIdResponse = {}));
var DataflowEndpointListItem;
(function (DataflowEndpointListItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "DataflowEndpointListItem");
    }
    DataflowEndpointListItem.isa = isa;
})(DataflowEndpointListItem = exports.DataflowEndpointListItem || (exports.DataflowEndpointListItem = {}));
var DecodeConfig;
(function (DecodeConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DecodeConfig");
    }
    DecodeConfig.isa = isa;
})(DecodeConfig = exports.DecodeConfig || (exports.DecodeConfig = {}));
var DeleteConfigRequest;
(function (DeleteConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteConfigRequest");
    }
    DeleteConfigRequest.isa = isa;
})(DeleteConfigRequest = exports.DeleteConfigRequest || (exports.DeleteConfigRequest = {}));
var DeleteDataflowEndpointGroupRequest;
(function (DeleteDataflowEndpointGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteDataflowEndpointGroupRequest");
    }
    DeleteDataflowEndpointGroupRequest.isa = isa;
})(DeleteDataflowEndpointGroupRequest = exports.DeleteDataflowEndpointGroupRequest || (exports.DeleteDataflowEndpointGroupRequest = {}));
var DeleteMissionProfileRequest;
(function (DeleteMissionProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DeleteMissionProfileRequest");
    }
    DeleteMissionProfileRequest.isa = isa;
})(DeleteMissionProfileRequest = exports.DeleteMissionProfileRequest || (exports.DeleteMissionProfileRequest = {}));
var DemodulationConfig;
(function (DemodulationConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "DemodulationConfig");
    }
    DemodulationConfig.isa = isa;
})(DemodulationConfig = exports.DemodulationConfig || (exports.DemodulationConfig = {}));
var DescribeContactRequest;
(function (DescribeContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContactRequest");
    }
    DescribeContactRequest.isa = isa;
})(DescribeContactRequest = exports.DescribeContactRequest || (exports.DescribeContactRequest = {}));
var DescribeContactResponse;
(function (DescribeContactResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "DescribeContactResponse");
    }
    DescribeContactResponse.isa = isa;
})(DescribeContactResponse = exports.DescribeContactResponse || (exports.DescribeContactResponse = {}));
var EndpointDetails;
(function (EndpointDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "EndpointDetails");
    }
    EndpointDetails.isa = isa;
})(EndpointDetails = exports.EndpointDetails || (exports.EndpointDetails = {}));
var EndpointStatus;
(function (EndpointStatus) {
    EndpointStatus["created"] = "created";
    EndpointStatus["creating"] = "creating";
    EndpointStatus["deleted"] = "deleted";
    EndpointStatus["deleting"] = "deleting";
    EndpointStatus["failed"] = "failed";
})(EndpointStatus = exports.EndpointStatus || (exports.EndpointStatus = {}));
var GetConfigRequest;
(function (GetConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConfigRequest");
    }
    GetConfigRequest.isa = isa;
})(GetConfigRequest = exports.GetConfigRequest || (exports.GetConfigRequest = {}));
var GetConfigResponse;
(function (GetConfigResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetConfigResponse");
    }
    GetConfigResponse.isa = isa;
})(GetConfigResponse = exports.GetConfigResponse || (exports.GetConfigResponse = {}));
var GetDataflowEndpointGroupRequest;
(function (GetDataflowEndpointGroupRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataflowEndpointGroupRequest");
    }
    GetDataflowEndpointGroupRequest.isa = isa;
})(GetDataflowEndpointGroupRequest = exports.GetDataflowEndpointGroupRequest || (exports.GetDataflowEndpointGroupRequest = {}));
var GetDataflowEndpointGroupResponse;
(function (GetDataflowEndpointGroupResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetDataflowEndpointGroupResponse");
    }
    GetDataflowEndpointGroupResponse.isa = isa;
})(GetDataflowEndpointGroupResponse = exports.GetDataflowEndpointGroupResponse || (exports.GetDataflowEndpointGroupResponse = {}));
var GetMissionProfileRequest;
(function (GetMissionProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMissionProfileRequest");
    }
    GetMissionProfileRequest.isa = isa;
})(GetMissionProfileRequest = exports.GetMissionProfileRequest || (exports.GetMissionProfileRequest = {}));
var GetMissionProfileResponse;
(function (GetMissionProfileResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMissionProfileResponse");
    }
    GetMissionProfileResponse.isa = isa;
})(GetMissionProfileResponse = exports.GetMissionProfileResponse || (exports.GetMissionProfileResponse = {}));
var ListConfigsRequest;
(function (ListConfigsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigsRequest");
    }
    ListConfigsRequest.isa = isa;
})(ListConfigsRequest = exports.ListConfigsRequest || (exports.ListConfigsRequest = {}));
var ListConfigsResponse;
(function (ListConfigsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListConfigsResponse");
    }
    ListConfigsResponse.isa = isa;
})(ListConfigsResponse = exports.ListConfigsResponse || (exports.ListConfigsResponse = {}));
var ListContactsRequest;
(function (ListContactsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContactsRequest");
    }
    ListContactsRequest.isa = isa;
})(ListContactsRequest = exports.ListContactsRequest || (exports.ListContactsRequest = {}));
var ListContactsResponse;
(function (ListContactsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListContactsResponse");
    }
    ListContactsResponse.isa = isa;
})(ListContactsResponse = exports.ListContactsResponse || (exports.ListContactsResponse = {}));
var ListDataflowEndpointGroupsRequest;
(function (ListDataflowEndpointGroupsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDataflowEndpointGroupsRequest");
    }
    ListDataflowEndpointGroupsRequest.isa = isa;
})(ListDataflowEndpointGroupsRequest = exports.ListDataflowEndpointGroupsRequest || (exports.ListDataflowEndpointGroupsRequest = {}));
var ListDataflowEndpointGroupsResponse;
(function (ListDataflowEndpointGroupsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListDataflowEndpointGroupsResponse");
    }
    ListDataflowEndpointGroupsResponse.isa = isa;
})(ListDataflowEndpointGroupsResponse = exports.ListDataflowEndpointGroupsResponse || (exports.ListDataflowEndpointGroupsResponse = {}));
var ListMissionProfilesRequest;
(function (ListMissionProfilesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMissionProfilesRequest");
    }
    ListMissionProfilesRequest.isa = isa;
})(ListMissionProfilesRequest = exports.ListMissionProfilesRequest || (exports.ListMissionProfilesRequest = {}));
var ListMissionProfilesResponse;
(function (ListMissionProfilesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListMissionProfilesResponse");
    }
    ListMissionProfilesResponse.isa = isa;
})(ListMissionProfilesResponse = exports.ListMissionProfilesResponse || (exports.ListMissionProfilesResponse = {}));
var MissionProfileIdResponse;
(function (MissionProfileIdResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissionProfileIdResponse");
    }
    MissionProfileIdResponse.isa = isa;
})(MissionProfileIdResponse = exports.MissionProfileIdResponse || (exports.MissionProfileIdResponse = {}));
var MissionProfileListItem;
(function (MissionProfileListItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "MissionProfileListItem");
    }
    MissionProfileListItem.isa = isa;
})(MissionProfileListItem = exports.MissionProfileListItem || (exports.MissionProfileListItem = {}));
var ReserveContactRequest;
(function (ReserveContactRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ReserveContactRequest");
    }
    ReserveContactRequest.isa = isa;
})(ReserveContactRequest = exports.ReserveContactRequest || (exports.ReserveContactRequest = {}));
var TrackingConfig;
(function (TrackingConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "TrackingConfig");
    }
    TrackingConfig.isa = isa;
})(TrackingConfig = exports.TrackingConfig || (exports.TrackingConfig = {}));
var UpdateConfigRequest;
(function (UpdateConfigRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateConfigRequest");
    }
    UpdateConfigRequest.isa = isa;
})(UpdateConfigRequest = exports.UpdateConfigRequest || (exports.UpdateConfigRequest = {}));
var UpdateMissionProfileRequest;
(function (UpdateMissionProfileRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UpdateMissionProfileRequest");
    }
    UpdateMissionProfileRequest.isa = isa;
})(UpdateMissionProfileRequest = exports.UpdateMissionProfileRequest || (exports.UpdateMissionProfileRequest = {}));
var UplinkEchoConfig;
(function (UplinkEchoConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "UplinkEchoConfig");
    }
    UplinkEchoConfig.isa = isa;
})(UplinkEchoConfig = exports.UplinkEchoConfig || (exports.UplinkEchoConfig = {}));
var AngleUnits;
(function (AngleUnits) {
    AngleUnits["DEGREE_ANGLE"] = "DEGREE_ANGLE";
    AngleUnits["RADIAN"] = "RADIAN";
})(AngleUnits = exports.AngleUnits || (exports.AngleUnits = {}));
var BandwidthUnits;
(function (BandwidthUnits) {
    BandwidthUnits["GHZ"] = "GHz";
    BandwidthUnits["KHZ"] = "kHz";
    BandwidthUnits["MHZ"] = "MHz";
})(BandwidthUnits = exports.BandwidthUnits || (exports.BandwidthUnits = {}));
var ConfigCapabilityType;
(function (ConfigCapabilityType) {
    ConfigCapabilityType["ANTENNA_DOWNLINK"] = "antenna-downlink";
    ConfigCapabilityType["ANTENNA_DOWNLINK_DEMOD_DECODE"] = "antenna-downlink-demod-decode";
    ConfigCapabilityType["ANTENNA_UPLINK"] = "antenna-uplink";
    ConfigCapabilityType["DATAFLOW_ENDPOINT"] = "dataflow-endpoint";
    ConfigCapabilityType["TRACKING"] = "tracking";
    ConfigCapabilityType["UPLINK_ECHO"] = "uplink-echo";
})(ConfigCapabilityType = exports.ConfigCapabilityType || (exports.ConfigCapabilityType = {}));
var ContactStatus;
(function (ContactStatus) {
    ContactStatus["AVAILABLE"] = "AVAILABLE";
    ContactStatus["AWS_CANCELLED"] = "AWS_CANCELLED";
    ContactStatus["CANCELLED"] = "CANCELLED";
    ContactStatus["COMPLETED"] = "COMPLETED";
    ContactStatus["FAILED"] = "FAILED";
    ContactStatus["FAILED_TO_SCHEDULE"] = "FAILED_TO_SCHEDULE";
    ContactStatus["PASS"] = "PASS";
    ContactStatus["POSTPASS"] = "POSTPASS";
    ContactStatus["PREPASS"] = "PREPASS";
    ContactStatus["SCHEDULED"] = "SCHEDULED";
    ContactStatus["SCHEDULING"] = "SCHEDULING";
})(ContactStatus = exports.ContactStatus || (exports.ContactStatus = {}));
var Criticality;
(function (Criticality) {
    Criticality["PREFERRED"] = "PREFERRED";
    Criticality["REMOVED"] = "REMOVED";
    Criticality["REQUIRED"] = "REQUIRED";
})(Criticality = exports.Criticality || (exports.Criticality = {}));
var DependencyException;
(function (DependencyException) {
    function isa(o) {
        return smithy_client_1.isa(o, "DependencyException");
    }
    DependencyException.isa = isa;
})(DependencyException = exports.DependencyException || (exports.DependencyException = {}));
var Eirp;
(function (Eirp) {
    function isa(o) {
        return smithy_client_1.isa(o, "Eirp");
    }
    Eirp.isa = isa;
})(Eirp = exports.Eirp || (exports.Eirp = {}));
var EirpUnits;
(function (EirpUnits) {
    EirpUnits["DBW"] = "dBW";
})(EirpUnits = exports.EirpUnits || (exports.EirpUnits = {}));
var Elevation;
(function (Elevation) {
    function isa(o) {
        return smithy_client_1.isa(o, "Elevation");
    }
    Elevation.isa = isa;
})(Elevation = exports.Elevation || (exports.Elevation = {}));
var Frequency;
(function (Frequency) {
    function isa(o) {
        return smithy_client_1.isa(o, "Frequency");
    }
    Frequency.isa = isa;
})(Frequency = exports.Frequency || (exports.Frequency = {}));
var FrequencyBandwidth;
(function (FrequencyBandwidth) {
    function isa(o) {
        return smithy_client_1.isa(o, "FrequencyBandwidth");
    }
    FrequencyBandwidth.isa = isa;
})(FrequencyBandwidth = exports.FrequencyBandwidth || (exports.FrequencyBandwidth = {}));
var FrequencyUnits;
(function (FrequencyUnits) {
    FrequencyUnits["GHZ"] = "GHz";
    FrequencyUnits["KHZ"] = "kHz";
    FrequencyUnits["MHZ"] = "MHz";
})(FrequencyUnits = exports.FrequencyUnits || (exports.FrequencyUnits = {}));
var GetMinuteUsageRequest;
(function (GetMinuteUsageRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMinuteUsageRequest");
    }
    GetMinuteUsageRequest.isa = isa;
})(GetMinuteUsageRequest = exports.GetMinuteUsageRequest || (exports.GetMinuteUsageRequest = {}));
var GetMinuteUsageResponse;
(function (GetMinuteUsageResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetMinuteUsageResponse");
    }
    GetMinuteUsageResponse.isa = isa;
})(GetMinuteUsageResponse = exports.GetMinuteUsageResponse || (exports.GetMinuteUsageResponse = {}));
var GetSatelliteRequest;
(function (GetSatelliteRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSatelliteRequest");
    }
    GetSatelliteRequest.isa = isa;
})(GetSatelliteRequest = exports.GetSatelliteRequest || (exports.GetSatelliteRequest = {}));
var GetSatelliteResponse;
(function (GetSatelliteResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "GetSatelliteResponse");
    }
    GetSatelliteResponse.isa = isa;
})(GetSatelliteResponse = exports.GetSatelliteResponse || (exports.GetSatelliteResponse = {}));
var GroundStationData;
(function (GroundStationData) {
    function isa(o) {
        return smithy_client_1.isa(o, "GroundStationData");
    }
    GroundStationData.isa = isa;
})(GroundStationData = exports.GroundStationData || (exports.GroundStationData = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    function isa(o) {
        return smithy_client_1.isa(o, "InvalidParameterException");
    }
    InvalidParameterException.isa = isa;
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ListGroundStationsRequest;
(function (ListGroundStationsRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroundStationsRequest");
    }
    ListGroundStationsRequest.isa = isa;
})(ListGroundStationsRequest = exports.ListGroundStationsRequest || (exports.ListGroundStationsRequest = {}));
var ListGroundStationsResponse;
(function (ListGroundStationsResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListGroundStationsResponse");
    }
    ListGroundStationsResponse.isa = isa;
})(ListGroundStationsResponse = exports.ListGroundStationsResponse || (exports.ListGroundStationsResponse = {}));
var ListSatellitesRequest;
(function (ListSatellitesRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSatellitesRequest");
    }
    ListSatellitesRequest.isa = isa;
})(ListSatellitesRequest = exports.ListSatellitesRequest || (exports.ListSatellitesRequest = {}));
var ListSatellitesResponse;
(function (ListSatellitesResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListSatellitesResponse");
    }
    ListSatellitesResponse.isa = isa;
})(ListSatellitesResponse = exports.ListSatellitesResponse || (exports.ListSatellitesResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceRequest");
    }
    ListTagsForResourceRequest.isa = isa;
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "ListTagsForResourceResponse");
    }
    ListTagsForResourceResponse.isa = isa;
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var Polarization;
(function (Polarization) {
    Polarization["LEFT_HAND"] = "LEFT_HAND";
    Polarization["NONE"] = "NONE";
    Polarization["RIGHT_HAND"] = "RIGHT_HAND";
})(Polarization = exports.Polarization || (exports.Polarization = {}));
var ResourceNotFoundException;
(function (ResourceNotFoundException) {
    function isa(o) {
        return smithy_client_1.isa(o, "ResourceNotFoundException");
    }
    ResourceNotFoundException.isa = isa;
})(ResourceNotFoundException = exports.ResourceNotFoundException || (exports.ResourceNotFoundException = {}));
var SatelliteListItem;
(function (SatelliteListItem) {
    function isa(o) {
        return smithy_client_1.isa(o, "SatelliteListItem");
    }
    SatelliteListItem.isa = isa;
})(SatelliteListItem = exports.SatelliteListItem || (exports.SatelliteListItem = {}));
var SecurityDetails;
(function (SecurityDetails) {
    function isa(o) {
        return smithy_client_1.isa(o, "SecurityDetails");
    }
    SecurityDetails.isa = isa;
})(SecurityDetails = exports.SecurityDetails || (exports.SecurityDetails = {}));
var SocketAddress;
(function (SocketAddress) {
    function isa(o) {
        return smithy_client_1.isa(o, "SocketAddress");
    }
    SocketAddress.isa = isa;
})(SocketAddress = exports.SocketAddress || (exports.SocketAddress = {}));
var SpectrumConfig;
(function (SpectrumConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "SpectrumConfig");
    }
    SpectrumConfig.isa = isa;
})(SpectrumConfig = exports.SpectrumConfig || (exports.SpectrumConfig = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceRequest");
    }
    TagResourceRequest.isa = isa;
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "TagResourceResponse");
    }
    TagResourceResponse.isa = isa;
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceRequest");
    }
    UntagResourceRequest.isa = isa;
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    function isa(o) {
        return smithy_client_1.isa(o, "UntagResourceResponse");
    }
    UntagResourceResponse.isa = isa;
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UplinkSpectrumConfig;
(function (UplinkSpectrumConfig) {
    function isa(o) {
        return smithy_client_1.isa(o, "UplinkSpectrumConfig");
    }
    UplinkSpectrumConfig.isa = isa;
})(UplinkSpectrumConfig = exports.UplinkSpectrumConfig || (exports.UplinkSpectrumConfig = {}));
//# sourceMappingURL=index.js.map