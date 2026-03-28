// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import type { HttpHandlerOptions as __HttpHandlerOptions, PaginationConfiguration, Paginator } from "@smithy/types";

import {
  type CreateRuleCommandInput,
  type CreateRuleCommandOutput,
  CreateRuleCommand,
} from "./commands/CreateRuleCommand";
import {
  type DeleteRuleCommandInput,
  type DeleteRuleCommandOutput,
  DeleteRuleCommand,
} from "./commands/DeleteRuleCommand";
import { type GetRuleCommandInput, type GetRuleCommandOutput, GetRuleCommand } from "./commands/GetRuleCommand";
import { type ListRulesCommandInput, type ListRulesCommandOutput, ListRulesCommand } from "./commands/ListRulesCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type LockRuleCommandInput, type LockRuleCommandOutput, LockRuleCommand } from "./commands/LockRuleCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UnlockRuleCommandInput,
  type UnlockRuleCommandOutput,
  UnlockRuleCommand,
} from "./commands/UnlockRuleCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateRuleCommandInput,
  type UpdateRuleCommandOutput,
  UpdateRuleCommand,
} from "./commands/UpdateRuleCommand";
import { paginateListRules } from "./pagination/ListRulesPaginator";
import { RbinClient } from "./RbinClient";

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
const paginators = {
  paginateListRules,
};

export interface Rbin {
  /**
   * @see {@link CreateRuleCommand}
   */
  createRule(
    args: CreateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateRuleCommandOutput>;
  createRule(
    args: CreateRuleCommandInput,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRuleCommand}
   */
  deleteRule(
    args: DeleteRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteRuleCommandOutput>;
  deleteRule(
    args: DeleteRuleCommandInput,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRuleCommand}
   */
  getRule(
    args: GetRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRuleCommandOutput>;
  getRule(
    args: GetRuleCommandInput,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   */
  listRules(
    args: ListRulesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListRulesCommandOutput>;
  listRules(
    args: ListRulesCommandInput,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
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
  lockRule(
    args: LockRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<LockRuleCommandOutput>;
  lockRule(
    args: LockRuleCommandInput,
    cb: (err: any, data?: LockRuleCommandOutput) => void
  ): void;
  lockRule(
    args: LockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LockRuleCommandOutput) => void
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
   * @see {@link UnlockRuleCommand}
   */
  unlockRule(
    args: UnlockRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UnlockRuleCommandOutput>;
  unlockRule(
    args: UnlockRuleCommandInput,
    cb: (err: any, data?: UnlockRuleCommandOutput) => void
  ): void;
  unlockRule(
    args: UnlockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlockRuleCommandOutput) => void
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
   * @see {@link UpdateRuleCommand}
   */
  updateRule(
    args: UpdateRuleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRuleCommandOutput>;
  updateRule(
    args: UpdateRuleCommandInput,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRulesCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRulesCommandOutput}.
   */
  paginateListRules(
    args: ListRulesCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRulesCommandOutput>;
}

/**
 * <p>This is the <i>Recycle Bin API Reference</i>. This documentation provides
 *       descriptions and syntax for each of the actions and data types in Recycle Bin.</p>
 *          <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally deleted
 *       EBS volumes, EBS snapshots, and EBS-backed AMIs. When using Recycle Bin, if your resources are
 *       deleted, they are retained in the Recycle Bin for a time period that you specify.</p>
 *          <p>You can restore a resource from the Recycle Bin at any time before its retention period
 *       expires. After you restore a resource from the Recycle Bin, the resource is removed from the
 *       Recycle Bin, and you can then use it in the same way you use any other resource of that type
 *       in your account. If the retention period expires and the resource is not restored, the resource
 *       is permanently deleted from the Recycle Bin and is no longer available for recovery. For more
 *       information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin.html">
 *         Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @public
 */
export class Rbin extends RbinClient implements Rbin {}
createAggregatedClient(commands, Rbin, { paginators });
