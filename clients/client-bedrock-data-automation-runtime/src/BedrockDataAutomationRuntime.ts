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
import {
  InvokeDataAutomationCommand,
  InvokeDataAutomationCommandInput,
  InvokeDataAutomationCommandOutput,
} from "./commands/InvokeDataAutomationCommand";
import {
  ListTagsForResourceCommand,
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput,
} from "./commands/ListTagsForResourceCommand";
import { TagResourceCommand, TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import {
  UntagResourceCommand,
  UntagResourceCommandInput,
  UntagResourceCommandOutput,
} from "./commands/UntagResourceCommand";

const commands = {
  GetDataAutomationStatusCommand,
  InvokeDataAutomationCommand,
  InvokeDataAutomationAsyncCommand,
  ListTagsForResourceCommand,
  TagResourceCommand,
  UntagResourceCommand,
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
   * @see {@link InvokeDataAutomationCommand}
   */
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<InvokeDataAutomationCommandOutput>;
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    cb: (err: any, data?: InvokeDataAutomationCommandOutput) => void
  ): void;
  invokeDataAutomation(
    args: InvokeDataAutomationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: InvokeDataAutomationCommandOutput) => void
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

  /**
   * @see {@link ListTagsForResourceCommand}
   */
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListTagsForResourceCommandOutput>;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;
  listTagsForResource(
    args: ListTagsForResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListTagsForResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link TagResourceCommand}
   */
  tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
  tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
  tagResource(
    args: TagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: TagResourceCommandOutput) => void
  ): void;

  /**
   * @see {@link UntagResourceCommand}
   */
  untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
  untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
  untagResource(
    args: UntagResourceCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: UntagResourceCommandOutput) => void
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
