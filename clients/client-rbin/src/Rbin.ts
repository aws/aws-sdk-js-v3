// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { RbinClient } from "./RbinClient";

/**
 * <p>This is the <i>Recycle Bin API Reference</i>. This documentation provides
 *       descriptions and syntax for each of the actions and data types in Recycle Bin.</p>
 *
 *          <p>Recycle Bin is a resource recovery feature that enables you to restore accidentally
 *       deleted snapshots and EBS-backed AMIs. When using Recycle Bin, if your resources are
 *       deleted, they are retained in the Recycle Bin for a time period that you specify.</p>
 *
 *          <p>You can restore a resource from the Recycle Bin at any time before its retention period
 *       expires. After you restore a resource from the Recycle Bin, the resource is removed from the
 *       Recycle Bin, and you can then use it in the same way you use any other resource of that type
 *       in your account. If the retention period expires and the resource is not restored, the resource
 *       is permanently deleted from the Recycle Bin and is no longer available for recovery. For more
 *       information about Recycle Bin, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-recycle-bin.html">
 *         Recycle Bin</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 */
export class Rbin extends RbinClient {
  /**
   * <p>Creates a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-create-rule">
   *       Create Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public createRule(args: CreateRuleCommandInput, options?: __HttpHandlerOptions): Promise<CreateRuleCommandOutput>;
  public createRule(args: CreateRuleCommandInput, cb: (err: any, data?: CreateRuleCommandOutput) => void): void;
  public createRule(
    args: CreateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRuleCommandOutput) => void
  ): void;
  public createRule(
    args: CreateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRuleCommandOutput) => void),
    cb?: (err: any, data?: CreateRuleCommandOutput) => void
  ): Promise<CreateRuleCommandOutput> | void {
    const command = new CreateRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Deletes a Recycle Bin retention rule. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-delete-rule">
   *       Delete Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public deleteRule(args: DeleteRuleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRuleCommandOutput>;
  public deleteRule(args: DeleteRuleCommandInput, cb: (err: any, data?: DeleteRuleCommandOutput) => void): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRuleCommandOutput) => void
  ): void;
  public deleteRule(
    args: DeleteRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRuleCommandOutput) => void),
    cb?: (err: any, data?: DeleteRuleCommandOutput) => void
  ): Promise<DeleteRuleCommandOutput> | void {
    const command = new DeleteRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Gets information about a Recycle Bin retention rule.</p>
   */
  public getRule(args: GetRuleCommandInput, options?: __HttpHandlerOptions): Promise<GetRuleCommandOutput>;
  public getRule(args: GetRuleCommandInput, cb: (err: any, data?: GetRuleCommandOutput) => void): void;
  public getRule(
    args: GetRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRuleCommandOutput) => void
  ): void;
  public getRule(
    args: GetRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRuleCommandOutput) => void),
    cb?: (err: any, data?: GetRuleCommandOutput) => void
  ): Promise<GetRuleCommandOutput> | void {
    const command = new GetRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the Recycle Bin retention rules in the Region.</p>
   */
  public listRules(args: ListRulesCommandInput, options?: __HttpHandlerOptions): Promise<ListRulesCommandOutput>;
  public listRules(args: ListRulesCommandInput, cb: (err: any, data?: ListRulesCommandOutput) => void): void;
  public listRules(
    args: ListRulesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRulesCommandOutput) => void
  ): void;
  public listRules(
    args: ListRulesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRulesCommandOutput) => void),
    cb?: (err: any, data?: ListRulesCommandOutput) => void
  ): Promise<ListRulesCommandOutput> | void {
    const command = new ListRulesCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Lists the tags assigned to a retention rule.</p>
   */
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  public listTagsForResource(
    args: ListTagsForResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListTagsForResourceCommandOutput) => void),
    cb?: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): Promise<ListTagsForResourceCommandOutput> | void {
    const command = new ListTagsForResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Locks a retention rule. A locked retention rule can't be modified or deleted.</p>
   */
  public lockRule(args: LockRuleCommandInput, options?: __HttpHandlerOptions): Promise<LockRuleCommandOutput>;
  public lockRule(args: LockRuleCommandInput, cb: (err: any, data?: LockRuleCommandOutput) => void): void;
  public lockRule(
    args: LockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: LockRuleCommandOutput) => void
  ): void;
  public lockRule(
    args: LockRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: LockRuleCommandOutput) => void),
    cb?: (err: any, data?: LockRuleCommandOutput) => void
  ): Promise<LockRuleCommandOutput> | void {
    const command = new LockRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Assigns tags to the specified retention rule.</p>
   */
  public tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  public tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  public tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  public tagResource(
    args: TagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: TagResourceCommandOutput) => void),
    cb?: (err: any, data?: TagResourceCommandOutput) => void
  ): Promise<TagResourceCommandOutput> | void {
    const command = new TagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unlocks a retention rule. After a retention rule is unlocked, it can be modified or deleted
   *       only after the unlock delay period expires.</p>
   */
  public unlockRule(args: UnlockRuleCommandInput, options?: __HttpHandlerOptions): Promise<UnlockRuleCommandOutput>;
  public unlockRule(args: UnlockRuleCommandInput, cb: (err: any, data?: UnlockRuleCommandOutput) => void): void;
  public unlockRule(
    args: UnlockRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UnlockRuleCommandOutput) => void
  ): void;
  public unlockRule(
    args: UnlockRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UnlockRuleCommandOutput) => void),
    cb?: (err: any, data?: UnlockRuleCommandOutput) => void
  ): Promise<UnlockRuleCommandOutput> | void {
    const command = new UnlockRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Unassigns a tag from a retention rule.</p>
   */
  public untagResource(
    args: UntagResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UntagResourceCommandOutput>;
  public untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  public untagResource(
    args: UntagResourceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UntagResourceCommandOutput) => void),
    cb?: (err: any, data?: UntagResourceCommandOutput) => void
  ): Promise<UntagResourceCommandOutput> | void {
    const command = new UntagResourceCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Updates an existing Recycle Bin retention rule. You can update a retention rule's description,
   *       resource tags, and retention period at any time after creation. You can't update a retention rule's
   *       resource type after creation. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/recycle-bin-working-with-rules.html#recycle-bin-update-rule">
   *       Update Recycle Bin retention rules</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
   */
  public updateRule(args: UpdateRuleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRuleCommandOutput>;
  public updateRule(args: UpdateRuleCommandInput, cb: (err: any, data?: UpdateRuleCommandOutput) => void): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRuleCommandOutput) => void
  ): void;
  public updateRule(
    args: UpdateRuleCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRuleCommandOutput) => void),
    cb?: (err: any, data?: UpdateRuleCommandOutput) => void
  ): Promise<UpdateRuleCommandOutput> | void {
    const command = new UpdateRuleCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
