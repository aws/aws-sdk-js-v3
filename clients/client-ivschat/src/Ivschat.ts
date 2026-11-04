// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type {
  HttpHandlerOptions as __HttpHandlerOptions,
  MetricsRecorder as __MetricsRecorder,
  PaginationConfiguration,
  Paginator,
} from "@smithy/types";

import {
  type CreateChatTokenCommandInput,
  type CreateChatTokenCommandOutput,
  CreateChatTokenCommand,
} from "./commands/CreateChatTokenCommand";
import {
  type CreateLoggingConfigurationCommandInput,
  type CreateLoggingConfigurationCommandOutput,
  CreateLoggingConfigurationCommand,
} from "./commands/CreateLoggingConfigurationCommand";
import {
  type CreateRoomCommandInput,
  type CreateRoomCommandOutput,
  CreateRoomCommand,
} from "./commands/CreateRoomCommand";
import {
  type DeleteLoggingConfigurationCommandInput,
  type DeleteLoggingConfigurationCommandOutput,
  DeleteLoggingConfigurationCommand,
} from "./commands/DeleteLoggingConfigurationCommand";
import {
  type DeleteMessageCommandInput,
  type DeleteMessageCommandOutput,
  DeleteMessageCommand,
} from "./commands/DeleteMessageCommand";
import {
  type DeleteRoomCommandInput,
  type DeleteRoomCommandOutput,
  DeleteRoomCommand,
} from "./commands/DeleteRoomCommand";
import {
  type DisconnectUserCommandInput,
  type DisconnectUserCommandOutput,
  DisconnectUserCommand,
} from "./commands/DisconnectUserCommand";
import {
  type GetLoggingConfigurationCommandInput,
  type GetLoggingConfigurationCommandOutput,
  GetLoggingConfigurationCommand,
} from "./commands/GetLoggingConfigurationCommand";
import { type GetRoomCommandInput, type GetRoomCommandOutput, GetRoomCommand } from "./commands/GetRoomCommand";
import {
  type ListLoggingConfigurationsCommandInput,
  type ListLoggingConfigurationsCommandOutput,
  ListLoggingConfigurationsCommand,
} from "./commands/ListLoggingConfigurationsCommand";
import { type ListRoomsCommandInput, type ListRoomsCommandOutput, ListRoomsCommand } from "./commands/ListRoomsCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import { type SendEventCommandInput, type SendEventCommandOutput, SendEventCommand } from "./commands/SendEventCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";
import {
  type UpdateLoggingConfigurationCommandInput,
  type UpdateLoggingConfigurationCommandOutput,
  UpdateLoggingConfigurationCommand,
} from "./commands/UpdateLoggingConfigurationCommand";
import {
  type UpdateRoomCommandInput,
  type UpdateRoomCommandOutput,
  UpdateRoomCommand,
} from "./commands/UpdateRoomCommand";
import { IvschatClient } from "./IvschatClient";
import { paginateListLoggingConfigurations } from "./pagination/ListLoggingConfigurationsPaginator";
import { paginateListRooms } from "./pagination/ListRoomsPaginator";

const commands = {
  CreateChatTokenCommand,
  CreateLoggingConfigurationCommand,
  CreateRoomCommand,
  DeleteLoggingConfigurationCommand,
  DeleteMessageCommand,
  DeleteRoomCommand,
  DisconnectUserCommand,
  GetLoggingConfigurationCommand,
  GetRoomCommand,
  ListLoggingConfigurationsCommand,
  ListRoomsCommand,
  ListTagsForResourceCommand,
  SendEventCommand,
  TagResourceCommand,
  UntagResourceCommand,
  UpdateLoggingConfigurationCommand,
  UpdateRoomCommand,
};
const paginators = {
  paginateListLoggingConfigurations,
  paginateListRooms,
};

/**
 * @public
 */
export interface IvschatRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface Ivschat {
  /**
   * @see {@link CreateChatTokenCommand}
   */
  createChatToken(
    args: CreateChatTokenCommandInput,
    options?: IvschatRequestOptions
  ): Promise<CreateChatTokenCommandOutput>;
  createChatToken(
    args: CreateChatTokenCommandInput,
    cb: (err: any, data?: CreateChatTokenCommandOutput) => void
  ): void;
  createChatToken(
    args: CreateChatTokenCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: CreateChatTokenCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateLoggingConfigurationCommand}
   */
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options?: IvschatRequestOptions
  ): Promise<CreateLoggingConfigurationCommandOutput>;
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;
  createLoggingConfiguration(
    args: CreateLoggingConfigurationCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: CreateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link CreateRoomCommand}
   */
  createRoom(): Promise<CreateRoomCommandOutput>;
  createRoom(
    args: CreateRoomCommandInput,
    options?: IvschatRequestOptions
  ): Promise<CreateRoomCommandOutput>;
  createRoom(
    args: CreateRoomCommandInput,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  createRoom(
    args: CreateRoomCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteLoggingConfigurationCommand}
   */
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options?: IvschatRequestOptions
  ): Promise<DeleteLoggingConfigurationCommandOutput>;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;
  deleteLoggingConfiguration(
    args: DeleteLoggingConfigurationCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: DeleteLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteMessageCommand}
   */
  deleteMessage(
    args: DeleteMessageCommandInput,
    options?: IvschatRequestOptions
  ): Promise<DeleteMessageCommandOutput>;
  deleteMessage(
    args: DeleteMessageCommandInput,
    cb: (err: any, data?: DeleteMessageCommandOutput) => void
  ): void;
  deleteMessage(
    args: DeleteMessageCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: DeleteMessageCommandOutput) => void
  ): void;

  /**
   * @see {@link DeleteRoomCommand}
   */
  deleteRoom(
    args: DeleteRoomCommandInput,
    options?: IvschatRequestOptions
  ): Promise<DeleteRoomCommandOutput>;
  deleteRoom(
    args: DeleteRoomCommandInput,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  deleteRoom(
    args: DeleteRoomCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link DisconnectUserCommand}
   */
  disconnectUser(
    args: DisconnectUserCommandInput,
    options?: IvschatRequestOptions
  ): Promise<DisconnectUserCommandOutput>;
  disconnectUser(
    args: DisconnectUserCommandInput,
    cb: (err: any, data?: DisconnectUserCommandOutput) => void
  ): void;
  disconnectUser(
    args: DisconnectUserCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: DisconnectUserCommandOutput) => void
  ): void;

  /**
   * @see {@link GetLoggingConfigurationCommand}
   */
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options?: IvschatRequestOptions
  ): Promise<GetLoggingConfigurationCommandOutput>;
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;
  getLoggingConfiguration(
    args: GetLoggingConfigurationCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: GetLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link GetRoomCommand}
   */
  getRoom(
    args: GetRoomCommandInput,
    options?: IvschatRequestOptions
  ): Promise<GetRoomCommandOutput>;
  getRoom(
    args: GetRoomCommandInput,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  getRoom(
    args: GetRoomCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggingConfigurationsCommand}
   */
  listLoggingConfigurations(): Promise<ListLoggingConfigurationsCommandOutput>;
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options?: IvschatRequestOptions
  ): Promise<ListLoggingConfigurationsCommandOutput>;
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;
  listLoggingConfigurations(
    args: ListLoggingConfigurationsCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: ListLoggingConfigurationsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListRoomsCommand}
   */
  listRooms(): Promise<ListRoomsCommandOutput>;
  listRooms(
    args: ListRoomsCommandInput,
    options?: IvschatRequestOptions
  ): Promise<ListRoomsCommandOutput>;
  listRooms(
    args: ListRoomsCommandInput,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  listRooms(
    args: ListRoomsCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: IvschatRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link SendEventCommand}
   */
  sendEvent(
    args: SendEventCommandInput,
    options?: IvschatRequestOptions
  ): Promise<SendEventCommandOutput>;
  sendEvent(
    args: SendEventCommandInput,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;
  sendEvent(
    args: SendEventCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: IvschatRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: IvschatRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateLoggingConfigurationCommand}
   */
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options?: IvschatRequestOptions
  ): Promise<UpdateLoggingConfigurationCommandOutput>;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;
  updateLoggingConfiguration(
    args: UpdateLoggingConfigurationCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: UpdateLoggingConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRoomCommand}
   */
  updateRoom(
    args: UpdateRoomCommandInput,
    options?: IvschatRequestOptions
  ): Promise<UpdateRoomCommandOutput>;
  updateRoom(
    args: UpdateRoomCommandInput,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  updateRoom(
    args: UpdateRoomCommandInput,
    options: IvschatRequestOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;

  /**
   * @see {@link ListLoggingConfigurationsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListLoggingConfigurationsCommandOutput}.
   */
  paginateListLoggingConfigurations(
    args?: ListLoggingConfigurationsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListLoggingConfigurationsCommandOutput>;

  /**
   * @see {@link ListRoomsCommand}
   * @param args - command input.
   * @param paginationConfig - optional pagination config.
   * @returns AsyncIterable of {@link ListRoomsCommandOutput}.
   */
  paginateListRooms(
    args?: ListRoomsCommandInput,
    paginationConfig?: Omit<PaginationConfiguration, "client">
  ): Paginator<ListRoomsCommandOutput>;
}

/**
 * **Introduction**
 *
 * The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat resources. You also need to integrate with the [Amazon IVS Chat Messaging API](https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html), to enable users to interact with chat rooms in real time.
 *
 * The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat HTTPS service endpoints, see the Amazon IVS Chat information on the [Amazon IVS page](https://docs.aws.amazon.com/general/latest/gr/ivs.html) in the *AWS General Reference*.
 *
 * This document describes HTTP operations. There is a separate *messaging* API for managing Chat resources; see the [Amazon IVS Chat Messaging API Reference](https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html).
 *
 * **Notes on terminology:**
 *
 * - You create service applications using the Amazon IVS Chat API. We refer to these as *applications*.
 * - You create front-end client applications (browser and Android/iOS apps) using the Amazon IVS Chat Messaging API. We refer to these as *clients*.
 *
 * **Resources**
 *
 * The following resources are part of Amazon IVS Chat:
 *
 * - **LoggingConfiguration** — A configuration that allows customers to store and record sent messages in a chat room. See the Logging Configuration endpoints for more information.
 * - **Room** — The central Amazon IVS Chat resource through which clients connect to and exchange chat messages. See the Room endpoints for more information.
 *
 * **Tagging**
 *
 * A *tag* is a metadata label that you assign to an AWS resource. A tag comprises a *key* and a *value*, both set by you. For example, you might set a tag as `topic:nature` to label a particular video category. See [Best practices and strategies](https://docs.aws.amazon.com/tag-editor/latest/userguide/best-practices-and-strats.html) in *Tagging Amazon Web Services Resources and Tag Editor* for details, including restrictions that apply to tags and "Tag naming limits and requirements"; Amazon IVS Chat has no service-specific constraints beyond what is documented there.
 *
 * Tags can help you identify and organize your AWS resources. For example, you can use the same tag for different resources to indicate that they are related. You can also use tags to manage access (see [Access Tags](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_tags.html)).
 *
 * The Amazon IVS Chat API has these tag-related operations: TagResource, UntagResource, and ListTagsForResource. The following resource supports tagging: Room.
 *
 * At most 50 tags can be applied to a resource.
 *
 * **API Access Security**
 *
 * Your Amazon IVS Chat applications (service applications and clients) must be authenticated and authorized to access Amazon IVS Chat resources. Note the differences between these concepts:
 *
 * - *Authentication* is about verifying identity. Requests to the Amazon IVS Chat API must be signed to verify your identity.
 * - *Authorization* is about granting permissions. Your IAM roles need to have permissions for Amazon IVS Chat API requests.
 *
 * Users (viewers) connect to a room using secure access tokens that you create using the CreateChatToken operation through the AWS SDK. You call CreateChatToken for every user’s chat session, passing identity and authorization information about the user.
 *
 * **Signing API Requests**
 *
 * HTTP API requests must be signed with an AWS SigV4 signature using your AWS security credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API directly, it’s your responsibility to sign the requests.
 *
 * You generate a signature using valid AWS credentials for an IAM role that has permission to perform the requested action. For example, DeleteMessage requests must be made using an IAM role that has the `ivschat:DeleteMessage` permission.
 *
 * For more information:
 *
 * - Authentication and generating signatures — See [Authenticating Requests (Amazon Web Services Signature Version 4)](https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html) in the *Amazon Web Services General Reference*.
 * - Managing Amazon IVS permissions — See [Identity and Access Management](https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html) on the Security page of the *Amazon IVS User Guide*.
 *
 * **Amazon Resource Names (ARNs)**
 *
 * ARNs uniquely identify AWS resources. An ARN is required when you need to specify a resource unambiguously across all of AWS, such as in IAM policies and API calls. For more information, see [Amazon Resource Names](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) in the *AWS General Reference*.
 *
 * @public
 */
export class Ivschat extends IvschatClient implements Ivschat {}
createAggregatedClient(commands, Ivschat, { paginators });
