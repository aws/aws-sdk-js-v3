// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CreateChatTokenCommand,
  CreateChatTokenCommandInput,
  CreateChatTokenCommandOutput,
} from "./commands/CreateChatTokenCommand";
import { CreateRoomCommand, CreateRoomCommandInput, CreateRoomCommandOutput } from "./commands/CreateRoomCommand";
import {
  DeleteMessageCommand,
  DeleteMessageCommandInput,
  DeleteMessageCommandOutput,
} from "./commands/DeleteMessageCommand";
import { DeleteRoomCommand, DeleteRoomCommandInput, DeleteRoomCommandOutput } from "./commands/DeleteRoomCommand";
import {
  DisconnectUserCommand,
  DisconnectUserCommandInput,
  DisconnectUserCommandOutput,
} from "./commands/DisconnectUserCommand";
import { GetRoomCommand, GetRoomCommandInput, GetRoomCommandOutput } from "./commands/GetRoomCommand";
import { ListRoomsCommand, ListRoomsCommandInput, ListRoomsCommandOutput } from "./commands/ListRoomsCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";
import { UpdateRoomCommand, UpdateRoomCommandInput, UpdateRoomCommandOutput } from "./commands/UpdateRoomCommand";
import { IvschatClient } from "./IvschatClient";

/**
 * <p>
 *             <b>Introduction</b>
 *          </p>
 *          <p>The Amazon IVS Chat control-plane API enables you to create and manage Amazon IVS Chat
 *       resources. You also need to integrate with the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging
 *         API</a>, to enable users to interact with chat rooms in real time.</p>
 *          <p>The API is an AWS regional service. For a list of supported regions and Amazon IVS Chat
 *       HTTPS service endpoints, see the Amazon IVS Chat information on the <a href="https://docs.aws.amazon.com/general/latest/gr/ivs.html">Amazon IVS page</a> in the
 *         <i>AWS General Reference</i>. </p>
 *          <p>
 *             <b>Notes on terminology:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>You create service applications using the Amazon IVS Chat API. We refer to these as
 *             <i>applications</i>.</p>
 *             </li>
 *             <li>
 *                <p>You create front-end client applications (browser and Android/iOS apps) using the
 *           Amazon IVS Chat Messaging API. We refer to these as <i>clients</i>. </p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Resources</b>
 *          </p>
 *          <p>The following resource is part of Amazon IVS Chat:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <b>Room</b> — The central Amazon IVS Chat resource through
 *           which clients connect to and exchange chat messages. See the Room endpoints for more
 *           information.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>API Access Security</b>
 *          </p>
 *          <p>Your Amazon IVS Chat applications (service applications and clients) must be authenticated
 *       and authorized to access Amazon IVS Chat resources. Note the differences between these
 *       concepts:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <i>Authentication</i> is about verifying identity. Requests to the
 *           Amazon IVS Chat API must be signed to verify your identity.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <i>Authorization</i> is about granting permissions. Your IAM roles need
 *           to have permissions for Amazon IVS Chat API requests.</p>
 *             </li>
 *          </ul>
 *          <p>Users (viewers) connect to a room using secure access tokens that you create using the
 *         <a>CreateChatToken</a> endpoint through the AWS SDK. You call CreateChatToken for
 *       every user’s chat session, passing identity and authorization information about the
 *       user.</p>
 *          <p>
 *             <b>Signing API Requests</b>
 *          </p>
 *          <p>HTTP API requests must be signed with an AWS SigV4 signature using your AWS security
 *       credentials. The AWS Command Line Interface (CLI) and the AWS SDKs take care of signing the
 *       underlying API calls for you. However, if your application calls the Amazon IVS Chat HTTP API
 *       directly, it’s your responsibility to sign the requests.</p>
 *          <p>You generate a signature using valid AWS credentials for an IAM role that has permission
 *       to perform the requested action. For example, DeleteMessage requests must be made using an IAM
 *       role that has the <code>ivschat:DeleteMessage</code> permission.</p>
 *          <p>For more information:</p>
 *          <ul>
 *             <li>
 *                <p>Authentication and generating signatures — See <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/sig-v4-authenticating-requests.html">Authenticating Requests
 *               (Amazon Web Services Signature Version 4)</a> in the <i>Amazon Web Services
 *             General Reference</i>.</p>
 *             </li>
 *             <li>
 *                <p>Managing Amazon IVS permissions — See <a href="https://docs.aws.amazon.com/ivs/latest/userguide/security-iam.html">Identity and Access Management</a> on
 *           the Security page of the <i>Amazon IVS User Guide</i>.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Messaging Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>DeleteMessage</a> — Sends an event to a specific room which
 *           directs clients to delete a specific message; that is, unrender it from view and delete it
 *           from the client’s chat history. This event’s <code>EventName</code> is
 *             <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html">
 *             DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DisconnectUser</a> — Disconnects all connections using a specified
 *           user ID from a room. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html">
 *             DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>SendEvent</a> — Sends an event to a room. Use this within your
 *           application’s business logic to send events to clients of a room; e.g., to notify clients
 *           to change the way the chat UI is rendered.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Chat Token Endpoint</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateChatToken</a> — Creates an encrypted token that is used to
 *           establish an individual WebSocket connection to a room. The token is valid for one minute,
 *           and a connection (session) established with the token is valid for the specified
 *           duration.</p>
 *             </li>
 *          </ul>
 *          <p>
 *             <b>Room Endpoints</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateRoom</a> — Creates a room that allows clients to connect and
 *           pass messages.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>DeleteRoom</a> — Deletes the specified room.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>GetRoom</a> — Gets the specified room.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListRooms</a> — Gets summary information about all your rooms in
 *           the AWS region where the API request is processed. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>UpdateRoom</a> — Updates a room’s configuration.</p>
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
 *          <p>All the above are HTTP operations. There is a separate <i>messaging</i> API
 *       for managing Chat resources; see the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/chat-messaging-api.html"> Amazon IVS Chat Messaging API
 *         Reference</a>.</p>
 */
export class Ivschat extends IvschatClient {
  /**
   * <p>Creates an encrypted token that is used to establish an individual WebSocket connection
   *          to a room. The token is valid for one minute, and a connection (session) established with
   *          the token is valid for the specified duration.</p>
   *          <p>Encryption keys are owned by Amazon IVS Chat and never used directly by your
   *          application.</p>
   */
  public createChatToken(
    args: CreateChatTokenCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateChatTokenCommandOutput>;
  public createChatToken(
    args: CreateChatTokenCommandInput,
    cb: (err: any, data?: CreateChatTokenCommandOutput) => void
  ): void;
  public createChatToken(
    args: CreateChatTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateChatTokenCommandOutput) => void
  ): void;
  public createChatToken(
    args: CreateChatTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateChatTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateChatTokenCommandOutput) => void
  ): Promise<CreateChatTokenCommandOutput> | void {
    const command = new CreateChatTokenCommand(args);
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
   * <p>Creates a room that allows clients to connect and pass messages.</p>
   */
  public createRoom(args: CreateRoomCommandInput, options?: __HttpHandlerOptions): Promise<CreateRoomCommandOutput>;
  public createRoom(args: CreateRoomCommandInput, cb: (err: any, data?: CreateRoomCommandOutput) => void): void;
  public createRoom(
    args: CreateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateRoomCommandOutput) => void
  ): void;
  public createRoom(
    args: CreateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateRoomCommandOutput) => void),
    cb?: (err: any, data?: CreateRoomCommandOutput) => void
  ): Promise<CreateRoomCommandOutput> | void {
    const command = new CreateRoomCommand(args);
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
   * <p>Sends an event to a specific room which directs clients to delete a specific message;
   *          that is, unrender it from view and delete it from the client’s chat history. This event’s
   *             <code>EventName</code> is <code>aws:DELETE_MESSAGE</code>. This replicates the <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-deletemessage-publish.html">
   *             DeleteMessage</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
   */
  public deleteMessage(
    args: DeleteMessageCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteMessageCommandOutput>;
  public deleteMessage(
    args: DeleteMessageCommandInput,
    cb: (err: any, data?: DeleteMessageCommandOutput) => void
  ): void;
  public deleteMessage(
    args: DeleteMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteMessageCommandOutput) => void
  ): void;
  public deleteMessage(
    args: DeleteMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteMessageCommandOutput) => void),
    cb?: (err: any, data?: DeleteMessageCommandOutput) => void
  ): Promise<DeleteMessageCommandOutput> | void {
    const command = new DeleteMessageCommand(args);
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
   * <p>Deletes the specified room.</p>
   */
  public deleteRoom(args: DeleteRoomCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRoomCommandOutput>;
  public deleteRoom(args: DeleteRoomCommandInput, cb: (err: any, data?: DeleteRoomCommandOutput) => void): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteRoomCommandOutput) => void
  ): void;
  public deleteRoom(
    args: DeleteRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteRoomCommandOutput) => void),
    cb?: (err: any, data?: DeleteRoomCommandOutput) => void
  ): Promise<DeleteRoomCommandOutput> | void {
    const command = new DeleteRoomCommand(args);
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
   * <p>Disconnects all connections using a specified user ID from a room. This replicates the
   *             <a href="https://docs.aws.amazon.com/ivs/latest/chatmsgapireference/actions-disconnectuser-publish.html">
   *             DisconnectUser</a> WebSocket operation in the Amazon IVS Chat Messaging API.</p>
   */
  public disconnectUser(
    args: DisconnectUserCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DisconnectUserCommandOutput>;
  public disconnectUser(
    args: DisconnectUserCommandInput,
    cb: (err: any, data?: DisconnectUserCommandOutput) => void
  ): void;
  public disconnectUser(
    args: DisconnectUserCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DisconnectUserCommandOutput) => void
  ): void;
  public disconnectUser(
    args: DisconnectUserCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DisconnectUserCommandOutput) => void),
    cb?: (err: any, data?: DisconnectUserCommandOutput) => void
  ): Promise<DisconnectUserCommandOutput> | void {
    const command = new DisconnectUserCommand(args);
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
   * <p>Gets the specified room.</p>
   */
  public getRoom(args: GetRoomCommandInput, options?: __HttpHandlerOptions): Promise<GetRoomCommandOutput>;
  public getRoom(args: GetRoomCommandInput, cb: (err: any, data?: GetRoomCommandOutput) => void): void;
  public getRoom(
    args: GetRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRoomCommandOutput) => void
  ): void;
  public getRoom(
    args: GetRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRoomCommandOutput) => void),
    cb?: (err: any, data?: GetRoomCommandOutput) => void
  ): Promise<GetRoomCommandOutput> | void {
    const command = new GetRoomCommand(args);
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
   * <p>Gets summary information about all your rooms in the AWS region where the API request is
   *          processed. Results are sorted in descending order of <code>updateTime</code>.</p>
   */
  public listRooms(args: ListRoomsCommandInput, options?: __HttpHandlerOptions): Promise<ListRoomsCommandOutput>;
  public listRooms(args: ListRoomsCommandInput, cb: (err: any, data?: ListRoomsCommandOutput) => void): void;
  public listRooms(
    args: ListRoomsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListRoomsCommandOutput) => void
  ): void;
  public listRooms(
    args: ListRoomsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: ListRoomsCommandOutput) => void),
    cb?: (err: any, data?: ListRoomsCommandOutput) => void
  ): Promise<ListRoomsCommandOutput> | void {
    const command = new ListRoomsCommand(args);
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
   * <p>Sends an event to a room. Use this within your application’s business logic to send
   *          events to clients of a room; e.g., to notify clients to change the way the chat UI is
   *          rendered.</p>
   */
  public sendEvent(args: SendEventCommandInput, options?: __HttpHandlerOptions): Promise<SendEventCommandOutput>;
  public sendEvent(args: SendEventCommandInput, cb: (err: any, data?: SendEventCommandOutput) => void): void;
  public sendEvent(
    args: SendEventCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendEventCommandOutput) => void
  ): void;
  public sendEvent(
    args: SendEventCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendEventCommandOutput) => void),
    cb?: (err: any, data?: SendEventCommandOutput) => void
  ): Promise<SendEventCommandOutput> | void {
    const command = new SendEventCommand(args);
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
   * <p>Updates a room’s configuration.</p>
   */
  public updateRoom(args: UpdateRoomCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRoomCommandOutput>;
  public updateRoom(args: UpdateRoomCommandInput, cb: (err: any, data?: UpdateRoomCommandOutput) => void): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRoomCommandOutput) => void
  ): void;
  public updateRoom(
    args: UpdateRoomCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: UpdateRoomCommandOutput) => void),
    cb?: (err: any, data?: UpdateRoomCommandOutput) => void
  ): Promise<UpdateRoomCommandOutput> | void {
    const command = new UpdateRoomCommand(args);
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
