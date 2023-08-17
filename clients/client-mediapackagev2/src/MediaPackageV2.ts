// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateChannelCommand,
  CreateChannelCommandInput,
  CreateChannelCommandOutput,
} from "./commands/CreateChannelCommand";
import {
  CreateChannelGroupCommand,
  CreateChannelGroupCommandInput,
  CreateChannelGroupCommandOutput,
} from "./commands/CreateChannelGroupCommand";
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
  DeleteChannelGroupCommand,
  DeleteChannelGroupCommandInput,
  DeleteChannelGroupCommandOutput,
} from "./commands/DeleteChannelGroupCommand";
import {
  DeleteChannelPolicyCommand,
  DeleteChannelPolicyCommandInput,
  DeleteChannelPolicyCommandOutput,
} from "./commands/DeleteChannelPolicyCommand";
import {
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointCommandInput,
  DeleteOriginEndpointCommandOutput,
} from "./commands/DeleteOriginEndpointCommand";
import {
  DeleteOriginEndpointPolicyCommand,
  DeleteOriginEndpointPolicyCommandInput,
  DeleteOriginEndpointPolicyCommandOutput,
} from "./commands/DeleteOriginEndpointPolicyCommand";
import { GetChannelCommand, GetChannelCommandInput, GetChannelCommandOutput } from "./commands/GetChannelCommand";
import {
  GetChannelGroupCommand,
  GetChannelGroupCommandInput,
  GetChannelGroupCommandOutput,
} from "./commands/GetChannelGroupCommand";
import {
  GetChannelPolicyCommand,
  GetChannelPolicyCommandInput,
  GetChannelPolicyCommandOutput,
} from "./commands/GetChannelPolicyCommand";
import {
  GetOriginEndpointCommand,
  GetOriginEndpointCommandInput,
  GetOriginEndpointCommandOutput,
} from "./commands/GetOriginEndpointCommand";
import {
  GetOriginEndpointPolicyCommand,
  GetOriginEndpointPolicyCommandInput,
  GetOriginEndpointPolicyCommandOutput,
} from "./commands/GetOriginEndpointPolicyCommand";
import {
  ListChannelGroupsCommand,
  ListChannelGroupsCommandInput,
  ListChannelGroupsCommandOutput,
} from "./commands/ListChannelGroupsCommand";
import {
  ListChannelsCommand,
  ListChannelsCommandInput,
  ListChannelsCommandOutput,
} from "./commands/ListChannelsCommand";
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
  PutChannelPolicyCommand,
  PutChannelPolicyCommandInput,
  PutChannelPolicyCommandOutput,
} from "./commands/PutChannelPolicyCommand";
import {
  PutOriginEndpointPolicyCommand,
  PutOriginEndpointPolicyCommandInput,
  PutOriginEndpointPolicyCommandOutput,
} from "./commands/PutOriginEndpointPolicyCommand";
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
  UpdateChannelGroupCommand,
  UpdateChannelGroupCommandInput,
  UpdateChannelGroupCommandOutput,
} from "./commands/UpdateChannelGroupCommand";
import {
  UpdateOriginEndpointCommand,
  UpdateOriginEndpointCommandInput,
  UpdateOriginEndpointCommandOutput,
} from "./commands/UpdateOriginEndpointCommand";
import { MediaPackageV2Client, MediaPackageV2ClientConfig } from "./MediaPackageV2Client";

const commands = {
  CreateChannelCommand,
  CreateChannelGroupCommand,
  CreateOriginEndpointCommand,
  DeleteChannelCommand,
  DeleteChannelGroupCommand,
  DeleteChannelPolicyCommand,
  DeleteOriginEndpointCommand,
  DeleteOriginEndpointPolicyCommand,
  GetChannelCommand,
  GetChannelGroupCommand,
  GetChannelPolicyCommand,
  GetOriginEndpointCommand,
  GetOriginEndpointPolicyCommand,
  ListChannelGroupsCommand,
  ListChannelsCommand,
  ListOriginEndpointsCommand,
  ListTagsForResourceCommand,
  PutChannelPolicyCommand,
  PutOriginEndpointPolicyCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateChannelCommand,
  UpdateChannelGroupCommand,
  UpdateOriginEndpointCommand,
};

export interface MediaPackageV2 {
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
   * @see {@link CreateChannelGroupCommand}
   */
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChannelGroupCommandOutput>;
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    cb: (err: any, data?: CreateChannelGroupCommandOutput) => void
  ): void;
  createChannelGroup(
    args: CreateChannelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChannelGroupCommandOutput) => void
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
   * @see {@link DeleteChannelGroupCommand}
   */
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteChannelGroupCommandOutput>;
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    cb: (err: any, data?: DeleteChannelGroupCommandOutput) => void
  ): void;
  deleteChannelGroup(
    args: DeleteChannelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteChannelGroupCommandOutput) => void
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
   * @see {@link DeleteOriginEndpointPolicyCommand}
   */
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteOriginEndpointPolicyCommandOutput>;
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: DeleteOriginEndpointPolicyCommandOutput) => void
  ): void;
  deleteOriginEndpointPolicy(
    args: DeleteOriginEndpointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteOriginEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelCommand}
   */
  getChannel(args: GetChannelCommandInput, options?: __HttpHandlerOptions): Promise<GetChannelCommandOutput>;
  getChannel(args: GetChannelCommandInput, cb: (err: any, data?: GetChannelCommandOutput) => void): void;
  getChannel(
    args: GetChannelCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelCommandOutput) => void
  ): void;

  /**
   * @see {@link GetChannelGroupCommand}
   */
  getChannelGroup(
    args: GetChannelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetChannelGroupCommandOutput>;
  getChannelGroup(args: GetChannelGroupCommandInput, cb: (err: any, data?: GetChannelGroupCommandOutput) => void): void;
  getChannelGroup(
    args: GetChannelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetChannelGroupCommandOutput) => void
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
   * @see {@link GetOriginEndpointCommand}
   */
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginEndpointCommandOutput>;
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    cb: (err: any, data?: GetOriginEndpointCommandOutput) => void
  ): void;
  getOriginEndpoint(
    args: GetOriginEndpointCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginEndpointCommandOutput) => void
  ): void;

  /**
   * @see {@link GetOriginEndpointPolicyCommand}
   */
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetOriginEndpointPolicyCommandOutput>;
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: GetOriginEndpointPolicyCommandOutput) => void
  ): void;
  getOriginEndpointPolicy(
    args: GetOriginEndpointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetOriginEndpointPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListChannelGroupsCommand}
   */
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListChannelGroupsCommandOutput>;
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    cb: (err: any, data?: ListChannelGroupsCommandOutput) => void
  ): void;
  listChannelGroups(
    args: ListChannelGroupsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListChannelGroupsCommandOutput) => void
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
   * @see {@link PutOriginEndpointPolicyCommand}
   */
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutOriginEndpointPolicyCommandOutput>;
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    cb: (err: any, data?: PutOriginEndpointPolicyCommandOutput) => void
  ): void;
  putOriginEndpointPolicy(
    args: PutOriginEndpointPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutOriginEndpointPolicyCommandOutput) => void
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
   * @see {@link UpdateChannelGroupCommand}
   */
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateChannelGroupCommandOutput>;
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    cb: (err: any, data?: UpdateChannelGroupCommandOutput) => void
  ): void;
  updateChannelGroup(
    args: UpdateChannelGroupCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateChannelGroupCommandOutput) => void
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
 * <note>
 *             <p>This guide is intended for creating AWS Elemental MediaPackage resources in MediaPackage Version 2 (v2) starting from May 2023.
 *         To get started with MediaPackage v2, create your MediaPackage resources. There isn't an automated process to
 *         migrate your resources from MediaPackage v1 to MediaPackage v2. </p>
 *             <p>The names of the entities that you use to access this API, like URLs and ARNs, all have the versioning information
 *            added, like "v2", to distinguish from the prior version. If you used MediaPackage prior to this release, you can't use
 *            the MediaPackage v2 CLI or the MediaPackage v2 API to access any MediaPackage v1 resources.</p>
 *             <p>If you created resources in MediaPackage v1, use video on demand (VOD) workflows, and aren't looking to migrate to MediaPackage v2 yet,
 *            see the <a href="https://docs.aws.amazon.com/mediapackage/latest/apireference/what-is.html">MediaPackage v1 Live API Reference</a>.</p>
 *          </note>
 *          <p>This is the AWS Elemental MediaPackage v2 Live REST API Reference. It describes all the MediaPackage API operations for live content in detail, and provides sample requests, responses, and errors for the supported web services protocols.</p>
 *          <p>We assume that you have the IAM permissions that you need to use MediaPackage via the REST API. We also assume that you are familiar with the features and operations of MediaPackage, as described in the AWS Elemental MediaPackage User Guide.</p>
 */
export class MediaPackageV2 extends MediaPackageV2Client implements MediaPackageV2 {}
createAggregatedClient(commands, MediaPackageV2);
