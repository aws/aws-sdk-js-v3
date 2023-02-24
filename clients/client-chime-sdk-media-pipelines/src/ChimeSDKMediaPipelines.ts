// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { ChimeSDKMediaPipelinesClient } from "./ChimeSDKMediaPipelinesClient";
import {
  CreateMediaCapturePipelineCommand,
  CreateMediaCapturePipelineCommandInput,
  CreateMediaCapturePipelineCommandOutput,
} from "./commands/CreateMediaCapturePipelineCommand";
import {
  CreateMediaConcatenationPipelineCommand,
  CreateMediaConcatenationPipelineCommandInput,
  CreateMediaConcatenationPipelineCommandOutput,
} from "./commands/CreateMediaConcatenationPipelineCommand";
import {
  CreateMediaLiveConnectorPipelineCommand,
  CreateMediaLiveConnectorPipelineCommandInput,
  CreateMediaLiveConnectorPipelineCommandOutput,
} from "./commands/CreateMediaLiveConnectorPipelineCommand";
import {
  DeleteMediaCapturePipelineCommand,
  DeleteMediaCapturePipelineCommandInput,
  DeleteMediaCapturePipelineCommandOutput,
} from "./commands/DeleteMediaCapturePipelineCommand";
import {
  DeleteMediaPipelineCommand,
  DeleteMediaPipelineCommandInput,
  DeleteMediaPipelineCommandOutput,
} from "./commands/DeleteMediaPipelineCommand";
import {
  GetMediaCapturePipelineCommand,
  GetMediaCapturePipelineCommandInput,
  GetMediaCapturePipelineCommandOutput,
} from "./commands/GetMediaCapturePipelineCommand";
import {
  GetMediaPipelineCommand,
  GetMediaPipelineCommandInput,
  GetMediaPipelineCommandOutput,
} from "./commands/GetMediaPipelineCommand";
import {
  ListMediaCapturePipelinesCommand,
  ListMediaCapturePipelinesCommandInput,
  ListMediaCapturePipelinesCommandOutput,
} from "./commands/ListMediaCapturePipelinesCommand";
import {
  ListMediaPipelinesCommand,
  ListMediaPipelinesCommandInput,
  ListMediaPipelinesCommandOutput,
} from "./commands/ListMediaPipelinesCommand";
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
 * <p>The Amazon Chime SDK media pipeline APIs in this section allow software developers to
 *          create Amazon Chime SDK media pipelines that capture, concatenate, or stream your Amazon Chime SDK meetings. For more information about media pipleines, see <a href="http://amazonaws.com/chime/latest/APIReference/API_Operations_Amazon_Chime_SDK_Media_Pipelines.html">Amazon Chime SDK media pipelines</a>. </p>
 */
export class ChimeSDKMediaPipelines extends ChimeSDKMediaPipelinesClient {
  /**
   * <p>Creates a media pipeline.</p>
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
   * <p>Creates a media concatenation pipeline.</p>
   */
  public createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaConcatenationPipelineCommandOutput>;
  public createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    cb: (err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void
  ): void;
  public createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void
  ): void;
  public createMediaConcatenationPipeline(
    args: CreateMediaConcatenationPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void),
    cb?: (err: any, data?: CreateMediaConcatenationPipelineCommandOutput) => void
  ): Promise<CreateMediaConcatenationPipelineCommandOutput> | void {
    const command = new CreateMediaConcatenationPipelineCommand(args);
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
   * <p>Creates a streaming media pipeline in an Amazon Chime SDK meeting.</p>
   */
  public createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateMediaLiveConnectorPipelineCommandOutput>;
  public createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    cb: (err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void
  ): void;
  public createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void
  ): void;
  public createMediaLiveConnectorPipeline(
    args: CreateMediaLiveConnectorPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void),
    cb?: (err: any, data?: CreateMediaLiveConnectorPipelineCommandOutput) => void
  ): Promise<CreateMediaLiveConnectorPipelineCommandOutput> | void {
    const command = new CreateMediaLiveConnectorPipelineCommand(args);
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
   * <p>Deletes the media pipeline.</p>
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
   * <p>Deletes the media pipeline.</p>
   */
  public deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMediaPipelineCommandOutput>;
  public deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    cb: (err: any, data?: DeleteMediaPipelineCommandOutput) => void
  ): void;
  public deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMediaPipelineCommandOutput) => void
  ): void;
  public deleteMediaPipeline(
    args: DeleteMediaPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMediaPipelineCommandOutput) => void),
    cb?: (err: any, data?: DeleteMediaPipelineCommandOutput) => void
  ): Promise<DeleteMediaPipelineCommandOutput> | void {
    const command = new DeleteMediaPipelineCommand(args);
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
   * <p>Gets an existing media pipeline.</p>
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
   * <p>Gets an existing media pipeline.</p>
   */
  public getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetMediaPipelineCommandOutput>;
  public getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    cb: (err: any, data?: GetMediaPipelineCommandOutput) => void
  ): void;
  public getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetMediaPipelineCommandOutput) => void
  ): void;
  public getMediaPipeline(
    args: GetMediaPipelineCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetMediaPipelineCommandOutput) => void),
    cb?: (err: any, data?: GetMediaPipelineCommandOutput) => void
  ): Promise<GetMediaPipelineCommandOutput> | void {
    const command = new GetMediaPipelineCommand(args);
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
   * <p>Returns a list of media pipelines.</p>
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
   * <p>Returns a list of media pipelines.</p>
   */
  public listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListMediaPipelinesCommandOutput>;
  public listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    cb: (err: any, data?: ListMediaPipelinesCommandOutput) => void
  ): void;
  public listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListMediaPipelinesCommandOutput) => void
  ): void;
  public listMediaPipelines(
    args: ListMediaPipelinesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListMediaPipelinesCommandOutput) => void),
    cb?: (err: any, data?: ListMediaPipelinesCommandOutput) => void
  ): Promise<ListMediaPipelinesCommandOutput> | void {
    const command = new ListMediaPipelinesCommand(args);
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
   * <p>Lists the tags available for a media pipeline.</p>
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
   * <p>The ARN of the media pipeline that you want to tag. Consists of he pipeline's endpoint region, resource ID, and pipeline ID.</p>
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
   * <p>Removes any tags from a media pipeline.</p>
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
