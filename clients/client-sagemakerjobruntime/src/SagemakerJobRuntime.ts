// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  type CompleteRolloutCommandInput,
  type CompleteRolloutCommandOutput,
  CompleteRolloutCommand,
} from "./commands/CompleteRolloutCommand";
import { type SampleCommandInput, type SampleCommandOutput, SampleCommand } from "./commands/SampleCommand";
import {
  type SampleWithResponseStreamCommandInput,
  type SampleWithResponseStreamCommandOutput,
  SampleWithResponseStreamCommand,
} from "./commands/SampleWithResponseStreamCommand";
import {
  type UpdateRewardCommandInput,
  type UpdateRewardCommandOutput,
  UpdateRewardCommand,
} from "./commands/UpdateRewardCommand";
import { SagemakerJobRuntimeClient } from "./SagemakerJobRuntimeClient";

const commands = {
  CompleteRolloutCommand,
  SampleCommand,
  SampleWithResponseStreamCommand,
  UpdateRewardCommand,
};

export interface SagemakerJobRuntime {
  /**
   * @see {@link CompleteRolloutCommand}
   */
  completeRollout(
    args: CompleteRolloutCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<CompleteRolloutCommandOutput>;
  completeRollout(
    args: CompleteRolloutCommandInput,
    cb: (err: any, data?: CompleteRolloutCommandOutput) => void
  ): void;
  completeRollout(
    args: CompleteRolloutCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CompleteRolloutCommandOutput) => void
  ): void;

  /**
   * @see {@link SampleCommand}
   */
  sample(
    args: SampleCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SampleCommandOutput>;
  sample(
    args: SampleCommandInput,
    cb: (err: any, data?: SampleCommandOutput) => void
  ): void;
  sample(
    args: SampleCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SampleCommandOutput) => void
  ): void;

  /**
   * @see {@link SampleWithResponseStreamCommand}
   */
  sampleWithResponseStream(
    args: SampleWithResponseStreamCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SampleWithResponseStreamCommandOutput>;
  sampleWithResponseStream(
    args: SampleWithResponseStreamCommandInput,
    cb: (err: any, data?: SampleWithResponseStreamCommandOutput) => void
  ): void;
  sampleWithResponseStream(
    args: SampleWithResponseStreamCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SampleWithResponseStreamCommandOutput) => void
  ): void;

  /**
   * @see {@link UpdateRewardCommand}
   */
  updateReward(
    args: UpdateRewardCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<UpdateRewardCommandOutput>;
  updateReward(
    args: UpdateRewardCommandInput,
    cb: (err: any, data?: UpdateRewardCommandOutput) => void
  ): void;
  updateReward(
    args: UpdateRewardCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UpdateRewardCommandOutput) => void
  ): void;
}

/**
 * Agentic RFT Runtime Service - manages trajectory and transition data
 * for reinforcement fine-tuning jobs.
 * @public
 */
export class SagemakerJobRuntime extends SagemakerJobRuntimeClient implements SagemakerJobRuntime {}
createAggregatedClient(commands, SagemakerJobRuntime);
