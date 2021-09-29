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
   *          <p>If the bot, alias, or session identifier doesn't exist, Amazon Lex V2
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
   * <p>Creates a new session or modifies an existing session with an Amazon Lex V2
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
   * <p>Sends user input to Amazon Lex V2. Client applications use this API to send
   *          requests to Amazon Lex V2 at runtime. Amazon Lex V2 then interprets the user input
   *          using the machine learning model that it build for the bot.</p>
   *          <p>In response, Amazon Lex V2 returns the next message to convey to the user
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
   * <p>Sends user input to Amazon Lex V2. You can send text or speech. Clients use
   *          this API to send text and audio requests to Amazon Lex V2 at runtime. Amazon Lex V2
   *          interprets the user input using the machine learning model built for
   *          the bot.</p>
   *          <p>The following request fields must be compressed with gzip and then
   *          base64 encoded before you send them to Amazon Lex V2. </p>
   *          <ul>
   *             <li>
   *                <p>requestAttributes</p>
   *             </li>
   *             <li>
   *                <p>sessionState</p>
   *             </li>
   *          </ul>
   *          <p>The following response fields are compressed using gzip and then
   *          base64 encoded by Amazon Lex V2. Before you can use these fields, you must
   *          decode and decompress them. </p>
   *          <ul>
   *             <li>
   *                <p>inputTranscript</p>
   *             </li>
   *             <li>
   *                <p>interpretations</p>
   *             </li>
   *             <li>
   *                <p>messages</p>
   *             </li>
   *             <li>
   *                <p>requestAttributes</p>
   *             </li>
   *             <li>
   *                <p>sessionState</p>
   *             </li>
   *          </ul>
   *          <p>The example contains a Java application that compresses and encodes
   *          a Java object to send to Amazon Lex V2, and a second that decodes and
   *          decompresses a response from Amazon Lex V2.</p>
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
   *          a conversation, users send input to Amazon Lex V2 as a stream of events. Amazon Lex V2
   *          processes the incoming events and responds with streaming text or audio
   *          events.
   *       </p>
   *          <p>Audio input must be in the following format: <code>audio/lpcm
   *             sample-rate=8000 sample-size-bits=16 channel-count=1;
   *             is-big-endian=false</code>.</p>
   *          <p>The <code>StartConversation</code> operation is supported only in
   *          the following SDKs: </p>
   *          <ul>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/goto/SdkForCpp/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for C++</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/goto/SdkForJavaV2/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for Java V2</a>
   *                </p>
   *             </li>
   *             <li>
   *                <p>
   *                   <a href="https://docs.aws.amazon.com/goto/SdkForRubyV3/runtime.lex.v2-2020-08-07/StartConversation">AWS SDK for Ruby V3</a>
   *                </p>
   *             </li>
   *          </ul>
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
