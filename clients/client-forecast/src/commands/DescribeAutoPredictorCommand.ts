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

import { ForecastClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ForecastClient";
import { DescribeAutoPredictorRequest, DescribeAutoPredictorResponse } from "../models/models_0";
import { de_DescribeAutoPredictorCommand, se_DescribeAutoPredictorCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoPredictorCommand}.
 */
export interface DescribeAutoPredictorCommandInput extends DescribeAutoPredictorRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAutoPredictorCommand}.
 */
export interface DescribeAutoPredictorCommandOutput extends DescribeAutoPredictorResponse, __MetadataBearer {}

/**
 * @public
 * <p>Describes a predictor created using the CreateAutoPredictor operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ForecastClient, DescribeAutoPredictorCommand } from "@aws-sdk/client-forecast"; // ES Modules import
 * // const { ForecastClient, DescribeAutoPredictorCommand } = require("@aws-sdk/client-forecast"); // CommonJS import
 * const client = new ForecastClient(config);
 * const input = { // DescribeAutoPredictorRequest
 *   PredictorArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutoPredictorCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAutoPredictorResponse
 * //   PredictorArn: "STRING_VALUE",
 * //   PredictorName: "STRING_VALUE",
 * //   ForecastHorizon: Number("int"),
 * //   ForecastTypes: [ // ForecastTypes
 * //     "STRING_VALUE",
 * //   ],
 * //   ForecastFrequency: "STRING_VALUE",
 * //   ForecastDimensions: [ // ForecastDimensions
 * //     "STRING_VALUE",
 * //   ],
 * //   DatasetImportJobArns: [ // ArnList
 * //     "STRING_VALUE",
 * //   ],
 * //   DataConfig: { // DataConfig
 * //     DatasetGroupArn: "STRING_VALUE", // required
 * //     AttributeConfigs: [ // AttributeConfigs
 * //       { // AttributeConfig
 * //         AttributeName: "STRING_VALUE", // required
 * //         Transformations: { // Transformations // required
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     AdditionalDatasets: [ // AdditionalDatasets
 * //       { // AdditionalDataset
 * //         Name: "STRING_VALUE", // required
 * //         Configuration: { // Configuration
 * //           "<keys>": [ // Values
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //     ],
 * //   },
 * //   EncryptionConfig: { // EncryptionConfig
 * //     RoleArn: "STRING_VALUE", // required
 * //     KMSKeyArn: "STRING_VALUE", // required
 * //   },
 * //   ReferencePredictorSummary: { // ReferencePredictorSummary
 * //     Arn: "STRING_VALUE",
 * //     State: "Active" || "Deleted",
 * //   },
 * //   EstimatedTimeRemainingInMinutes: Number("long"),
 * //   Status: "STRING_VALUE",
 * //   Message: "STRING_VALUE",
 * //   CreationTime: new Date("TIMESTAMP"),
 * //   LastModificationTime: new Date("TIMESTAMP"),
 * //   OptimizationMetric: "WAPE" || "RMSE" || "AverageWeightedQuantileLoss" || "MASE" || "MAPE",
 * //   ExplainabilityInfo: { // ExplainabilityInfo
 * //     ExplainabilityArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   MonitorInfo: { // MonitorInfo
 * //     MonitorArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //   },
 * //   TimeAlignmentBoundary: { // TimeAlignmentBoundary
 * //     Month: "JANUARY" || "FEBRUARY" || "MARCH" || "APRIL" || "MAY" || "JUNE" || "JULY" || "AUGUST" || "SEPTEMBER" || "OCTOBER" || "NOVEMBER" || "DECEMBER",
 * //     DayOfMonth: Number("int"),
 * //     DayOfWeek: "MONDAY" || "TUESDAY" || "WEDNESDAY" || "THURSDAY" || "FRIDAY" || "SATURDAY" || "SUNDAY",
 * //     Hour: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeAutoPredictorCommandInput - {@link DescribeAutoPredictorCommandInput}
 * @returns {@link DescribeAutoPredictorCommandOutput}
 * @see {@link DescribeAutoPredictorCommandInput} for command's `input` shape.
 * @see {@link DescribeAutoPredictorCommandOutput} for command's `response` shape.
 * @see {@link ForecastClientResolvedConfig | config} for ForecastClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>We can't process the request because it includes an invalid value or a value that exceeds
 *       the valid range.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>We can't find a resource with that Amazon Resource Name (ARN). Check the ARN and try
 *       again.</p>
 *
 * @throws {@link ForecastServiceException}
 * <p>Base exception class for all service exceptions from Forecast service.</p>
 *
 */
export class DescribeAutoPredictorCommand extends $Command<
  DescribeAutoPredictorCommandInput,
  DescribeAutoPredictorCommandOutput,
  ForecastClientResolvedConfig
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
  constructor(readonly input: DescribeAutoPredictorCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ForecastClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeAutoPredictorCommandInput, DescribeAutoPredictorCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoPredictorCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ForecastClient";
    const commandName = "DescribeAutoPredictorCommand";
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
  private serialize(input: DescribeAutoPredictorCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAutoPredictorCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAutoPredictorCommandOutput> {
    return de_DescribeAutoPredictorCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
