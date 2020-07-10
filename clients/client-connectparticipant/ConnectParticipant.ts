import { ConnectParticipantClient } from "./ConnectParticipantClient";
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
  GetTranscriptCommand,
  GetTranscriptCommandInput,
  GetTranscriptCommandOutput,
} from "./commands/GetTranscriptCommand";
import { SendEventCommand, SendEventCommandInput, SendEventCommandOutput } from "./commands/SendEventCommand";
import { SendMessageCommand, SendMessageCommandInput, SendMessageCommandOutput } from "./commands/SendMessageCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Connect is a cloud-based contact center solution that makes it easy to set up and manage
 *             a customer contact center and provide reliable customer engagement at any scale.</p>
 *         <p>Amazon Connect enables customer contacts through voice or chat.</p>
 *
 *         <p>The APIs described here are used by chat participants, such as agents and
 *             customers.</p>
 */
export class ConnectParticipant extends ConnectParticipantClient {
  /**
   * <p>Creates the participant's connection. Note that ParticipantToken is used for invoking
   *             this API instead of ConnectionToken.</p>
   *         <p>The participant token is valid for the lifetime of the participant – until the they
   *             are part of a contact.</p>
   *         <p>The response URL for <code>WEBSOCKET</code> Type has a connect expiry timeout of 100s. Clients must
   *             manually connect to the returned websocket URL and subscribe to the desired topic.  </p>
   *         <p>For
   *             chat, you need to publish the following on the established websocket connection:</p>
   *
   *
   *         <p>
   *             <code>{"topic":"aws/subscribe","content":{"topics":["aws/chat"]}}</code>
   *          </p>
   *
   *         <p>Upon websocket URL expiry, as
   *             specified in the response ConnectionExpiry parameter, clients need to call this API
   *             again to obtain a new websocket URL and perform the same steps as before.</p>
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
   * <p>Disconnects a participant. Note that ConnectionToken is used for invoking this API
   *             instead of ParticipantToken.</p>
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
   * <p>Retrieves a transcript of the session. Note that ConnectionToken is used for invoking
   *             this API instead of ParticipantToken.</p>
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
   * <p>Sends an event. Note that ConnectionToken is used for invoking this API instead of
   *             ParticipantToken.</p>
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
   * <p>Sends a message. Note that ConnectionToken is used for invoking this API instead of
   *             ParticipantToken.</p>
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
}
