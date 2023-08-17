// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CancelContactCommand,
  CancelContactCommandInput,
  CancelContactCommandOutput,
} from "./commands/CancelContactCommand";
import {
  CreateConfigCommand,
  CreateConfigCommandInput,
  CreateConfigCommandOutput,
} from "./commands/CreateConfigCommand";
import {
  CreateDataflowEndpointGroupCommand,
  CreateDataflowEndpointGroupCommandInput,
  CreateDataflowEndpointGroupCommandOutput,
} from "./commands/CreateDataflowEndpointGroupCommand";
import {
  CreateEphemerisCommand,
  CreateEphemerisCommandInput,
  CreateEphemerisCommandOutput,
} from "./commands/CreateEphemerisCommand";
import {
  CreateMissionProfileCommand,
  CreateMissionProfileCommandInput,
  CreateMissionProfileCommandOutput,
} from "./commands/CreateMissionProfileCommand";
import {
  DeleteConfigCommand,
  DeleteConfigCommandInput,
  DeleteConfigCommandOutput,
} from "./commands/DeleteConfigCommand";
import {
  DeleteDataflowEndpointGroupCommand,
  DeleteDataflowEndpointGroupCommandInput,
  DeleteDataflowEndpointGroupCommandOutput,
} from "./commands/DeleteDataflowEndpointGroupCommand";
import {
  DeleteEphemerisCommand,
  DeleteEphemerisCommandInput,
  DeleteEphemerisCommandOutput,
} from "./commands/DeleteEphemerisCommand";
import {
  DeleteMissionProfileCommand,
  DeleteMissionProfileCommandInput,
  DeleteMissionProfileCommandOutput,
} from "./commands/DeleteMissionProfileCommand";
import {
  DescribeContactCommand,
  DescribeContactCommandInput,
  DescribeContactCommandOutput,
} from "./commands/DescribeContactCommand";
import {
  DescribeEphemerisCommand,
  DescribeEphemerisCommandInput,
  DescribeEphemerisCommandOutput,
} from "./commands/DescribeEphemerisCommand";
import {
  GetAgentConfigurationCommand,
  GetAgentConfigurationCommandInput,
  GetAgentConfigurationCommandOutput,
} from "./commands/GetAgentConfigurationCommand";
import { GetConfigCommand, GetConfigCommandInput, GetConfigCommandOutput } from "./commands/GetConfigCommand";
import {
  GetDataflowEndpointGroupCommand,
  GetDataflowEndpointGroupCommandInput,
  GetDataflowEndpointGroupCommandOutput,
} from "./commands/GetDataflowEndpointGroupCommand";
import {
  GetMinuteUsageCommand,
  GetMinuteUsageCommandInput,
  GetMinuteUsageCommandOutput,
} from "./commands/GetMinuteUsageCommand";
import {
  GetMissionProfileCommand,
  GetMissionProfileCommandInput,
  GetMissionProfileCommandOutput,
} from "./commands/GetMissionProfileCommand";
import {
  GetSatelliteCommand,
  GetSatelliteCommandInput,
  GetSatelliteCommandOutput,
} from "./commands/GetSatelliteCommand";
import { ListConfigsCommand, ListConfigsCommandInput, ListConfigsCommandOutput } from "./commands/ListConfigsCommand";
import {
  ListContactsCommand,
  ListContactsCommandInput,
  ListContactsCommandOutput,
} from "./commands/ListContactsCommand";
import {
  ListDataflowEndpointGroupsCommand,
  ListDataflowEndpointGroupsCommandInput,
  ListDataflowEndpointGroupsCommandOutput,
} from "./commands/ListDataflowEndpointGroupsCommand";
import {
  ListEphemeridesCommand,
  ListEphemeridesCommandInput,
  ListEphemeridesCommandOutput,
} from "./commands/ListEphemeridesCommand";
import {
  ListGroundStationsCommand,
  ListGroundStationsCommandInput,
  ListGroundStationsCommandOutput,
} from "./commands/ListGroundStationsCommand";
import {
  ListMissionProfilesCommand,
  ListMissionProfilesCommandInput,
  ListMissionProfilesCommandOutput,
} from "./commands/ListMissionProfilesCommand";
import {
  ListSatellitesCommand,
  ListSatellitesCommandInput,
  ListSatellitesCommandOutput,
} from "./commands/ListSatellitesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RegisterAgentCommand,
  RegisterAgentCommandInput,
  RegisterAgentCommandOutput,
} from "./commands/RegisterAgentCommand";
import {
  ReserveContactCommand,
  ReserveContactCommandInput,
  ReserveContactCommandOutput,
} from "./commands/ReserveContactCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateAgentStatusCommand,
  UpdateAgentStatusCommandInput,
  UpdateAgentStatusCommandOutput,
} from "./commands/UpdateAgentStatusCommand";
import {
  UpdateConfigCommand,
  UpdateConfigCommandInput,
  UpdateConfigCommandOutput,
} from "./commands/UpdateConfigCommand";
import {
  UpdateEphemerisCommand,
  UpdateEphemerisCommandInput,
  UpdateEphemerisCommandOutput,
} from "./commands/UpdateEphemerisCommand";
import {
  UpdateMissionProfileCommand,
  UpdateMissionProfileCommandInput,
  UpdateMissionProfileCommandOutput,
} from "./commands/UpdateMissionProfileCommand";
import { GroundStationClient, GroundStationClientConfig } from "./GroundStationClient";

const commands = {
  CancelContactCommand,
  CreateConfigCommand,
  CreateDataflowEndpointGroupCommand,
  CreateEphemerisCommand,
  CreateMissionProfileCommand,
  DeleteConfigCommand,
  DeleteDataflowEndpointGroupCommand,
  DeleteEphemerisCommand,
  DeleteMissionProfileCommand,
  DescribeContactCommand,
  DescribeEphemerisCommand,
  GetAgentConfigurationCommand,
  GetConfigCommand,
  GetDataflowEndpointGroupCommand,
  GetMinuteUsageCommand,
  GetMissionProfileCommand,
  GetSatelliteCommand,
  ListConfigsCommand,
  ListContactsCommand,
  ListDataflowEndpointGroupsCommand,
  ListEphemeridesCommand,
  ListGroundStationsCommand,
  ListMissionProfilesCommand,
  ListSatellitesCommand,
  ListTagsForResourceCommand,
  RegisterAgentCommand,
  ReserveContactCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateAgentStatusCommand,
  UpdateConfigCommand,
  UpdateEphemerisCommand,
  UpdateMissionProfileCommand,
};

export interface GroundStation {
  /**
   * @see {@link CancelContactCommand}
   */
  cancelContact(args: CancelContactCommandInput, options?: __HttpHandlerOptions): Promise<CancelContactCommandOutput>;
  cancelContact(args: CancelContactCommandInput, cb: (err: any, data?: CancelContactCommandOutput) => void): void;
  cancelContact(
    args: CancelContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CancelContactCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateConfigCommand}
   */
  createConfig(args: CreateConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateConfigCommandOutput>;
  createConfig(args: CreateConfigCommandInput, cb: (err: any, data?: CreateConfigCommandOutput) => void): void;
  createConfig(
    args: CreateConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateDataflowEndpointGroupCommand}
   */
  createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateDataflowEndpointGroupCommandOutput>;
  createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void
  ): void;
  createDataflowEndpointGroup(
    args: CreateDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateDataflowEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateEphemerisCommand}
   */
  createEphemeris(
    args: CreateEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEphemerisCommandOutput>;
  createEphemeris(args: CreateEphemerisCommandInput, cb: (err: any, data?: CreateEphemerisCommandOutput) => void): void;
  createEphemeris(
    args: CreateEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEphemerisCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateMissionProfileCommand}
   */
  createMissionProfile(
    args: CreateMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMissionProfileCommandOutput>;
  createMissionProfile(
    args: CreateMissionProfileCommandInput,
    cb: (err: any, data?: CreateMissionProfileCommandOutput) => void
  ): void;
  createMissionProfile(
    args: CreateMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMissionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteConfigCommand}
   */
  deleteConfig(args: DeleteConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteConfigCommandOutput>;
  deleteConfig(args: DeleteConfigCommandInput, cb: (err: any, data?: DeleteConfigCommandOutput) => void): void;
  deleteConfig(
    args: DeleteConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteDataflowEndpointGroupCommand}
   */
  deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteDataflowEndpointGroupCommandOutput>;
  deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void
  ): void;
  deleteDataflowEndpointGroup(
    args: DeleteDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteDataflowEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEphemerisCommand}
   */
  deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEphemerisCommandOutput>;
  deleteEphemeris(args: DeleteEphemerisCommandInput, cb: (err: any, data?: DeleteEphemerisCommandOutput) => void): void;
  deleteEphemeris(
    args: DeleteEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEphemerisCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMissionProfileCommand}
   */
  deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMissionProfileCommandOutput>;
  deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void
  ): void;
  deleteMissionProfile(
    args: DeleteMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMissionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContactCommand}
   */
  describeContact(
    args: DescribeContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContactCommandOutput>;
  describeContact(args: DescribeContactCommandInput, cb: (err: any, data?: DescribeContactCommandOutput) => void): void;
  describeContact(
    args: DescribeContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContactCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeEphemerisCommand}
   */
  describeEphemeris(
    args: DescribeEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeEphemerisCommandOutput>;
  describeEphemeris(
    args: DescribeEphemerisCommandInput,
    cb: (err: any, data?: DescribeEphemerisCommandOutput) => void
  ): void;
  describeEphemeris(
    args: DescribeEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeEphemerisCommandOutput) => void
  ): void;

  /**
   * @see {@link GetAgentConfigurationCommand}
   */
  getAgentConfiguration(
    args: GetAgentConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAgentConfigurationCommandOutput>;
  getAgentConfiguration(
    args: GetAgentConfigurationCommandInput,
    cb: (err: any, data?: GetAgentConfigurationCommandOutput) => void
  ): void;
  getAgentConfiguration(
    args: GetAgentConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAgentConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetConfigCommand}
   */
  getConfig(args: GetConfigCommandInput, options?: __HttpHandlerOptions): Promise<GetConfigCommandOutput>;
  getConfig(args: GetConfigCommandInput, cb: (err: any, data?: GetConfigCommandOutput) => void): void;
  getConfig(
    args: GetConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDataflowEndpointGroupCommand}
   */
  getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataflowEndpointGroupCommandOutput>;
  getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void
  ): void;
  getDataflowEndpointGroup(
    args: GetDataflowEndpointGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataflowEndpointGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMinuteUsageCommand}
   */
  getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMinuteUsageCommandOutput>;
  getMinuteUsage(args: GetMinuteUsageCommandInput, cb: (err: any, data?: GetMinuteUsageCommandOutput) => void): void;
  getMinuteUsage(
    args: GetMinuteUsageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMinuteUsageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMissionProfileCommand}
   */
  getMissionProfile(
    args: GetMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMissionProfileCommandOutput>;
  getMissionProfile(
    args: GetMissionProfileCommandInput,
    cb: (err: any, data?: GetMissionProfileCommandOutput) => void
  ): void;
  getMissionProfile(
    args: GetMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMissionProfileCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSatelliteCommand}
   */
  getSatellite(args: GetSatelliteCommandInput, options?: __HttpHandlerOptions): Promise<GetSatelliteCommandOutput>;
  getSatellite(args: GetSatelliteCommandInput, cb: (err: any, data?: GetSatelliteCommandOutput) => void): void;
  getSatellite(
    args: GetSatelliteCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSatelliteCommandOutput) => void
  ): void;

  /**
   * @see {@link ListConfigsCommand}
   */
  listConfigs(args: ListConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListConfigsCommandOutput>;
  listConfigs(args: ListConfigsCommandInput, cb: (err: any, data?: ListConfigsCommandOutput) => void): void;
  listConfigs(
    args: ListConfigsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListConfigsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContactsCommand}
   */
  listContacts(args: ListContactsCommandInput, options?: __HttpHandlerOptions): Promise<ListContactsCommandOutput>;
  listContacts(args: ListContactsCommandInput, cb: (err: any, data?: ListContactsCommandOutput) => void): void;
  listContacts(
    args: ListContactsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContactsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListDataflowEndpointGroupsCommand}
   */
  listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListDataflowEndpointGroupsCommandOutput>;
  listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void
  ): void;
  listDataflowEndpointGroups(
    args: ListDataflowEndpointGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListDataflowEndpointGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEphemeridesCommand}
   */
  listEphemerides(
    args: ListEphemeridesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEphemeridesCommandOutput>;
  listEphemerides(args: ListEphemeridesCommandInput, cb: (err: any, data?: ListEphemeridesCommandOutput) => void): void;
  listEphemerides(
    args: ListEphemeridesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEphemeridesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListGroundStationsCommand}
   */
  listGroundStations(
    args: ListGroundStationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListGroundStationsCommandOutput>;
  listGroundStations(
    args: ListGroundStationsCommandInput,
    cb: (err: any, data?: ListGroundStationsCommandOutput) => void
  ): void;
  listGroundStations(
    args: ListGroundStationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListGroundStationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListMissionProfilesCommand}
   */
  listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMissionProfilesCommandOutput>;
  listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    cb: (err: any, data?: ListMissionProfilesCommandOutput) => void
  ): void;
  listMissionProfiles(
    args: ListMissionProfilesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMissionProfilesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSatellitesCommand}
   */
  listSatellites(
    args: ListSatellitesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSatellitesCommandOutput>;
  listSatellites(args: ListSatellitesCommandInput, cb: (err: any, data?: ListSatellitesCommandOutput) => void): void;
  listSatellites(
    args: ListSatellitesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSatellitesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RegisterAgentCommand}
   */
  registerAgent(args: RegisterAgentCommandInput, options?: __HttpHandlerOptions): Promise<RegisterAgentCommandOutput>;
  registerAgent(args: RegisterAgentCommandInput, cb: (err: any, data?: RegisterAgentCommandOutput) => void): void;
  registerAgent(
    args: RegisterAgentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterAgentCommandOutput) => void
  ): void;

  /**
   * @see {@link ReserveContactCommand}
   */
  reserveContact(
    args: ReserveContactCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ReserveContactCommandOutput>;
  reserveContact(args: ReserveContactCommandInput, cb: (err: any, data?: ReserveContactCommandOutput) => void): void;
  reserveContact(
    args: ReserveContactCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ReserveContactCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateAgentStatusCommand}
   */
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateAgentStatusCommandOutput>;
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;
  updateAgentStatus(
    args: UpdateAgentStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateAgentStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateConfigCommand}
   */
  updateConfig(args: UpdateConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateConfigCommandOutput>;
  updateConfig(args: UpdateConfigCommandInput, cb: (err: any, data?: UpdateConfigCommandOutput) => void): void;
  updateConfig(
    args: UpdateConfigCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateConfigCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateEphemerisCommand}
   */
  updateEphemeris(
    args: UpdateEphemerisCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateEphemerisCommandOutput>;
  updateEphemeris(args: UpdateEphemerisCommandInput, cb: (err: any, data?: UpdateEphemerisCommandOutput) => void): void;
  updateEphemeris(
    args: UpdateEphemerisCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateEphemerisCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateMissionProfileCommand}
   */
  updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateMissionProfileCommandOutput>;
  updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void
  ): void;
  updateMissionProfile(
    args: UpdateMissionProfileCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateMissionProfileCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Welcome to the AWS Ground Station API Reference. AWS Ground Station is a fully managed service that
 *       enables you to control satellite communications, downlink and process satellite data, and
 *       scale your satellite operations efficiently and cost-effectively without having
 *       to build or manage your own ground station infrastructure.</p>
 */
export class GroundStation extends GroundStationClient implements GroundStation {}
createAggregatedClient(commands, GroundStation);
