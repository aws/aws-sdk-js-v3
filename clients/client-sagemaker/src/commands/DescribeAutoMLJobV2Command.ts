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

import { DescribeAutoMLJobV2Request, DescribeAutoMLJobV2Response } from "../models/models_2";
import { de_DescribeAutoMLJobV2Command, se_DescribeAutoMLJobV2Command } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DescribeAutoMLJobV2Command}.
 */
export interface DescribeAutoMLJobV2CommandInput extends DescribeAutoMLJobV2Request {}
/**
 * @public
 *
 * The output of {@link DescribeAutoMLJobV2Command}.
 */
export interface DescribeAutoMLJobV2CommandOutput extends DescribeAutoMLJobV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Returns information about an AutoML job created by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html">CreateAutoMLJobV2</a>
 *          or <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DescribeAutoMLJobV2Command } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DescribeAutoMLJobV2Command } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // DescribeAutoMLJobV2Request
 *   AutoMLJobName: "STRING_VALUE", // required
 * };
 * const command = new DescribeAutoMLJobV2Command(input);
 * const response = await client.send(command);
 * // { // DescribeAutoMLJobV2Response
 * //   AutoMLJobName: "STRING_VALUE", // required
 * //   AutoMLJobArn: "STRING_VALUE", // required
 * //   AutoMLJobInputDataConfig: [ // AutoMLJobInputDataConfig // required
 * //     { // AutoMLJobChannel
 * //       ChannelType: "training" || "validation",
 * //       ContentType: "STRING_VALUE",
 * //       CompressionType: "None" || "Gzip",
 * //       DataSource: { // AutoMLDataSource
 * //         S3DataSource: { // AutoMLS3DataSource
 * //           S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 * //           S3Uri: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   OutputDataConfig: { // AutoMLOutputDataConfig
 * //     KmsKeyId: "STRING_VALUE",
 * //     S3OutputPath: "STRING_VALUE", // required
 * //   },
 * //   RoleArn: "STRING_VALUE", // required
 * //   AutoMLJobObjective: { // AutoMLJobObjective
 * //     MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 * //   },
 * //   AutoMLProblemTypeConfig: { // AutoMLProblemTypeConfig Union: only one key present
 * //     ImageClassificationJobConfig: { // ImageClassificationJobConfig
 * //       CompletionCriteria: { // AutoMLJobCompletionCriteria
 * //         MaxCandidates: Number("int"),
 * //         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 * //         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 * //       },
 * //     },
 * //     TextClassificationJobConfig: { // TextClassificationJobConfig
 * //       CompletionCriteria: {
 * //         MaxCandidates: Number("int"),
 * //         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 * //         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 * //       },
 * //       ContentColumn: "STRING_VALUE", // required
 * //       TargetLabelColumn: "STRING_VALUE", // required
 * //     },
 * //     TabularJobConfig: { // TabularJobConfig
 * //       CandidateGenerationConfig: { // CandidateGenerationConfig
 * //         AlgorithmsConfig: [ // AutoMLAlgorithmsConfig
 * //           { // AutoMLAlgorithmConfig
 * //             AutoMLAlgorithms: [ // AutoMLAlgorithms // required
 * //               "xgboost" || "linear-learner" || "mlp" || "lightgbm" || "catboost" || "randomforest" || "extra-trees" || "nn-torch" || "fastai",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       CompletionCriteria: {
 * //         MaxCandidates: Number("int"),
 * //         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 * //         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 * //       },
 * //       FeatureSpecificationS3Uri: "STRING_VALUE",
 * //       Mode: "AUTO" || "ENSEMBLING" || "HYPERPARAMETER_TUNING",
 * //       GenerateCandidateDefinitionsOnly: true || false,
 * //       ProblemType: "BinaryClassification" || "MulticlassClassification" || "Regression",
 * //       TargetAttributeName: "STRING_VALUE", // required
 * //       SampleWeightAttributeName: "STRING_VALUE",
 * //     },
 * //     TimeSeriesForecastingJobConfig: { // TimeSeriesForecastingJobConfig
 * //       FeatureSpecificationS3Uri: "STRING_VALUE",
 * //       CompletionCriteria: {
 * //         MaxCandidates: Number("int"),
 * //         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 * //         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 * //       },
 * //       ForecastFrequency: "STRING_VALUE", // required
 * //       ForecastHorizon: Number("int"), // required
 * //       ForecastQuantiles: [ // ForecastQuantiles
 * //         "STRING_VALUE",
 * //       ],
 * //       Transformations: { // TimeSeriesTransformations
 * //         Filling: { // FillingTransformations
 * //           "<keys>": { // FillingTransformationMap
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //         Aggregation: { // AggregationTransformations
 * //           "<keys>": "sum" || "avg" || "first" || "min" || "max",
 * //         },
 * //       },
 * //       TimeSeriesConfig: { // TimeSeriesConfig
 * //         TargetAttributeName: "STRING_VALUE", // required
 * //         TimestampAttributeName: "STRING_VALUE", // required
 * //         ItemIdentifierAttributeName: "STRING_VALUE", // required
 * //         GroupingAttributeNames: [ // GroupingAttributeNames
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       HolidayConfig: [ // HolidayConfig
 * //         { // HolidayConfigAttributes
 * //           CountryCode: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   EndTime: new Date("TIMESTAMP"),
 * //   LastModifiedTime: new Date("TIMESTAMP"), // required
 * //   FailureReason: "STRING_VALUE",
 * //   PartialFailureReasons: [ // AutoMLPartialFailureReasons
 * //     { // AutoMLPartialFailureReason
 * //       PartialFailureMessage: "STRING_VALUE",
 * //     },
 * //   ],
 * //   BestCandidate: { // AutoMLCandidate
 * //     CandidateName: "STRING_VALUE", // required
 * //     FinalAutoMLJobObjectiveMetric: { // FinalAutoMLJobObjectiveMetric
 * //       Type: "Maximize" || "Minimize",
 * //       MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 * //       Value: Number("float"), // required
 * //       StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //     },
 * //     ObjectiveStatus: "Succeeded" || "Pending" || "Failed", // required
 * //     CandidateSteps: [ // CandidateSteps // required
 * //       { // AutoMLCandidateStep
 * //         CandidateStepType: "AWS::SageMaker::TrainingJob" || "AWS::SageMaker::TransformJob" || "AWS::SageMaker::ProcessingJob", // required
 * //         CandidateStepArn: "STRING_VALUE", // required
 * //         CandidateStepName: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     CandidateStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //     InferenceContainers: [ // AutoMLContainerDefinitions
 * //       { // AutoMLContainerDefinition
 * //         Image: "STRING_VALUE", // required
 * //         ModelDataUrl: "STRING_VALUE", // required
 * //         Environment: { // EnvironmentMap
 * //           "<keys>": "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     CreationTime: new Date("TIMESTAMP"), // required
 * //     EndTime: new Date("TIMESTAMP"),
 * //     LastModifiedTime: new Date("TIMESTAMP"), // required
 * //     FailureReason: "STRING_VALUE",
 * //     CandidateProperties: { // CandidateProperties
 * //       CandidateArtifactLocations: { // CandidateArtifactLocations
 * //         Explainability: "STRING_VALUE", // required
 * //         ModelInsights: "STRING_VALUE",
 * //         BacktestResults: "STRING_VALUE",
 * //       },
 * //       CandidateMetrics: [ // MetricDataList
 * //         { // MetricDatum
 * //           MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //           Value: Number("float"),
 * //           Set: "Train" || "Validation" || "Test",
 * //           StandardMetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "LogLoss" || "InferenceLatency" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss",
 * //         },
 * //       ],
 * //     },
 * //     InferenceContainerDefinitions: { // AutoMLInferenceContainerDefinitions
 * //       "<keys>": [
 * //         {
 * //           Image: "STRING_VALUE", // required
 * //           ModelDataUrl: "STRING_VALUE", // required
 * //           Environment: {
 * //             "<keys>": "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //     },
 * //   },
 * //   AutoMLJobStatus: "Completed" || "InProgress" || "Failed" || "Stopped" || "Stopping", // required
 * //   AutoMLJobSecondaryStatus: "Starting" || "AnalyzingData" || "FeatureEngineering" || "ModelTuning" || "MaxCandidatesReached" || "Failed" || "Stopped" || "MaxAutoMLJobRuntimeReached" || "Stopping" || "CandidateDefinitionsGenerated" || "GeneratingExplainabilityReport" || "Completed" || "ExplainabilityError" || "DeployingModel" || "ModelDeploymentError" || "GeneratingModelInsightsReport" || "ModelInsightsError" || "TrainingModels" || "PreTraining", // required
 * //   ModelDeployConfig: { // ModelDeployConfig
 * //     AutoGenerateEndpointName: true || false,
 * //     EndpointName: "STRING_VALUE",
 * //   },
 * //   ModelDeployResult: { // ModelDeployResult
 * //     EndpointName: "STRING_VALUE",
 * //   },
 * //   DataSplitConfig: { // AutoMLDataSplitConfig
 * //     ValidationFraction: Number("float"),
 * //   },
 * //   SecurityConfig: { // AutoMLSecurityConfig
 * //     VolumeKmsKeyId: "STRING_VALUE",
 * //     EnableInterContainerTrafficEncryption: true || false,
 * //     VpcConfig: { // VpcConfig
 * //       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 * //         "STRING_VALUE",
 * //       ],
 * //       Subnets: [ // Subnets // required
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   },
 * //   AutoMLJobArtifacts: { // AutoMLJobArtifacts
 * //     CandidateDefinitionNotebookLocation: "STRING_VALUE",
 * //     DataExplorationNotebookLocation: "STRING_VALUE",
 * //   },
 * //   ResolvedAttributes: { // AutoMLResolvedAttributes
 * //     AutoMLJobObjective: {
 * //       MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 * //     },
 * //     CompletionCriteria: {
 * //       MaxCandidates: Number("int"),
 * //       MaxRuntimePerTrainingJobInSeconds: Number("int"),
 * //       MaxAutoMLJobRuntimeInSeconds: Number("int"),
 * //     },
 * //     AutoMLProblemTypeResolvedAttributes: { // AutoMLProblemTypeResolvedAttributes Union: only one key present
 * //       TabularResolvedAttributes: { // TabularResolvedAttributes
 * //         ProblemType: "BinaryClassification" || "MulticlassClassification" || "Regression",
 * //       },
 * //     },
 * //   },
 * //   AutoMLProblemTypeConfigName: "ImageClassification" || "TextClassification" || "Tabular" || "TimeSeriesForecasting",
 * // };
 *
 * ```
 *
 * @param DescribeAutoMLJobV2CommandInput - {@link DescribeAutoMLJobV2CommandInput}
 * @returns {@link DescribeAutoMLJobV2CommandOutput}
 * @see {@link DescribeAutoMLJobV2CommandInput} for command's `input` shape.
 * @see {@link DescribeAutoMLJobV2CommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class DescribeAutoMLJobV2Command extends $Command<
  DescribeAutoMLJobV2CommandInput,
  DescribeAutoMLJobV2CommandOutput,
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
  constructor(readonly input: DescribeAutoMLJobV2CommandInput) {
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
  ): Handler<DescribeAutoMLJobV2CommandInput, DescribeAutoMLJobV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DescribeAutoMLJobV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "DescribeAutoMLJobV2Command";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "DescribeAutoMLJobV2",
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
  private serialize(input: DescribeAutoMLJobV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DescribeAutoMLJobV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeAutoMLJobV2CommandOutput> {
    return de_DescribeAutoMLJobV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
