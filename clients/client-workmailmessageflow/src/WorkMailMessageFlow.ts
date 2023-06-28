// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

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
import { WorkMailMessageFlowClient, WorkMailMessageFlowClientConfig } from "./WorkMailMessageFlowClient";

const commands = {
  GetRawMessageContentCommand,
  PutRawMessageContentCommand,
};

export interface WorkMailMessageFlow {
  /**
   * @see {@link GetRawMessageContentCommand}
   */
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetRawMessageContentCommandOutput>;
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRawMessageContentCommand}
   */
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<PutRawMessageContentCommandOutput>;
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 */
export class WorkMailMessageFlow extends WorkMailMessageFlowClient implements WorkMailMessageFlow {}
createAggregatedClient(commands, WorkMailMessageFlow);
