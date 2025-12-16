import {
  AgentDetails$,
  AgentStatus,
  AggregateStatus$,
  AngleUnits,
  AntennaDemodDecodeDetails$,
  AntennaDownlinkConfig$,
  AntennaDownlinkDemodDecodeConfig$,
  AntennaUplinkConfig$,
  AuditResults,
  AwsGroundStationAgentEndpoint$,
  AzElEphemeris$,
  AzElEphemerisFilter$,
  AzElProgramTrackSettings$,
  AzElSegment$,
  AzElSegments$,
  AzElSegmentsData$,
  BandwidthUnits,
  CancelContact$,
  CancelContactCommand,
  CancelContactRequest$,
  CapabilityHealth,
  CapabilityHealthReason,
  ComponentStatusData$,
  ComponentVersion$,
  ConfigCapabilityType,
  ConfigDetails$,
  ConfigIdResponse$,
  ConfigListItem$,
  ConfigTypeData$,
  ConnectionDetails$,
  ContactData$,
  ContactIdResponse$,
  ContactStatus,
  CreateConfig$,
  CreateConfigCommand,
  CreateConfigRequest$,
  CreateDataflowEndpointGroup$,
  CreateDataflowEndpointGroupCommand,
  CreateDataflowEndpointGroupRequest$,
  CreateDataflowEndpointGroupV2$,
  CreateDataflowEndpointGroupV2Command,
  CreateDataflowEndpointGroupV2Request$,
  CreateDataflowEndpointGroupV2Response$,
  CreateEndpointDetails$,
  CreateEphemeris$,
  CreateEphemerisCommand,
  CreateEphemerisRequest$,
  CreateMissionProfile$,
  CreateMissionProfileCommand,
  CreateMissionProfileRequest$,
  Criticality,
  DataflowDetail$,
  DataflowEndpoint$,
  DataflowEndpointConfig$,
  DataflowEndpointGroupIdResponse$,
  DataflowEndpointListItem$,
  DecodeConfig$,
  DeleteConfig$,
  DeleteConfigCommand,
  DeleteConfigRequest$,
  DeleteDataflowEndpointGroup$,
  DeleteDataflowEndpointGroupCommand,
  DeleteDataflowEndpointGroupRequest$,
  DeleteEphemeris$,
  DeleteEphemerisCommand,
  DeleteEphemerisRequest$,
  DeleteMissionProfile$,
  DeleteMissionProfileCommand,
  DeleteMissionProfileRequest$,
  DemodulationConfig$,
  DependencyException,
  DependencyException$,
  DescribeContact$,
  DescribeContactCommand,
  DescribeContactRequest$,
  DescribeContactResponse$,
  DescribeEphemeris$,
  DescribeEphemerisCommand,
  DescribeEphemerisRequest$,
  DescribeEphemerisResponse$,
  Destination$,
  DiscoveryData$,
  DownlinkAwsGroundStationAgentEndpoint$,
  DownlinkAwsGroundStationAgentEndpointDetails$,
  DownlinkConnectionDetails$,
  DownlinkDataflowDetails$,
  Eirp$,
  EirpUnits,
  Elevation$,
  EndpointDetails$,
  EndpointStatus,
  EphemerisData$,
  EphemerisDescription$,
  EphemerisErrorCode,
  EphemerisErrorReason$,
  EphemerisFilter$,
  EphemerisIdResponse$,
  EphemerisInvalidReason,
  EphemerisItem$,
  EphemerisMetaData$,
  EphemerisResponseData$,
  EphemerisSource,
  EphemerisStatus,
  EphemerisType,
  EphemerisTypeDescription$,
  Frequency$,
  FrequencyBandwidth$,
  FrequencyUnits,
  GetAgentConfiguration$,
  GetAgentConfigurationCommand,
  GetAgentConfigurationRequest$,
  GetAgentConfigurationResponse$,
  GetAgentTaskResponseUrl$,
  GetAgentTaskResponseUrlCommand,
  GetAgentTaskResponseUrlRequest$,
  GetAgentTaskResponseUrlResponse$,
  GetConfig$,
  GetConfigCommand,
  GetConfigRequest$,
  GetConfigResponse$,
  GetDataflowEndpointGroup$,
  GetDataflowEndpointGroupCommand,
  GetDataflowEndpointGroupRequest$,
  GetDataflowEndpointGroupResponse$,
  GetMinuteUsage$,
  GetMinuteUsageCommand,
  GetMinuteUsageRequest$,
  GetMinuteUsageResponse$,
  GetMissionProfile$,
  GetMissionProfileCommand,
  GetMissionProfileRequest$,
  GetMissionProfileResponse$,
  GetSatellite$,
  GetSatelliteCommand,
  GetSatelliteRequest$,
  GetSatelliteResponse$,
  GroundStation,
  GroundStationClient,
  GroundStationData$,
  GroundStationServiceException,
  ISO8601TimeRange$,
  IntegerRange$,
  InvalidParameterException,
  InvalidParameterException$,
  KmsKey$,
  ListConfigs$,
  ListConfigsCommand,
  ListConfigsRequest$,
  ListConfigsResponse$,
  ListContacts$,
  ListContactsCommand,
  ListContactsRequest$,
  ListContactsResponse$,
  ListDataflowEndpointGroups$,
  ListDataflowEndpointGroupsCommand,
  ListDataflowEndpointGroupsRequest$,
  ListDataflowEndpointGroupsResponse$,
  ListEphemerides$,
  ListEphemeridesCommand,
  ListEphemeridesRequest$,
  ListEphemeridesResponse$,
  ListGroundStations$,
  ListGroundStationsCommand,
  ListGroundStationsRequest$,
  ListGroundStationsResponse$,
  ListMissionProfiles$,
  ListMissionProfilesCommand,
  ListMissionProfilesRequest$,
  ListMissionProfilesResponse$,
  ListSatellites$,
  ListSatellitesCommand,
  ListSatellitesRequest$,
  ListSatellitesResponse$,
  ListTagsForResource$,
  ListTagsForResourceCommand,
  ListTagsForResourceRequest$,
  ListTagsForResourceResponse$,
  MissionProfileIdResponse$,
  MissionProfileListItem$,
  OEMEphemeris$,
  Polarization,
  ProgramTrackSettings$,
  RangedConnectionDetails$,
  RangedSocketAddress$,
  RegisterAgent$,
  RegisterAgentCommand,
  RegisterAgentRequest$,
  RegisterAgentResponse$,
  ReserveContact$,
  ReserveContactCommand,
  ReserveContactRequest$,
  ResourceInUseException,
  ResourceInUseException$,
  ResourceLimitExceededException,
  ResourceLimitExceededException$,
  ResourceNotFoundException,
  ResourceNotFoundException$,
  S3Object$,
  S3RecordingConfig$,
  S3RecordingDetails$,
  SatelliteListItem$,
  SecurityDetails$,
  ServiceQuotaExceededException,
  ServiceQuotaExceededException$,
  SocketAddress$,
  Source$,
  SpectrumConfig$,
  TLEData$,
  TLEEphemeris$,
  TagResource$,
  TagResourceCommand,
  TagResourceRequest$,
  TagResourceResponse$,
  TimeAzEl$,
  TimeRange$,
  TrackingConfig$,
  TrackingOverrides$,
  UntagResource$,
  UntagResourceCommand,
  UntagResourceRequest$,
  UntagResourceResponse$,
  UpdateAgentStatus$,
  UpdateAgentStatusCommand,
  UpdateAgentStatusRequest$,
  UpdateAgentStatusResponse$,
  UpdateConfig$,
  UpdateConfigCommand,
  UpdateConfigRequest$,
  UpdateEphemeris$,
  UpdateEphemerisCommand,
  UpdateEphemerisRequest$,
  UpdateMissionProfile$,
  UpdateMissionProfileCommand,
  UpdateMissionProfileRequest$,
  UplinkAwsGroundStationAgentEndpoint$,
  UplinkAwsGroundStationAgentEndpointDetails$,
  UplinkConnectionDetails$,
  UplinkDataflowDetails$,
  UplinkEchoConfig$,
  UplinkSpectrumConfig$,
  paginateListConfigs,
  paginateListContacts,
  paginateListDataflowEndpointGroups,
  paginateListEphemerides,
  paginateListGroundStations,
  paginateListMissionProfiles,
  paginateListSatellites,
  waitForContactScheduled,
  waitUntilContactScheduled,
} from "../dist-cjs/index.js";
import assert from "node:assert";
// clients
assert(typeof GroundStationClient === "function");
assert(typeof GroundStation === "function");
// commands
assert(typeof CancelContactCommand === "function");
assert(typeof CancelContact$ === "object");
assert(typeof CreateConfigCommand === "function");
assert(typeof CreateConfig$ === "object");
assert(typeof CreateDataflowEndpointGroupCommand === "function");
assert(typeof CreateDataflowEndpointGroup$ === "object");
assert(typeof CreateDataflowEndpointGroupV2Command === "function");
assert(typeof CreateDataflowEndpointGroupV2$ === "object");
assert(typeof CreateEphemerisCommand === "function");
assert(typeof CreateEphemeris$ === "object");
assert(typeof CreateMissionProfileCommand === "function");
assert(typeof CreateMissionProfile$ === "object");
assert(typeof DeleteConfigCommand === "function");
assert(typeof DeleteConfig$ === "object");
assert(typeof DeleteDataflowEndpointGroupCommand === "function");
assert(typeof DeleteDataflowEndpointGroup$ === "object");
assert(typeof DeleteEphemerisCommand === "function");
assert(typeof DeleteEphemeris$ === "object");
assert(typeof DeleteMissionProfileCommand === "function");
assert(typeof DeleteMissionProfile$ === "object");
assert(typeof DescribeContactCommand === "function");
assert(typeof DescribeContact$ === "object");
assert(typeof DescribeEphemerisCommand === "function");
assert(typeof DescribeEphemeris$ === "object");
assert(typeof GetAgentConfigurationCommand === "function");
assert(typeof GetAgentConfiguration$ === "object");
assert(typeof GetAgentTaskResponseUrlCommand === "function");
assert(typeof GetAgentTaskResponseUrl$ === "object");
assert(typeof GetConfigCommand === "function");
assert(typeof GetConfig$ === "object");
assert(typeof GetDataflowEndpointGroupCommand === "function");
assert(typeof GetDataflowEndpointGroup$ === "object");
assert(typeof GetMinuteUsageCommand === "function");
assert(typeof GetMinuteUsage$ === "object");
assert(typeof GetMissionProfileCommand === "function");
assert(typeof GetMissionProfile$ === "object");
assert(typeof GetSatelliteCommand === "function");
assert(typeof GetSatellite$ === "object");
assert(typeof ListConfigsCommand === "function");
assert(typeof ListConfigs$ === "object");
assert(typeof ListContactsCommand === "function");
assert(typeof ListContacts$ === "object");
assert(typeof ListDataflowEndpointGroupsCommand === "function");
assert(typeof ListDataflowEndpointGroups$ === "object");
assert(typeof ListEphemeridesCommand === "function");
assert(typeof ListEphemerides$ === "object");
assert(typeof ListGroundStationsCommand === "function");
assert(typeof ListGroundStations$ === "object");
assert(typeof ListMissionProfilesCommand === "function");
assert(typeof ListMissionProfiles$ === "object");
assert(typeof ListSatellitesCommand === "function");
assert(typeof ListSatellites$ === "object");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof ListTagsForResource$ === "object");
assert(typeof RegisterAgentCommand === "function");
assert(typeof RegisterAgent$ === "object");
assert(typeof ReserveContactCommand === "function");
assert(typeof ReserveContact$ === "object");
assert(typeof TagResourceCommand === "function");
assert(typeof TagResource$ === "object");
assert(typeof UntagResourceCommand === "function");
assert(typeof UntagResource$ === "object");
assert(typeof UpdateAgentStatusCommand === "function");
assert(typeof UpdateAgentStatus$ === "object");
assert(typeof UpdateConfigCommand === "function");
assert(typeof UpdateConfig$ === "object");
assert(typeof UpdateEphemerisCommand === "function");
assert(typeof UpdateEphemeris$ === "object");
assert(typeof UpdateMissionProfileCommand === "function");
assert(typeof UpdateMissionProfile$ === "object");
// structural schemas
assert(typeof AgentDetails$ === "object");
assert(typeof AggregateStatus$ === "object");
assert(typeof AntennaDemodDecodeDetails$ === "object");
assert(typeof AntennaDownlinkConfig$ === "object");
assert(typeof AntennaDownlinkDemodDecodeConfig$ === "object");
assert(typeof AntennaUplinkConfig$ === "object");
assert(typeof AwsGroundStationAgentEndpoint$ === "object");
assert(typeof AzElEphemeris$ === "object");
assert(typeof AzElEphemerisFilter$ === "object");
assert(typeof AzElProgramTrackSettings$ === "object");
assert(typeof AzElSegment$ === "object");
assert(typeof AzElSegments$ === "object");
assert(typeof AzElSegmentsData$ === "object");
assert(typeof CancelContactRequest$ === "object");
assert(typeof ComponentStatusData$ === "object");
assert(typeof ComponentVersion$ === "object");
assert(typeof ConfigDetails$ === "object");
assert(typeof ConfigIdResponse$ === "object");
assert(typeof ConfigListItem$ === "object");
assert(typeof ConfigTypeData$ === "object");
assert(typeof ConnectionDetails$ === "object");
assert(typeof ContactData$ === "object");
assert(typeof ContactIdResponse$ === "object");
assert(typeof CreateConfigRequest$ === "object");
assert(typeof CreateDataflowEndpointGroupRequest$ === "object");
assert(typeof CreateDataflowEndpointGroupV2Request$ === "object");
assert(typeof CreateDataflowEndpointGroupV2Response$ === "object");
assert(typeof CreateEndpointDetails$ === "object");
assert(typeof CreateEphemerisRequest$ === "object");
assert(typeof CreateMissionProfileRequest$ === "object");
assert(typeof DataflowDetail$ === "object");
assert(typeof DataflowEndpoint$ === "object");
assert(typeof DataflowEndpointConfig$ === "object");
assert(typeof DataflowEndpointGroupIdResponse$ === "object");
assert(typeof DataflowEndpointListItem$ === "object");
assert(typeof DecodeConfig$ === "object");
assert(typeof DeleteConfigRequest$ === "object");
assert(typeof DeleteDataflowEndpointGroupRequest$ === "object");
assert(typeof DeleteEphemerisRequest$ === "object");
assert(typeof DeleteMissionProfileRequest$ === "object");
assert(typeof DemodulationConfig$ === "object");
assert(typeof DescribeContactRequest$ === "object");
assert(typeof DescribeContactResponse$ === "object");
assert(typeof DescribeEphemerisRequest$ === "object");
assert(typeof DescribeEphemerisResponse$ === "object");
assert(typeof Destination$ === "object");
assert(typeof DiscoveryData$ === "object");
assert(typeof DownlinkAwsGroundStationAgentEndpoint$ === "object");
assert(typeof DownlinkAwsGroundStationAgentEndpointDetails$ === "object");
assert(typeof DownlinkConnectionDetails$ === "object");
assert(typeof DownlinkDataflowDetails$ === "object");
assert(typeof Eirp$ === "object");
assert(typeof Elevation$ === "object");
assert(typeof EndpointDetails$ === "object");
assert(typeof EphemerisData$ === "object");
assert(typeof EphemerisDescription$ === "object");
assert(typeof EphemerisErrorReason$ === "object");
assert(typeof EphemerisFilter$ === "object");
assert(typeof EphemerisIdResponse$ === "object");
assert(typeof EphemerisItem$ === "object");
assert(typeof EphemerisMetaData$ === "object");
assert(typeof EphemerisResponseData$ === "object");
assert(typeof EphemerisTypeDescription$ === "object");
assert(typeof Frequency$ === "object");
assert(typeof FrequencyBandwidth$ === "object");
assert(typeof GetAgentConfigurationRequest$ === "object");
assert(typeof GetAgentConfigurationResponse$ === "object");
assert(typeof GetAgentTaskResponseUrlRequest$ === "object");
assert(typeof GetAgentTaskResponseUrlResponse$ === "object");
assert(typeof GetConfigRequest$ === "object");
assert(typeof GetConfigResponse$ === "object");
assert(typeof GetDataflowEndpointGroupRequest$ === "object");
assert(typeof GetDataflowEndpointGroupResponse$ === "object");
assert(typeof GetMinuteUsageRequest$ === "object");
assert(typeof GetMinuteUsageResponse$ === "object");
assert(typeof GetMissionProfileRequest$ === "object");
assert(typeof GetMissionProfileResponse$ === "object");
assert(typeof GetSatelliteRequest$ === "object");
assert(typeof GetSatelliteResponse$ === "object");
assert(typeof GroundStationData$ === "object");
assert(typeof IntegerRange$ === "object");
assert(typeof ISO8601TimeRange$ === "object");
assert(typeof KmsKey$ === "object");
assert(typeof ListConfigsRequest$ === "object");
assert(typeof ListConfigsResponse$ === "object");
assert(typeof ListContactsRequest$ === "object");
assert(typeof ListContactsResponse$ === "object");
assert(typeof ListDataflowEndpointGroupsRequest$ === "object");
assert(typeof ListDataflowEndpointGroupsResponse$ === "object");
assert(typeof ListEphemeridesRequest$ === "object");
assert(typeof ListEphemeridesResponse$ === "object");
assert(typeof ListGroundStationsRequest$ === "object");
assert(typeof ListGroundStationsResponse$ === "object");
assert(typeof ListMissionProfilesRequest$ === "object");
assert(typeof ListMissionProfilesResponse$ === "object");
assert(typeof ListSatellitesRequest$ === "object");
assert(typeof ListSatellitesResponse$ === "object");
assert(typeof ListTagsForResourceRequest$ === "object");
assert(typeof ListTagsForResourceResponse$ === "object");
assert(typeof MissionProfileIdResponse$ === "object");
assert(typeof MissionProfileListItem$ === "object");
assert(typeof OEMEphemeris$ === "object");
assert(typeof ProgramTrackSettings$ === "object");
assert(typeof RangedConnectionDetails$ === "object");
assert(typeof RangedSocketAddress$ === "object");
assert(typeof RegisterAgentRequest$ === "object");
assert(typeof RegisterAgentResponse$ === "object");
assert(typeof ReserveContactRequest$ === "object");
assert(typeof S3Object$ === "object");
assert(typeof S3RecordingConfig$ === "object");
assert(typeof S3RecordingDetails$ === "object");
assert(typeof SatelliteListItem$ === "object");
assert(typeof SecurityDetails$ === "object");
assert(typeof SocketAddress$ === "object");
assert(typeof Source$ === "object");
assert(typeof SpectrumConfig$ === "object");
assert(typeof TagResourceRequest$ === "object");
assert(typeof TagResourceResponse$ === "object");
assert(typeof TimeAzEl$ === "object");
assert(typeof TimeRange$ === "object");
assert(typeof TLEData$ === "object");
assert(typeof TLEEphemeris$ === "object");
assert(typeof TrackingConfig$ === "object");
assert(typeof TrackingOverrides$ === "object");
assert(typeof UntagResourceRequest$ === "object");
assert(typeof UntagResourceResponse$ === "object");
assert(typeof UpdateAgentStatusRequest$ === "object");
assert(typeof UpdateAgentStatusResponse$ === "object");
assert(typeof UpdateConfigRequest$ === "object");
assert(typeof UpdateEphemerisRequest$ === "object");
assert(typeof UpdateMissionProfileRequest$ === "object");
assert(typeof UplinkAwsGroundStationAgentEndpoint$ === "object");
assert(typeof UplinkAwsGroundStationAgentEndpointDetails$ === "object");
assert(typeof UplinkConnectionDetails$ === "object");
assert(typeof UplinkDataflowDetails$ === "object");
assert(typeof UplinkEchoConfig$ === "object");
assert(typeof UplinkSpectrumConfig$ === "object");
// enums
assert(typeof AgentStatus === "object");
assert(typeof AngleUnits === "object");
assert(typeof AuditResults === "object");
assert(typeof BandwidthUnits === "object");
assert(typeof CapabilityHealth === "object");
assert(typeof CapabilityHealthReason === "object");
assert(typeof ConfigCapabilityType === "object");
assert(typeof ContactStatus === "object");
assert(typeof Criticality === "object");
assert(typeof EirpUnits === "object");
assert(typeof EndpointStatus === "object");
assert(typeof EphemerisErrorCode === "object");
assert(typeof EphemerisInvalidReason === "object");
assert(typeof EphemerisSource === "object");
assert(typeof EphemerisStatus === "object");
assert(typeof EphemerisType === "object");
assert(typeof FrequencyUnits === "object");
assert(typeof Polarization === "object");
// errors
assert(DependencyException.prototype instanceof GroundStationServiceException);
assert(typeof DependencyException$ === "object");
assert(InvalidParameterException.prototype instanceof GroundStationServiceException);
assert(typeof InvalidParameterException$ === "object");
assert(ResourceInUseException.prototype instanceof GroundStationServiceException);
assert(typeof ResourceInUseException$ === "object");
assert(ResourceLimitExceededException.prototype instanceof GroundStationServiceException);
assert(typeof ResourceLimitExceededException$ === "object");
assert(ResourceNotFoundException.prototype instanceof GroundStationServiceException);
assert(typeof ResourceNotFoundException$ === "object");
assert(ServiceQuotaExceededException.prototype instanceof GroundStationServiceException);
assert(typeof ServiceQuotaExceededException$ === "object");
assert(GroundStationServiceException.prototype instanceof Error);
// waiters
assert(typeof waitForContactScheduled === "function");
assert(typeof waitUntilContactScheduled === "function");
// paginators
assert(typeof paginateListConfigs === "function");
assert(typeof paginateListContacts === "function");
assert(typeof paginateListDataflowEndpointGroups === "function");
assert(typeof paginateListEphemerides === "function");
assert(typeof paginateListGroundStations === "function");
assert(typeof paginateListMissionProfiles === "function");
assert(typeof paginateListSatellites === "function");
console.log(`GroundStation index test passed.`);
