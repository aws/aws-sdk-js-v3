// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateAutoMLJobV2Request, CreateAutoMLJobV2Response } from "../models/models_0";
import { de_CreateAutoMLJobV2Command, se_CreateAutoMLJobV2Command } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates an Autopilot job also referred to as Autopilot experiment or AutoML job V2.</p>
 *          <note>
 *             <p>
 *                <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJobV2.html">CreateAutoMLJobV2</a> and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJobV2.html">DescribeAutoMLJobV2</a> are new versions of <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateAutoMLJob.html">CreateAutoMLJob</a>
 *             and <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a> which offer backward compatibility.</p>
 *             <p>
 *                <code>CreateAutoMLJobV2</code> can manage tabular problem types identical to those of
 *             its previous version <code>CreateAutoMLJob</code>, as well as time-series forecasting,
 *             non-tabular problem types such as image or text classification, and text generation
 *             (LLMs fine-tuning).</p>
 *             <p>Find guidelines about how to migrate a <code>CreateAutoMLJob</code> to
 *                <code>CreateAutoMLJobV2</code> in <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development-create-experiment.html#autopilot-create-experiment-api-migrate-v1-v2">Migrate a CreateAutoMLJob to CreateAutoMLJobV2</a>.</p>
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
 *       HolidayConfig: [ // HolidayConfig
 *         { // HolidayConfigAttributes
 *           CountryCode: "STRING_VALUE",
 *         },
 *       ],
 *       CandidateGenerationConfig: { // CandidateGenerationConfig
 *         AlgorithmsConfig: [ // AutoMLAlgorithmsConfig
 *           { // AutoMLAlgorithmConfig
 *             AutoMLAlgorithms: [ // AutoMLAlgorithms // required
 *               "xgboost" || "linear-learner" || "mlp" || "lightgbm" || "catboost" || "randomforest" || "extra-trees" || "nn-torch" || "fastai" || "cnn-qr" || "deepar" || "prophet" || "npts" || "arima" || "ets",
 *             ],
 *           },
 *         ],
 *       },
 *     },
 *     TabularJobConfig: { // TabularJobConfig
 *       CandidateGenerationConfig: {
 *         AlgorithmsConfig: [
 *           {
 *             AutoMLAlgorithms: [ // required
 *               "xgboost" || "linear-learner" || "mlp" || "lightgbm" || "catboost" || "randomforest" || "extra-trees" || "nn-torch" || "fastai" || "cnn-qr" || "deepar" || "prophet" || "npts" || "arima" || "ets",
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
 *     TextGenerationJobConfig: { // TextGenerationJobConfig
 *       CompletionCriteria: {
 *         MaxCandidates: Number("int"),
 *         MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *         MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *       },
 *       BaseModelName: "STRING_VALUE",
 *       TextGenerationHyperParameters: { // TextGenerationHyperParameters
 *         "<keys>": "STRING_VALUE",
 *       },
 *       ModelAccessConfig: { // ModelAccessConfig
 *         AcceptEula: true || false, // required
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
 *     MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "BalancedAccuracy" || "R2" || "Recall" || "RecallMacro" || "Precision" || "PrecisionMacro" || "MAE" || "MAPE" || "MASE" || "WAPE" || "AverageWeightedQuantileLoss", // required
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
 * @public
 */
export class CreateAutoMLJobV2Command extends $Command
  .classBuilder<
    CreateAutoMLJobV2CommandInput,
    CreateAutoMLJobV2CommandOutput,
    SageMakerClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SageMakerClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMaker", "CreateAutoMLJobV2", {})
  .n("SageMakerClient", "CreateAutoMLJobV2Command")
  .f(void 0, void 0)
  .ser(se_CreateAutoMLJobV2Command)
  .de(de_CreateAutoMLJobV2Command)
  .build() {}
