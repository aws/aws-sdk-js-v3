// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type ConfigureLogsCommandInput,
  type ConfigureLogsCommandOutput,
  ConfigureLogsCommand,
} from "./commands/ConfigureLogsCommand";
import {
  type CreateChannelCommandInput,
  type CreateChannelCommandOutput,
  CreateChannelCommand,
} from "./commands/CreateChannelCommand";
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
  type DeleteOriginEndpointCommandInput,
  type DeleteOriginEndpointCommandOutput,
  DeleteOriginEndpointCommand,
} from "./commands/DeleteOriginEndpointCommand";
import {
  type DescribeChannelCommandInput,
  type DescribeChannelCommandOutput,
  DescribeChannelCommand,
} from "./commands/DescribeChannelCommand";
import {
  type DescribeHarvestJobCommandInput,
  type DescribeHarvestJobCommandOutput,
  DescribeHarvestJobCommand,
} from "./commands/DescribeHarvestJobCommand";
import {
  type DescribeOriginEndpointCommandInput,
  type DescribeOriginEndpointCommandOutput,
  DescribeOriginEndpointCommand,
} from "./commands/DescribeOriginEndpointCommand";
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
  type RotateChannelCredentialsCommandInput,
  type RotateChannelCredentialsCommandOutput,
  RotateChannelCredentialsCommand,
} from "./commands/RotateChannelCredentialsCommand";
import {
  type RotateIngestEndpointCredentialsCommandInput,
  type RotateIngestEndpointCredentialsCommandOutput,
  RotateIngestEndpointCredentialsCommand,
} from "./commands/RotateIngestEndpointCredentialsCommand";
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
  type UpdateOriginEndpointCommandInput,
  type UpdateOriginEndpointCommandOutput,
  UpdateOriginEndpointCommand,
} from "./commands/UpdateOriginEndpointCommand";
import { MediaPackageClient } from "./MediaPackageClient";
import { paginateListChannels } from "./pagination/ListChannelsPaginator";
import { paginateListHarvestJobs } from "./pagination/ListHarvestJobsPaginator";
import { paginateListOriginEndpoints } from "./pagination/ListOriginEndpointsPaginator";

const commands = {
  ConfigureLogsCommand,
  CreateChannelCommand,
  CreateHarvestJobCommand,
  CreateOriginEndpointCommand,
  DeleteChannelCommand,
  DeleteOriginEndpointCommand,
  DescribeChannelCommand,
  DescribeHarvestJobCommand,
  DescribeOriginEndpointCommand,
  ListChannelsCommand,
  ListHarvestJobsCommand,
  ListOriginEndpointsCommand,
  ListTagsForResourceCommand,
  RotateChannelCredentialsCommand,
  RotateIngestEndpointCredentialsCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateOriginEndpointCommand,
};
const paginators = {
  paginateListChannels,
  paginateListHarvestJobs,
  paginateListOriginEndpoints,
};

/**
 * @public
 */
export interface MediaPackageRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface MediaPackage {
  /**
   * @see {@link ConfigureLogsCommand}
   */
  configureLogs(
    args: ConfigureLogsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<ConfigureLogsCommandOutput>;
  configureLogs(
    args: ConfigureLogsCommandInput,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;
  configureLogs(
    args: ConfigureLogsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateChannelCommand}
   */
  createChannel(
    args: CreateChannelCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<CreateChannelCommandOutput>;
  createChannel(
    args: CreateChannelCommandInput,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;
  createChannel(
    args: CreateChannelCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: CreateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateHarvestJobCommand}
   */
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<CreateHarvestJobCommandOutput>;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginEndpointCommand}
   */
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<CreateOriginEndpointCommandOutput>;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteChannelCommand}
   */
  deleteChannel(
    args: DeleteChannelCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<DeleteChannelCommandOutput>;
  deleteChannel(
    args: DeleteChannelCommandInput,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;
  deleteChannel(
    args: DeleteChannelCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: DeleteChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteOriginEndpointCommand}
   */
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<DeleteOriginEndpointCommandOutput>;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeChannelCommand}
   */
  describeChannel(
    args: DescribeChannelCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<DescribeChannelCommandOutput>;
  describeChannel(
    args: DescribeChannelCommandInput,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;
  describeChannel(
    args: DescribeChannelCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: DescribeChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHarvestJobCommand}
   */
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<DescribeHarvestJobCommandOutput>;
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOriginEndpointCommand}
   */
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<DescribeOriginEndpointCommandOutput>;
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): void;
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelsCommand}
   */
  listChannels(): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<ListChannelsCommandOutput>;
  listChannels(
    args: ListChannelsCommandInput,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;
  listChannels(
    args: ListChannelsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: ListChannelsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHarvestJobsCommand}
   */
  listHarvestJobs(): Promise<ListHarvestJobsCommandOutput>;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<ListHarvestJobsCommandOutput>;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginEndpointsCommand}
   */
  listOriginEndpoints(): Promise<ListOriginEndpointsCommandOutput>;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<ListOriginEndpointsCommandOutput>;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateChannelCredentialsCommand}
   */
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<RotateChannelCredentialsCommandOutput>;
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateIngestEndpointCredentialsCommand}
   */
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<RotateIngestEndpointCredentialsCommandOutput>;
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): void;
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateChannelCommand}
   */
  updateChannel(
    args: UpdateChannelCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<UpdateChannelCommandOutput>;
  updateChannel(
    args: UpdateChannelCommandInput,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;
  updateChannel(
    args: UpdateChannelCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: UpdateChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateOriginEndpointCommand}
   */
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options?: MediaPackageRequestOptions
  ): Promise<UpdateOriginEndpointCommandOutput>;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options: MediaPackageRequestOptions,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;

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
   * @see {@link ListHarvestJobsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListHarvestJobsCommandOutput}.
   */
  paginateListHarvestJobs(
    args?: ListHarvestJobsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListHarvestJobsCommandOutput>;

  /**
   * @see {@link ListOriginEndpointsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListOriginEndpointsCommandOutput}.
   */
  paginateListOriginEndpoints(
    args?: ListOriginEndpointsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListOriginEndpointsCommandOutput>;
}

/**
 * AWS Elemental MediaPackage
 * @public
 */
export class MediaPackage extends MediaPackageClient implements MediaPackage {}
createAggregatedClient(commands, MediaPackage, { paginators });
