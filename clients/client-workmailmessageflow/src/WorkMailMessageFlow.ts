// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import {
  GetRawMessageContentCommand,
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
} from "./commands/GetRawMessageContentCommand";
import {
  PutRawMessageContentCommand,
  PutRawMessageContentCommandInput,
  PutRawMessageContentCommandOutput,
} from "./commands/PutRawMessageContentCommand";
import { WorkMailMessageFlowClient } from "./WorkMailMessageFlowClient";

/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
export class WorkMailMessageFlow extends WorkMailMessageFlowClient {
  /**
   * <p>Retrieves the raw content of an in-transit email message, in MIME format.</p>
   */
  public getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRawMessageContentCommandOutput>;
  public getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;
  public getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;
  public getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetRawMessageContentCommandOutput) => void),
    cb?: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): Promise<GetRawMessageContentCommandOutput> | void {
    const command = new GetRawMessageContentCommand(args);
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
   * <p>Updates the raw content of an in-transit email message, in MIME format.</p>
   *          <p>This example describes how to update in-transit email message. For more information and examples for using this API, see
   *       <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/update-with-lambda.html">
   *         Updating message content with AWS Lambda</a>.</p>
   *
   *
   *          <note>
   *             <p>Updates to an in-transit message only appear when you call <code>PutRawMessageContent</code> from an AWS Lambda function
   *       configured with a  synchronous <a href="https://docs.aws.amazon.com/workmail/latest/adminguide/lambda.html#synchronous-rules">
   *         Run Lambda</a> rule. If you call <code>PutRawMessageContent</code> on a delivered or sent message, the message remains unchanged,
   *       even though <a href="https://docs.aws.amazon.com/workmail/latest/APIReference/API_messageflow_GetRawMessageContent.html">GetRawMessageContent</a> returns an updated
   *         message.
   *     </p>
   *          </note>
   */
  public putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRawMessageContentCommandOutput>;
  public putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
  public putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
  public putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: PutRawMessageContentCommandOutput) => void),
    cb?: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): Promise<PutRawMessageContentCommandOutput> | void {
    const command = new PutRawMessageContentCommand(args);
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
