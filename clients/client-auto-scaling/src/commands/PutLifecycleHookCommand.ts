// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import {
  PutLifecycleHookAnswer,
  PutLifecycleHookAnswerFilterSensitiveLog,
  PutLifecycleHookType,
  PutLifecycleHookTypeFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryPutLifecycleHookCommand,
  serializeAws_queryPutLifecycleHookCommand,
} from "../protocols/Aws_query";

export interface PutLifecycleHookCommandInput extends PutLifecycleHookType {}
export interface PutLifecycleHookCommandOutput extends PutLifecycleHookAnswer, __MetadataBearer {}

/**
 * <p>Creates or updates a lifecycle hook for the specified Auto Scaling group.</p>
 *          <p>Lifecycle hooks let you create solutions that are aware of events in the Auto Scaling instance
 *             lifecycle, and then perform a custom action on instances when the corresponding
 *             lifecycle event occurs.</p>
 *          <p>This step is a part of the procedure for adding a lifecycle hook to an Auto Scaling
 *             group:</p>
 *          <ol>
 *             <li>
 *                <p>(Optional) Create a launch template or launch configuration with a user data
 *                     script that runs while an instance is in a wait state due to a lifecycle
 *                     hook.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) Create a Lambda function and a rule that allows Amazon EventBridge to invoke
 *                     your Lambda function when an instance is put into a wait state due to a
 *                     lifecycle hook.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) Create a notification target and an IAM role. The target can be
 *                     either an Amazon SQS queue or an Amazon SNS topic. The role allows Amazon EC2 Auto Scaling to publish
 *                     lifecycle notifications to the target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <b>Create the lifecycle hook. Specify whether the hook is
 *                         used when the instances launch or terminate.</b>
 *                </p>
 *             </li>
 *             <li>
 *                <p>If you need more time, record the lifecycle action heartbeat to keep the
 *                     instance in a wait state using the <a>RecordLifecycleActionHeartbeat</a> API call.</p>
 *             </li>
 *             <li>
 *                <p>If you finish before the timeout period ends, send a callback by using the
 *                         <a>CompleteLifecycleAction</a> API call.</p>
 *             </li>
 *          </ol>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/lifecycle-hooks.html">Amazon EC2 Auto Scaling lifecycle
 *                 hooks</a> in the <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 *          <p>If you exceed your maximum limit of lifecycle hooks, which by default is 50 per Auto Scaling
 *             group, the call fails.</p>
 *          <p>You can view the lifecycle hooks for an Auto Scaling group using the <a>DescribeLifecycleHooks</a> API call. If you are no longer using a lifecycle
 *             hook, you can delete it by calling the <a>DeleteLifecycleHook</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, PutLifecycleHookCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, PutLifecycleHookCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new PutLifecycleHookCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLifecycleHookCommandInput} for command's `input` shape.
 * @see {@link PutLifecycleHookCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 */
export class PutLifecycleHookCommand extends $Command<
  PutLifecycleHookCommandInput,
  PutLifecycleHookCommandOutput,
  AutoScalingClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutLifecycleHookCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "PutLifecycleHookCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutLifecycleHookTypeFilterSensitiveLog,
      outputFilterSensitiveLog: PutLifecycleHookAnswerFilterSensitiveLog,
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
