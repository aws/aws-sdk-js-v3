// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateLifecyclePolicyCommand,
  CreateLifecyclePolicyCommandInput,
  CreateLifecyclePolicyCommandOutput,
} from "./commands/CreateLifecyclePolicyCommand";
import {
  DeleteLifecyclePolicyCommand,
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
} from "./commands/DeleteLifecyclePolicyCommand";
import {
  GetLifecyclePoliciesCommand,
  GetLifecyclePoliciesCommandInput,
  GetLifecyclePoliciesCommandOutput,
} from "./commands/GetLifecyclePoliciesCommand";
import {
  GetLifecyclePolicyCommand,
  GetLifecyclePolicyCommandInput,
  GetLifecyclePolicyCommandOutput,
} from "./commands/GetLifecyclePolicyCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import {
  UpdateLifecyclePolicyCommand,
  UpdateLifecyclePolicyCommandInput,
  UpdateLifecyclePolicyCommandOutput,
} from "./commands/UpdateLifecyclePolicyCommand";
import { DLMClient } from "./DLMClient";

/**
 * <fullname>Amazon Data Lifecycle Manager</fullname>
 * 		       <p>With Amazon Data Lifecycle Manager, you can manage the lifecycle of your Amazon Web Services resources. You create
 * 			lifecycle policies, which are used to automate operations on the specified
 * 			resources.</p>
 * 		       <p>Amazon Data Lifecycle Manager supports Amazon EBS volumes and snapshots. For information about using Amazon Data Lifecycle Manager
 * 			with Amazon EBS, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/snapshot-lifecycle.html">
 * 				Amazon Data Lifecycle Manager</a> in the <i>Amazon EC2 User Guide</i>.</p>
 */
export class DLM extends DLMClient {
  /**
   * <p>Creates a policy to manage the lifecycle of the specified Amazon Web Services resources. You can
   * 			create up to 100 lifecycle policies.</p>
   */
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateLifecyclePolicyCommandOutput>;
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): void;
  public createLifecyclePolicy(
    args: CreateLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: CreateLifecyclePolicyCommandOutput) => void
  ): Promise<CreateLifecyclePolicyCommandOutput> | void {
    const command = new CreateLifecyclePolicyCommand(args);
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
   * <p>Deletes the specified lifecycle policy and halts the automated operations that the
   * 			policy specified.</p>
   * 		       <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle
   * 			policies</a>.</p>
   */
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteLifecyclePolicyCommandOutput>;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): void;
  public deleteLifecyclePolicy(
    args: DeleteLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: DeleteLifecyclePolicyCommandOutput) => void
  ): Promise<DeleteLifecyclePolicyCommandOutput> | void {
    const command = new DeleteLifecyclePolicyCommand(args);
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
   * <p>Gets summary information about all or the specified data lifecycle policies.</p>
   * 		       <p>To get complete information about a policy, use <a>GetLifecyclePolicy</a>.</p>
   */
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePoliciesCommandOutput>;
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void
  ): void;
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void
  ): void;
  public getLifecyclePolicies(
    args: GetLifecyclePoliciesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLifecyclePoliciesCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePoliciesCommandOutput) => void
  ): Promise<GetLifecyclePoliciesCommandOutput> | void {
    const command = new GetLifecyclePoliciesCommand(args);
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
   * <p>Gets detailed information about the specified lifecycle policy.</p>
   */
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLifecyclePolicyCommandOutput>;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): void;
  public getLifecyclePolicy(
    args: GetLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: GetLifecyclePolicyCommandOutput) => void
  ): Promise<GetLifecyclePolicyCommandOutput> | void {
    const command = new GetLifecyclePolicyCommand(args);
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
   * <p>Lists the tags for the specified resource.</p>
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
   * <p>Adds the specified tags to the specified resource.</p>
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
   * <p>Removes the specified tags from the specified resource.</p>
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
   * <p>Updates the specified lifecycle policy.</p>
   * 		       <p>For more information about updating a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#modify">Modify lifecycle
   * 			policies</a>.</p>
   */
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateLifecyclePolicyCommandOutput>;
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): void;
  public updateLifecyclePolicy(
    args: UpdateLifecyclePolicyCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateLifecyclePolicyCommandOutput) => void),
    cb?: (err: any, data?: UpdateLifecyclePolicyCommandOutput) => void
  ): Promise<UpdateLifecyclePolicyCommandOutput> | void {
    const command = new UpdateLifecyclePolicyCommand(args);
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
