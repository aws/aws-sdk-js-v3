import { SageMakerA2IRuntimeClient } from "./SageMakerA2IRuntimeClient";
import {
  DeleteHumanLoopCommand,
  DeleteHumanLoopCommandInput,
  DeleteHumanLoopCommandOutput
} from "./commands/DeleteHumanLoopCommand";
import {
  DescribeHumanLoopCommand,
  DescribeHumanLoopCommandInput,
  DescribeHumanLoopCommandOutput
} from "./commands/DescribeHumanLoopCommand";
import {
  ListHumanLoopsCommand,
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput
} from "./commands/ListHumanLoopsCommand";
import {
  StartHumanLoopCommand,
  StartHumanLoopCommandInput,
  StartHumanLoopCommandOutput
} from "./commands/StartHumanLoopCommand";
import {
  StopHumanLoopCommand,
  StopHumanLoopCommandInput,
  StopHumanLoopCommandOutput
} from "./commands/StopHumanLoopCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

/**
 * <p>Amazon Augmented AI (Augmented AI) (Preview) is a service that adds human judgment to any machine learning application. Human reviewers can take over when an AI application can't evaluate data with a high degree of confidence.</p>
 *          <p>From fraudulent bank transaction identification to document processing to image analysis, machine learning models can be trained to make decisions as well as or better than a human. Nevertheless, some decisions require contextual
 *       interpretation, such as when you need to decide whether an image is appropriate for a given audience. Content moderation guidelines are nuanced and highly dependent on context, and they vary between countries.
 *       When trying to apply AI in these situations, you can be forced to choose between "ML only" systems with unacceptably high error rates or "human only" systems that are expensive and difficult to scale, and that slow down decision making.</p>
 *          <p>This API reference includes information about API actions and data types you can use to interact with Augmented AI programmatically. </p>
 *          <p>You can create a flow definition against the Augmented AI API. Provide the Amazon Resource Name (ARN) of a flow definition to integrate AI service APIs, such as <code>Textract.AnalyzeDocument</code> and <code>Rekognition.DetectModerationLabels</code>.
 *       These AI services, in turn, invoke the <a>StartHumanLoop</a> API, which evaluates conditions under which humans will be invoked. If humans are required, Augmented AI creates a human loop.
 *       Results of human work are available asynchronously in Amazon Simple Storage Service (Amazon S3). You can use Amazon CloudWatch Events to detect human work results.</p>
 *          <p>You can find additional Augmented AI API documentation in the following reference guides: <a href="https://aws.amazon.com/rekognition/latest/dg/API_Reference.html">Amazon Rekognition</a>, <a href="https://aws.amazon.com/sagemaker/latest/dg/API_Reference.html">Amazon SageMaker</a>, and <a href="https://aws.amazon.com/textract/latest/dg/API_Reference.html">Amazon Textract</a>.</p>
 */
export class SageMakerA2IRuntime extends SageMakerA2IRuntimeClient {
  /**
   * <p>Deletes the specified human loop for a flow definition.</p>
   */
  public deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DeleteHumanLoopCommandOutput>;
  public deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    cb: (err: any, data?: DeleteHumanLoopCommandOutput) => void
  ): void;
  public deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DeleteHumanLoopCommandOutput) => void
  ): void;
  public deleteHumanLoop(
    args: DeleteHumanLoopCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DeleteHumanLoopCommandOutput) => void),
    cb?: (err: any, data?: DeleteHumanLoopCommandOutput) => void
  ): Promise<DeleteHumanLoopCommandOutput> | void {
    const command = new DeleteHumanLoopCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about the specified human loop.</p>
   */
  public describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<DescribeHumanLoopCommandOutput>;
  public describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    cb: (err: any, data?: DescribeHumanLoopCommandOutput) => void
  ): void;
  public describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: DescribeHumanLoopCommandOutput) => void
  ): void;
  public describeHumanLoop(
    args: DescribeHumanLoopCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: DescribeHumanLoopCommandOutput) => void),
    cb?: (err: any, data?: DescribeHumanLoopCommandOutput) => void
  ): Promise<DescribeHumanLoopCommandOutput> | void {
    const command = new DescribeHumanLoopCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Returns information about human loops, given the specified parameters.</p>
   */
  public listHumanLoops(
    args: ListHumanLoopsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<ListHumanLoopsCommandOutput>;
  public listHumanLoops(
    args: ListHumanLoopsCommandInput,
    cb: (err: any, data?: ListHumanLoopsCommandOutput) => void
  ): void;
  public listHumanLoops(
    args: ListHumanLoopsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: ListHumanLoopsCommandOutput) => void
  ): void;
  public listHumanLoops(
    args: ListHumanLoopsCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: ListHumanLoopsCommandOutput) => void),
    cb?: (err: any, data?: ListHumanLoopsCommandOutput) => void
  ): Promise<ListHumanLoopsCommandOutput> | void {
    const command = new ListHumanLoopsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Starts a human loop, provided that at least one activation condition is met.</p>
   */
  public startHumanLoop(
    args: StartHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartHumanLoopCommandOutput>;
  public startHumanLoop(
    args: StartHumanLoopCommandInput,
    cb: (err: any, data?: StartHumanLoopCommandOutput) => void
  ): void;
  public startHumanLoop(
    args: StartHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartHumanLoopCommandOutput) => void
  ): void;
  public startHumanLoop(
    args: StartHumanLoopCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StartHumanLoopCommandOutput) => void),
    cb?: (err: any, data?: StartHumanLoopCommandOutput) => void
  ): Promise<StartHumanLoopCommandOutput> | void {
    const command = new StartHumanLoopCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Stops the specified human loop.</p>
   */
  public stopHumanLoop(
    args: StopHumanLoopCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StopHumanLoopCommandOutput>;
  public stopHumanLoop(
    args: StopHumanLoopCommandInput,
    cb: (err: any, data?: StopHumanLoopCommandOutput) => void
  ): void;
  public stopHumanLoop(
    args: StopHumanLoopCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StopHumanLoopCommandOutput) => void
  ): void;
  public stopHumanLoop(
    args: StopHumanLoopCommandInput,
    optionsOrCb?:
      | __HttpHandlerOptions
      | ((err: any, data?: StopHumanLoopCommandOutput) => void),
    cb?: (err: any, data?: StopHumanLoopCommandOutput) => void
  ): Promise<StopHumanLoopCommandOutput> | void {
    const command = new StopHumanLoopCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object")
        throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
