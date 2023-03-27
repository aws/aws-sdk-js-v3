// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CreateAutoMLJobRequest, CreateAutoMLJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_1CreateAutoMLJobCommand,
  serializeAws_json1_1CreateAutoMLJobCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 *
 * The input for {@link CreateAutoMLJobCommand}.
 */
export interface CreateAutoMLJobCommandInput extends CreateAutoMLJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateAutoMLJobCommand}.
 */
export interface CreateAutoMLJobCommandOutput extends CreateAutoMLJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates an Autopilot job.</p>
 *          <p>Find the best-performing model after you run an Autopilot job by calling <code>
 *                <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeAutoMLJob.html">DescribeAutoMLJob</a>
 *             </code>.</p>
 *          <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model
 *             Development with Amazon SageMaker Autopilot</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = {
 *   AutoMLJobName: "STRING_VALUE", // required
 *   InputDataConfig: [ // required
 *     {
 *       DataSource: {
 *         S3DataSource: {
 *           S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *           S3Uri: "STRING_VALUE", // required
 *         },
 *       },
 *       CompressionType: "None" || "Gzip",
 *       TargetAttributeName: "STRING_VALUE", // required
 *       ContentType: "STRING_VALUE",
 *       ChannelType: "training" || "validation",
 *     },
 *   ],
 *   OutputDataConfig: {
 *     KmsKeyId: "STRING_VALUE",
 *     S3OutputPath: "STRING_VALUE", // required
 *   },
 *   ProblemType: "BinaryClassification" || "MulticlassClassification" || "Regression",
 *   AutoMLJobObjective: {
 *     MetricName: "Accuracy" || "MSE" || "F1" || "F1macro" || "AUC" || "RMSE" || "MAE" || "R2" || "BalancedAccuracy" || "Precision" || "PrecisionMacro" || "Recall" || "RecallMacro", // required
 *   },
 *   AutoMLJobConfig: {
 *     CompletionCriteria: {
 *       MaxCandidates: Number("int"),
 *       MaxRuntimePerTrainingJobInSeconds: Number("int"),
 *       MaxAutoMLJobRuntimeInSeconds: Number("int"),
 *     },
 *     SecurityConfig: {
 *       VolumeKmsKeyId: "STRING_VALUE",
 *       EnableInterContainerTrafficEncryption: true || false,
 *       VpcConfig: {
 *         SecurityGroupIds: [ // required
 *           "STRING_VALUE",
 *         ],
 *         Subnets: [ // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *     DataSplitConfig: {
 *       ValidationFraction: Number("float"),
 *     },
 *     CandidateGenerationConfig: {
 *       FeatureSpecificationS3Uri: "STRING_VALUE",
 *       AlgorithmsConfig: [
 *         {
 *           AutoMLAlgorithms: [ // required
 *             "xgboost" || "linear-learner" || "mlp" || "lightgbm" || "catboost" || "randomforest" || "extra-trees" || "nn-torch" || "fastai",
 *           ],
 *         },
 *       ],
 *     },
 *     Mode: "AUTO" || "ENSEMBLING" || "HYPERPARAMETER_TUNING",
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   GenerateCandidateDefinitionsOnly: true || false,
 *   Tags: [
 *     {
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ModelDeployConfig: {
 *     AutoGenerateEndpointName: true || false,
 *     EndpointName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param CreateAutoMLJobCommandInput - {@link CreateAutoMLJobCommandInput}
 * @returns {@link CreateAutoMLJobCommandOutput}
 * @see {@link CreateAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link CreateAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 *
 */
export class CreateAutoMLJobCommand extends $Command<
  CreateAutoMLJobCommandInput,
  CreateAutoMLJobCommandOutput,
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
  constructor(readonly input: CreateAutoMLJobCommandInput) {
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
  ): Handler<CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateAutoMLJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateAutoMLJobCommand";
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
  private serialize(input: CreateAutoMLJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateAutoMLJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateAutoMLJobCommandOutput> {
    return deserializeAws_json1_1CreateAutoMLJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
