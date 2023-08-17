// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateContainerCommand,
  CreateContainerCommandInput,
  CreateContainerCommandOutput,
} from "./commands/CreateContainerCommand";
import {
  DeleteContainerCommand,
  DeleteContainerCommandInput,
  DeleteContainerCommandOutput,
} from "./commands/DeleteContainerCommand";
import {
  DeleteContainerPolicyCommand,
  DeleteContainerPolicyCommandInput,
  DeleteContainerPolicyCommandOutput,
} from "./commands/DeleteContainerPolicyCommand";
import {
  DeleteCorsPolicyCommand,
  DeleteCorsPolicyCommandInput,
  DeleteCorsPolicyCommandOutput,
} from "./commands/DeleteCorsPolicyCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  DeleteMetricPolicyCommand,
  DeleteMetricPolicyCommandInput,
  DeleteMetricPolicyCommandOutput,
} from "./commands/DeleteMetricPolicyCommand";
import {
  DescribeContainerCommand,
  DescribeContainerCommandInput,
  DescribeContainerCommandOutput,
} from "./commands/DescribeContainerCommand";
import {
  GetContainerPolicyCommand,
  GetContainerPolicyCommandInput,
  GetContainerPolicyCommandOutput,
} from "./commands/GetContainerPolicyCommand";
import {
  GetCorsPolicyCommand,
  GetCorsPolicyCommandInput,
  GetCorsPolicyCommandOutput,
} from "./commands/GetCorsPolicyCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import {
  GetMetricPolicyCommand,
  GetMetricPolicyCommandInput,
  GetMetricPolicyCommandOutput,
} from "./commands/GetMetricPolicyCommand";
import {
  ListContainersCommand,
  ListContainersCommandInput,
  ListContainersCommandOutput,
} from "./commands/ListContainersCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  PutContainerPolicyCommand,
  PutContainerPolicyCommandInput,
  PutContainerPolicyCommandOutput,
} from "./commands/PutContainerPolicyCommand";
import {
  PutCorsPolicyCommand,
  PutCorsPolicyCommandInput,
  PutCorsPolicyCommandOutput,
} from "./commands/PutCorsPolicyCommand";
import {
  PutLifecyclePolicyCommand,
  PutLifecyclePolicyCommandInput,
  PutLifecyclePolicyCommandOutput,
} from "./commands/PutLifecyclePolicyCommand";
import {
  PutMetricPolicyCommand,
  PutMetricPolicyCommandInput,
  PutMetricPolicyCommandOutput,
} from "./commands/PutMetricPolicyCommand";
import {
  StartAccessLoggingCommand,
  StartAccessLoggingCommandInput,
  StartAccessLoggingCommandOutput,
} from "./commands/StartAccessLoggingCommand";
import {
  StopAccessLoggingCommand,
  StopAccessLoggingCommandInput,
  StopAccessLoggingCommandOutput,
} from "./commands/StopAccessLoggingCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { MediaStoreClient, MediaStoreClientConfig } from "./MediaStoreClient";

const commands = {
  CreateContainerCommand,
  DeleteContainerCommand,
  DeleteContainerPolicyCommand,
  DeleteCorsPolicyCommand,
  DeleteLifecyclePolicyCommand,
  DeleteMetricPolicyCommand,
  DescribeContainerCommand,
  GetContainerPolicyCommand,
  GetCorsPolicyCommand,
  GetLifecyclePolicyCommand,
  GetMetricPolicyCommand,
  ListContainersCommand,
  ListTagsForResourceCommand,
  PutContainerPolicyCommand,
  PutCorsPolicyCommand,
  PutLifecyclePolicyCommand,
  PutMetricPolicyCommand,
  StartAccessLoggingCommand,
  StopAccessLoggingCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

export interface MediaStore {
  /**
   * @see {@link CreateContainerCommand}
   */
  createContainer(
    args: CreateContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerCommandOutput>;
  createContainer(args: CreateContainerCommandInput, cb: (err: any, data?: CreateContainerCommandOutput) => void): void;
  createContainer(
    args: CreateContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateContainerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerCommand}
   */
  deleteContainer(
    args: DeleteContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerCommandOutput>;
  deleteContainer(args: DeleteContainerCommandInput, cb: (err: any, data?: DeleteContainerCommandOutput) => void): void;
  deleteContainer(
    args: DeleteContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteContainerPolicyCommand}
   */
  deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteContainerPolicyCommandOutput>;
  deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void
  ): void;
  deleteContainerPolicy(
    args: DeleteContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteContainerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteCorsPolicyCommand}
   */
  deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteCorsPolicyCommandOutput>;
  deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void
  ): void;
  deleteCorsPolicy(
    args: DeleteCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteCorsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMetricPolicyCommand}
   */
  deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMetricPolicyCommandOutput>;
  deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    cb: (err: any, data?: DeleteMetricPolicyCommandOutput) => void
  ): void;
  deleteMetricPolicy(
    args: DeleteMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMetricPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeContainerCommand}
   */
  describeContainer(
    args: DescribeContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeContainerCommandOutput>;
  describeContainer(
    args: DescribeContainerCommandInput,
    cb: (err: any, data?: DescribeContainerCommandOutput) => void
  ): void;
  describeContainer(
    args: DescribeContainerCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeContainerCommandOutput) => void
  ): void;

  /**
   * @see {@link GetContainerPolicyCommand}
   */
  getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetContainerPolicyCommandOutput>;
  getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    cb: (err: any, data?: GetContainerPolicyCommandOutput) => void
  ): void;
  getContainerPolicy(
    args: GetContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetContainerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetCorsPolicyCommand}
   */
  getCorsPolicy(args: GetCorsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetCorsPolicyCommandOutput>;
  getCorsPolicy(args: GetCorsPolicyCommandInput, cb: (err: any, data?: GetCorsPolicyCommandOutput) => void): void;
  getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCorsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePolicyCommand}
   */
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetMetricPolicyCommand}
   */
  getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMetricPolicyCommandOutput>;
  getMetricPolicy(args: GetMetricPolicyCommandInput, cb: (err: any, data?: GetMetricPolicyCommandOutput) => void): void;
  getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainersCommand}
   */
  listContainers(
    args: ListContainersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainersCommandOutput>;
  listContainers(args: ListContainersCommandInput, cb: (err: any, data?: ListContainersCommandOutput) => void): void;
  listContainers(
    args: ListContainersCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListContainersCommandOutput) => void
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
   * @see {@link PutContainerPolicyCommand}
   */
  putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutContainerPolicyCommandOutput>;
  putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    cb: (err: any, data?: PutContainerPolicyCommandOutput) => void
  ): void;
  putContainerPolicy(
    args: PutContainerPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutContainerPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutCorsPolicyCommand}
   */
  putCorsPolicy(args: PutCorsPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutCorsPolicyCommandOutput>;
  putCorsPolicy(args: PutCorsPolicyCommandInput, cb: (err: any, data?: PutCorsPolicyCommandOutput) => void): void;
  putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutCorsPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutLifecyclePolicyCommand}
   */
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutLifecyclePolicyCommandOutput>;
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;
  putLifecyclePolicy(
    args: PutLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link PutMetricPolicyCommand}
   */
  putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutMetricPolicyCommandOutput>;
  putMetricPolicy(args: PutMetricPolicyCommandInput, cb: (err: any, data?: PutMetricPolicyCommandOutput) => void): void;
  putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutMetricPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link StartAccessLoggingCommand}
   */
  startAccessLogging(
    args: StartAccessLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAccessLoggingCommandOutput>;
  startAccessLogging(
    args: StartAccessLoggingCommandInput,
    cb: (err: any, data?: StartAccessLoggingCommandOutput) => void
  ): void;
  startAccessLogging(
    args: StartAccessLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAccessLoggingCommandOutput) => void
  ): void;

  /**
   * @see {@link StopAccessLoggingCommand}
   */
  stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopAccessLoggingCommandOutput>;
  stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    cb: (err: any, data?: StopAccessLoggingCommandOutput) => void
  ): void;
  stopAccessLogging(
    args: StopAccessLoggingCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopAccessLoggingCommandOutput) => void
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
}

/**
 * @public
 * <p>An AWS Elemental MediaStore container is a namespace that holds folders and objects.
 *          You use a container endpoint to create, read, and delete objects. </p>
 */
export class MediaStore extends MediaStoreClient implements MediaStore {}
createAggregatedClient(commands, MediaStore);
