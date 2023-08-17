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
import { DescribeLifecycleHookTypesAnswer } from "../models/models_0";
import { de_DescribeLifecycleHookTypesCommand, se_DescribeLifecycleHookTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeLifecycleHookTypesCommand}.
 */
export interface DescribeLifecycleHookTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeLifecycleHookTypesCommand}.
 */
export interface DescribeLifecycleHookTypesCommandOutput extends DescribeLifecycleHookTypesAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Describes the available types of lifecycle hooks.</p>
 *          <p>The following hook types are supported:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>autoscaling:EC2_INSTANCE_LAUNCHING</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>autoscaling:EC2_INSTANCE_TERMINATING</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeLifecycleHookTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeLifecycleHookTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeLifecycleHookTypesAnswer
 * //   LifecycleHookTypes: [ // AutoScalingNotificationTypes
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeLifecycleHookTypesCommandInput - {@link DescribeLifecycleHookTypesCommandInput}
 * @returns {@link DescribeLifecycleHookTypesCommandOutput}
 * @see {@link DescribeLifecycleHookTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleHookTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the available types of lifecycle hooks
 * ```javascript
 * // This example describes the available lifecycle hook types.
 * const input = undefined;
 * const command = new DescribeLifecycleHookTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "LifecycleHookTypes": [
 *     "autoscaling:EC2_INSTANCE_LAUNCHING",
 *     "autoscaling:EC2_INSTANCE_TERMINATING"
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-lifecycle-hook-types-1
 * ```
 *
 */
export class DescribeLifecycleHookTypesCommand extends $Command<
  DescribeLifecycleHookTypesCommandInput,
  DescribeLifecycleHookTypesCommandOutput,
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
  constructor(readonly input: DescribeLifecycleHookTypesCommandInput) {
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
  ): Handler<DescribeLifecycleHookTypesCommandInput, DescribeLifecycleHookTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeLifecycleHookTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeLifecycleHookTypesCommand";
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
  private serialize(input: DescribeLifecycleHookTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeLifecycleHookTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeLifecycleHookTypesCommandOutput> {
    return de_DescribeLifecycleHookTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
