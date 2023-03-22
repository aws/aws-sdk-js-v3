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
import { DescribeAutoScalingNotificationTypesAnswer } from "../models/models_0";
import {
  deserializeAws_queryDescribeAutoScalingNotificationTypesCommand,
  serializeAws_queryDescribeAutoScalingNotificationTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 *
 * The input for {@link DescribeAutoScalingNotificationTypesCommand}.
 */
export interface DescribeAutoScalingNotificationTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAutoScalingNotificationTypesCommand}.
 */
export interface DescribeAutoScalingNotificationTypesCommandOutput
  extends DescribeAutoScalingNotificationTypesAnswer,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the notification types that are supported by Amazon EC2 Auto Scaling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAutoScalingNotificationTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const command = new DescribeAutoScalingNotificationTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param DescribeAutoScalingNotificationTypesCommandInput - {@link DescribeAutoScalingNotificationTypesCommandInput}
 * @returns {@link DescribeAutoScalingNotificationTypesCommandOutput}
 * @see {@link DescribeAutoScalingNotificationTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoScalingNotificationTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 *
 * @example To describe the Auto Scaling notification types
 * ```javascript
 * // This example describes the available notification types.
 * const input = undefined;
 * const command = new DescribeAutoScalingNotificationTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AutoScalingNotificationTypes": [
 *     "autoscaling:EC2_INSTANCE_LAUNCH",
 *     "autoscaling:EC2_INSTANCE_LAUNCH_ERROR",
 *     "autoscaling:EC2_INSTANCE_TERMINATE",
 *     "autoscaling:EC2_INSTANCE_TERMINATE_ERROR",
 *     "autoscaling:TEST_NOTIFICATION"
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-auto-scaling-notification-types-1
 * ```
 *
 */
export class DescribeAutoScalingNotificationTypesCommand extends $Command<
  DescribeAutoScalingNotificationTypesCommandInput,
  DescribeAutoScalingNotificationTypesCommandOutput,
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

  /**
   * @public
   */
  constructor(readonly input: DescribeAutoScalingNotificationTypesCommandInput) {
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
  ): Handler<DescribeAutoScalingNotificationTypesCommandInput, DescribeAutoScalingNotificationTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoScalingNotificationTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAutoScalingNotificationTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(
    input: DescribeAutoScalingNotificationTypesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeAutoScalingNotificationTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeAutoScalingNotificationTypesCommandOutput> {
    return deserializeAws_queryDescribeAutoScalingNotificationTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
