// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import {
  GetParticipantCommand,
  GetParticipantCommandInput,
  GetParticipantCommandOutput,
} from "./commands/GetParticipantCommand";
import { GetStageCommand, GetStageCommandInput, GetStageCommandOutput } from "./commands/GetStageCommand";
import {
  GetStageSessionCommand,
  GetStageSessionCommandInput,
  GetStageSessionCommandOutput,
} from "./commands/GetStageSessionCommand";
import {
  ListParticipantEventsCommand,
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "./commands/ListParticipantEventsCommand";
import {
  ListParticipantsCommand,
  ListParticipantsCommandInput,
  ListParticipantsCommandOutput,
} from "./commands/ListParticipantsCommand";
import { ListStagesCommand, ListStagesCommandInput, ListStagesCommandOutput } from "./commands/ListStagesCommand";
import {
  ListStageSessionsCommand,
  ListStageSessionsCommandInput,
  ListStageSessionsCommandOutput,
} from "./commands/ListStageSessionsCommand";
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
import { IVSRealTimeClient, IVSRealTimeClientConfig } from "./IVSRealTimeClient";

const commands = {
  CreateParticipantTokenCommand,
  CreateStageCommand,
  DeleteStageCommand,
  DisconnectParticipantCommand,
  GetParticipantCommand,
  GetStageCommand,
  GetStageSessionCommand,
  ListParticipantEventsCommand,
  ListParticipantsCommand,
  ListStagesCommand,
  ListStageSessionsCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateStageCommand,
};

export interface IVSRealTime {
  /**
   * @see {@link CreateParticipantTokenCommand}
   */
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantTokenCommandOutput>;
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;
  createParticipantToken(
    args: CreateParticipantTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateStageCommand}
   */
  createStage(args: CreateStageCommandInput, options?: __HttpHandlerOptions): Promise<CreateStageCommandOutput>;
  createStage(args: CreateStageCommandInput, cb: (err: any, data?: CreateStageCommandOutput) => void): void;
  createStage(
    args: CreateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteStageCommand}
   */
  deleteStage(args: DeleteStageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteStageCommandOutput>;
  deleteStage(args: DeleteStageCommandInput, cb: (err: any, data?: DeleteStageCommandOutput) => void): void;
  deleteStage(
    args: DeleteStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStageCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectParticipantCommand}
   */
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectParticipantCommandOutput>;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;
  disconnectParticipant(
    args: DisconnectParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetParticipantCommand}
   */
  getParticipant(
    args: GetParticipantCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetParticipantCommandOutput>;
  getParticipant(args: GetParticipantCommandInput, cb: (err: any, data?: GetParticipantCommandOutput) => void): void;
  getParticipant(
    args: GetParticipantCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetParticipantCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageCommand}
   */
  getStage(args: GetStageCommandInput, options?: __HttpHandlerOptions): Promise<GetStageCommandOutput>;
  getStage(args: GetStageCommandInput, cb: (err: any, data?: GetStageCommandOutput) => void): void;
  getStage(
    args: GetStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageCommandOutput) => void
  ): void;

  /**
   * @see {@link GetStageSessionCommand}
   */
  getStageSession(
    args: GetStageSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStageSessionCommandOutput>;
  getStageSession(args: GetStageSessionCommandInput, cb: (err: any, data?: GetStageSessionCommandOutput) => void): void;
  getStageSession(
    args: GetStageSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStageSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParticipantEventsCommand}
   */
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParticipantEventsCommandOutput>;
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    cb: (err: any, data?: ListParticipantEventsCommandOutput) => void
  ): void;
  listParticipantEvents(
    args: ListParticipantEventsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParticipantEventsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListParticipantsCommand}
   */
  listParticipants(
    args: ListParticipantsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListParticipantsCommandOutput>;
  listParticipants(
    args: ListParticipantsCommandInput,
    cb: (err: any, data?: ListParticipantsCommandOutput) => void
  ): void;
  listParticipants(
    args: ListParticipantsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListParticipantsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStagesCommand}
   */
  listStages(args: ListStagesCommandInput, options?: __HttpHandlerOptions): Promise<ListStagesCommandOutput>;
  listStages(args: ListStagesCommandInput, cb: (err: any, data?: ListStagesCommandOutput) => void): void;
  listStages(
    args: ListStagesCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStagesCommandOutput) => void
  ): void;

  /**
   * @see {@link ListStageSessionsCommand}
   */
  listStageSessions(
    args: ListStageSessionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStageSessionsCommandOutput>;
  listStageSessions(
    args: ListStageSessionsCommandInput,
    cb: (err: any, data?: ListStageSessionsCommandOutput) => void
  ): void;
  listStageSessions(
    args: ListStageSessionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStageSessionsCommandOutput) => void
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
   * @see {@link UpdateStageCommand}
   */
  updateStage(args: UpdateStageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateStageCommandOutput>;
  updateStage(args: UpdateStageCommandInput, cb: (err: any, data?: UpdateStageCommandOutput) => void): void;
  updateStage(
    args: UpdateStageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateStageCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon Interactive Video Service (IVS) stage API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>Terminology:</p>
 *          <ul>
 *             <li>
 *                <p>The IVS stage API sometimes is referred to as the IVS <i>RealTime</i>
 *           API.</p>
 *             </li>
 *             <li>
 *                <p>A <i>participant token</i> is an authorization token used to publish/subscribe
 *           to a stage.</p>
 *             </li>
 *             <li>
 *                <p>A <i>participant object</i> represents participants
 *           (people) in the stage and contains information about them. When a token is created, it
 *           includes a participant ID; when a participant uses that token to join a stage, the
 *           participant is associated with that participant ID There is a 1:1 mapping between
 *           participant tokens and participants.</p>
 *             </li>
 *          </ul>
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
 *                   <a>GetParticipant</a> — Gets information about the specified
 *           participant token.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStage</a> — Gets information for the specified stage.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStageSession</a> — Gets information for the specified stage
 *           session.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListParticipantEvents</a> — Lists events for a specified
 *           participant that occurred during a specified stage session.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListParticipants</a> — Lists all participants in a specified stage
 *           session.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStages</a> — Gets summary information about all stages in your account, in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStageSessions</a> — Gets all sessions for a specified stage.</p>
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
export class IVSRealTime extends IVSRealTimeClient implements IVSRealTime {}
createAggregatedClient(commands, IVSRealTime);
