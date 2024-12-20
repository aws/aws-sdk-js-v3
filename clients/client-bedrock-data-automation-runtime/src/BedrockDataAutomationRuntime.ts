// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  BedrockDataAutomationRuntimeClient,
  BedrockDataAutomationRuntimeClientConfig,
} from "./BedrockDataAutomationRuntimeClient";
import {
  GetDataAutomationStatusCommand,
  GetDataAutomationStatusCommandInput,
  GetDataAutomationStatusCommandOutput,
} from "./commands/GetDataAutomationStatusCommand";
import {
  InvokeDataAutomationAsyncCommand,
  InvokeDataAutomationAsyncCommandInput,
  InvokeDataAutomationAsyncCommandOutput,
} from "./commands/InvokeDataAutomationAsyncCommand";

const commands = {
  GetDataAutomationStatusCommand,
  InvokeDataAutomationAsyncCommand,
};

export interface BedrockDataAutomationRuntime {
  /**
   * @see {@link GetDataAutomationStatusCommand}
   */
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDataAutomationStatusCommandOutput>;
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    cb: (err: any, data?: GetDataAutomationStatusCommandOutput) => void
  ): void;
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDataAutomationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeDataAutomationAsyncCommand}
   */
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeDataAutomationAsyncCommandOutput>;
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    cb: (err: any, data?: InvokeDataAutomationAsyncCommandOutput) => void
  ): void;
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeDataAutomationAsyncCommandOutput) => void
  ): void;
}

/**
 * Amazon Bedrock Data Automation Runtime
 * @public
 */
export class BedrockDataAutomationRuntime
  extends BedrockDataAutomationRuntimeClient
  implements BedrockDataAutomationRuntime {}
createAggregatedClient(commands, BedrockDataAutomationRuntime);
