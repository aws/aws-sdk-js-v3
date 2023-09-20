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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { AutoScalingClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AutoScalingClient";
import { DescribeAdjustmentTypesAnswer } from "../models/models_0";
import { de_DescribeAdjustmentTypesCommand, se_DescribeAdjustmentTypesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAdjustmentTypesCommand}.
 */
export interface DescribeAdjustmentTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeAdjustmentTypesCommand}.
 */
export interface DescribeAdjustmentTypesCommandOutput extends DescribeAdjustmentTypesAnswer, __MetadataBearer {}

/**
 * @public
 * <p>Describes the available adjustment types for step scaling and simple scaling
 *             policies.</p>
 *          <p>The following adjustment types are supported:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>ChangeInCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ExactCapacity</code>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>PercentChangeInCapacity</code>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeAdjustmentTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeAdjustmentTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAdjustmentTypesAnswer
 * //   AdjustmentTypes: [ // AdjustmentTypes
 * //     { // AdjustmentType
 * //       AdjustmentType: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAdjustmentTypesCommandInput - {@link DescribeAdjustmentTypesCommandInput}
 * @returns {@link DescribeAdjustmentTypesCommandOutput}
 * @see {@link DescribeAdjustmentTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeAdjustmentTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the Amazon EC2 Auto Scaling adjustment types
 * ```javascript
 * // This example describes the available adjustment types.
 * const input = undefined;
 * const command = new DescribeAdjustmentTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "AdjustmentTypes": [
 *     {
 *       "AdjustmentType": "ChangeInCapacity"
 *     },
 *     {
 *       "AdjustmentType": "ExactCapcity"
 *     },
 *     {
 *       "AdjustmentType": "PercentChangeInCapacity"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-adjustment-types-1
 * ```
 *
 */
export class DescribeAdjustmentTypesCommand extends $Command<
  DescribeAdjustmentTypesCommandInput,
  DescribeAdjustmentTypesCommandOutput,
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
  constructor(readonly input: DescribeAdjustmentTypesCommandInput) {
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
  ): Handler<DescribeAdjustmentTypesCommandInput, DescribeAdjustmentTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAdjustmentTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeAdjustmentTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeAdjustmentTypes",
      },
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
  private serialize(input: DescribeAdjustmentTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAdjustmentTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAdjustmentTypesCommandOutput> {
    return de_DescribeAdjustmentTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
