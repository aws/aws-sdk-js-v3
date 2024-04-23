// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  CreateEncoderConfigurationCommand,
  CreateEncoderConfigurationCommandInput,
  CreateEncoderConfigurationCommandOutput,
} from "./commands/CreateEncoderConfigurationCommand";
import {
  CreateParticipantTokenCommand,
  CreateParticipantTokenCommandInput,
  CreateParticipantTokenCommandOutput,
} from "./commands/CreateParticipantTokenCommand";
import { CreateStageCommand, CreateStageCommandInput, CreateStageCommandOutput } from "./commands/CreateStageCommand";
import {
  CreateStorageConfigurationCommand,
  CreateStorageConfigurationCommandInput,
  CreateStorageConfigurationCommandOutput,
} from "./commands/CreateStorageConfigurationCommand";
import {
  DeleteEncoderConfigurationCommand,
  DeleteEncoderConfigurationCommandInput,
  DeleteEncoderConfigurationCommandOutput,
} from "./commands/DeleteEncoderConfigurationCommand";
import { DeleteStageCommand, DeleteStageCommandInput, DeleteStageCommandOutput } from "./commands/DeleteStageCommand";
import {
  DeleteStorageConfigurationCommand,
  DeleteStorageConfigurationCommandInput,
  DeleteStorageConfigurationCommandOutput,
} from "./commands/DeleteStorageConfigurationCommand";
import {
  DisconnectParticipantCommand,
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import {
  GetCompositionCommand,
  GetCompositionCommandInput,
  GetCompositionCommandOutput,
} from "./commands/GetCompositionCommand";
import {
  GetEncoderConfigurationCommand,
  GetEncoderConfigurationCommandInput,
  GetEncoderConfigurationCommandOutput,
} from "./commands/GetEncoderConfigurationCommand";
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
  GetStorageConfigurationCommand,
  GetStorageConfigurationCommandInput,
  GetStorageConfigurationCommandOutput,
} from "./commands/GetStorageConfigurationCommand";
import {
  ListCompositionsCommand,
  ListCompositionsCommandInput,
  ListCompositionsCommandOutput,
} from "./commands/ListCompositionsCommand";
import {
  ListEncoderConfigurationsCommand,
  ListEncoderConfigurationsCommandInput,
  ListEncoderConfigurationsCommandOutput,
} from "./commands/ListEncoderConfigurationsCommand";
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
  ListStorageConfigurationsCommand,
  ListStorageConfigurationsCommandInput,
  ListStorageConfigurationsCommandOutput,
} from "./commands/ListStorageConfigurationsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import {
  StartCompositionCommand,
  StartCompositionCommandInput,
  StartCompositionCommandOutput,
} from "./commands/StartCompositionCommand";
import {
  StopCompositionCommand,
  StopCompositionCommandInput,
  StopCompositionCommandOutput,
} from "./commands/StopCompositionCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateStageCommand, UpdateStageCommandInput, UpdateStageCommandOutput } from "./commands/UpdateStageCommand";
import { IVSRealTimeClient, IVSRealTimeClientConfig } from "./IVSRealTimeClient";

const commands = {
  CreateEncoderConfigurationCommand,
  CreateParticipantTokenCommand,
  CreateStageCommand,
  CreateStorageConfigurationCommand,
  DeleteEncoderConfigurationCommand,
  DeleteStageCommand,
  DeleteStorageConfigurationCommand,
  DisconnectParticipantCommand,
  GetCompositionCommand,
  GetEncoderConfigurationCommand,
  GetParticipantCommand,
  GetStageCommand,
  GetStageSessionCommand,
  GetStorageConfigurationCommand,
  ListCompositionsCommand,
  ListEncoderConfigurationsCommand,
  ListParticipantEventsCommand,
  ListParticipantsCommand,
  ListStagesCommand,
  ListStageSessionsCommand,
  ListStorageConfigurationsCommand,
  ListTagsForResourceCommand,
  StartCompositionCommand,
  StopCompositionCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateStageCommand,
};

export interface IVSRealTime {
  /**
   * @see {@link CreateEncoderConfigurationCommand}
   */
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateEncoderConfigurationCommandOutput>;
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    cb: (err: any, data?: CreateEncoderConfigurationCommandOutput) => void
  ): void;
  createEncoderConfiguration(
    args: CreateEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateEncoderConfigurationCommandOutput) => void
  ): void;

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
   * @see {@link CreateStorageConfigurationCommand}
   */
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateStorageConfigurationCommandOutput>;
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    cb: (err: any, data?: CreateStorageConfigurationCommandOutput) => void
  ): void;
  createStorageConfiguration(
    args: CreateStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteEncoderConfigurationCommand}
   */
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteEncoderConfigurationCommandOutput>;
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    cb: (err: any, data?: DeleteEncoderConfigurationCommandOutput) => void
  ): void;
  deleteEncoderConfiguration(
    args: DeleteEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteEncoderConfigurationCommandOutput) => void
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
   * @see {@link DeleteStorageConfigurationCommand}
   */
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteStorageConfigurationCommandOutput>;
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    cb: (err: any, data?: DeleteStorageConfigurationCommandOutput) => void
  ): void;
  deleteStorageConfiguration(
    args: DeleteStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteStorageConfigurationCommandOutput) => void
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
   * @see {@link GetCompositionCommand}
   */
  getComposition(
    args: GetCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetCompositionCommandOutput>;
  getComposition(args: GetCompositionCommandInput, cb: (err: any, data?: GetCompositionCommandOutput) => void): void;
  getComposition(
    args: GetCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetCompositionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetEncoderConfigurationCommand}
   */
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetEncoderConfigurationCommandOutput>;
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    cb: (err: any, data?: GetEncoderConfigurationCommandOutput) => void
  ): void;
  getEncoderConfiguration(
    args: GetEncoderConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetEncoderConfigurationCommandOutput) => void
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
   * @see {@link GetStorageConfigurationCommand}
   */
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetStorageConfigurationCommandOutput>;
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    cb: (err: any, data?: GetStorageConfigurationCommandOutput) => void
  ): void;
  getStorageConfiguration(
    args: GetStorageConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetStorageConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link ListCompositionsCommand}
   */
  listCompositions(
    args: ListCompositionsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListCompositionsCommandOutput>;
  listCompositions(
    args: ListCompositionsCommandInput,
    cb: (err: any, data?: ListCompositionsCommandOutput) => void
  ): void;
  listCompositions(
    args: ListCompositionsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListCompositionsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListEncoderConfigurationsCommand}
   */
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListEncoderConfigurationsCommandOutput>;
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    cb: (err: any, data?: ListEncoderConfigurationsCommandOutput) => void
  ): void;
  listEncoderConfigurations(
    args: ListEncoderConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListEncoderConfigurationsCommandOutput) => void
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
   * @see {@link ListStorageConfigurationsCommand}
   */
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListStorageConfigurationsCommandOutput>;
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    cb: (err: any, data?: ListStorageConfigurationsCommandOutput) => void
  ): void;
  listStorageConfigurations(
    args: ListStorageConfigurationsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListStorageConfigurationsCommandOutput) => void
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
   * @see {@link StartCompositionCommand}
   */
  startComposition(
    args: StartCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartCompositionCommandOutput>;
  startComposition(
    args: StartCompositionCommandInput,
    cb: (err: any, data?: StartCompositionCommandOutput) => void
  ): void;
  startComposition(
    args: StartCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartCompositionCommandOutput) => void
  ): void;

  /**
   * @see {@link StopCompositionCommand}
   */
  stopComposition(
    args: StopCompositionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopCompositionCommandOutput>;
  stopComposition(args: StopCompositionCommandInput, cb: (err: any, data?: StopCompositionCommandOutput) => void): void;
  stopComposition(
    args: StopCompositionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopCompositionCommandOutput) => void
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
 *          <p>The Amazon Interactive Video Service (IVS) real-time API is REST compatible, using a standard HTTP
 * 	  API and an AWS EventBridge event stream for responses. JSON is used for both requests and responses,
 * 	  including errors.
 *     </p>
 *          <p>Terminology:</p>
 *          <ul>
 *             <li>
 *                <p>A <i>stage</i>  is a virtual space where participants can exchange video in real time.</p>
 *             </li>
 *             <li>
 *                <p>A <i>participant token</i> is a token that authenticates a participant when they join a stage.</p>
 *             </li>
 *             <li>
 *                <p>A <i>participant object</i> represents participants (people) in the stage and
 *           contains information about them. When a token is created, it includes a participant ID;
 *           when a participant uses that token to join a stage, the participant is associated with
 *           that participant ID. There is a 1:1 mapping between participant tokens and
 *           participants.</p>
 *             </li>
 *             <li>
 *                <p>Server-side composition: The <i>composition</i> process composites participants
 *           of a stage into a single video and forwards it to a set of outputs (e.g., IVS channels).
 *           Composition endpoints support this process.</p>
 *             </li>
 *             <li>
 *                <p>Server-side composition: A <i>composition</i> controls the look of the outputs,
 *           including how participants are positioned in the video.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resources contain information about your IVS live stream (see <a href="https://docs.aws.amazon.com/ivs/latest/RealTimeUserGuide/getting-started.html">Getting Started with Amazon IVS Real-Time Streaming</a>):</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Stage</b> — A stage is a virtual space where participants can exchange video in real time.</p>
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
 *          <p>The Amazon IVS real-time API has these tag-related endpoints: <a>TagResource</a>, <a>UntagResource</a>, and
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
 *             <b>Composition Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>GetComposition</a> — Gets information about the specified
 *           Composition resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListCompositions</a> — Gets summary information about all
 *           Compositions in your account, in the AWS region where the API request is processed.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StartComposition</a> — Starts a Composition from a stage based on
 *           the configuration provided in the request.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>StopComposition</a> — Stops and deletes a Composition resource.
 *           Any broadcast from the Composition resource is stopped.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>EncoderConfiguration Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateEncoderConfiguration</a> — Creates an EncoderConfiguration object.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteEncoderConfiguration</a> — Deletes an EncoderConfiguration
 *           resource. Ensures that no Compositions are using this template; otherwise, returns an
 *           error.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetEncoderConfiguration</a> — Gets information about the specified
 *           EncoderConfiguration resource.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListEncoderConfigurations</a> — Gets summary information about all
 *           EncoderConfigurations in your account, in the AWS region where the API request is
 *           processed.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>StorageConfiguration Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateStorageConfiguration</a> — Creates a new storage configuration, used to enable
 * 		recording to Amazon S3.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteStorageConfiguration</a> — Deletes the storage configuration for the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetStorageConfiguration</a> — Gets the storage configuration for the specified ARN.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListStorageConfigurations</a> — Gets summary information about all storage configurations in your
 * 		account, in the AWS region where the API request is processed.</p>
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
