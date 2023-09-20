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

import { FraudDetectorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FraudDetectorClient";
import { DescribeModelVersionsRequest, DescribeModelVersionsResult } from "../models/models_0";
import { de_DescribeModelVersionsCommand, se_DescribeModelVersionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeModelVersionsCommand}.
 */
export interface DescribeModelVersionsCommandInput extends DescribeModelVersionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeModelVersionsCommand}.
 */
export interface DescribeModelVersionsCommandOutput extends DescribeModelVersionsResult, __MetadataBearer {}

/**
 * @public
 * <p>Gets all of the model versions for the specified model type or for the specified model type and model ID. You can also get details for a single, specified model version. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FraudDetectorClient, DescribeModelVersionsCommand } from "@aws-sdk/client-frauddetector"; // ES Modules import
 * // const { FraudDetectorClient, DescribeModelVersionsCommand } = require("@aws-sdk/client-frauddetector"); // CommonJS import
 * const client = new FraudDetectorClient(config);
 * const input = { // DescribeModelVersionsRequest
 *   modelId: "STRING_VALUE",
 *   modelVersionNumber: "STRING_VALUE",
 *   modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new DescribeModelVersionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeModelVersionsResult
 * //   modelVersionDetails: [ // modelVersionDetailList
 * //     { // ModelVersionDetail
 * //       modelId: "STRING_VALUE",
 * //       modelType: "ONLINE_FRAUD_INSIGHTS" || "TRANSACTION_FRAUD_INSIGHTS" || "ACCOUNT_TAKEOVER_INSIGHTS",
 * //       modelVersionNumber: "STRING_VALUE",
 * //       status: "STRING_VALUE",
 * //       trainingDataSource: "EXTERNAL_EVENTS" || "INGESTED_EVENTS",
 * //       trainingDataSchema: { // TrainingDataSchema
 * //         modelVariables: [ // ListOfStrings // required
 * //           "STRING_VALUE",
 * //         ],
 * //         labelSchema: { // LabelSchema
 * //           labelMapper: { // labelMapper
 * //             "<keys>": [
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //           unlabeledEventsTreatment: "IGNORE" || "FRAUD" || "LEGIT" || "AUTO",
 * //         },
 * //       },
 * //       externalEventsDetail: { // ExternalEventsDetail
 * //         dataLocation: "STRING_VALUE", // required
 * //         dataAccessRoleArn: "STRING_VALUE", // required
 * //       },
 * //       ingestedEventsDetail: { // IngestedEventsDetail
 * //         ingestedEventsTimeWindow: { // IngestedEventsTimeWindow
 * //           startTime: "STRING_VALUE", // required
 * //           endTime: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       trainingResult: { // TrainingResult
 * //         dataValidationMetrics: { // DataValidationMetrics
 * //           fileLevelMessages: [ // fileValidationMessageList
 * //             { // FileValidationMessage
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fieldLevelMessages: [ // fieldValidationMessageList
 * //             { // FieldValidationMessage
 * //               fieldName: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         trainingMetrics: { // TrainingMetrics
 * //           auc: Number("float"),
 * //           metricDataPoints: [ // metricDataPointsList
 * //             { // MetricDataPoint
 * //               fpr: Number("float"),
 * //               precision: Number("float"),
 * //               tpr: Number("float"),
 * //               threshold: Number("float"),
 * //             },
 * //           ],
 * //         },
 * //         variableImportanceMetrics: { // VariableImportanceMetrics
 * //           logOddsMetrics: [ // ListOfLogOddsMetrics
 * //             { // LogOddsMetric
 * //               variableName: "STRING_VALUE", // required
 * //               variableType: "STRING_VALUE", // required
 * //               variableImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //       lastUpdatedTime: "STRING_VALUE",
 * //       createdTime: "STRING_VALUE",
 * //       arn: "STRING_VALUE",
 * //       trainingResultV2: { // TrainingResultV2
 * //         dataValidationMetrics: {
 * //           fileLevelMessages: [
 * //             {
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           fieldLevelMessages: [
 * //             {
 * //               fieldName: "STRING_VALUE",
 * //               identifier: "STRING_VALUE",
 * //               title: "STRING_VALUE",
 * //               content: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //         },
 * //         trainingMetricsV2: { // TrainingMetricsV2
 * //           ofi: { // OFITrainingMetricsValue
 * //             metricDataPoints: [ // OFIMetricDataPointsList
 * //               { // OFIMetricDataPoint
 * //                 fpr: Number("float"),
 * //                 precision: Number("float"),
 * //                 tpr: Number("float"),
 * //                 threshold: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // OFIModelPerformance
 * //               auc: Number("float"),
 * //               uncertaintyRange: { // UncertaintyRange
 * //                 lowerBoundValue: Number("float"), // required
 * //                 upperBoundValue: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //           tfi: { // TFITrainingMetricsValue
 * //             metricDataPoints: [ // TFIMetricDataPointsList
 * //               { // TFIMetricDataPoint
 * //                 fpr: Number("float"),
 * //                 precision: Number("float"),
 * //                 tpr: Number("float"),
 * //                 threshold: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // TFIModelPerformance
 * //               auc: Number("float"),
 * //               uncertaintyRange: {
 * //                 lowerBoundValue: Number("float"), // required
 * //                 upperBoundValue: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //           ati: { // ATITrainingMetricsValue
 * //             metricDataPoints: [ // ATIMetricDataPointsList
 * //               { // ATIMetricDataPoint
 * //                 cr: Number("float"),
 * //                 adr: Number("float"),
 * //                 threshold: Number("float"),
 * //                 atodr: Number("float"),
 * //               },
 * //             ],
 * //             modelPerformance: { // ATIModelPerformance
 * //               asi: Number("float"),
 * //             },
 * //           },
 * //         },
 * //         variableImportanceMetrics: {
 * //           logOddsMetrics: [
 * //             {
 * //               variableName: "STRING_VALUE", // required
 * //               variableType: "STRING_VALUE", // required
 * //               variableImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //         aggregatedVariablesImportanceMetrics: { // AggregatedVariablesImportanceMetrics
 * //           logOddsMetrics: [ // ListOfAggregatedLogOddsMetrics
 * //             { // AggregatedLogOddsMetric
 * //               variableNames: "<ListOfStrings>", // required
 * //               aggregatedVariablesImportance: Number("float"), // required
 * //             },
 * //           ],
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeModelVersionsCommandInput - {@link DescribeModelVersionsCommandInput}
 * @returns {@link DescribeModelVersionsCommandOutput}
 * @see {@link DescribeModelVersionsCommandInput} for command's `input` shape.
 * @see {@link DescribeModelVersionsCommandOutput} for command's `response` shape.
 * @see {@link FraudDetectorClientResolvedConfig | config} for FraudDetectorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>An exception indicating Amazon Fraud Detector does not have the needed permissions. This can occur if you submit a request, such as <code>PutExternalModel</code>, that specifies a role that is not in your account.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An exception indicating an internal server error.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>An exception indicating the specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>An exception indicating a throttling error.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>An exception indicating a specified value is not allowed.</p>
 *
 * @throws {@link FraudDetectorServiceException}
 * <p>Base exception class for all service exceptions from FraudDetector service.</p>
 *
 */
export class DescribeModelVersionsCommand extends $Command<
  DescribeModelVersionsCommandInput,
  DescribeModelVersionsCommandOutput,
  FraudDetectorClientResolvedConfig
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
  constructor(readonly input: DescribeModelVersionsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FraudDetectorClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeModelVersionsCommandInput, DescribeModelVersionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeModelVersionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FraudDetectorClient";
    const commandName = "DescribeModelVersionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHawksNestServiceFacade",
        operation: "DescribeModelVersions",
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
  private serialize(input: DescribeModelVersionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeModelVersionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeModelVersionsCommandOutput> {
    return de_DescribeModelVersionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
