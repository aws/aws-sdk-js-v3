// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateParticipantTokenCommand,
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
} from "./commands/CreateParticipantTokenCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DisconnectParticipantCommand,
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
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
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { IVSRealTimeClient } from "./IVSRealTimeClient";

/**
 * @public
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>Terminology: The IVS stage API sometimes is referred to as the IVS RealTime API.</p>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/userguide/getting-started.html">Getting Started with Amazon IVS</a>):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Stage</b> — A stage is a virtual space where multiple participants can exchange audio and video in real time.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tagging</b>
 *          </p>
 *          <p>A <i>tag</i> is a metadata label that you assign to an AWS resource. A tag
 *       comprises a <i>key</i> and a <i>value</i>, both set by you. For
 *       example, you might set a tag as <code>topic:nature</code> to label a particular video
 *       category. See <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> for more information, including restrictions that apply to
 *       tags and "Tag naming limits and requirements"; Amazon IVS stages has no service-specific
 *       constraints beyond what is documented there.</p>
 *          <p>Tags can help you identify and organize your AWS resources. For example, you can use the
 *       same tag for different resources to indicate that they are related. You can also use tags to
 *       manage access (see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html">Access Tags</a>).</p>
 *          <p>The Amazon IVS stage API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
 *       <a>ListTagsForResource</a>. The following resource supports tagging: Stage.</p>
 *          <p>At most 50 tags can be applied to a resource.</p>
 *          <p>
 *             <b>Stages Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateParticipantToken</a> — Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>CreateStage</a> — Creates a new stage (and optionally participant tokens).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStage</a> — Shuts down and deletes the specified stage (disconnecting all participants).</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectParticipant</a> — Disconnects a specified participant and revokes the participant permanently from a specified stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStage</a> — Gets information for the specified stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateStage</a> — Updates a stage’s configuration.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Tags Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>ListTagsForResource</a> — Gets information about AWS tags for the
 *           specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>TagResource</a> — Adds or updates tags for the AWS resource with
 *           the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UntagResource</a> — Removes tags from the resource with the
 *           specified ARN.</p>
 *             </li>
 *          </ul>
 */
export class IVSRealTime extends IVSRealTimeClient {
  /**
   * @public
   * <p>Creates an additional token for a specified stage. This can be done after stage creation or when tokens expire.
   * 	        Tokens always are scoped to the stage for which they are created.</p>
   *          <p>Encryption keys are owned by Amazon IVS and never used directly by your application.</p>
   */
  public createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantTokenCommandOutput>;
  public createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;
  public createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;
  public createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateParticipantTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): Promise<CreateParticipantTokenCommandOutput> | void {
    const command = new CreateParticipantTokenCommand(args);
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
   * @public
   * <p>Creates a new stage (and optionally participant tokens).</p>
   */
  public createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  public createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  public createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;
  public createStage(
    args: CreateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateStageCommandOutput) => void),
    cb?: (err: any, data?: CreateStageCommandOutput) => void
  ): Promise<CreateStageCommandOutput> | void {
    const command = new CreateStageCommand(args);
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
   * @public
   * <p>Shuts down and deletes the specified stage (disconnecting all participants).</p>
   */
  public deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  public deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;
  public deleteStage(
    args: DeleteStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteStageCommandOutput) => void),
    cb?: (err: any, data?: DeleteStageCommandOutput) => void
  ): Promise<DeleteStageCommandOutput> | void {
    const command = new DeleteStageCommand(args);
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
   * @public
   * <p>Disconnects a specified participant and revokes the participant permanently from a specified stage.</p>
   */
  public disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectParticipantCommandOutput>;
  public disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  public disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  public disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectParticipantCommandOutput) => void),
    cb?: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): Promise<DisconnectParticipantCommandOutput> | void {
    const command = new DisconnectParticipantCommand(args);
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
   * @public
   * <p>Gets information for the specified stage.</p>
   */
  public getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  public getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  public getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;
  public getStage(
    args: GetStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetStageCommandOutput) => void),
    cb?: (err: any, data?: GetStageCommandOutput) => void
  ): Promise<GetStageCommandOutput> | void {
    const command = new GetStageCommand(args);
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
   * @public
   * <p>Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p>
   */
  public listStages(args: ListStagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStagesCommandOutput>;
  public listStages(args: ListStagesCommandInput, cb: (err: any, data?: ListStagesCommandOutput) => void): void;
  public listStages(
    args: ListStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagesCommandOutput) => void
  ): void;
  public listStages(
    args: ListStagesCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListStagesCommandOutput) => void),
    cb?: (err: any, data?: ListStagesCommandOutput) => void
  ): Promise<ListStagesCommandOutput> | void {
    const command = new ListStagesCommand(args);
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
   * @public
   * <p>Gets information about AWS tags for the specified ARN.</p>
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
   * @public
   * <p>Adds or updates tags for the AWS resource with the specified ARN.</p>
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
   * @public
   * <p>Removes tags from the resource with the specified ARN.</p>
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
   * @public
   * <p>Updates a stage’s configuration.</p>
   */
  public updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  public updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  public updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
  public updateStage(
    args: UpdateStageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateStageCommandOutput) => void),
    cb?: (err: any, data?: UpdateStageCommandOutput) => void
  ): Promise<UpdateStageCommandOutput> | void {
    const command = new UpdateStageCommand(args);
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
