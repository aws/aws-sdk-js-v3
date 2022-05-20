// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ChimeSDKMediaPipelinesClient } from "./ChimeSDKMediaPipelinesClient";
import {
  CreateMediaCapturePipelineCommand,
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "./commands/CreateMediaCapturePipelineCommand";
import {
  DeleteMediaCapturePipelineCommand,
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "./commands/DeleteMediaCapturePipelineCommand";
import {
  GetMediaCapturePipelineCommand,
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "./commands/GetMediaCapturePipelineCommand";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "./commands/ListMediaCapturePipelinesCommand";
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

/**
 * <p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to create Amazon Chime SDK media pipelines
 *          and capture audio, video, events, and data messages from Amazon Chime SDK meetings. For more information about media pipleines, see
 *          <a href="https://docs.aws.amazon.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amzon Chime SDK media pipelines</a>.
 *       </p>
 */
export class ChimeSDKMediaPipelines extends ChimeSDKMediaPipelinesClient {
  /**
   * <p>Creates a media capture pipeline.</p>
   */
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaCapturePipelineCommandOutput>;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): void;
  public createMediaCapturePipeline(
    args: CreateMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: CreateMediaCapturePipelineCommandOutput) => void
  ): Promise<CreateMediaCapturePipelineCommandOutput> | void {
    const command = new CreateMediaCapturePipelineCommand(args);
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
   * <p>Deletes the media capture pipeline.</p>
   */
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaCapturePipelineCommandOutput>;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): void;
  public deleteMediaCapturePipeline(
    args: DeleteMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: DeleteMediaCapturePipelineCommandOutput) => void
  ): Promise<DeleteMediaCapturePipelineCommandOutput> | void {
    const command = new DeleteMediaCapturePipelineCommand(args);
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
   * <p>Gets an existing media capture pipeline.</p>
   */
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaCapturePipelineCommandOutput>;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): void;
  public getMediaCapturePipeline(
    args: GetMediaCapturePipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMediaCapturePipelineCommandOutput) => void),
    cb?: (err: any, data?: GetMediaCapturePipelineCommandOutput) => void
  ): Promise<GetMediaCapturePipelineCommandOutput> | void {
    const command = new GetMediaCapturePipelineCommand(args);
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
   * <p>Returns a list of media capture pipelines.</p>
   */
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaCapturePipelinesCommandOutput>;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): void;
  public listMediaCapturePipelines(
    args: ListMediaCapturePipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMediaCapturePipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListMediaCapturePipelinesCommandOutput) => void
  ): Promise<ListMediaCapturePipelinesCommandOutput> | void {
    const command = new ListMediaCapturePipelinesCommand(args);
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
   * <p>Lists the tags applied to an Amazon Chime SDK media capture pipeline.</p>
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
   * <p>Applies the specified tags to the specified Amazon Chime SDK media capture pipeline.</p>
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
   * <p>Removes the specified tags from the specified Amazon Chime SDK media capture pipeline.</p>
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
}
