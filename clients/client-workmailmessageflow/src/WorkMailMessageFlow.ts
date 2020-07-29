import { WorkMailMessageFlowClient } from "./WorkMailMessageFlowClient";
import {
  GetRawMessageContentCommand,
  GetRawMessageContentCommandInput,
  GetRawMessageContentCommandOutput,
} from "./commands/GetRawMessageContentCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
export class WorkMailMessageFlow extends WorkMailMessageFlowClient {
  /**
   * <p>Retrieves the raw content of an in-transit email message, in MIME format. </p>
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
}
