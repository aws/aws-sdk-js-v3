import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { PutLifecycleHookAnswer, PutLifecycleHookType } from "../models/models_0";
import {
  deserializeAws_queryPutLifecycleHookCommand,
  serializeAws_queryPutLifecycleHookCommand,
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

export type PutLifecycleHookCommandInput = PutLifecycleHookType;
export type PutLifecycleHookCommandOutput = PutLifecycleHookAnswer & __MetadataBearer;

/**
 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p>
 *         <p>A lifecycle hook tells Amazon EC2 Auto Scaling to perform an action on an instance when the instance
 *             launches (before it is put into service) or as the instance terminates (before it is
 *             fully terminated).</p>
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
 *                 <p>
 *                   <b>Create the lifecycle hook. Specify whether the hook is
 *                         used when the instances launch or terminate.</b>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a pending state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p>
 *             </li>
 *             <li>
 *                 <p>If you finish before the timeout period ends, complete the lifecycle action
 *                     using the <a>CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *         <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling
 *             group, the call fails.</p>
 *         <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle
 *             hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
 */
export class PutLifecycleHookCommand extends $Command<
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutLifecycleHookCommandInput) {
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
  ): Handler<PutLifecycleHookCommandInput, PutLifecycleHookCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutLifecycleHookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLifecycleHookType.filterSensitiveLog,
      outputFilterSensitiveLog: PutLifecycleHookAnswer.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutLifecycleHookCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryPutLifecycleHookCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutLifecycleHookCommandOutput> {
    return deserializeAws_queryPutLifecycleHookCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
