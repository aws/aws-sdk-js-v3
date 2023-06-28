// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  DeleteHumanLoopCommand,
  DeleteHumanLoopCommandInput,
  DeleteHumanLoopCommandOutput,
} from "./commands/DeleteHumanLoopCommand";
import {
  DescribeHumanLoopCommand,
  DescribeHumanLoopCommandInput,
  DescribeHumanLoopCommandOutput,
} from "./commands/DescribeHumanLoopCommand";
import {
  ListHumanLoopsCommand,
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput,
} from "./commands/ListHumanLoopsCommand";
import {
  StartHumanLoopCommand,
  StartHumanLoopCommandInput,
  StartHumanLoopCommandOutput,
} from "./commands/StartHumanLoopCommand";
import {
  StopHumanLoopCommand,
  StopHumanLoopCommandInput,
  StopHumanLoopCommandOutput,
} from "./commands/StopHumanLoopCommand";
import { SageMakerA2IRuntimeClient, SageMakerA2IRuntimeClientConfig } from "./SageMakerA2IRuntimeClient";

const commands = {
  DeleteHumanLoopCommand,
  DescribeHumanLoopCommand,
  ListHumanLoopsCommand,
  StartHumanLoopCommand,
  StopHumanLoopCommand,
};

export interface SageMakerA2IRuntime {
  /**
   * @see {@link DeleteHumanLoopCommand}
   */
  deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHumanLoopCommandOutput>;
  deleteHumanLoop(args: DeleteHumanLoopCommandInput, cb: (err: any, data?: DeleteHumanLoopCommandOutput) => void): void;
  deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHumanLoopCommandOutput) => void
  ): void;

  /**
   * @see {@link DescribeHumanLoopCommand}
   */
  describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHumanLoopCommandOutput>;
  describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    cb: (err: any, data?: DescribeHumanLoopCommandOutput) => void
  ): void;
  describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHumanLoopCommandOutput) => void
  ): void;

  /**
   * @see {@link ListHumanLoopsCommand}
   */
  listHumanLoops(
    args: ListHumanLoopsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHumanLoopsCommandOutput>;
  listHumanLoops(args: ListHumanLoopsCommandInput, cb: (err: any, data?: ListHumanLoopsCommandOutput) => void): void;
  listHumanLoops(
    args: ListHumanLoopsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHumanLoopsCommandOutput) => void
  ): void;

  /**
   * @see {@link StartHumanLoopCommand}
   */
  startHumanLoop(
    args: StartHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartHumanLoopCommandOutput>;
  startHumanLoop(args: StartHumanLoopCommandInput, cb: (err: any, data?: StartHumanLoopCommandOutput) => void): void;
  startHumanLoop(
    args: StartHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartHumanLoopCommandOutput) => void
  ): void;

  /**
   * @see {@link StopHumanLoopCommand}
   */
  stopHumanLoop(args: StopHumanLoopCommandInput, options?: __HttpHandlerOptions): Promise<StopHumanLoopCommandOutput>;
  stopHumanLoop(args: StopHumanLoopCommandInput, cb: (err: any, data?: StopHumanLoopCommandOutput) => void): void;
  stopHumanLoop(
    args: StopHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopHumanLoopCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>Amazon Augmented AI (Amazon A2I) adds the benefit of human judgment to any machine learning
 *       application. When an AI application can't evaluate data with a high degree of confidence,
 *       human reviewers can take over. This human review is called a human review workflow. To create
 *       and start a human review workflow, you need three resources: a <i>worker task
 *         template</i>, a <i>flow definition</i>, and a <i>human
 *         loop</i>.</p>
 *          <p>For information about these resources and prerequisites for using Amazon A2I, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-getting-started.html">Get Started with
 *         Amazon Augmented AI</a> in the Amazon SageMaker Developer Guide.</p>
 *          <p>This API reference includes information about API actions and data types that you can use
 *       to interact with Amazon A2I programmatically. Use this guide to:</p>
 *          <ul>
 *             <li>
 *                <p>Start a human loop with the <code>StartHumanLoop</code> operation when using
 *           Amazon A2I with a <i>custom task type</i>. To learn more about the
 *           difference between custom and built-in task types, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-task-types-general.html">Use Task Types </a>. To learn
 *           how to start a human loop using this API, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-start-human-loop.html#a2i-instructions-starthumanloop">Create and Start a Human Loop for a Custom Task Type </a> in the
 *           Amazon SageMaker Developer Guide.</p>
 *             </li>
 *             <li>
 *                <p>Manage your human loops. You can list all human loops that you have created, describe
 *           individual human loops, and stop and delete human loops. To learn more, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-monitor-humanloop-results.html">Monitor and Manage Your Human Loop </a> in the Amazon SageMaker Developer Guide.</p>
 *             </li>
 *          </ul>
 *          <p>Amazon A2I integrates APIs from various AWS services to create and start human review
 *       workflows for those services. To learn how Amazon A2I uses these APIs, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/a2i-api-references.html">Use APIs in
 *         Amazon A2I</a> in the Amazon SageMaker Developer Guide.</p>
 */
export class SageMakerA2IRuntime extends SageMakerA2IRuntimeClient implements SageMakerA2IRuntime {}
createAggregatedClient(commands, SageMakerA2IRuntime);
