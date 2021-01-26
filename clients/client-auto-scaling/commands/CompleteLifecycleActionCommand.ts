import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { CompleteLifecycleActionAnswer, CompleteLifecycleActionType } from "../models/models_0";
import {
  deserializeAws_queryCompleteLifecycleActionCommand,
  serializeAws_queryCompleteLifecycleActionCommand,
} from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type CompleteLifecycleActionCommandInput = CompleteLifecycleActionType;
export type CompleteLifecycleActionCommandOutput = CompleteLifecycleActionAnswer & __MetadataBearer;

/**
 * <p>Completes the lifecycle action for the specified token or instance with the specified
 *             result.</p>
 *         <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
 *             group:</p>
 *         <ol>
 *             <li>
 *                 <p>(Optional) Create a Lambda function and a rule that allows CloudWatch Events to
 *                     invoke your Lambda function when Amazon EC2 Auto Scaling launches or terminates
 *                     instances.</p>
 *             </li>
 *             <li>
 *                 <p>(Optional) Create a notification target and an IAM role. The target can be
 *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to
 *                     publish lifecycle notifications to the target.</p>
 *             </li>
 *             <li>
 *                 <p>Create the lifecycle hook. Specify whether the hook is used when the instances
 *                     launch or terminate.</p>
 *             </li>
 *             <li>
 *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a pending state.</p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <b>If you finish before the timeout period ends, complete
 *                         the lifecycle action.</b>
 *                </p>
 *             </li>
 *          </ol>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 */
export class CompleteLifecycleActionCommand extends $Command<
  CompleteLifecycleActionCommandInput,
  CompleteLifecycleActionCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CompleteLifecycleActionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AutoScalingClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CompleteLifecycleActionCommandInput, CompleteLifecycleActionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "CompleteLifecycleActionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CompleteLifecycleActionType.filterSensitiveLog,
      outputFilterSensitiveLog: CompleteLifecycleActionAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CompleteLifecycleActionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryCompleteLifecycleActionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CompleteLifecycleActionCommandOutput> {
    return deserializeAws_queryCompleteLifecycleActionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
