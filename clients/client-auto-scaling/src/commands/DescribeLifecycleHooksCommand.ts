// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeLifecycleHooksAnswer, DescribeLifecycleHooksType } from "../models/models_0";
import { de_DescribeLifecycleHooksCommand, se_DescribeLifecycleHooksCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleHooksCommand}.
 */
export interface DescribeLifecycleHooksCommandInput extends DescribeLifecycleHooksType {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleHooksCommand}.
 */
export interface DescribeLifecycleHooksCommandOutput extends DescribeLifecycleHooksAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Gets information about the lifecycle hooks for the specified Auto Scaling group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHooksCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHooksCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // DescribeLifecycleHooksType
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   LifecycleHookNames: [ // LifecycleHookNames
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLifecycleHooksAnswer
 * //   LifecycleHooks: [ // LifecycleHooks
 * //     { // LifecycleHook
 * //       LifecycleHookName: "STRING_VALUE",
 * //       AutoScalingGroupName: "STRING_VALUE",
 * //       LifecycleTransition: "STRING_VALUE",
 * //       NotificationTargetARN: "STRING_VALUE",
 * //       RoleARN: "STRING_VALUE",
 * //       NotificationMetadata: "STRING_VALUE",
 * //       HeartbeatTimeout: Number("int"),
 * //       GlobalTimeout: Number("int"),
 * //       DefaultResult: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLifecycleHooksCommandInput - {@link DescribeLifecycleHooksCommandInput}
 * @returns {@link DescribeLifecycleHooksCommandOutput}
 * @see {@link DescribeLifecycleHooksCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHooksCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe your lifecycle hooks
 * ```javascript
 * // This example describes the lifecycle hooks for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group"
 * };
 * const command = new DescribeLifecycleHooksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecycleHooks": [
 *     {
 *       "AutoScalingGroupName": "my-auto-scaling-group",
 *       "DefaultResult": "ABANDON",
 *       "GlobalTimeout": 172800,
 *       "HeartbeatTimeout": 3600,
 *       "LifecycleHookName": "my-lifecycle-hook",
 *       "LifecycleTransition": "autoscaling:EC2_INSTANCE_LAUNCHING",
 *       "NotificationTargetARN": "arn:aws:sns:us-west-2:123456789012:my-sns-topic",
 *       "RoleARN": "arn:aws:iam::123456789012:role/my-auto-scaling-role"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-lifecycle-hooks-1
 * ```
 *
 */
export class DescribeLifecycleHooksCommand extends $Command<
  DescribeLifecycleHooksCommandInput,
  DescribeLifecycleHooksCommandOutput,
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
  constructor(readonly input: DescribeLifecycleHooksCommandInput) {
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
  ): Handler<DescribeLifecycleHooksCommandInput, DescribeLifecycleHooksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLifecycleHooksCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHooksCommand";
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
  private serialize(input: DescribeLifecycleHooksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLifecycleHooksCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeLifecycleHooksCommandOutput> {
    return de_DescribeLifecycleHooksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
