// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ConfigureLogsForChannelCommandInput,
  type ConfigureLogsForChannelCommandOutput,
  ConfigureLogsForChannelCommand,
} from "./commands/ConfigureLogsForChannelCommand";
import {
  type ConfigureLogsForPlaybackConfigurationCommandInput,
  type ConfigureLogsForPlaybackConfigurationCommandOutput,
  ConfigureLogsForPlaybackConfigurationCommand,
} from "./commands/ConfigureLogsForPlaybackConfigurationCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateLiveSourceCommandInput,
  type CreateLiveSourceCommandOutput,
  CreateLiveSourceCommand,
} from "./commands/CreateLiveSourceCommand";
import {
  type CreatePrefetchScheduleCommandInput,
  type CreatePrefetchScheduleCommandOutput,
  CreatePrefetchScheduleCommand,
} from "./commands/CreatePrefetchScheduleCommand";
import {
  type CreateProgramCommandInput,
  type CreateProgramCommandOutput,
  CreateProgramCommand,
} from "./commands/CreateProgramCommand";
import {
  type CreateSourceLocationCommandInput,
  type CreateSourceLocationCommandOutput,
  CreateSourceLocationCommand,
} from "./commands/CreateSourceLocationCommand";
import {
  type CreateVodSourceCommandInput,
  type CreateVodSourceCommandOutput,
  CreateVodSourceCommand,
} from "./commands/CreateVodSourceCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteChannelPolicyCommandInput,
  type DeleteChannelPolicyCommandOutput,
  DeleteChannelPolicyCommand,
} from "./commands/DeleteChannelPolicyCommand";
import {
  type DeleteFunctionCommandInput,
  type DeleteFunctionCommandOutput,
  DeleteFunctionCommand,
} from "./commands/DeleteFunctionCommand";
import {
  type DeleteLiveSourceCommandInput,
  type DeleteLiveSourceCommandOutput,
  DeleteLiveSourceCommand,
} from "./commands/DeleteLiveSourceCommand";
import {
  type DeletePlaybackConfigurationCommandInput,
  type DeletePlaybackConfigurationCommandOutput,
  DeletePlaybackConfigurationCommand,
} from "./commands/DeletePlaybackConfigurationCommand";
import {
  type DeletePrefetchScheduleCommandInput,
  type DeletePrefetchScheduleCommandOutput,
  DeletePrefetchScheduleCommand,
} from "./commands/DeletePrefetchScheduleCommand";
import {
  type DeleteProgramCommandInput,
  type DeleteProgramCommandOutput,
  DeleteProgramCommand,
} from "./commands/DeleteProgramCommand";
import {
  type DeleteSourceLocationCommandInput,
  type DeleteSourceLocationCommandOutput,
  DeleteSourceLocationCommand,
} from "./commands/DeleteSourceLocationCommand";
import {
  type DeleteVodSourceCommandInput,
  type DeleteVodSourceCommandOutput,
  DeleteVodSourceCommand,
} from "./commands/DeleteVodSourceCommand";
import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "./commands/DescribeChannelCommand";
import {
  type DescribeLiveSourceCommandInput,
  type DescribeLiveSourceCommandOutput,
  DescribeLiveSourceCommand,
} from "./commands/DescribeLiveSourceCommand";
import {
  type DescribeProgramCommandInput,
  type DescribeProgramCommandOutput,
  DescribeProgramCommand,
} from "./commands/DescribeProgramCommand";
import {
  type DescribeSourceLocationCommandInput,
  type DescribeSourceLocationCommandOutput,
  DescribeSourceLocationCommand,
} from "./commands/DescribeSourceLocationCommand";
import {
  type DescribeVodSourceCommandInput,
  type DescribeVodSourceCommandOutput,
  DescribeVodSourceCommand,
} from "./commands/DescribeVodSourceCommand";
import {
  type GetChannelPolicyCommandInput,
  type GetChannelPolicyCommandOutput,
  GetChannelPolicyCommand,
} from "./commands/GetChannelPolicyCommand";
import {
  type GetChannelScheduleCommandInput,
  type GetChannelScheduleCommandOutput,
  GetChannelScheduleCommand,
} from "./commands/GetChannelScheduleCommand";
import {
  type GetFunctionCommandInput,
  type GetFunctionCommandOutput,
  GetFunctionCommand,
} from "./commands/GetFunctionCommand";
import {
  type GetPlaybackConfigurationCommandInput,
  type GetPlaybackConfigurationCommandOutput,
  GetPlaybackConfigurationCommand,
} from "./commands/GetPlaybackConfigurationCommand";
import {
  type GetPrefetchScheduleCommandInput,
  type GetPrefetchScheduleCommandOutput,
  GetPrefetchScheduleCommand,
} from "./commands/GetPrefetchScheduleCommand";
import {
  type ListAlertsCommandInput,
  type ListAlertsCommandOutput,
  ListAlertsCommand,
} from "./commands/ListAlertsCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListFunctionsCommandInput,
  type ListFunctionsCommandOutput,
  ListFunctionsCommand,
} from "./commands/ListFunctionsCommand";
import {
  type ListLiveSourcesCommandInput,
  type ListLiveSourcesCommandOutput,
  ListLiveSourcesCommand,
} from "./commands/ListLiveSourcesCommand";
import {
  type ListPlaybackConfigurationsCommandInput,
  type ListPlaybackConfigurationsCommandOutput,
  ListPlaybackConfigurationsCommand,
} from "./commands/ListPlaybackConfigurationsCommand";
import {
  type ListPrefetchSchedulesCommandInput,
  type ListPrefetchSchedulesCommandOutput,
  ListPrefetchSchedulesCommand,
} from "./commands/ListPrefetchSchedulesCommand";
import {
  type ListSourceLocationsCommandInput,
  type ListSourceLocationsCommandOutput,
  ListSourceLocationsCommand,
} from "./commands/ListSourceLocationsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type ListVodSourcesCommandInput,
  type ListVodSourcesCommandOutput,
  ListVodSourcesCommand,
} from "./commands/ListVodSourcesCommand";
import {
  type PutChannelPolicyCommandInput,
  type PutChannelPolicyCommandOutput,
  PutChannelPolicyCommand,
} from "./commands/PutChannelPolicyCommand";
import {
  type PutFunctionCommandInput,
  type PutFunctionCommandOutput,
  PutFunctionCommand,
} from "./commands/PutFunctionCommand";
import {
  type PutPlaybackConfigurationCommandInput,
  type PutPlaybackConfigurationCommandOutput,
  PutPlaybackConfigurationCommand,
} from "./commands/PutPlaybackConfigurationCommand";
import {
  type StartChannelCommandInput,
  type StartChannelCommandOutput,
  StartChannelCommand,
} from "./commands/StartChannelCommand";
import {
  type StopChannelCommandInput,
  type StopChannelCommandOutput,
  StopChannelCommand,
} from "./commands/StopChannelCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateChannelCommandInput,
  type UpdateChannelCommandOutput,
  UpdateChannelCommand,
} from "./commands/UpdateChannelCommand";
import {
  type UpdateLiveSourceCommandInput,
  type UpdateLiveSourceCommandOutput,
  UpdateLiveSourceCommand,
} from "./commands/UpdateLiveSourceCommand";
import {
  type UpdateProgramCommandInput,
  type UpdateProgramCommandOutput,
  UpdateProgramCommand,
} from "./commands/UpdateProgramCommand";
import {
  type UpdateSourceLocationCommandInput,
  type UpdateSourceLocationCommandOutput,
  UpdateSourceLocationCommand,
} from "./commands/UpdateSourceLocationCommand";
import {
  type UpdateVodSourceCommandInput,
  type UpdateVodSourceCommandOutput,
  UpdateVodSourceCommand,
} from "./commands/UpdateVodSourceCommand";
import { MediaTailorClient } from "./MediaTailorClient";
import { paginateGetChannelSchedule } from "./pagination/GetChannelSchedulePaginator";
import { paginateListAlerts } from "./pagination/ListAlertsPaginator";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListFunctions } from "./pagination/ListFunctionsPaginator";
import { paginateListLiveSources } from "./pagination/ListLiveSourcesPaginator";
import { paginateListPlaybackConfigurations } from "./pagination/ListPlaybackConfigurationsPaginator";
import { paginateListPrefetchSchedules } from "./pagination/ListPrefetchSchedulesPaginator";
import { paginateListSourceLocations } from "./pagination/ListSourceLocationsPaginator";
import { paginateListVodSources } from "./pagination/ListVodSourcesPaginator";

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
  DeleteFunctionCommand,
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
  GetFunctionCommand,
  GetPlaybackConfigurationCommand,
  GetPrefetchScheduleCommand,
  ListAlertsCommand,
  ListChannelsCommand,
  ListFunctionsCommand,
  ListLiveSourcesCommand,
  ListPlaybackConfigurationsCommand,
  ListPrefetchSchedulesCommand,
  ListSourceLocationsCommand,
  ListTagsForResourceCommand,
  ListVodSourcesCommand,
  PutChannelPolicyCommand,
  PutFunctionCommand,
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
const paginators = {
  paginateGetChannelSchedule,
  paginateListAlerts,
  paginateListChannels,
  paginateListFunctions,
  paginateListLiveSources,
  paginateListPlaybackConfigurations,
  paginateListPrefetchSchedules,
  paginateListSourceLocations,
  paginateListVodSources,
};

/**
 * @public
 */
export interface MediaTailorRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MediaTailor {
  /**
   * @see {@link ConfigureLogsForChannelCommand}
   */
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ConfigureLogsForChannelCommandOutput>;
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    cb: (err: any, data?: ConfigureLogsForChannelCommandOutput) => void
  ): void;
  configureLogsForChannel(
    args: ConfigureLogsForChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ConfigureLogsForChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link ConfigureLogsForPlaybackConfigurationCommand}
   */
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ConfigureLogsForPlaybackConfigurationCommandOutput>;
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    cb: (err: any, data?: ConfigureLogsForPlaybackConfigurationCommandOutput) => void
  ): void;
  configureLogsForPlaybackConfiguration(
    args: ConfigureLogsForPlaybackConfigurationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ConfigureLogsForPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLiveSourceCommand}
   */
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreateLiveSourceCommandOutput>;
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    cb: (err: any, data?: CreateLiveSourceCommandOutput) => void
  ): void;
  createLiveSource(
    args: CreateLiveSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreateLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link CreatePrefetchScheduleCommand}
   */
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreatePrefetchScheduleCommandOutput>;
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    cb: (err: any, data?: CreatePrefetchScheduleCommandOutput) => void
  ): void;
  createPrefetchSchedule(
    args: CreatePrefetchScheduleCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreatePrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateProgramCommand}
   */
  createProgram(
    args: CreateProgramCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreateProgramCommandOutput>;
  createProgram(
    args: CreateProgramCommandInput,
    cb: (err: any, data?: CreateProgramCommandOutput) => void
  ): void;
  createProgram(
    args: CreateProgramCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreateProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateSourceLocationCommand}
   */
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreateSourceLocationCommandOutput>;
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;
  createSourceLocation(
    args: CreateSourceLocationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreateSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateVodSourceCommand}
   */
  createVodSource(
    args: CreateVodSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<CreateVodSourceCommandOutput>;
  createVodSource(
    args: CreateVodSourceCommandInput,
    cb: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): void;
  createVodSource(
    args: CreateVodSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: CreateVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelPolicyCommand}
   */
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteChannelPolicyCommandOutput>;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteFunctionCommand}
   */
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteFunctionCommandOutput>;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;
  deleteFunction(
    args: DeleteFunctionCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLiveSourceCommand}
   */
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteLiveSourceCommandOutput>;
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    cb: (err: any, data?: DeleteLiveSourceCommandOutput) => void
  ): void;
  deleteLiveSource(
    args: DeleteLiveSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePlaybackConfigurationCommand}
   */
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeletePlaybackConfigurationCommandOutput>;
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;
  deletePlaybackConfiguration(
    args: DeletePlaybackConfigurationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeletePlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeletePrefetchScheduleCommand}
   */
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeletePrefetchScheduleCommandOutput>;
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    cb: (err: any, data?: DeletePrefetchScheduleCommandOutput) => void
  ): void;
  deletePrefetchSchedule(
    args: DeletePrefetchScheduleCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeletePrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteProgramCommand}
   */
  deleteProgram(
    args: DeleteProgramCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteProgramCommandOutput>;
  deleteProgram(
    args: DeleteProgramCommandInput,
    cb: (err: any, data?: DeleteProgramCommandOutput) => void
  ): void;
  deleteProgram(
    args: DeleteProgramCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteSourceLocationCommand}
   */
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteSourceLocationCommandOutput>;
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;
  deleteSourceLocation(
    args: DeleteSourceLocationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteVodSourceCommand}
   */
  deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DeleteVodSourceCommandOutput>;
  deleteVodSource(
    args: DeleteVodSourceCommandInput,
    cb: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): void;
  deleteVodSource(
    args: DeleteVodSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DeleteVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeLiveSourceCommand}
   */
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DescribeLiveSourceCommandOutput>;
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    cb: (err: any, data?: DescribeLiveSourceCommandOutput) => void
  ): void;
  describeLiveSource(
    args: DescribeLiveSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DescribeLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeProgramCommand}
   */
  describeProgram(
    args: DescribeProgramCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DescribeProgramCommandOutput>;
  describeProgram(
    args: DescribeProgramCommandInput,
    cb: (err: any, data?: DescribeProgramCommandOutput) => void
  ): void;
  describeProgram(
    args: DescribeProgramCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DescribeProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeSourceLocationCommand}
   */
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DescribeSourceLocationCommandOutput>;
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;
  describeSourceLocation(
    args: DescribeSourceLocationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DescribeSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeVodSourceCommand}
   */
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<DescribeVodSourceCommandOutput>;
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;
  describeVodSource(
    args: DescribeVodSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: DescribeVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelPolicyCommand}
   */
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<GetChannelPolicyCommandOutput>;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelScheduleCommand}
   */
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<GetChannelScheduleCommandOutput>;
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;
  getChannelSchedule(
    args: GetChannelScheduleCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: GetChannelScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetFunctionCommand}
   */
  getFunction(
    args: GetFunctionCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<GetFunctionCommandOutput>;
  getFunction(
    args: GetFunctionCommandInput,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;
  getFunction(
    args: GetFunctionCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: GetFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPlaybackConfigurationCommand}
   */
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<GetPlaybackConfigurationCommandOutput>;
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;
  getPlaybackConfiguration(
    args: GetPlaybackConfigurationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: GetPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetPrefetchScheduleCommand}
   */
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<GetPrefetchScheduleCommandOutput>;
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    cb: (err: any, data?: GetPrefetchScheduleCommandOutput) => void
  ): void;
  getPrefetchSchedule(
    args: GetPrefetchScheduleCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: GetPrefetchScheduleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListAlertsCommand}
   */
  listAlerts(
    args: ListAlertsCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListAlertsCommandOutput>;
  listAlerts(
    args: ListAlertsCommandInput,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;
  listAlerts(
    args: ListAlertsCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListAlertsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListFunctionsCommand}
   */
  listFunctions(): Promise<ListFunctionsCommandOutput>;
  listFunctions(
    args: ListFunctionsCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListFunctionsCommandOutput>;
  listFunctions(
    args: ListFunctionsCommandInput,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;
  listFunctions(
    args: ListFunctionsCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListFunctionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLiveSourcesCommand}
   */
  listLiveSources(
    args: ListLiveSourcesCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListLiveSourcesCommandOutput>;
  listLiveSources(
    args: ListLiveSourcesCommandInput,
    cb: (err: any, data?: ListLiveSourcesCommandOutput) => void
  ): void;
  listLiveSources(
    args: ListLiveSourcesCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListLiveSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPlaybackConfigurationsCommand}
   */
  listPlaybackConfigurations(): Promise<ListPlaybackConfigurationsCommandOutput>;
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListPlaybackConfigurationsCommandOutput>;
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;
  listPlaybackConfigurations(
    args: ListPlaybackConfigurationsCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListPlaybackConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListPrefetchSchedulesCommand}
   */
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListPrefetchSchedulesCommandOutput>;
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    cb: (err: any, data?: ListPrefetchSchedulesCommandOutput) => void
  ): void;
  listPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListPrefetchSchedulesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListSourceLocationsCommand}
   */
  listSourceLocations(): Promise<ListSourceLocationsCommandOutput>;
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListSourceLocationsCommandOutput>;
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): void;
  listSourceLocations(
    args: ListSourceLocationsCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListSourceLocationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListVodSourcesCommand}
   */
  listVodSources(
    args: ListVodSourcesCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<ListVodSourcesCommandOutput>;
  listVodSources(
    args: ListVodSourcesCommandInput,
    cb: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): void;
  listVodSources(
    args: ListVodSourcesCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: ListVodSourcesCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChannelPolicyCommand}
   */
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<PutChannelPolicyCommandOutput>;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutFunctionCommand}
   */
  putFunction(
    args: PutFunctionCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<PutFunctionCommandOutput>;
  putFunction(
    args: PutFunctionCommandInput,
    cb: (err: any, data?: PutFunctionCommandOutput) => void
  ): void;
  putFunction(
    args: PutFunctionCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: PutFunctionCommandOutput) => void
  ): void;

  /**
   * @see {@link PutPlaybackConfigurationCommand}
   */
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<PutPlaybackConfigurationCommandOutput>;
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;
  putPlaybackConfiguration(
    args: PutPlaybackConfigurationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: PutPlaybackConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartChannelCommand}
   */
  startChannel(
    args: StartChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<StartChannelCommandOutput>;
  startChannel(
    args: StartChannelCommandInput,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;
  startChannel(
    args: StartChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: StartChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link StopChannelCommand}
   */
  stopChannel(
    args: StopChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<StopChannelCommandOutput>;
  stopChannel(
    args: StopChannelCommandInput,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;
  stopChannel(
    args: StopChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: StopChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLiveSourceCommand}
   */
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UpdateLiveSourceCommandOutput>;
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    cb: (err: any, data?: UpdateLiveSourceCommandOutput) => void
  ): void;
  updateLiveSource(
    args: UpdateLiveSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UpdateLiveSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateProgramCommand}
   */
  updateProgram(
    args: UpdateProgramCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UpdateProgramCommandOutput>;
  updateProgram(
    args: UpdateProgramCommandInput,
    cb: (err: any, data?: UpdateProgramCommandOutput) => void
  ): void;
  updateProgram(
    args: UpdateProgramCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UpdateProgramCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateSourceLocationCommand}
   */
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UpdateSourceLocationCommandOutput>;
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;
  updateSourceLocation(
    args: UpdateSourceLocationCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UpdateSourceLocationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateVodSourceCommand}
   */
  updateVodSource(
    args: UpdateVodSourceCommandInput,
    options?: MediaTailorRequestOptions
  ): Promise<UpdateVodSourceCommandOutput>;
  updateVodSource(
    args: UpdateVodSourceCommandInput,
    cb: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): void;
  updateVodSource(
    args: UpdateVodSourceCommandInput,
    options: MediaTailorRequestOptions,
    cb: (err: any, data?: UpdateVodSourceCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelScheduleCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link GetChannelScheduleCommandOutput}.
   */
  paginateGetChannelSchedule(
    args: GetChannelScheduleCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<GetChannelScheduleCommandOutput>;

  /**
   * @see {@link ListAlertsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListAlertsCommandOutput}.
   */
  paginateListAlerts(
    args: ListAlertsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListAlertsCommandOutput>;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args?: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListFunctionsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListFunctionsCommandOutput}.
   */
  paginateListFunctions(
    args?: ListFunctionsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListFunctionsCommandOutput>;

  /**
   * @see {@link ListLiveSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLiveSourcesCommandOutput}.
   */
  paginateListLiveSources(
    args: ListLiveSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLiveSourcesCommandOutput>;

  /**
   * @see {@link ListPlaybackConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPlaybackConfigurationsCommandOutput}.
   */
  paginateListPlaybackConfigurations(
    args?: ListPlaybackConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPlaybackConfigurationsCommandOutput>;

  /**
   * @see {@link ListPrefetchSchedulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListPrefetchSchedulesCommandOutput}.
   */
  paginateListPrefetchSchedules(
    args: ListPrefetchSchedulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListPrefetchSchedulesCommandOutput>;

  /**
   * @see {@link ListSourceLocationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListSourceLocationsCommandOutput}.
   */
  paginateListSourceLocations(
    args?: ListSourceLocationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListSourceLocationsCommandOutput>;

  /**
   * @see {@link ListVodSourcesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListVodSourcesCommandOutput}.
   */
  paginateListVodSources(
    args: ListVodSourcesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListVodSourcesCommandOutput>;
}

/**
 * <p>Use the AWS Elemental MediaTailor SDKs and CLI to configure scalable ad insertion and linear channels. With MediaTailor, you can assemble existing content into a linear stream and serve targeted ads to viewers while maintaining broadcast quality in over-the-top (OTT) video applications. For information about using the service, including detailed information about the settings covered in this guide, see the <a href="https://docs.aws.amazon.com/mediatailor/latest/ug/">AWS Elemental MediaTailor User Guide</a>.</p> <p>Through the SDKs and the CLI you manage AWS Elemental MediaTailor configurations and channels the same as you do through the console. For example, you specify ad insertion behavior and mapping information for the origin server and the ad decision server (ADS).</p>
 * @public
 */
export class MediaTailor extends MediaTailorClient implements MediaTailor {}
createAggregatedClient(commands, MediaTailor, { paginators });
