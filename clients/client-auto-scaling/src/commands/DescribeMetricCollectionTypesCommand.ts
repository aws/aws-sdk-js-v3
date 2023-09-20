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
import { DescribeMetricCollectionTypesAnswer } from "../models/models_0";
import {
  de_DescribeMetricCollectionTypesCommand,
  se_DescribeMetricCollectionTypesCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeMetricCollectionTypesCommand}.
 */
export interface DescribeMetricCollectionTypesCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeMetricCollectionTypesCommand}.
 */
export interface DescribeMetricCollectionTypesCommandOutput
  extends DescribeMetricCollectionTypesAnswer,
    __MetadataBearer {}

/**
 * @public
 * <p>Describes the available CloudWatch metrics for Amazon EC2 Auto Scaling.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AutoScalingClient, DescribeMetricCollectionTypesCommand } from "@aws-sdk/client-auto-scaling"; // ES Modules import
 * // const { AutoScalingClient, DescribeMetricCollectionTypesCommand } = require("@aws-sdk/client-auto-scaling"); // CommonJS import
 * const client = new AutoScalingClient(config);
 * const input = {};
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMetricCollectionTypesAnswer
 * //   Metrics: [ // MetricCollectionTypes
 * //     { // MetricCollectionType
 * //       Metric: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Granularities: [ // MetricGranularityTypes
 * //     { // MetricGranularityType
 * //       Granularity: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeMetricCollectionTypesCommandInput - {@link DescribeMetricCollectionTypesCommandInput}
 * @returns {@link DescribeMetricCollectionTypesCommandOutput}
 * @see {@link DescribeMetricCollectionTypesCommandInput} for command's `input` shape.
 * @see {@link DescribeMetricCollectionTypesCommandOutput} for command's `response` shape.
 * @see {@link AutoScalingClientResolvedConfig | config} for AutoScalingClient's `config` shape.
 *
 * @throws {@link ResourceContentionFault} (server fault)
 *  <p>You already have a pending update to an Amazon EC2 Auto Scaling resource (for example, an Auto Scaling group,
 *             instance, or load balancer).</p>
 *
 * @throws {@link AutoScalingServiceException}
 * <p>Base exception class for all service exceptions from AutoScaling service.</p>
 *
 * @example To describe the Auto Scaling metric collection types
 * ```javascript
 * // This example describes the available metric collection types.
 * const input = undefined;
 * const command = new DescribeMetricCollectionTypesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Granularities": [
 *     {
 *       "Granularity": "1Minute"
 *     }
 *   ],
 *   "Metrics": [
 *     {
 *       "Metric": "GroupMinSize"
 *     },
 *     {
 *       "Metric": "GroupMaxSize"
 *     },
 *     {
 *       "Metric": "GroupDesiredCapacity"
 *     },
 *     {
 *       "Metric": "GroupInServiceInstances"
 *     },
 *     {
 *       "Metric": "GroupPendingInstances"
 *     },
 *     {
 *       "Metric": "GroupTerminatingInstances"
 *     },
 *     {
 *       "Metric": "GroupStandbyInstances"
 *     },
 *     {
 *       "Metric": "GroupTotalInstances"
 *     }
 *   ]
 * }
 * *\/
 * // example id: autoscaling-describe-metric-collection-types-1
 * ```
 *
 */
export class DescribeMetricCollectionTypesCommand extends $Command<
  DescribeMetricCollectionTypesCommandInput,
  DescribeMetricCollectionTypesCommandOutput,
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
  constructor(readonly input: DescribeMetricCollectionTypesCommandInput) {
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
  ): Handler<DescribeMetricCollectionTypesCommandInput, DescribeMetricCollectionTypesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeMetricCollectionTypesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AutoScalingClient";
    const commandName = "DescribeMetricCollectionTypesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AutoScaling_2011_01_01",
        operation: "DescribeMetricCollectionTypes",
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
  private serialize(input: DescribeMetricCollectionTypesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeMetricCollectionTypesCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeMetricCollectionTypesCommandOutput> {
    return de_DescribeMetricCollectionTypesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
