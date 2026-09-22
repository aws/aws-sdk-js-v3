// smithy-typescript generated code
import { type WaiterResult, createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
  WaiterConfiguration,
} from "@smithy/types";

import {
  type CancelHarvestJobCommandInput,
  type CancelHarvestJobCommandOutput,
  CancelHarvestJobCommand,
} from "./commands/CancelHarvestJobCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
import {
  type CreateChannelGroupCommandInput,
  type CreateChannelGroupCommandOutput,
  CreateChannelGroupCommand,
} from "./commands/CreateChannelGroupCommand";
import {
  type CreateHarvestJobCommandInput,
  type CreateHarvestJobCommandOutput,
  CreateHarvestJobCommand,
} from "./commands/CreateHarvestJobCommand";
import {
  type CreateOriginEndpointCommandInput,
  type CreateOriginEndpointCommandOutput,
  CreateOriginEndpointCommand,
} from "./commands/CreateOriginEndpointCommand";
import {
  type DeleteChannelCommandInput,
  type DeleteChannelCommandOutput,
  DeleteChannelCommand,
} from "./commands/DeleteChannelCommand";
import {
  type DeleteChannelGroupCommandInput,
  type DeleteChannelGroupCommandOutput,
  DeleteChannelGroupCommand,
} from "./commands/DeleteChannelGroupCommand";
import {
  type DeleteChannelPolicyCommandInput,
  type DeleteChannelPolicyCommandOutput,
  DeleteChannelPolicyCommand,
} from "./commands/DeleteChannelPolicyCommand";
import {
  type DeleteOriginEndpointCommandInput,
  type DeleteOriginEndpointCommandOutput,
  DeleteOriginEndpointCommand,
} from "./commands/DeleteOriginEndpointCommand";
import {
  type DeleteOriginEndpointPolicyCommandInput,
  type DeleteOriginEndpointPolicyCommandOutput,
  DeleteOriginEndpointPolicyCommand,
} from "./commands/DeleteOriginEndpointPolicyCommand";
import {
  type GetChannelCommandInput,
  type GetChannelCommandOutput,
  GetChannelCommand,
} from "./commands/GetChannelCommand";
import {
  type GetChannelGroupCommandInput,
  type GetChannelGroupCommandOutput,
  GetChannelGroupCommand,
} from "./commands/GetChannelGroupCommand";
import {
  type GetChannelPolicyCommandInput,
  type GetChannelPolicyCommandOutput,
  GetChannelPolicyCommand,
} from "./commands/GetChannelPolicyCommand";
import {
  type GetHarvestJobCommandInput,
  type GetHarvestJobCommandOutput,
  GetHarvestJobCommand,
} from "./commands/GetHarvestJobCommand";
import {
  type GetOriginEndpointCommandInput,
  type GetOriginEndpointCommandOutput,
  GetOriginEndpointCommand,
} from "./commands/GetOriginEndpointCommand";
import {
  type GetOriginEndpointPolicyCommandInput,
  type GetOriginEndpointPolicyCommandOutput,
  GetOriginEndpointPolicyCommand,
} from "./commands/GetOriginEndpointPolicyCommand";
import {
  type ListChannelGroupsCommandInput,
  type ListChannelGroupsCommandOutput,
  ListChannelGroupsCommand,
} from "./commands/ListChannelGroupsCommand";
import {
  type ListChannelsCommandInput,
  type ListChannelsCommandOutput,
  ListChannelsCommand,
} from "./commands/ListChannelsCommand";
import {
  type ListHarvestJobsCommandInput,
  type ListHarvestJobsCommandOutput,
  ListHarvestJobsCommand,
} from "./commands/ListHarvestJobsCommand";
import {
  type ListOriginEndpointsCommandInput,
  type ListOriginEndpointsCommandOutput,
  ListOriginEndpointsCommand,
} from "./commands/ListOriginEndpointsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutChannelPolicyCommandInput,
  type PutChannelPolicyCommandOutput,
  PutChannelPolicyCommand,
} from "./commands/PutChannelPolicyCommand";
import {
  type PutOriginEndpointPolicyCommandInput,
  type PutOriginEndpointPolicyCommandOutput,
  PutOriginEndpointPolicyCommand,
} from "./commands/PutOriginEndpointPolicyCommand";
import {
  type ResetChannelStateCommandInput,
  type ResetChannelStateCommandOutput,
  ResetChannelStateCommand,
} from "./commands/ResetChannelStateCommand";
import {
  type ResetOriginEndpointStateCommandInput,
  type ResetOriginEndpointStateCommandOutput,
  ResetOriginEndpointStateCommand,
} from "./commands/ResetOriginEndpointStateCommand";
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
  type UpdateChannelGroupCommandInput,
  type UpdateChannelGroupCommandOutput,
  UpdateChannelGroupCommand,
} from "./commands/UpdateChannelGroupCommand";
import {
  type UpdateOriginEndpointCommandInput,
  type UpdateOriginEndpointCommandOutput,
  UpdateOriginEndpointCommand,
} from "./commands/UpdateOriginEndpointCommand";
import { MediaPackageV2Client } from "./MediaPackageV2Client";
import type { MediaPackageV2ServiceException } from "./models/MediaPackageV2ServiceException";
import { paginateListChannelGroups } from "./pagination/ListChannelGroupsPaginator";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListHarvestJobs } from "./pagination/ListHarvestJobsPaginator";
import { paginateListOriginEndpoints } from "./pagination/ListOriginEndpointsPaginator";
import { waitUntilHarvestJobFinished } from "./waiters/waitForHarvestJobFinished";

const commands = {
  CancelHarvestJobCommand,
  CreateChannelCommand,
  CreateChannelGroupCommand,
  CreateHarvestJobCommand,
  CreateOriginEndpointCommand,
  DeleteChannelCommand,
  DeleteChannelGroupCommand,
  DeleteChannelPolicyCommand,
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointPolicyCommand,
  GetChannelCommand,
  GetChannelGroupCommand,
  GetChannelPolicyCommand,
  GetHarvestJobCommand,
  GetOriginEndpointCommand,
  GetOriginEndpointPolicyCommand,
  ListChannelGroupsCommand,
  ListChannelsCommand,
  ListHarvestJobsCommand,
  ListOriginEndpointsCommand,
  ListTagsForResourceCommand,
  PutChannelPolicyCommand,
  PutOriginEndpointPolicyCommand,
  ResetChannelStateCommand,
  ResetOriginEndpointStateCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateChannelGroupCommand,
  UpdateOriginEndpointCommand,
};
const paginators = {
  paginateListChannelGroups,
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
};
const waiters = {
  waitUntilHarvestJobFinished,
};

/**
 * @public
 */
export interface MediaPackageV2RequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MediaPackageV2 {
  /**
   * @see {@link CancelHarvestJobCommand}
   */
  cancelHarvestJob(
    args: CancelHarvestJobCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<CancelHarvestJobCommandOutput>;
  cancelHarvestJob(
    args: CancelHarvestJobCommandInput,
    cb: (err: any, data?: CancelHarvestJobCommandOutput) => void
  ): void;
  cancelHarvestJob(
    args: CancelHarvestJobCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: CancelHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelGroupCommand}
   */
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<CreateChannelGroupCommandOutput>;
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    cb: (err: any, data?: CreateChannelGroupCommandOutput) => void
  ): void;
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: CreateChannelGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHarvestJobCommand}
   */
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<CreateHarvestJobCommandOutput>;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginEndpointCommand}
   */
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<CreateOriginEndpointCommandOutput>;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelGroupCommand}
   */
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<DeleteChannelGroupCommandOutput>;
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    cb: (err: any, data?: DeleteChannelGroupCommandOutput) => void
  ): void;
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: DeleteChannelGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelPolicyCommand}
   */
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<DeleteChannelPolicyCommandOutput>;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;
  deleteChannelPolicy(
    args: DeleteChannelPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: DeleteChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginEndpointCommand}
   */
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<DeleteOriginEndpointCommandOutput>;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginEndpointPolicyCommand}
   */
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<DeleteOriginEndpointPolicyCommandOutput>;
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointPolicyCommandOutput) => void
  ): void;
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: DeleteOriginEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(
    args: GetChannelCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetChannelCommandOutput>;
  getChannel(
    args: GetChannelCommandInput,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;
  getChannel(
    args: GetChannelCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelGroupCommand}
   */
  getChannelGroup(
    args: GetChannelGroupCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetChannelGroupCommandOutput>;
  getChannelGroup(
    args: GetChannelGroupCommandInput,
    cb: (err: any, data?: GetChannelGroupCommandOutput) => void
  ): void;
  getChannelGroup(
    args: GetChannelGroupCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetChannelGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelPolicyCommand}
   */
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetChannelPolicyCommandOutput>;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;
  getChannelPolicy(
    args: GetChannelPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetHarvestJobCommand}
   */
  getHarvestJob(
    args: GetHarvestJobCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetHarvestJobCommandOutput>;
  getHarvestJob(
    args: GetHarvestJobCommandInput,
    cb: (err: any, data?: GetHarvestJobCommandOutput) => void
  ): void;
  getHarvestJob(
    args: GetHarvestJobCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginEndpointCommand}
   */
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetOriginEndpointCommandOutput>;
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    cb: (err: any, data?: GetOriginEndpointCommandOutput) => void
  ): void;
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginEndpointPolicyCommand}
   */
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<GetOriginEndpointPolicyCommandOutput>;
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: GetOriginEndpointPolicyCommandOutput) => void
  ): void;
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: GetOriginEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelGroupsCommand}
   */
  listChannelGroups(): Promise<ListChannelGroupsCommandOutput>;
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ListChannelGroupsCommandOutput>;
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    cb: (err: any, data?: ListChannelGroupsCommandOutput) => void
  ): void;
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ListChannelGroupsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(
    args: ListChannelsCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHarvestJobsCommand}
   */
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ListHarvestJobsCommandOutput>;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginEndpointsCommand}
   */
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ListOriginEndpointsCommandOutput>;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link PutChannelPolicyCommand}
   */
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<PutChannelPolicyCommandOutput>;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;
  putChannelPolicy(
    args: PutChannelPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: PutChannelPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutOriginEndpointPolicyCommand}
   */
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<PutOriginEndpointPolicyCommandOutput>;
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: PutOriginEndpointPolicyCommandOutput) => void
  ): void;
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: PutOriginEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetChannelStateCommand}
   */
  resetChannelState(
    args: ResetChannelStateCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ResetChannelStateCommandOutput>;
  resetChannelState(
    args: ResetChannelStateCommandInput,
    cb: (err: any, data?: ResetChannelStateCommandOutput) => void
  ): void;
  resetChannelState(
    args: ResetChannelStateCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ResetChannelStateCommandOutput) => void
  ): void;

  /**
   * @see {@link ResetOriginEndpointStateCommand}
   */
  resetOriginEndpointState(
    args: ResetOriginEndpointStateCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<ResetOriginEndpointStateCommandOutput>;
  resetOriginEndpointState(
    args: ResetOriginEndpointStateCommandInput,
    cb: (err: any, data?: ResetOriginEndpointStateCommandOutput) => void
  ): void;
  resetOriginEndpointState(
    args: ResetOriginEndpointStateCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: ResetOriginEndpointStateCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelGroupCommand}
   */
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<UpdateChannelGroupCommandOutput>;
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    cb: (err: any, data?: UpdateChannelGroupCommandOutput) => void
  ): void;
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: UpdateChannelGroupCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginEndpointCommand}
   */
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options?: MediaPackageV2RequestOptions
  ): Promise<UpdateOriginEndpointCommandOutput>;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options: MediaPackageV2RequestOptions,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelGroupsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelGroupsCommandOutput}.
   */
  paginateListChannelGroups(
    args?: ListChannelGroupsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelGroupsCommandOutput>;

  /**
   * @see {@link ListChannelsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListChannelsCommandOutput}.
   */
  paginateListChannels(
    args: ListChannelsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListChannelsCommandOutput>;

  /**
   * @see {@link ListHarvestJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHarvestJobsCommandOutput}.
   */
  paginateListHarvestJobs(
    args: ListHarvestJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHarvestJobsCommandOutput>;

  /**
   * @see {@link ListOriginEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOriginEndpointsCommandOutput}.
   */
  paginateListOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOriginEndpointsCommandOutput>;

  /**
   * @see {@link GetHarvestJobCommand}
   * @param args - command input.
   * @param waiterConfig - `maxWaitTime` in seconds or waiter config object.
   */
  waitUntilHarvestJobFinished(
    args: GetHarvestJobCommandInput,
    waiterConfig: number | Omit<WaiterConfiguration<MediaPackageV2>, "client">
  ): Promise<WaiterResult<GetHarvestJobCommandOutput>>;
}

/**
 * <note> <p>This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023. To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to migrate your resources from MediaPackage v1 to MediaPackage v2. </p> <p>The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information added, like "v2", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources.</p> <p>If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet, see the <a href="https://docs.aws.amazon.com/mediapackage/latest/apireference/what-is.html">MediaPackage v1 Live API Reference</a>.</p> </note> <p>This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols.</p> <p>We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide.</p>
 * @public
 */
export class MediaPackageV2 extends MediaPackageV2Client implements MediaPackageV2 {}
createAggregatedClient(commands, MediaPackageV2, { paginators, waiters });
