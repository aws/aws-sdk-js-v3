// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { CreatePipeCommand, CreatePipeCommandInput, CreatePipeCommandOutput } from "./commands/CreatePipeCommand";
import { DeletePipeCommand, DeletePipeCommandInput, DeletePipeCommandOutput } from "./commands/DeletePipeCommand";
import {
  DescribePipeCommand,
  DescribePipeCommandInput,
  DescribePipeCommandOutput,
} from "./commands/DescribePipeCommand";
import { ListPipesCommand, ListPipesCommandInput, ListPipesCommandOutput } from "./commands/ListPipesCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { StartPipeCommand, StartPipeCommandInput, StartPipeCommandOutput } from "./commands/StartPipeCommand";
import { StopPipeCommand, StopPipeCommandInput, StopPipeCommandOutput } from "./commands/StopPipeCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdatePipeCommand, UpdatePipeCommandInput, UpdatePipeCommandOutput } from "./commands/UpdatePipeCommand";
import { PipesClient } from "./PipesClient";

/**
 * <p>Amazon EventBridge Pipes connects event sources to targets. Pipes reduces the need for specialized knowledge and integration code when developing
 *       event driven architectures. This helps ensures consistency across your company’s applications. With Pipes, the target can be any available EventBridge target.
 *       To set up a pipe, you select the event source, add optional event filtering, define optional enrichment, and select the target for the event data. </p>
 */
export class Pipes extends PipesClient {
  /**
   * <p>Create a pipe. Amazon EventBridge Pipes connect event sources to targets and reduces the need for specialized knowledge and integration code.</p>
   */
  public createPipe(args: CreatePipeCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipeCommandOutput>;
  public createPipe(args: CreatePipeCommandInput, cb: (err: any, data?: CreatePipeCommandOutput) => void): void;
  public createPipe(
    args: CreatePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreatePipeCommandOutput) => void
  ): void;
  public createPipe(
    args: CreatePipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreatePipeCommandOutput) => void),
    cb?: (err: any, data?: CreatePipeCommandOutput) => void
  ): Promise<CreatePipeCommandOutput> | void {
    const command = new CreatePipeCommand(args);
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
   * <p>Delete an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
   */
  public deletePipe(args: DeletePipeCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipeCommandOutput>;
  public deletePipe(args: DeletePipeCommandInput, cb: (err: any, data?: DeletePipeCommandOutput) => void): void;
  public deletePipe(
    args: DeletePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeletePipeCommandOutput) => void
  ): void;
  public deletePipe(
    args: DeletePipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeletePipeCommandOutput) => void),
    cb?: (err: any, data?: DeletePipeCommandOutput) => void
  ): Promise<DeletePipeCommandOutput> | void {
    const command = new DeletePipeCommand(args);
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
   * <p>Get the information about an existing pipe. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
   */
  public describePipe(
    args: DescribePipeCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribePipeCommandOutput>;
  public describePipe(args: DescribePipeCommandInput, cb: (err: any, data?: DescribePipeCommandOutput) => void): void;
  public describePipe(
    args: DescribePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribePipeCommandOutput) => void
  ): void;
  public describePipe(
    args: DescribePipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DescribePipeCommandOutput) => void),
    cb?: (err: any, data?: DescribePipeCommandOutput) => void
  ): Promise<DescribePipeCommandOutput> | void {
    const command = new DescribePipeCommand(args);
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
   * <p>Get the pipes associated with this account. For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
   */
  public listPipes(args: ListPipesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipesCommandOutput>;
  public listPipes(args: ListPipesCommandInput, cb: (err: any, data?: ListPipesCommandOutput) => void): void;
  public listPipes(
    args: ListPipesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListPipesCommandOutput) => void
  ): void;
  public listPipes(
    args: ListPipesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListPipesCommandOutput) => void),
    cb?: (err: any, data?: ListPipesCommandOutput) => void
  ): Promise<ListPipesCommandOutput> | void {
    const command = new ListPipesCommand(args);
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
   * <p>Displays the tags associated with a pipe.</p>
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
   * <p>Start an existing pipe.</p>
   */
  public startPipe(args: StartPipeCommandInput, options?: __HttpHandlerOptions): Promise<StartPipeCommandOutput>;
  public startPipe(args: StartPipeCommandInput, cb: (err: any, data?: StartPipeCommandOutput) => void): void;
  public startPipe(
    args: StartPipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartPipeCommandOutput) => void
  ): void;
  public startPipe(
    args: StartPipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartPipeCommandOutput) => void),
    cb?: (err: any, data?: StartPipeCommandOutput) => void
  ): Promise<StartPipeCommandOutput> | void {
    const command = new StartPipeCommand(args);
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
   * <p>Stop an existing pipe.</p>
   */
  public stopPipe(args: StopPipeCommandInput, options?: __HttpHandlerOptions): Promise<StopPipeCommandOutput>;
  public stopPipe(args: StopPipeCommandInput, cb: (err: any, data?: StopPipeCommandOutput) => void): void;
  public stopPipe(
    args: StopPipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopPipeCommandOutput) => void
  ): void;
  public stopPipe(
    args: StopPipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StopPipeCommandOutput) => void),
    cb?: (err: any, data?: StopPipeCommandOutput) => void
  ): Promise<StopPipeCommandOutput> | void {
    const command = new StopPipeCommand(args);
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
   * <p>Assigns one or more tags (key-value pairs) to the specified pipe. Tags can
   *          help you organize and categorize your resources. You can also use them to scope user
   *          permissions by granting a user permission to access or change only resources with certain tag
   *          values.</p>
   *          <p>Tags don't have any semantic meaning to Amazon Web Services and are interpreted strictly as strings of
   *             characters.</p>
   *          <p>You can use the <code>TagResource</code> action with a pipe that already has tags. If
   *             you specify a new tag key, this tag is appended to the list of tags associated with the
   *             pipe. If you specify a tag key that is already associated with the pipe, the new tag
   *             value that you specify replaces the previous value for that tag.</p>
   *          <p>You can associate as many as 50 tags with a pipe.</p>
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
   * <p>Removes one or more tags from the specified pipes.</p>
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
   * <p>Update an existing pipe. When you call <code>UpdatePipe</code>, only the fields that are included in the request are changed, the rest are unchanged.
   *          The exception to this is if you modify any Amazon Web Services-service specific fields in the <code>SourceParameters</code>, <code>EnrichmentParameters</code>, or
   *          <code>TargetParameters</code> objects. The fields in these objects are updated atomically as one and override existing values. This is by design and means that
   *          if you don't specify an optional field in one of these Parameters objects, that field will be set to its system-default value after the update.</p>
   *
   *          <p>For more information about pipes, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-pipes.html">
   *          Amazon EventBridge Pipes</a> in the Amazon EventBridge User Guide.</p>
   */
  public updatePipe(args: UpdatePipeCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipeCommandOutput>;
  public updatePipe(args: UpdatePipeCommandInput, cb: (err: any, data?: UpdatePipeCommandOutput) => void): void;
  public updatePipe(
    args: UpdatePipeCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdatePipeCommandOutput) => void
  ): void;
  public updatePipe(
    args: UpdatePipeCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdatePipeCommandOutput) => void),
    cb?: (err: any, data?: UpdatePipeCommandOutput) => void
  ): Promise<UpdatePipeCommandOutput> | void {
    const command = new UpdatePipeCommand(args);
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
