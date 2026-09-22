// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type CreateLifecyclePolicyCommandInput,
  type CreateLifecyclePolicyCommandOutput,
  CreateLifecyclePolicyCommand,
} from "./commands/CreateLifecyclePolicyCommand";
import {
  type DeleteLifecyclePolicyCommandInput,
  type DeleteLifecyclePolicyCommandOutput,
  DeleteLifecyclePolicyCommand,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  type GetLifecyclePoliciesCommandInput,
  type GetLifecyclePoliciesCommandOutput,
  GetLifecyclePoliciesCommand,
} from "./commands/GetLifecyclePoliciesCommand";
import {
  type GetLifecyclePolicyCommandInput,
  type GetLifecyclePolicyCommandOutput,
  GetLifecyclePolicyCommand,
} from "./commands/GetLifecyclePolicyCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
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
  type UpdateLifecyclePolicyCommandInput,
  type UpdateLifecyclePolicyCommandOutput,
  UpdateLifecyclePolicyCommand,
} from "./commands/UpdateLifecyclePolicyCommand";
import { DLMClient } from "./DLMClient";

const commands = {
  CreateLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommand,
  GetLifecyclePoliciesCommand,
  GetLifecyclePolicyCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLifecyclePolicyCommand,
};

/**
 * @public
 */
export interface DLMRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface DLM {
  /**
   * @see {@link CreateLifecyclePolicyCommand}
   */
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: DLMRequestOptions
  ): Promise<CreateLifecyclePolicyCommandOutput>;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLifecyclePolicyCommand}
   */
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: DLMRequestOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePoliciesCommand}
   */
  getLifecyclePolicies(): Promise<GetLifecyclePoliciesCommandOutput>;
  getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    options?: DLMRequestOptions
  ): Promise<GetLifecyclePoliciesCommandOutput>;
  getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void
  ): void;
  getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLifecyclePolicyCommand}
   */
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: DLMRequestOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: DLMRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: DLMRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: DLMRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLifecyclePolicyCommand}
   */
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: DLMRequestOptions
  ): Promise<UpdateLifecyclePolicyCommandOutput>;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options: DLMRequestOptions,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
}

/**
 * <fullname>Amazon Data Lifecycle Manager</fullname>
 *          <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create
 * 			lifecycle policies, which are used to automate operations on the specified
 * 			resources.</p>
 *          <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager
 * 			with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">
 * 				Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @public
 */
export class DLM extends DLMClient implements DLM {}
createAggregatedClient(commands, DLM);
