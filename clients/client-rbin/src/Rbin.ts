// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { CreateRuleCommand, CreateRuleCommandInput, CreateRuleCommandOutput } from "./commands/CreateRuleCommand";
import { DeleteRuleCommand, DeleteRuleCommandInput, DeleteRuleCommandOutput } from "./commands/DeleteRuleCommand";
import { GetRuleCommand, GetRuleCommandInput, GetRuleCommandOutput } from "./commands/GetRuleCommand";
import { ListRulesCommand, ListRulesCommandInput, ListRulesCommandOutput } from "./commands/ListRulesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { LockRuleCommand, LockRuleCommandInput, LockRuleCommandOutput } from "./commands/LockRuleCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UnlockRuleCommand, UnlockRuleCommandInput, UnlockRuleCommandOutput } from "./commands/UnlockRuleCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateRuleCommand, UpdateRuleCommandInput, UpdateRuleCommandOutput } from "./commands/UpdateRuleCommand";
import { RbinClient, RbinClientConfig } from "./RbinClient";

const commands = {
  CreateRuleCommand,
  DeleteRuleCommand,
  GetRuleCommand,
  ListRulesCommand,
  ListTagsForResourceCommand,
  LockRuleCommand,
  TagResourceCommand,
  UnlockRuleCommand,
  UntagResourceCommand,
  UpdateRuleCommand,
};

export interface Rbin {
  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleCommand}
   */
  getRule(args: GetRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleCommandOutput>;
  getRule(args: GetRuleCommandInput, cb: (err: any, data?: GetRuleCommandOutput) => void): void;
  getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
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
   * @see {@link LockRuleCommand}
   */
  lockRule(args: LockRuleCommandInput, options?: __HttpHandlerOptions): Promise<LockRuleCommandOutput>;
  lockRule(args: LockRuleCommandInput, cb: (err: any, data?: LockRuleCommandOutput) => void): void;
  lockRule(
    args: LockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LockRuleCommandOutput) => void
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
   * @see {@link UnlockRuleCommand}
   */
  unlockRule(args: UnlockRuleCommandInput, options?: __HttpHandlerOptions): Promise<UnlockRuleCommandOutput>;
  unlockRule(args: UnlockRuleCommandInput, cb: (err: any, data?: UnlockRuleCommandOutput) => void): void;
  unlockRule(
    args: UnlockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlockRuleCommandOutput) => void
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
   * @see {@link UpdateRuleCommand}
   */
  updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>This is the <i>Recycle Bin API Reference</i>. This documentation provides
 *       descriptions and syntax for each of the actions and data types in Recycle Bin.</p>
 *          <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally
 *       deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are
 *       deleted, they are retained in the Recycle Bin for a time period that you specify.</p>
 *          <p>You can restore a resource from the Recycle Bin at any time before its retention period
 *       expires. After you restore a resource from the Recycle Bin, the resource is removed from the
 *       Recycle Bin, and you can then use it in the same way you use any other resource of that type
 *       in your account. If the retention period expires and the resource is not restored, the resource
 *       is permanently deleted from the Recycle Bin and is no longer available for recovery. For more
 *       information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html">
 *         Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class Rbin extends RbinClient implements Rbin {}
createAggregatedClient(commands, Rbin);
