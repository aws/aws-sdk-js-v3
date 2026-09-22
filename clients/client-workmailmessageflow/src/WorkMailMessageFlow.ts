// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetRawMessageContentCommandInput,
  type GetRawMessageContentCommandOutput,
  GetRawMessageContentCommand,
} from "./commands/GetRawMessageContentCommand";
import {
  type PutRawMessageContentCommandInput,
  type PutRawMessageContentCommandOutput,
  PutRawMessageContentCommand,
} from "./commands/PutRawMessageContentCommand";
import { WorkMailMessageFlowClient } from "./WorkMailMessageFlowClient";

const commands = {
  GetRawMessageContentCommand,
  PutRawMessageContentCommand,
};

/**
 * @public
 */
export interface WorkMailMessageFlowRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface WorkMailMessageFlow {
  /**
   * @see {@link GetRawMessageContentCommand}
   */
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options?: WorkMailMessageFlowRequestOptions
  ): Promise<GetRawMessageContentCommandOutput>;
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;
  getRawMessageContent(
    args: GetRawMessageContentCommandInput,
    options: WorkMailMessageFlowRequestOptions,
    cb: (err: any, data?: GetRawMessageContentCommandOutput) => void
  ): void;

  /**
   * @see {@link PutRawMessageContentCommand}
   */
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options?: WorkMailMessageFlowRequestOptions
  ): Promise<PutRawMessageContentCommandOutput>;
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
  putRawMessageContent(
    args: PutRawMessageContentCommandInput,
    options: WorkMailMessageFlowRequestOptions,
    cb: (err: any, data?: PutRawMessageContentCommandOutput) => void
  ): void;
}

/**
 * <p>The WorkMail Message Flow API provides access to email messages as they are
 *       being
 *       sent and received by
 *       a
 *       WorkMail organization.</p>
 * @public
 */
export class WorkMailMessageFlow extends WorkMailMessageFlowClient implements WorkMailMessageFlow {}
createAggregatedClient(commands, WorkMailMessageFlow);
