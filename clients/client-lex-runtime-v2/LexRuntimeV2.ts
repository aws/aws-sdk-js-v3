import { LexRuntimeV2Client } from "./LexRuntimeV2Client";
import {
  DeleteSessionCommand,
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
} from "./commands/DeleteSessionCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { PutSessionCommand, PutSessionCommandInput, PutSessionCommandOutput } from "./commands/PutSessionCommand";
import {
  RecognizeTextCommand,
  RecognizeTextCommandInput,
  RecognizeTextCommandOutput,
} from "./commands/RecognizeTextCommand";
import {
  RecognizeUtteranceCommand,
  RecognizeUtteranceCommandInput,
  RecognizeUtteranceCommandOutput,
} from "./commands/RecognizeUtteranceCommand";
import {
  StartConversationCommand,
  StartConversationCommandInput,
  StartConversationCommandOutput,
} from "./commands/StartConversationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p></p>
 */
export class LexRuntimeV2 extends LexRuntimeV2Client {
  /**
   * <p>Removes session information for a specified bot, alias, and user ID. </p>
   *          <p>You can use this operation to restart a conversation with a bot.
   *          When you remove a session, the entire history of the session is removed
   *          so that you can start again.</p>
   *          <p>You don't need to delete a session. Sessions have a time limit and
   *          will expire. Set the session time limit when you create the bot. The
   *          default is 5 minutes, but you can specify anything between 1 minute and
   *          24 hours.</p>
   *          <p>If you specify a bot or alias ID that doesn't exist, you receive a
   *             <code>BadRequestException.</code>
   *          </p>
   *          <p>If the locale doesn't exist in the bot, or if the locale hasn't been
   *          enables for the alias, you receive a
   *          <code>BadRequestException</code>.</p>
   */
  public deleteSession(
    args: DeleteSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteSessionCommandOutput>;
  public deleteSession(
    args: DeleteSessionCommandInput,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  public deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;
  public deleteSession(
    args: DeleteSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: DeleteSessionCommandOutput) => void),
    cb?: (err: any, data?: DeleteSessionCommandOutput) => void
  ): Promise<DeleteSessionCommandOutput> | void {
    const command = new DeleteSessionCommand(args);
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
   * <p>Returns session information for a specified bot, alias, and
   *          user.</p>
   *          <p>For example, you can use this operation to retrieve session
   *          information for a user that has left a long-running session in
   *          use.</p>
   *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex
   *          returns a <code>BadRequestException</code>. If the locale doesn't exist
   *          or is not enabled for the alias, you receive a
   *             <code>BadRequestException</code>.</p>
   */
  public getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  public getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  public getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;
  public getSession(
    args: GetSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetSessionCommandOutput) => void),
    cb?: (err: any, data?: GetSessionCommandOutput) => void
  ): Promise<GetSessionCommandOutput> | void {
    const command = new GetSessionCommand(args);
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
   * <p>Creates a new session or modifies an existing session with an Amazon Lex
   *          bot. Use this operation to enable your application to set the state of
   *          the bot.</p>
   */
  public putSession(args: PutSessionCommandInput, options?: __HttpHandlerOptions): Promise<PutSessionCommandOutput>;
  public putSession(args: PutSessionCommandInput, cb: (err: any, data?: PutSessionCommandOutput) => void): void;
  public putSession(
    args: PutSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSessionCommandOutput) => void
  ): void;
  public putSession(
    args: PutSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutSessionCommandOutput) => void),
    cb?: (err: any, data?: PutSessionCommandOutput) => void
  ): Promise<PutSessionCommandOutput> | void {
    const command = new PutSessionCommand(args);
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
   * <p>Sends user input to Amazon Lex. Client applications use this API to send
   *          requests to Amazon Lex at runtime. Amazon Lex then interprets the user input
   *          using the machine learning model that it build for the bot.</p>
   *          <p>In response, Amazon Lex returns the next message to convey to the user
   *          and an optional response card to display.</p>
   */
  public recognizeText(
    args: RecognizeTextCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecognizeTextCommandOutput>;
  public recognizeText(
    args: RecognizeTextCommandInput,
    cb: (err: any, data?: RecognizeTextCommandOutput) => void
  ): void;
  public recognizeText(
    args: RecognizeTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecognizeTextCommandOutput) => void
  ): void;
  public recognizeText(
    args: RecognizeTextCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecognizeTextCommandOutput) => void),
    cb?: (err: any, data?: RecognizeTextCommandOutput) => void
  ): Promise<RecognizeTextCommandOutput> | void {
    const command = new RecognizeTextCommand(args);
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
   * <p>Sends user input to Amazon Lex. You can send text or speech. Clients use
   *          this API to send text and audio requests to Amazon Lex at runtime. Amazon Lex
   *          interprets the user input using the machine learning model built for
   *          the bot.</p>
   */
  public recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RecognizeUtteranceCommandOutput>;
  public recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;
  public recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): void;
  public recognizeUtterance(
    args: RecognizeUtteranceCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RecognizeUtteranceCommandOutput) => void),
    cb?: (err: any, data?: RecognizeUtteranceCommandOutput) => void
  ): Promise<RecognizeUtteranceCommandOutput> | void {
    const command = new RecognizeUtteranceCommand(args);
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
   * <p>Starts an HTTP/2 bidirectional event stream that enables you to send
   *          audio, text, or DTMF input in real time. After your application starts
   *          a conversation, users send input to Amazon Lex as a stream of events. Amazon Lex
   *          processes the incoming events and responds with streaming text or audio
   *          events.
   *       </p>
   *          <p></p>
   */
  public startConversation(
    args: StartConversationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConversationCommandOutput>;
  public startConversation(
    args: StartConversationCommandInput,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
  public startConversation(
    args: StartConversationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConversationCommandOutput) => void
  ): void;
  public startConversation(
    args: StartConversationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartConversationCommandOutput) => void),
    cb?: (err: any, data?: StartConversationCommandOutput) => void
  ): Promise<StartConversationCommandOutput> | void {
    const command = new StartConversationCommand(args);
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
