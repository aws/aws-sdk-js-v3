// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import { BedrockDataAutomationRuntimeClient } from "./BedrockDataAutomationRuntimeClient";
import {
  type GetDataAutomationStatusCommandInput,
  type GetDataAutomationStatusCommandOutput,
  GetDataAutomationStatusCommand,
} from "./commands/GetDataAutomationStatusCommand";
import {
  type InvokeDataAutomationAsyncCommandInput,
  type InvokeDataAutomationAsyncCommandOutput,
  InvokeDataAutomationAsyncCommand,
} from "./commands/InvokeDataAutomationAsyncCommand";
import {
  type InvokeDataAutomationCommandInput,
  type InvokeDataAutomationCommandOutput,
  InvokeDataAutomationCommand,
} from "./commands/InvokeDataAutomationCommand";
import {
  type ListTagsForResourceCommandInput,
  type ListTagsForResourceCommandOutput,
  ListTagsForResourceCommand,
} from "./commands/ListTagsForResourceCommand";
import {
  type TagResourceCommandInput,
  type TagResourceCommandOutput,
  TagResourceCommand,
} from "./commands/TagResourceCommand";
import {
  type UntagResourceCommandInput,
  type UntagResourceCommandOutput,
  UntagResourceCommand,
} from "./commands/UntagResourceCommand";

const commands = {
  GetDataAutomationStatusCommand,
  InvokeDataAutomationCommand,
  InvokeDataAutomationAsyncCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
};

/**
 * @public
 */
export interface BedrockDataAutomationRuntimeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface BedrockDataAutomationRuntime {
  /**
   * @see {@link GetDataAutomationStatusCommand}
   */
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<GetDataAutomationStatusCommandOutput>;
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    cb: (err: any, data?: GetDataAutomationStatusCommandOutput) => void
  ): void;
  getDataAutomationStatus(
    args: GetDataAutomationStatusCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: GetDataAutomationStatusCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeDataAutomationCommand}
   */
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<InvokeDataAutomationCommandOutput>;
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    cb: (err: any, data?: InvokeDataAutomationCommandOutput) => void
  ): void;
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: InvokeDataAutomationCommandOutput) => void
  ): void;

  /**
   * @see {@link InvokeDataAutomationAsyncCommand}
   */
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<InvokeDataAutomationAsyncCommandOutput>;
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    cb: (err: any, data?: InvokeDataAutomationAsyncCommandOutput) => void
  ): void;
  invokeDataAutomationAsync(
    args: InvokeDataAutomationAsyncCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: InvokeDataAutomationAsyncCommandOutput) => void
  ): void;

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(
    args: TagResourceCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<TagResourceCommandOutput>;
  tagResource(
    args: TagResourceCommandInput,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;
  tagResource(
    args: TagResourceCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(
    args: UntagResourceCommandInput,
    options?: BedrockDataAutomationRuntimeRequestOptions
  ): Promise<UntagResourceCommandOutput>;
  untagResource(
    args: UntagResourceCommandInput,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: BedrockDataAutomationRuntimeRequestOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
  ): void;
}

/**
 * Amazon Bedrock Data Automation Runtime
 * @public
 */
export class BedrockDataAutomationRuntime extends BedrockDataAutomationRuntimeClient implements BedrockDataAutomationRuntime {}
createAggregatedClient(commands, BedrockDataAutomationRuntime);
