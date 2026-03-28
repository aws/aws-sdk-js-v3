// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateContainerCommandInput,
  type CreateContainerCommandOutput,
  CreateContainerCommand,
} from "./commands/CreateContainerCommand";
import {
  type DeleteContainerCommandInput,
  type DeleteContainerCommandOutput,
  DeleteContainerCommand,
} from "./commands/DeleteContainerCommand";
import {
  type DeleteContainerPolicyCommandInput,
  type DeleteContainerPolicyCommandOutput,
  DeleteContainerPolicyCommand,
} from "./commands/DeleteContainerPolicyCommand";
import {
  type DeleteCorsPolicyCommandInput,
  type DeleteCorsPolicyCommandOutput,
  DeleteCorsPolicyCommand,
} from "./commands/DeleteCorsPolicyCommand";
import {
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeleteLifecyclePolicyCommand,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  type DeleteMetricPolicyCommandInput,
  type DeleteMetricPolicyCommandOutput,
  DeleteMetricPolicyCommand,
} from "./commands/DeleteMetricPolicyCommand";
import {
  type DescribeContainerCommandInput,
  type DescribeContainerCommandOutput,
  DescribeContainerCommand,
} from "./commands/DescribeContainerCommand";
import {
  type GetContainerPolicyCommandInput,
  type GetContainerPolicyCommandOutput,
  GetContainerPolicyCommand,
} from "./commands/GetContainerPolicyCommand";
import {
  type GetCorsPolicyCommandInput,
  type GetCorsPolicyCommandOutput,
  GetCorsPolicyCommand,
} from "./commands/GetCorsPolicyCommand";
import {
  type GetLifecyclePolicyCommandInput,
  type GetLifecyclePolicyCommandOutput,
  GetLifecyclePolicyCommand,
} from "./commands/GetLifecyclePolicyCommand";
import {
  type GetMetricPolicyCommandInput,
  type GetMetricPolicyCommandOutput,
  GetMetricPolicyCommand,
} from "./commands/GetMetricPolicyCommand";
import {
  type ListContainersCommandInput,
  type ListContainersCommandOutput,
  ListContainersCommand,
} from "./commands/ListContainersCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type PutContainerPolicyCommandInput,
  type PutContainerPolicyCommandOutput,
  PutContainerPolicyCommand,
} from "./commands/PutContainerPolicyCommand";
import {
  type PutCorsPolicyCommandInput,
  type PutCorsPolicyCommandOutput,
  PutCorsPolicyCommand,
} from "./commands/PutCorsPolicyCommand";
import {
  type PutLifecyclePolicyCommandInput,
  type PutLifecyclePolicyCommandOutput,
  PutLifecyclePolicyCommand,
} from "./commands/PutLifecyclePolicyCommand";
import {
  type PutMetricPolicyCommandInput,
  type PutMetricPolicyCommandOutput,
  PutMetricPolicyCommand,
} from "./commands/PutMetricPolicyCommand";
import {
  type StartAccessLoggingCommandInput,
  type StartAccessLoggingCommandOutput,
  StartAccessLoggingCommand,
} from "./commands/StartAccessLoggingCommand";
import {
  type StopAccessLoggingCommandInput,
  type StopAccessLoggingCommandOutput,
  StopAccessLoggingCommand,
} from "./commands/StopAccessLoggingCommand";
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
import { MediaStoreClient } from "./MediaStoreClient";
import { paginateListContainers } from "./pagination/ListContainersPaginator";

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
const paginators = {
  paginateListContainers,
};

export interface MediaStore {
  /**
   * @see {@link CreateContainerCommand}
   */
  createContainer(
    args: CreateContainerCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateContainerCommandOutput>;
  createContainer(
    args: CreateContainerCommandInput,
    cb: (err: any, data?: CreateContainerCommandOutput) => void
  ): void;
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
  deleteContainer(
    args: DeleteContainerCommandInput,
    cb: (err: any, data?: DeleteContainerCommandOutput) => void
  ): void;
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
  describeContainer(): Promise<DescribeContainerCommandOutput>;
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
  getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCorsPolicyCommandOutput>;
  getCorsPolicy(
    args: GetCorsPolicyCommandInput,
    cb: (err: any, data?: GetCorsPolicyCommandOutput) => void
  ): void;
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
  getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    cb: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): void;
  getMetricPolicy(
    args: GetMetricPolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMetricPolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainersCommand}
   */
  listContainers(): Promise<ListContainersCommandOutput>;
  listContainers(
    args: ListContainersCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListContainersCommandOutput>;
  listContainers(
    args: ListContainersCommandInput,
    cb: (err: any, data?: ListContainersCommandOutput) => void
  ): void;
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
  putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutCorsPolicyCommandOutput>;
  putCorsPolicy(
    args: PutCorsPolicyCommandInput,
    cb: (err: any, data?: PutCorsPolicyCommandOutput) => void
  ): void;
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
  putMetricPolicy(
    args: PutMetricPolicyCommandInput,
    cb: (err: any, data?: PutMetricPolicyCommandOutput) => void
  ): void;
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
  tagResource(
    args: TagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link ListContainersCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListContainersCommandOutput}.
   */
  paginateListContainers(
    args?: ListContainersCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListContainersCommandOutput>;
}

/**
 * <p>An AWS Elemental MediaStore container is a namespace that holds folders and objects.
 *          You use a container endpoint to create, read, and delete objects. </p>
 * @public
 */
export class MediaStore extends MediaStoreClient implements MediaStore {}
createAggregatedClient(commands, MediaStore, { paginators });
