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
import { EnableMetricsCollectionQuery } from "../models/models_0";
import { de_EnableMetricsCollectionCommand, se_EnableMetricsCollectionCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link EnableMetricsCollectionCommand}.
 */
export interface EnableMetricsCollectionCommandInput extends EnableMetricsCollectionQuery {}
/**
 * @public
 *
 * The output of {@link EnableMetricsCollectionCommand}.
 */
export interface EnableMetricsCollectionCommandOutput extends __MetadataBearer {}

/**
 * @public
 * <p>Enables group metrics collection for the specified Auto Scaling group.</p>
 *          <p>You can use these metrics to track changes in an Auto Scaling group and to set alarms on
 *             threshold values. You can view group metrics using the Amazon EC2 Auto Scaling console or the CloudWatch
 *             console. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/ec2/userguide/ec2-auto-scaling-cloudwatch-monitoring.html">Monitor
 *                 CloudWatch metrics for your Auto Scaling groups and instances</a> in the
 *                 <i>Amazon EC2 Auto Scaling User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, EnableMetricsCollectionCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, EnableMetricsCollectionCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = { // EnableMetricsCollectionQuery
 *   AutoScalingGroupName: "STRING_VALUE", // required
 *   Metrics: [ // Metrics
 *     "STRING_VALUE",
 *   ],
 *   Granularity: "STRING_VALUE", // required
 * };
 * const command = new EnableMetricsCollectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param EnableMetricsCollectionCommandInput - {@link EnableMetricsCollectionCommandInput}
 * @returns {@link EnableMetricsCollectionCommandOutput}
 * @see {@link EnableMetricsCollectionCommandInput} for command's `input` shape.
 * @see {@link EnableMetricsCollectionCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To enable metrics collection for an Auto Scaling group
 * ```javascript
 * // This example enables data collection for the specified Auto Scaling group.
 * const input = {
 *   "AutoScalingGroupName": "my-auto-scaling-group",
 *   "Granularity": "1Minute"
 * };
 * const command = new EnableMetricsCollectionCommand(input);
 * await client.send(command);
 * // example id: autoscaling-enable-metrics-collection-1
 * ```
 *
 */
export class EnableMetricsCollectionCommand extends $Command<
  EnableMetricsCollectionCommandInput,
  EnableMetricsCollectionCommandOutput,
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
  constructor(readonly input: EnableMetricsCollectionCommandInput) {
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
  ): Handler<EnableMetricsCollectionCommandInput, EnableMetricsCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, EnableMetricsCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "EnableMetricsCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "EnableMetricsCollection",
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
  private serialize(input: EnableMetricsCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_EnableMetricsCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<EnableMetricsCollectionCommandOutput> {
    return de_EnableMetricsCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
