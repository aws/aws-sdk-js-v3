import {
  AgentStatus,
  AngleUnits,
  AuditResults,
  BandwidthUnits,
  CancelContactCommand,
  CapabilityHealth,
  CapabilityHealthReason,
  ConfigCapabilityType,
  ContactStatus,
  CreateConfigCommand,
  CreateDataflowEndpointGroupCommand,
  CreateDataflowEndpointGroupV2Command,
  CreateEphemerisCommand,
  CreateMissionProfileCommand,
  Criticality,
  DeleteConfigCommand,
  DeleteDataflowEndpointGroupCommand,
  DeleteEphemerisCommand,
  DeleteMissionProfileCommand,
  DescribeContactCommand,
  DescribeEphemerisCommand,
  EirpUnits,
  EndpointStatus,
  EphemerisErrorCode,
  EphemerisInvalidReason,
  EphemerisSource,
  EphemerisStatus,
  EphemerisType,
  FrequencyUnits,
  GetAgentConfigurationCommand,
  GetAgentTaskResponseUrlCommand,
  GetConfigCommand,
  GetDataflowEndpointGroupCommand,
  GetMinuteUsageCommand,
  GetMissionProfileCommand,
  GetSatelliteCommand,
  GroundStation,
  GroundStationClient,
  GroundStationServiceException,
  ListConfigsCommand,
  ListContactsCommand,
  ListDataflowEndpointGroupsCommand,
  ListEphemeridesCommand,
  ListGroundStationsCommand,
  ListMissionProfilesCommand,
  ListSatellitesCommand,
  ListTagsForResourceCommand,
  Polarization,
  RegisterAgentCommand,
  ReserveContactCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentStatusCommand,
  UpdateConfigCommand,
  UpdateEphemerisCommand,
  UpdateMissionProfileCommand,
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
assert(typeof CreateConfigCommand === "function");
assert(typeof CreateDataflowEndpointGroupCommand === "function");
assert(typeof CreateDataflowEndpointGroupV2Command === "function");
assert(typeof CreateEphemerisCommand === "function");
assert(typeof CreateMissionProfileCommand === "function");
assert(typeof DeleteConfigCommand === "function");
assert(typeof DeleteDataflowEndpointGroupCommand === "function");
assert(typeof DeleteEphemerisCommand === "function");
assert(typeof DeleteMissionProfileCommand === "function");
assert(typeof DescribeContactCommand === "function");
assert(typeof DescribeEphemerisCommand === "function");
assert(typeof GetAgentConfigurationCommand === "function");
assert(typeof GetAgentTaskResponseUrlCommand === "function");
assert(typeof GetConfigCommand === "function");
assert(typeof GetDataflowEndpointGroupCommand === "function");
assert(typeof GetMinuteUsageCommand === "function");
assert(typeof GetMissionProfileCommand === "function");
assert(typeof GetSatelliteCommand === "function");
assert(typeof ListConfigsCommand === "function");
assert(typeof ListContactsCommand === "function");
assert(typeof ListDataflowEndpointGroupsCommand === "function");
assert(typeof ListEphemeridesCommand === "function");
assert(typeof ListGroundStationsCommand === "function");
assert(typeof ListMissionProfilesCommand === "function");
assert(typeof ListSatellitesCommand === "function");
assert(typeof ListTagsForResourceCommand === "function");
assert(typeof RegisterAgentCommand === "function");
assert(typeof ReserveContactCommand === "function");
assert(typeof TagResourceCommand === "function");
assert(typeof UntagResourceCommand === "function");
assert(typeof UpdateAgentStatusCommand === "function");
assert(typeof UpdateConfigCommand === "function");
assert(typeof UpdateEphemerisCommand === "function");
assert(typeof UpdateMissionProfileCommand === "function");
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
