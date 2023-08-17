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

import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteAnomalyDetectorInput, DeleteAnomalyDetectorOutput } from "../models/models_0";
import { de_DeleteAnomalyDetectorCommand, se_DeleteAnomalyDetectorCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandInput extends DeleteAnomalyDetectorInput {}
/**
 * @public
 *
 * The output of {@link DeleteAnomalyDetectorCommand}.
 */
export interface DeleteAnomalyDetectorCommandOutput extends DeleteAnomalyDetectorOutput, __MetadataBearer {}

/**
 * @public
 * <p>
 * 			Deletes the specified anomaly detection model
 * 			from your account.
 * 			For more information
 * 			about
 * 			how to delete an anomaly detection model,
 * 			see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Create_Anomaly_Detection_Alarm.html#Delete_Anomaly_Detection_Model">Deleting an anomaly detection model</a>
 * 			in the <i>CloudWatch User Guide</i>.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DeleteAnomalyDetectorCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DeleteAnomalyDetectorCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const input = { // DeleteAnomalyDetectorInput
 *   Namespace: "STRING_VALUE",
 *   MetricName: "STRING_VALUE",
 *   Dimensions: [ // Dimensions
 *     { // Dimension
 *       Name: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   Stat: "STRING_VALUE",
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
 * const command = new DeleteAnomalyDetectorCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAnomalyDetectorCommandInput - {@link DeleteAnomalyDetectorCommandInput}
 * @returns {@link DeleteAnomalyDetectorCommandOutput}
 * @see {@link DeleteAnomalyDetectorCommandInput} for command's `input` shape.
 * @see {@link DeleteAnomalyDetectorCommandOutput} for command's `response` shape.
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
 * @throws {@link MissingRequiredParameterException} (client fault)
 *  <p>An input parameter that is required is missing.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The named resource does not exist.</p>
 *
 * @throws {@link CloudWatchServiceException}
 * <p>Base exception class for all service exceptions from CloudWatch service.</p>
 *
 */
export class DeleteAnomalyDetectorCommand extends $Command<
  DeleteAnomalyDetectorCommandInput,
  DeleteAnomalyDetectorCommandOutput,
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
  constructor(readonly input: DeleteAnomalyDetectorCommandInput) {
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
  ): Handler<DeleteAnomalyDetectorCommandInput, DeleteAnomalyDetectorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteAnomalyDetectorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteAnomalyDetectorCommand";
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
  private serialize(input: DeleteAnomalyDetectorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteAnomalyDetectorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteAnomalyDetectorCommandOutput> {
    return de_DeleteAnomalyDetectorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
