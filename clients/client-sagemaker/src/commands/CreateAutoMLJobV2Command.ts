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

import { CreateAutoMLJobV2Request, CreateAutoMLJobV2Response } from "../models/models_0";
import { de_CreateAutoMLJobV2Command, se_CreateAutoMLJobV2Command } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateAutoMLJobV2Command}.
 */
export interface CreateAutoMLJobV2CommandInput extends CreateAutoMLJobV2Request {}
/**
 * @public
 *
 * The output of {@link CreateAutoMLJobV2Command}.
 */
export interface CreateAutoMLJobV2CommandOutput extends CreateAutoMLJobV2Response, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Autopilot job also referred to as Autopilot experiment or AutoML job V2.</p>
 *          <note>
 *             <p>
 *                <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html">CreateAutoMLJobV2</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a> are new versions of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>
 *             and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a> which offer backward compatibility.</p>
 *             <p>
 *                <code>CreateAutoMLJobV2</code> can manage tabular problem types identical to those of
 *             its previous version <code>CreateAutoMLJob</code>, as well as non-tabular problem types
 *             such as image or text classification.</p>
 *             <p>Find guidelines about how to migrate a <code>CreateAutoMLJob</code> to
 *                <code>CreateAutoMLJobV2</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development-create-experiment-api.html#autopilot-create-experiment-api-migrate-v1-v2">Migrate a CreateAutoMLJob to CreateAutoMLJobV2</a>.</p>
 *          </note>
 *          <p>For the list of available problem types supported by <code>CreateAutoMLJobV2</code>, see
 *             <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AutoMLProblemTypeConfig.html">AutoMLProblemTypeConfig</a>.</p>
 *          <p>You can find the best-performing model after you run an AutoML job V2 by calling <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAutoMLJobV2Command } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAutoMLJobV2Command } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateAutoMLJobV2Request
 *   AutoMLJobName: "STRING_VALUE", // required
 *   AutoMLJobInputDataConfig: [ // AutoMLJobInputDataConfig // required
 *     { // AutoMLJobChannel
 *       ChannelType: "training" || "validation",
 *       ContentType: "STRING_VALUE",
 *       CompressionType: "None" || "Gzip",
 *       DataSource: { // AutoMLDataSource
 *         S3DataSource: { // AutoMLS3DataSource
 *           S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *           S3Uri: "STRING_VALUE", // required
 *         },
 *       },
 *     },
 *   ],
 *   OutputDataConfig: { // AutoMLOutputDataConfig
 *     KmsKeyId: "STRING_VALUE",
 *     S3OutputPath: "STRING_VALUE", // required
 *   },
 *   AutoMLProblemTypeConfig: { // AutoMLProblemTypeConfig Union: only one key present
 *     ImageClassificationJobConfig: { // ImageClassificationJobConfig
 *       CompletionCriteria: { // AutoMLJobCompletionCriteria
 *         MaxCandidates: Number("int"),
 *         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *       },
 *     },
 *     TextClassificationJobConfig: { // TextClassificationJobConfig
 *       CompletionCriteria: {
 *         MaxCandidates: Number("int"),
 *         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *       },
 *       ContentColumn: "STRING_VALUE", // required
 *       TargetLabelColumn: "STRING_VALUE", // required
 *     },
 *     TabularJobConfig: { // TabularJobConfig
 *       CandidateGenerationConfig: { // CandidateGenerationConfig
 *         AlgorithmsConfig: [ // AutoMLAlgorithmsConfig
 *           { // AutoMLAlgorithmConfig
 *             AutoMLAlgorithms: [ // AutoMLAlgorithms // required
 *               "xgboost" || "linear-learner" || "mlp" || "lightgbm" || "catboost" || "randomforest" || "extra-trees" || "nn-torch" || "fastai",
 *             ],
 *           },
 *         ],
 *       },
 *       CompletionCriteria: {
 *         MaxCandidates: Number("int"),
 *         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *       },
 *       FeatureSpecificationS3Uri: "STRING_VALUE",
 *       Mode: "AUTO" || "ENSEMBLING" || "HYPERPARAMETER_TUNING",
 *       GenerateCandidateDefinitionsOnly: true || false,
 *       ProblemType: "BinaryClassification" || "MulticlassClassification" || "Regression",
 *       TargetAttributeName: "STRING_VALUE", // required
 *       SampleWeightAttributeName: "STRING_VALUE",
 *     },
 *     TimeSeriesForecastingJobConfig: { // TimeSeriesForecastingJobConfig
 *       FeatureSpecificationS3Uri: "STRING_VALUE",
 *       CompletionCriteria: {
 *         MaxCandidates: Number("int"),
 *         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *       },
 *       ForecastFrequency: "STRING_VALUE", // required
 *       ForecastHorizon: Number("int"), // required
 *       ForecastQuantiles: [ // ForecastQuantiles
 *         "STRING_VALUE",
 *       ],
 *       Transformations: { // TimeSeriesTransformations
 *         Filling: { // FillingTransformations
 *           "<keys>": { // FillingTransformationMap
 *             "<keys>": "STRING_VALUE",
 *           },
 *         },
 *         Aggregation: { // AggregationTransformations
 *           "<keys>": "sum" || "avg" || "first" || "min" || "max",
 *         },
 *       },
 *       TimeSeriesConfig: { // TimeSeriesConfig
 *         TargetAttributeName: "STRING_VALUE", // required
 *         TimestampAttributeName: "STRING_VALUE", // required
 *         ItemIdentifierAttributeName: "STRING_VALUE", // required
 *         GroupingAttributeNames: [ // GroupingAttributeNames
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   SecurityConfig: { // AutoMLSecurityConfig
 *     VolumeKmsKeyId: "STRING_VALUE",
 *     EnableInterContainerTrafficEncryption: true || false,
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   AutoMLJobObjective: { // AutoMLJobObjective
 *     MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
 *   },
 *   ModelDeployConfig: { // ModelDeployConfig
 *     AutoGenerateEndpointName: true || false,
 *     EndpointName: "STRING_VALUE",
 *   },
 *   DataSplitConfig: { // AutoMLDataSplitConfig
 *     ValidationFraction: Number("float"),
 *   },
 * };
 * const command = new CreateAutoMLJobV2Command(input);
 * const response = await client.send(command);
 * // { // CreateAutoMLJobV2Response
 * //   AutoMLJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateAutoMLJobV2CommandInput - {@link CreateAutoMLJobV2CommandInput}
 * @returns {@link CreateAutoMLJobV2CommandOutput}
 * @see {@link CreateAutoMLJobV2CommandInput} for command's `input` shape.
 * @see {@link CreateAutoMLJobV2CommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateAutoMLJobV2Command extends $Command<
  CreateAutoMLJobV2CommandInput,
  CreateAutoMLJobV2CommandOutput,
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
  constructor(readonly input: CreateAutoMLJobV2CommandInput) {
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
  ): Handler<CreateAutoMLJobV2CommandInput, CreateAutoMLJobV2CommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAutoMLJobV2Command.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateAutoMLJobV2Command";
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
  private serialize(input: CreateAutoMLJobV2CommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateAutoMLJobV2Command(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoMLJobV2CommandOutput> {
    return de_CreateAutoMLJobV2Command(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
