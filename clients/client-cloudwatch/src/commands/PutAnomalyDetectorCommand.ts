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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { PutAnomalyDetectorInput, PutAnomalyDetectorOutput } from "../models/models_0";
import { de_PutAnomalyDetectorCommand, se_PutAnomalyDetectorCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandInput extends PutAnomalyDetectorInput {}
/**
 * @public
 *
 * The output of {@link PutAnomalyDetectorCommand}.
 */
export interface PutAnomalyDetectorCommandOutput extends PutAnomalyDetectorOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an anomaly detection model for a CloudWatch metric. You can use the model
 * 			to display a band of expected normal values when the metric is graphed.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/CloudWatch_Anomaly_Detection.html">CloudWatch Anomaly Detection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, PutAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, PutAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // PutAnomalyDetectorInput
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Stat: "STRING_VALUE",
 *   Configuration: { // AnomalyDetectorConfiguration
 *     ExcludedTimeRanges: [ // AnomalyDetectorExcludedTimeRanges
 *       { // Range
 *         StartTime: new Date("TIMESTAMP"), // required
 *         EndTime: new Date("TIMESTAMP"), // required
 *       },
 *     ],
 *     MetricTimezone: "STRING_VALUE",
 *   },
 *   SingleMetricAnomalyDetector: { // SingleMetricAnomalyDetector
 *     Namespace: "STRING_VALUE",
 *     MetricName: "STRING_VALUE",
 *     Dimensions: [
 *       {
 *         Name: "STRING_VALUE", // required
 *         Value: "STRING_VALUE", // required
 *       },
 *     ],
 *     Stat: "STRING_VALUE",
 *   },
 *   MetricMathAnomalyDetector: { // MetricMathAnomalyDetector
 *     MetricDataQueries: [ // MetricDataQueries
 *       { // MetricDataQuery
 *         Id: "STRING_VALUE", // required
 *         MetricStat: { // MetricStat
 *           Metric: { // Metric
 *             Namespace: "STRING_VALUE",
 *             MetricName: "STRING_VALUE",
 *             Dimensions: "<Dimensions>",
 *           },
 *           Period: Number("int"), // required
 *           Stat: "STRING_VALUE", // required
 *           Unit: "Seconds" || "Microseconds" || "Milliseconds" || "Bytes" || "Kilobytes" || "Megabytes" || "Gigabytes" || "Terabytes" || "Bits" || "Kilobits" || "Megabits" || "Gigabits" || "Terabits" || "Percent" || "Count" || "Bytes/Second" || "Kilobytes/Second" || "Megabytes/Second" || "Gigabytes/Second" || "Terabytes/Second" || "Bits/Second" || "Kilobits/Second" || "Megabits/Second" || "Gigabits/Second" || "Terabits/Second" || "Count/Second" || "None",
 *         },
 *         Expression: "STRING_VALUE",
 *         Label: "STRING_VALUE",
 *         ReturnData: true || false,
 *         Period: Number("int"),
 *         AccountId: "STRING_VALUE",
 *       },
 *     ],
 *   },
 * };
 * const command = new PutAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutAnomalyDetectorCommandInput - {@link PutAnomalyDetectorCommandInput}
 * @returns {@link PutAnomalyDetectorCommandOutput}
 * @see {@link PutAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link PutAnomalyDetectorCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for CloudWatchClient's `config` shape.
 *
 * @throws {@link InternalServiceFault} (server fault)
 *  <p>Request processing has failed due to some unknown error, exception, or failure.</p>
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Parameters were used together that cannot be used together.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value of an input parameter is bad or out-of-range.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The operation exceeded one or more limits.</p>
 *
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class PutAnomalyDetectorCommand extends $Command<
  PutAnomalyDetectorCommandInput,
  PutAnomalyDetectorCommandOutput,
  CloudWatchClientResolvedConfig
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
  constructor(readonly input: PutAnomalyDetectorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PutAnomalyDetectorCommandInput, PutAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PutAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "PutAnomalyDetectorCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "GraniteServiceVersion20100801",
        operation: "PutAnomalyDetector",
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
  private serialize(input: PutAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PutAnomalyDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutAnomalyDetectorCommandOutput> {
    return de_PutAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
