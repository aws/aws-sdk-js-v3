// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ConfigureLogsForChannelCommand,
  ConfigureLogsForChannelCommandInput,
  ConfigureLogsForChannelCommandOutput,
} from "./commands/ConfigureLogsForChannelCommand";
import {
  ConfigureLogsForPlaybackConfigurationCommand,
  ConfigureLogsForPlaybackConfigurationCommandInput,
  ConfigureLogsForPlaybackConfigurationCommandOutput,
} from "./commands/ConfigureLogsForPlaybackConfigurationCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateLiveSourceCommand,
  CreateLiveSourceCommandInput,
  CreateLiveSourceCommandOutput,
} from "./commands/CreateLiveSourceCommand";
import {
  CreatePrefetchScheduleCommand,
  CreatePrefetchScheduleCommandInput,
  CreatePrefetchScheduleCommandOutput,
} from "./commands/CreatePrefetchScheduleCommand";
import {
  CreateProgramCommand,
  CreateProgramCommandInput,
  CreateProgramCommandOutput,
} from "./commands/CreateProgramCommand";
import {
  CreateSourceLocationCommand,
  CreateSourceLocationCommandInput,
  CreateSourceLocationCommandOutput,
} from "./commands/CreateSourceLocationCommand";
import {
  CreateVodSourceCommand,
  CreateVodSourceCommandInput,
  CreateVodSourceCommandOutput,
} from "./commands/CreateVodSourceCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteChannelPolicyCommand,
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand";
import {
  DeleteLiveSourceCommand,
  DeleteLiveSourceCommandInput,
  DeleteLiveSourceCommandOutput,
} from "./commands/DeleteLiveSourceCommand";
import {
  DeletePlaybackConfigurationCommand,
  DeletePlaybackConfigurationCommandInput,
  DeletePlaybackConfigurationCommandOutput,
} from "./commands/DeletePlaybackConfigurationCommand";
import {
  DeletePrefetchScheduleCommand,
  DeletePrefetchScheduleCommandInput,
  DeletePrefetchScheduleCommandOutput,
} from "./commands/DeletePrefetchScheduleCommand";
import {
  DeleteProgramCommand,
  DeleteProgramCommandInput,
  DeleteProgramCommandOutput,
} from "./commands/DeleteProgramCommand";
import {
  DeleteSourceLocationCommand,
  DeleteSourceLocationCommandInput,
  DeleteSourceLocationCommandOutput,
} from "./commands/DeleteSourceLocationCommand";
import {
  DeleteVodSourceCommand,
  DeleteVodSourceCommandInput,
  DeleteVodSourceCommandOutput,
} from "./commands/DeleteVodSourceCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeLiveSourceCommand,
  DescribeLiveSourceCommandInput,
  DescribeLiveSourceCommandOutput,
} from "./commands/DescribeLiveSourceCommand";
import {
  DescribeProgramCommand,
  DescribeProgramCommandInput,
  DescribeProgramCommandOutput,
} from "./commands/DescribeProgramCommand";
import {
  DescribeSourceLocationCommand,
  DescribeSourceLocationCommandInput,
  DescribeSourceLocationCommandOutput,
} from "./commands/DescribeSourceLocationCommand";
import {
  DescribeVodSourceCommand,
  DescribeVodSourceCommandInput,
  DescribeVodSourceCommandOutput,
} from "./commands/DescribeVodSourceCommand";
import {
  GetChannelPolicyCommand,
  GetChannelPolicyCommandInput,
  GetChannelPolicyCommandOutput,
} from "./commands/GetChannelPolicyCommand";
import {
  GetChannelScheduleCommand,
  GetChannelScheduleCommandInput,
  GetChannelScheduleCommandOutput,
} from "./commands/GetChannelScheduleCommand";
import {
  GetPlaybackConfigurationCommand,
  GetPlaybackConfigurationCommandInput,
  GetPlaybackConfigurationCommandOutput,
} from "./commands/GetPlaybackConfigurationCommand";
import {
  GetPrefetchScheduleCommand,
  GetPrefetchScheduleCommandInput,
  GetPrefetchScheduleCommandOutput,
} from "./commands/GetPrefetchScheduleCommand";
import { ListAlertsCommand, ListAlertsCommandInput, ListAlertsCommandOutput } from "./commands/ListAlertsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListLiveSourcesCommand,
  ListLiveSourcesCommandInput,
  ListLiveSourcesCommandOutput,
} from "./commands/ListLiveSourcesCommand";
import {
  ListPlaybackConfigurationsCommand,
  ListPlaybackConfigurationsCommandInput,
  ListPlaybackConfigurationsCommandOutput,
} from "./commands/ListPlaybackConfigurationsCommand";
import {
  ListPrefetchSchedulesCommand,
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
} from "./commands/ListPrefetchSchedulesCommand";
import {
  ListSourceLocationsCommand,
  ListSourceLocationsCommandInput,
  ListSourceLocationsCommandOutput,
} from "./commands/ListSourceLocationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  ListVodSourcesCommand,
  ListVodSourcesCommandInput,
  ListVodSourcesCommandOutput,
} from "./commands/ListVodSourcesCommand";
import {
  PutChannelPolicyCommand,
  PutChannelPolicyCommandInput,
  PutChannelPolicyCommandOutput,
} from "./commands/PutChannelPolicyCommand";
import {
  PutPlaybackConfigurationCommand,
  PutPlaybackConfigurationCommandInput,
  PutPlaybackConfigurationCommandOutput,
} from "./commands/PutPlaybackConfigurationCommand";
import {
  StartChannelCommand,
  StartChannelCommandInput,
  StartChannelCommandOutput,
} from "./commands/StartChannelCommand";
import { StopChannelCommand, StopChannelCommandInput, StopChannelCommandOutput } from "./commands/StopChannelCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateChannelCommand,
  UpdateChannelCommandInput,
  UpdateChannelCommandOutput,
} from "./commands/UpdateChannelCommand";
import {
  UpdateLiveSourceCommand,
  UpdateLiveSourceCommandInput,
  UpdateLiveSourceCommandOutput,
} from "./commands/UpdateLiveSourceCommand";
import {
  UpdateProgramCommand,
  UpdateProgramCommandInput,
  UpdateProgramCommandOutput,
} from "./commands/UpdateProgramCommand";
import {
  UpdateSourceLocationCommand,
  UpdateSourceLocationCommandInput,
  UpdateSourceLocationCommandOutput,
} from "./commands/UpdateSourceLocationCommand";
import {
  UpdateVodSourceCommand,
  UpdateVodSourceCommandInput,
  UpdateVodSourceCommandOutput,
} from "./commands/UpdateVodSourceCommand";
import { MediaTailorClient, MediaTailorClientConfig } from "./MediaTailorClient";

const commands = {
  ConfigureLogsForChannelCommand,
  ConfigureLogsForPlaybackConfigurationCommand,
  CreateChannelCommand,
  CreateLiveSourceCommand,
  CreatePrefetchScheduleCommand,
  CreateProgramCommand,
  CreateSourceLocationCommand,
  CreateVodSourceCommand,
  DeleteChannelCommand,
  DeleteChannelPolicyCommand,
  DeleteLiveSourceCommand,
  DeletePlaybackConfigurationCommand,
  DeletePrefetchScheduleCommand,
  DeleteProgramCommand,
  DeleteSourceLocationCommand,
  DeleteVodSourceCommand,
  DescribeChannelCommand,
  DescribeLiveSourceCommand,
  DescribeProgramCommand,
  DescribeSourceLocationCommand,
  DescribeVodSourceCommand,
  GetChannelPolicyCommand,
  GetChannelScheduleCommand,
  GetPlaybackConfigurationCommand,
  GetPrefetchScheduleCommand,
  ListAlertsCommand,
  ListChannelsCommand,
  ListLiveSourcesCommand,
  ListPlaybackConfigurationsCommand,
  ListPrefetchSchedulesCommand,
  ListSourceLocationsCommand,
  ListTagsForResourceCommand,
  ListVodSourcesCommand,
  PutChannelPolicyCommand,
  PutPlaybackConfigurationCommand,
  StartChannelCommand,
  StopChannelCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateLiveSourceCommand,
  UpdateProgramCommand,
  UpdateSourceLocationCommand,
  UpdateVodSourceCommand,
};

export interface MediaTailor {
  /**
   * @see {@link ConfigureLogsForChannelCommand}
   */
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureLogsForChannelCommandOutput>;
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    cb: (err: any, data?: ConfigureLogsForChannelCommandOutput) => void
  ): void;
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsForChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureLogsForPlaybackConfigurationCommand}
   */
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput>;
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    cb: (err: any, data?: ConfigureLogsForPlaybackConfigurationCommandOutput) => void
  ): void;
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsForPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(args: CreateChannelCommandInput, options?: __HttpHandlerOptions): Promise<CreateChannelCommandOutput>;
  createChannel(args: CreateChannelCommandInput, cb: (err: any, data?: CreateChannelCommandOutput) => void): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLiveSourceCommand}
   */
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLiveSourceCommandOutput>;
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    cb: (err: any, data?: CreateLiveSourceCommandOutput) => void
  ): void;
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrefetchScheduleCommand}
   */
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreatePrefetchScheduleCommandOutput>;
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    cb: (err: any, data?: CreatePrefetchScheduleCommandOutput) => void
  ): void;
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProgramCommand}
   */
  createProgram(args: CreateProgramCommandInput, options?: __HttpHandlerOptions): Promise<CreateProgramCommandOutput>;
  createProgram(args: CreateProgramCommandInput, cb: (err: any, data?: CreateProgramCommandOutput) => void): void;
  createProgram(
    args: CreateProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceLocationCommand}
   */
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateSourceLocationCommandOutput>;
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVodSourceCommand}
   */
  createVodSource(
    args: CreateVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateVodSourceCommandOutput>;
  createVodSource(args: CreateVodSourceCommandInput, cb: (err: any, data?: CreateVodSourceCommandOutput) => void): void;
  createVodSource(
    args: CreateVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(args: DeleteChannelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteChannelCommandOutput>;
  deleteChannel(args: DeleteChannelCommandInput, cb: (err: any, data?: DeleteChannelCommandOutput) => void): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelPolicyCommand}
   */
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelPolicyCommandOutput>;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLiveSourceCommand}
   */
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLiveSourceCommandOutput>;
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    cb: (err: any, data?: DeleteLiveSourceCommandOutput) => void
  ): void;
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlaybackConfigurationCommand}
   */
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePlaybackConfigurationCommandOutput>;
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrefetchScheduleCommand}
   */
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeletePrefetchScheduleCommandOutput>;
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    cb: (err: any, data?: DeletePrefetchScheduleCommandOutput) => void
  ): void;
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProgramCommand}
   */
  deleteProgram(args: DeleteProgramCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProgramCommandOutput>;
  deleteProgram(args: DeleteProgramCommandInput, cb: (err: any, data?: DeleteProgramCommandOutput) => void): void;
  deleteProgram(
    args: DeleteProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceLocationCommand}
   */
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSourceLocationCommandOutput>;
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVodSourceCommand}
   */
  deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteVodSourceCommandOutput>;
  deleteVodSource(args: DeleteVodSourceCommandInput, cb: (err: any, data?: DeleteVodSourceCommandOutput) => void): void;
  deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(args: DescribeChannelCommandInput, cb: (err: any, data?: DescribeChannelCommandOutput) => void): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLiveSourceCommand}
   */
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeLiveSourceCommandOutput>;
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    cb: (err: any, data?: DescribeLiveSourceCommandOutput) => void
  ): void;
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProgramCommand}
   */
  describeProgram(
    args: DescribeProgramCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeProgramCommandOutput>;
  describeProgram(args: DescribeProgramCommandInput, cb: (err: any, data?: DescribeProgramCommandOutput) => void): void;
  describeProgram(
    args: DescribeProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceLocationCommand}
   */
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeSourceLocationCommandOutput>;
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVodSourceCommand}
   */
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeVodSourceCommandOutput>;
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelPolicyCommand}
   */
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelPolicyCommandOutput>;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelScheduleCommand}
   */
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelScheduleCommandOutput>;
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaybackConfigurationCommand}
   */
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPlaybackConfigurationCommandOutput>;
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrefetchScheduleCommand}
   */
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetPrefetchScheduleCommandOutput>;
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    cb: (err: any, data?: GetPrefetchScheduleCommandOutput) => void
  ): void;
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetPrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlertsCommand}
   */
  listAlerts(args: ListAlertsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlertsCommandOutput>;
  listAlerts(args: ListAlertsCommandInput, cb: (err: any, data?: ListAlertsCommandOutput) => void): void;
  listAlerts(
    args: ListAlertsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(args: ListChannelsCommandInput, options?: __HttpHandlerOptions): Promise<ListChannelsCommandOutput>;
  listChannels(args: ListChannelsCommandInput, cb: (err: any, data?: ListChannelsCommandOutput) => void): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLiveSourcesCommand}
   */
  listLiveSources(
    args: ListLiveSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListLiveSourcesCommandOutput>;
  listLiveSources(args: ListLiveSourcesCommandInput, cb: (err: any, data?: ListLiveSourcesCommandOutput) => void): void;
  listLiveSources(
    args: ListLiveSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListLiveSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlaybackConfigurationsCommand}
   */
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPlaybackConfigurationsCommandOutput>;
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrefetchSchedulesCommand}
   */
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListPrefetchSchedulesCommandOutput>;
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    cb: (err: any, data?: ListPrefetchSchedulesCommandOutput) => void
  ): void;
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPrefetchSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceLocationsCommand}
   */
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListSourceLocationsCommandOutput>;
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): void;
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
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
   * @see {@link ListVodSourcesCommand}
   */
  listVodSources(
    args: ListVodSourcesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListVodSourcesCommandOutput>;
  listVodSources(args: ListVodSourcesCommandInput, cb: (err: any, data?: ListVodSourcesCommandOutput) => void): void;
  listVodSources(
    args: ListVodSourcesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChannelPolicyCommand}
   */
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutChannelPolicyCommandOutput>;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPlaybackConfigurationCommand}
   */
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutPlaybackConfigurationCommandOutput>;
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChannelCommand}
   */
  startChannel(args: StartChannelCommandInput, options?: __HttpHandlerOptions): Promise<StartChannelCommandOutput>;
  startChannel(args: StartChannelCommandInput, cb: (err: any, data?: StartChannelCommandOutput) => void): void;
  startChannel(
    args: StartChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StopChannelCommand}
   */
  stopChannel(args: StopChannelCommandInput, options?: __HttpHandlerOptions): Promise<StopChannelCommandOutput>;
  stopChannel(args: StopChannelCommandInput, cb: (err: any, data?: StopChannelCommandOutput) => void): void;
  stopChannel(
    args: StopChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
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
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(args: UpdateChannelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateChannelCommandOutput>;
  updateChannel(args: UpdateChannelCommandInput, cb: (err: any, data?: UpdateChannelCommandOutput) => void): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLiveSourceCommand}
   */
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLiveSourceCommandOutput>;
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    cb: (err: any, data?: UpdateLiveSourceCommandOutput) => void
  ): void;
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProgramCommand}
   */
  updateProgram(args: UpdateProgramCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProgramCommandOutput>;
  updateProgram(args: UpdateProgramCommandInput, cb: (err: any, data?: UpdateProgramCommandOutput) => void): void;
  updateProgram(
    args: UpdateProgramCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceLocationCommand}
   */
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateSourceLocationCommandOutput>;
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVodSourceCommand}
   */
  updateVodSource(
    args: UpdateVodSourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateVodSourceCommandOutput>;
  updateVodSource(args: UpdateVodSourceCommandInput, cb: (err: any, data?: UpdateVodSourceCommandOutput) => void): void;
  updateVodSource(
    args: UpdateVodSourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p>
 *          <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 */
export class MediaTailor extends MediaTailorClient implements MediaTailor {}
createAggregatedClient(commands, MediaTailor);
