// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteSessionCommand,
  DeleteSessionCommandInput,
  DeleteSessionCommandOutput,
} from "./commands/DeleteSessionCommand";
import { GetSessionCommand, GetSessionCommandInput, GetSessionCommandOutput } from "./commands/GetSessionCommand";
import { PostContentCommand, PostContentCommandInput, PostContentCommandOutput } from "./commands/PostContentCommand";
import { PostTextCommand, PostTextCommandInput, PostTextCommandOutput } from "./commands/PostTextCommand";
import { PutSessionCommand, PutSessionCommandInput, PutSessionCommandOutput } from "./commands/PutSessionCommand";
import { LexRuntimeServiceClient, LexRuntimeServiceClientConfig } from "./LexRuntimeServiceClient";

const commands = {
  DeleteSessionCommand,
  GetSessionCommand,
  PostContentCommand,
  PostTextCommand,
  PutSessionCommand,
};

export interface LexRuntimeService {
  /**
   * @see {@link DeleteSessionCommand}
   */
  deleteSession(args: DeleteSessionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSessionCommandOutput>;
  deleteSession(args: DeleteSessionCommandInput, cb: (err: any, data?: DeleteSessionCommandOutput) => void): void;
  deleteSession(
    args: DeleteSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link GetSessionCommand}
   */
  getSession(args: GetSessionCommandInput, options?: __HttpHandlerOptions): Promise<GetSessionCommandOutput>;
  getSession(args: GetSessionCommandInput, cb: (err: any, data?: GetSessionCommandOutput) => void): void;
  getSession(
    args: GetSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetSessionCommandOutput) => void
  ): void;

  /**
   * @see {@link PostContentCommand}
   */
  postContent(args: PostContentCommandInput, options?: __HttpHandlerOptions): Promise<PostContentCommandOutput>;
  postContent(args: PostContentCommandInput, cb: (err: any, data?: PostContentCommandOutput) => void): void;
  postContent(
    args: PostContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostContentCommandOutput) => void
  ): void;

  /**
   * @see {@link PostTextCommand}
   */
  postText(args: PostTextCommandInput, options?: __HttpHandlerOptions): Promise<PostTextCommandOutput>;
  postText(args: PostTextCommandInput, cb: (err: any, data?: PostTextCommandOutput) => void): void;
  postText(
    args: PostTextCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PostTextCommandOutput) => void
  ): void;

  /**
   * @see {@link PutSessionCommand}
   */
  putSession(args: PutSessionCommandInput, options?: __HttpHandlerOptions): Promise<PutSessionCommandOutput>;
  putSession(args: PutSessionCommandInput, cb: (err: any, data?: PutSessionCommandOutput) => void): void;
  putSession(
    args: PutSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutSessionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Lex provides both build and runtime endpoints. Each endpoint
 *       provides a set of operations (API). Your conversational bot uses the
 *       runtime API to understand user utterances (user input text or voice). For
 *       example, suppose a user says "I want pizza", your bot sends this input to
 *       Amazon Lex using the runtime API. Amazon Lex recognizes that the user
 *       request is for the OrderPizza intent (one of the intents defined in the
 *       bot). Then Amazon Lex engages in user conversation on behalf of the bot to
 *       elicit required information (slot values, such as pizza size and crust
 *       type), and then performs fulfillment activity (that you configured when
 *       you created the bot). You use the build-time API to create and manage your
 *       Amazon Lex bot. For a list of build-time operations, see the build-time
 *       API, . </p>
 */
export class LexRuntimeService extends LexRuntimeServiceClient implements LexRuntimeService {}
createAggregatedClient(commands, LexRuntimeService);
