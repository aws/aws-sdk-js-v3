// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  CompleteAttachmentUploadCommand,
  CompleteAttachmentUploadCommandInput,
  CompleteAttachmentUploadCommandOutput,
} from "./commands/CompleteAttachmentUploadCommand";
import {
  CreateParticipantConnectionCommand,
  CreateParticipantConnectionCommandInput,
  CreateParticipantConnectionCommandOutput,
} from "./commands/CreateParticipantConnectionCommand";
import {
  DisconnectParticipantCommand,
  DisconnectParticipantCommandInput,
  DisconnectParticipantCommandOutput,
} from "./commands/DisconnectParticipantCommand";
import {
  GetAttachmentCommand,
  GetAttachmentCommandInput,
  GetAttachmentCommandOutput,
} from "./commands/GetAttachmentCommand";
import {
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "./commands/GetTranscriptCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { SendMessageCommand, SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import {
  StartAttachmentUploadCommand,
  StartAttachmentUploadCommandInput,
  StartAttachmentUploadCommandOutput,
} from "./commands/StartAttachmentUploadCommand";
import { ConnectParticipantClient } from "./ConnectParticipantClient";

/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage
 *             a customer contact center. Amazon Connect enables customer contacts through voice or chat. Use
 *             the Amazon Connect Participant Service to manage chat participants, such as agents and
 *             customers.</p>
 */
export class ConnectParticipant extends ConnectParticipantClient {
  /**
   * <p>Allows you to confirm that the attachment has been uploaded using the pre-signed URL
   *             provided in StartAttachmentUpload API. </p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   */
  public completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteAttachmentUploadCommandOutput>;
  public completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;
  public completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): void;
  public completeAttachmentUpload(
    args: CompleteAttachmentUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CompleteAttachmentUploadCommandOutput) => void),
    cb?: (err: any, data?: CompleteAttachmentUploadCommandOutput) => void
  ): Promise<CompleteAttachmentUploadCommandOutput> | void {
    const command = new CompleteAttachmentUploadCommand(args);
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
   * <p>Creates the participant's connection. </p>
   *          <note>
   *             <p>
   *                <code>ParticipantToken</code> is used for invoking this API instead of
   *                     <code>ConnectionToken</code>.</p>
   *          </note>
   *          <p>The participant token is valid for the lifetime of the participant – until they are
   *             part of a contact.</p>
   *          <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s.
   *             Clients must manually connect to the returned websocket URL and subscribe to the desired
   *             topic. </p>
   *          <p>For chat, you need to publish the following on the established websocket
   *             connection:</p>
   *          <p>
   *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
   *          </p>
   *          <p>Upon websocket URL expiry, as specified in the response ConnectionExpiry parameter,
   *             clients need to call this API again to obtain a new websocket URL and perform the same
   *             steps as before.</p>
   *          <p>
   *             <b>Message streaming support</b>: This API can also be used
   *             together with the <a href="https://docs.aws.amazon.com/connect/latest/APIReference/API_StartContactStreaming.html">StartContactStreaming</a> API to create a participant connection for chat
   *             contacts that are not using a websocket. For more information about message streaming,
   *                 <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-message-streaming.html">Enable real-time chat
   *                 message streaming</a> in the <i>Amazon Connect Administrator
   *             Guide</i>.</p>
   *          <p>
   *             <b>Feature specifications</b>: For information about feature
   *             specifications, such as the allowed number of open websocket connections per
   *             participant, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/amazon-connect-service-limits.html#feature-limits">Feature specifications</a> in the <i>Amazon Connect Administrator
   *                 Guide</i>. </p>
   *          <note>
   *             <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   *          </note>
   */
  public createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CreateParticipantConnectionCommandOutput>;
  public createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;
  public createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): void;
  public createParticipantConnection(
    args: CreateParticipantConnectionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateParticipantConnectionCommandOutput) => void),
    cb?: (err: any, data?: CreateParticipantConnectionCommandOutput) => void
  ): Promise<CreateParticipantConnectionCommandOutput> | void {
    const command = new CreateParticipantConnectionCommand(args);
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
   * <p>Disconnects a participant. </p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
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
   * <p>Provides a pre-signed URL for download of a completed attachment. This is an
   *             asynchronous API for use with active contacts.</p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   */
  public getAttachment(
    args: GetAttachmentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetAttachmentCommandOutput>;
  public getAttachment(
    args: GetAttachmentCommandInput,
    cb: (err: any, data?: GetAttachmentCommandOutput) => void
  ): void;
  public getAttachment(
    args: GetAttachmentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetAttachmentCommandOutput) => void
  ): void;
  public getAttachment(
    args: GetAttachmentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetAttachmentCommandOutput) => void),
    cb?: (err: any, data?: GetAttachmentCommandOutput) => void
  ): Promise<GetAttachmentCommandOutput> | void {
    const command = new GetAttachmentCommand(args);
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
   * <p>Retrieves a transcript of the session, including details about any attachments. For
   *             information about accessing past chat contact transcripts for a persistent chat, see
   *             <a href="https://docs.aws.amazon.com/connect/latest/adminguide/chat-persistence.html">Enable persistent chat</a>.
   *         </p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   */
  public getTranscript(
    args: GetTranscriptCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetTranscriptCommandOutput>;
  public getTranscript(
    args: GetTranscriptCommandInput,
    cb: (err: any, data?: GetTranscriptCommandOutput) => void
  ): void;
  public getTranscript(
    args: GetTranscriptCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetTranscriptCommandOutput) => void
  ): void;
  public getTranscript(
    args: GetTranscriptCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetTranscriptCommandOutput) => void),
    cb?: (err: any, data?: GetTranscriptCommandOutput) => void
  ): Promise<GetTranscriptCommandOutput> | void {
    const command = new GetTranscriptCommand(args);
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
   * <p>Sends an event. </p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
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
   * <p>Sends a message.</p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   */
  public sendMessage(args: SendMessageCommandInput, options?: __HttpHandlerOptions): Promise<SendMessageCommandOutput>;
  public sendMessage(args: SendMessageCommandInput, cb: (err: any, data?: SendMessageCommandOutput) => void): void;
  public sendMessage(
    args: SendMessageCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendMessageCommandOutput) => void
  ): void;
  public sendMessage(
    args: SendMessageCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendMessageCommandOutput) => void),
    cb?: (err: any, data?: SendMessageCommandOutput) => void
  ): Promise<SendMessageCommandOutput> | void {
    const command = new SendMessageCommand(args);
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
   * <p>Provides a pre-signed Amazon S3 URL in response for uploading the file directly to
   *             S3.</p>
   *          <note>
   *             <p>
   *                <code>ConnectionToken</code> is used for invoking this API instead of
   *                     <code>ParticipantToken</code>.</p>
   *          </note>
   *          <p>The Amazon Connect Participant Service APIs do not use <a href="https://docs.aws.amazon.com/general/latest/gr/signature-version-4.html">Signature Version 4
   *                     authentication</a>.</p>
   */
  public startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartAttachmentUploadCommandOutput>;
  public startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;
  public startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): void;
  public startAttachmentUpload(
    args: StartAttachmentUploadCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartAttachmentUploadCommandOutput) => void),
    cb?: (err: any, data?: StartAttachmentUploadCommandOutput) => void
  ): Promise<StartAttachmentUploadCommandOutput> | void {
    const command = new StartAttachmentUploadCommand(args);
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
