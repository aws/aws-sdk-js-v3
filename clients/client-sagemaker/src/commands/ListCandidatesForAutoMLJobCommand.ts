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

import { ListCandidatesForAutoMLJobRequest, ListCandidatesForAutoMLJobResponse } from "../models/models_3";
import { de_ListCandidatesForAutoMLJobCommand, se_ListCandidatesForAutoMLJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListCandidatesForAutoMLJobCommand}.
 */
export interface ListCandidatesForAutoMLJobCommandInput extends ListCandidatesForAutoMLJobRequest {}
/**
 * @public
 *
 * The output of {@link ListCandidatesForAutoMLJobCommand}.
 */
export interface ListCandidatesForAutoMLJobCommandOutput extends ListCandidatesForAutoMLJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>List the candidates created for the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListCandidatesForAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListCandidatesForAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // ListCandidatesForAutoMLJobRequest
 *   AutoMLJobName: "STRING_VALUE", // required
 *   StatusEquals: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping",
 *   CandidateNameEquals: "STRING_VALUE",
 *   SortOrder: "Ascending" || "Descending",
 *   SortBy: "CreationTime" || "Status" || "FinalObjectiveMetricValue",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListCandidatesForAutoMLJobCommand(input);
 * const response = await client.send(command);
 * // { // ListCandidatesForAutoMLJobResponse
 * //   Candidates: [ // AutoMLCandidates // required
 * //     { // AutoMLCandidate
 * //       CandidateName: "STRING_VALUE", // required
 * //       FinalAutoMLJobObjectiveMetric: { // FinalAutoMLJobObjectiveMetric
 * //         Type: "Maximize" || "Minimize",
 * //         MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 * //         Value: Number("float"), // required
 * //         StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //       },
 * //       ObjectiveStatus: "Succeeded" || "Pending" || "Failed", // required
 * //       CandidateSteps: [ // CandidateSteps // required
 * //         { // AutoMLCandidateStep
 * //           CandidateStepType: "AWS::SageMaker::TrainingJob" || "AWS::SageMaker::TransformJob" || "AWS::SageMaker::ProcessingJob", // required
 * //           CandidateStepArn: "STRING_VALUE", // required
 * //           CandidateStepName: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       CandidateStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //       InferenceContainers: [ // AutoMLContainerDefinitions
 * //         { // AutoMLContainerDefinition
 * //           Image: "STRING_VALUE", // required
 * //           ModelDataUrl: "STRING_VALUE", // required
 * //           Environment: { // EnvironmentMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       CreationTime: new Date("TIMESTAMP"), // required
 * //       EndTime: new Date("TIMESTAMP"),
 * //       LastModifiedTime: new Date("TIMESTAMP"), // required
 * //       FailureReason: "STRING_VALUE",
 * //       CandidateProperties: { // CandidateProperties
 * //         CandidateArtifactLocations: { // CandidateArtifactLocations
 * //           Explainability: "STRING_VALUE", // required
 * //           ModelInsights: "STRING_VALUE",
 * //           BacktestResults: "STRING_VALUE",
 * //         },
 * //         CandidateMetrics: [ // MetricDataList
 * //           { // MetricDatum
 * //             MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //             Value: Number("float"),
 * //             Set: "Train" || "Validation" || "Test",
 * //             StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "LogLoss" || "InferenceLatency" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //           },
 * //         ],
 * //       },
 * //       InferenceContainerDefinitions: { // AutoMLInferenceContainerDefinitions
 * //         "<keys>": [
 * //           {
 * //             Image: "STRING_VALUE", // required
 * //             ModelDataUrl: "STRING_VALUE", // required
 * //             Environment: {
 * //               "<keys>": "STRING_VALUE",
 * //             },
 * //           },
 * //         ],
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCandidatesForAutoMLJobCommandInput - {@link ListCandidatesForAutoMLJobCommandInput}
 * @returns {@link ListCandidatesForAutoMLJobCommandOutput}
 * @see {@link ListCandidatesForAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link ListCandidatesForAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class ListCandidatesForAutoMLJobCommand extends $Command<
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
  SageMakerClientResolvedConfig
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
  constructor(readonly input: ListCandidatesForAutoMLJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListCandidatesForAutoMLJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "ListCandidatesForAutoMLJobCommand";
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
  private serialize(input: ListCandidatesForAutoMLJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListCandidatesForAutoMLJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCandidatesForAutoMLJobCommandOutput> {
    return de_ListCandidatesForAutoMLJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
