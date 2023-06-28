// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  ConfigureLogsCommand,
  ConfigureLogsCommandInput,
  ConfigureLogsCommandOutput,
} from "./commands/ConfigureLogsCommand";
import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateHarvestJobCommand,
  CreateHarvestJobCommandInput,
  CreateHarvestJobCommandOutput,
} from "./commands/CreateHarvestJobCommand";
import {
  CreateOriginEndpointCommand,
  CreateOriginEndpointCommandInput,
  CreateOriginEndpointCommandOutput,
} from "./commands/CreateOriginEndpointCommand";
import {
  DeleteChannelCommand,
  DeleteChannelCommandInput,
  DeleteChannelCommandOutput,
} from "./commands/DeleteChannelCommand";
import {
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "./commands/DeleteOriginEndpointCommand";
import {
  DescribeChannelCommand,
  DescribeChannelCommandInput,
  DescribeChannelCommandOutput,
} from "./commands/DescribeChannelCommand";
import {
  DescribeHarvestJobCommand,
  DescribeHarvestJobCommandInput,
  DescribeHarvestJobCommandOutput,
} from "./commands/DescribeHarvestJobCommand";
import {
  DescribeOriginEndpointCommand,
  DescribeOriginEndpointCommandInput,
  DescribeOriginEndpointCommandOutput,
} from "./commands/DescribeOriginEndpointCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
import {
  ListHarvestJobsCommand,
  ListHarvestJobsCommandInput,
  ListHarvestJobsCommandOutput,
} from "./commands/ListHarvestJobsCommand";
import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "./commands/ListOriginEndpointsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  RotateChannelCredentialsCommand,
  RotateChannelCredentialsCommandInput,
  RotateChannelCredentialsCommandOutput,
} from "./commands/RotateChannelCredentialsCommand";
import {
  RotateIngestEndpointCredentialsCommand,
  RotateIngestEndpointCredentialsCommandInput,
  RotateIngestEndpointCredentialsCommandOutput,
} from "./commands/RotateIngestEndpointCredentialsCommand";
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
  UpdateOriginEndpointCommand,
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "./commands/UpdateOriginEndpointCommand";
import { MediaPackageClient, MediaPackageClientConfig } from "./MediaPackageClient";

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

export interface MediaPackage {
  /**
   * @see {@link ConfigureLogsCommand}
   */
  configureLogs(args: ConfigureLogsCommandInput, options?: __HttpHandlerOptions): Promise<ConfigureLogsCommandOutput>;
  configureLogs(args: ConfigureLogsCommandInput, cb: (err: any, data?: ConfigureLogsCommandOutput) => void): void;
  configureLogs(
    args: ConfigureLogsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ConfigureLogsCommandOutput) => void
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
   * @see {@link CreateHarvestJobCommand}
   */
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateHarvestJobCommandOutput>;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;
  createHarvestJob(
    args: CreateHarvestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateOriginEndpointCommand}
   */
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateOriginEndpointCommandOutput>;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
  ): void;
  createOriginEndpoint(
    args: CreateOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateOriginEndpointCommandOutput) => void
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
   * @see {@link DeleteOriginEndpointCommand}
   */
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginEndpointCommandOutput>;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
  ): void;
  deleteOriginEndpoint(
    args: DeleteOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginEndpointCommandOutput) => void
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
   * @see {@link DescribeHarvestJobCommand}
   */
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHarvestJobCommandOutput>;
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;
  describeHarvestJob(
    args: DescribeHarvestJobCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHarvestJobCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeOriginEndpointCommand}
   */
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeOriginEndpointCommandOutput>;
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
  ): void;
  describeOriginEndpoint(
    args: DescribeOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeOriginEndpointCommandOutput) => void
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
   * @see {@link ListHarvestJobsCommand}
   */
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHarvestJobsCommandOutput>;
  listHarvestJobs(args: ListHarvestJobsCommandInput, cb: (err: any, data?: ListHarvestJobsCommandOutput) => void): void;
  listHarvestJobs(
    args: ListHarvestJobsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHarvestJobsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListOriginEndpointsCommand}
   */
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListOriginEndpointsCommandOutput>;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
  ): void;
  listOriginEndpoints(
    args: ListOriginEndpointsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListOriginEndpointsCommandOutput) => void
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
   * @see {@link RotateChannelCredentialsCommand}
   */
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateChannelCredentialsCommandOutput>;
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;
  rotateChannelCredentials(
    args: RotateChannelCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateChannelCredentialsCommandOutput) => void
  ): void;

  /**
   * @see {@link RotateIngestEndpointCredentialsCommand}
   */
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RotateIngestEndpointCredentialsCommandOutput>;
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
  ): void;
  rotateIngestEndpointCredentials(
    args: RotateIngestEndpointCredentialsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RotateIngestEndpointCredentialsCommandOutput) => void
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
   * @see {@link UpdateOriginEndpointCommand}
   */
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateOriginEndpointCommandOutput>;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
  updateOriginEndpoint(
    args: UpdateOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateOriginEndpointCommandOutput) => void
  ): void;
}

/**
 * @public
 * AWS Elemental MediaPackage
 */
export class MediaPackage extends MediaPackageClient implements MediaPackage {}
createAggregatedClient(commands, MediaPackage);
