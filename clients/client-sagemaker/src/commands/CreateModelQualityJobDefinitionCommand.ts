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

import { CreateModelQualityJobDefinitionRequest, CreateModelQualityJobDefinitionResponse } from "../models/models_1";
import {
  de_CreateModelQualityJobDefinitionCommand,
  se_CreateModelQualityJobDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateModelQualityJobDefinitionCommand}.
 */
export interface CreateModelQualityJobDefinitionCommandInput extends CreateModelQualityJobDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateModelQualityJobDefinitionCommand}.
 */
export interface CreateModelQualityJobDefinitionCommandOutput
  extends CreateModelQualityJobDefinitionResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates a definition for a job that monitors model quality and drift. For information
 *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelQualityJobDefinitionCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelQualityJobDefinitionCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelQualityJobDefinitionRequest
 *   JobDefinitionName: "STRING_VALUE", // required
 *   ModelQualityBaselineConfig: { // ModelQualityBaselineConfig
 *     BaseliningJobName: "STRING_VALUE",
 *     ConstraintsResource: { // MonitoringConstraintsResource
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 *   ModelQualityAppSpecification: { // ModelQualityAppSpecification
 *     ImageUri: "STRING_VALUE", // required
 *     ContainerEntrypoint: [ // ContainerEntrypoint
 *       "STRING_VALUE",
 *     ],
 *     ContainerArguments: [ // MonitoringContainerArguments
 *       "STRING_VALUE",
 *     ],
 *     RecordPreprocessorSourceUri: "STRING_VALUE",
 *     PostAnalyticsProcessorSourceUri: "STRING_VALUE",
 *     ProblemType: "BinaryClassification" || "MulticlassClassification" || "Regression",
 *     Environment: { // MonitoringEnvironmentMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *   },
 *   ModelQualityJobInput: { // ModelQualityJobInput
 *     EndpointInput: { // EndpointInput
 *       EndpointName: "STRING_VALUE", // required
 *       LocalPath: "STRING_VALUE", // required
 *       S3InputMode: "Pipe" || "File",
 *       S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *       FeaturesAttribute: "STRING_VALUE",
 *       InferenceAttribute: "STRING_VALUE",
 *       ProbabilityAttribute: "STRING_VALUE",
 *       ProbabilityThresholdAttribute: Number("double"),
 *       StartTimeOffset: "STRING_VALUE",
 *       EndTimeOffset: "STRING_VALUE",
 *       ExcludeFeaturesAttribute: "STRING_VALUE",
 *     },
 *     BatchTransformInput: { // BatchTransformInput
 *       DataCapturedDestinationS3Uri: "STRING_VALUE", // required
 *       DatasetFormat: { // MonitoringDatasetFormat
 *         Csv: { // MonitoringCsvDatasetFormat
 *           Header: true || false,
 *         },
 *         Json: { // MonitoringJsonDatasetFormat
 *           Line: true || false,
 *         },
 *         Parquet: {},
 *       },
 *       LocalPath: "STRING_VALUE", // required
 *       S3InputMode: "Pipe" || "File",
 *       S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *       FeaturesAttribute: "STRING_VALUE",
 *       InferenceAttribute: "STRING_VALUE",
 *       ProbabilityAttribute: "STRING_VALUE",
 *       ProbabilityThresholdAttribute: Number("double"),
 *       StartTimeOffset: "STRING_VALUE",
 *       EndTimeOffset: "STRING_VALUE",
 *       ExcludeFeaturesAttribute: "STRING_VALUE",
 *     },
 *     GroundTruthS3Input: { // MonitoringGroundTruthS3Input
 *       S3Uri: "STRING_VALUE",
 *     },
 *   },
 *   ModelQualityJobOutputConfig: { // MonitoringOutputConfig
 *     MonitoringOutputs: [ // MonitoringOutputs // required
 *       { // MonitoringOutput
 *         S3Output: { // MonitoringS3Output
 *           S3Uri: "STRING_VALUE", // required
 *           LocalPath: "STRING_VALUE", // required
 *           S3UploadMode: "Continuous" || "EndOfJob",
 *         },
 *       },
 *     ],
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   JobResources: { // MonitoringResources
 *     ClusterConfig: { // MonitoringClusterConfig
 *       InstanceCount: Number("int"), // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 *       VolumeSizeInGB: Number("int"), // required
 *       VolumeKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   NetworkConfig: { // MonitoringNetworkConfig
 *     EnableInterContainerTrafficEncryption: true || false,
 *     EnableNetworkIsolation: true || false,
 *     VpcConfig: { // VpcConfig
 *       SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *         "STRING_VALUE",
 *       ],
 *       Subnets: [ // Subnets // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 *   RoleArn: "STRING_VALUE", // required
 *   StoppingCondition: { // MonitoringStoppingCondition
 *     MaxRuntimeInSeconds: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateModelQualityJobDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelQualityJobDefinitionResponse
 * //   JobDefinitionArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelQualityJobDefinitionCommandInput - {@link CreateModelQualityJobDefinitionCommandInput}
 * @returns {@link CreateModelQualityJobDefinitionCommandOutput}
 * @see {@link CreateModelQualityJobDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateModelQualityJobDefinitionCommandOutput} for command's `response` shape.
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
export class CreateModelQualityJobDefinitionCommand extends $Command<
  CreateModelQualityJobDefinitionCommandInput,
  CreateModelQualityJobDefinitionCommandOutput,
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
  constructor(readonly input: CreateModelQualityJobDefinitionCommandInput) {
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
  ): Handler<CreateModelQualityJobDefinitionCommandInput, CreateModelQualityJobDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateModelQualityJobDefinitionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelQualityJobDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateModelQualityJobDefinition",
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
  private serialize(
    input: CreateModelQualityJobDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_CreateModelQualityJobDefinitionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateModelQualityJobDefinitionCommandOutput> {
    return de_CreateModelQualityJobDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
