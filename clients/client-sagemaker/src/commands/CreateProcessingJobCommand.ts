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

import { CreateProcessingJobRequest, CreateProcessingJobResponse } from "../models/models_1";
import { de_CreateProcessingJobCommand, se_CreateProcessingJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateProcessingJobCommand}.
 */
export interface CreateProcessingJobCommandInput extends CreateProcessingJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateProcessingJobCommand}.
 */
export interface CreateProcessingJobCommandOutput extends CreateProcessingJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a processing job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateProcessingJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateProcessingJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateProcessingJobRequest
 *   ProcessingInputs: [ // ProcessingInputs
 *     { // ProcessingInput
 *       InputName: "STRING_VALUE", // required
 *       AppManaged: true || false,
 *       S3Input: { // ProcessingS3Input
 *         S3Uri: "STRING_VALUE", // required
 *         LocalPath: "STRING_VALUE",
 *         S3DataType: "ManifestFile" || "S3Prefix", // required
 *         S3InputMode: "Pipe" || "File",
 *         S3DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *         S3CompressionType: "None" || "Gzip",
 *       },
 *       DatasetDefinition: { // DatasetDefinition
 *         AthenaDatasetDefinition: { // AthenaDatasetDefinition
 *           Catalog: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           QueryString: "STRING_VALUE", // required
 *           WorkGroup: "STRING_VALUE",
 *           OutputS3Uri: "STRING_VALUE", // required
 *           KmsKeyId: "STRING_VALUE",
 *           OutputFormat: "PARQUET" || "ORC" || "AVRO" || "JSON" || "TEXTFILE", // required
 *           OutputCompression: "GZIP" || "SNAPPY" || "ZLIB",
 *         },
 *         RedshiftDatasetDefinition: { // RedshiftDatasetDefinition
 *           ClusterId: "STRING_VALUE", // required
 *           Database: "STRING_VALUE", // required
 *           DbUser: "STRING_VALUE", // required
 *           QueryString: "STRING_VALUE", // required
 *           ClusterRoleArn: "STRING_VALUE", // required
 *           OutputS3Uri: "STRING_VALUE", // required
 *           KmsKeyId: "STRING_VALUE",
 *           OutputFormat: "PARQUET" || "CSV", // required
 *           OutputCompression: "None" || "GZIP" || "BZIP2" || "ZSTD" || "SNAPPY",
 *         },
 *         LocalPath: "STRING_VALUE",
 *         DataDistributionType: "FullyReplicated" || "ShardedByS3Key",
 *         InputMode: "Pipe" || "File",
 *       },
 *     },
 *   ],
 *   ProcessingOutputConfig: { // ProcessingOutputConfig
 *     Outputs: [ // ProcessingOutputs // required
 *       { // ProcessingOutput
 *         OutputName: "STRING_VALUE", // required
 *         S3Output: { // ProcessingS3Output
 *           S3Uri: "STRING_VALUE", // required
 *           LocalPath: "STRING_VALUE", // required
 *           S3UploadMode: "Continuous" || "EndOfJob", // required
 *         },
 *         FeatureStoreOutput: { // ProcessingFeatureStoreOutput
 *           FeatureGroupName: "STRING_VALUE", // required
 *         },
 *         AppManaged: true || false,
 *       },
 *     ],
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   ProcessingJobName: "STRING_VALUE", // required
 *   ProcessingResources: { // ProcessingResources
 *     ClusterConfig: { // ProcessingClusterConfig
 *       InstanceCount: Number("int"), // required
 *       InstanceType: "ml.t3.medium" || "ml.t3.large" || "ml.t3.xlarge" || "ml.t3.2xlarge" || "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.r5.large" || "ml.r5.xlarge" || "ml.r5.2xlarge" || "ml.r5.4xlarge" || "ml.r5.8xlarge" || "ml.r5.12xlarge" || "ml.r5.16xlarge" || "ml.r5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 *       VolumeSizeInGB: Number("int"), // required
 *       VolumeKmsKeyId: "STRING_VALUE",
 *     },
 *   },
 *   StoppingCondition: { // ProcessingStoppingCondition
 *     MaxRuntimeInSeconds: Number("int"), // required
 *   },
 *   AppSpecification: { // AppSpecification
 *     ImageUri: "STRING_VALUE", // required
 *     ContainerEntrypoint: [ // ContainerEntrypoint
 *       "STRING_VALUE",
 *     ],
 *     ContainerArguments: [ // ContainerArguments
 *       "STRING_VALUE",
 *     ],
 *   },
 *   Environment: { // ProcessingEnvironmentMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   NetworkConfig: { // NetworkConfig
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ExperimentConfig: { // ExperimentConfig
 *     ExperimentName: "STRING_VALUE",
 *     TrialName: "STRING_VALUE",
 *     TrialComponentDisplayName: "STRING_VALUE",
 *     RunName: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateProcessingJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateProcessingJobResponse
 * //   ProcessingJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateProcessingJobCommandInput - {@link CreateProcessingJobCommandInput}
 * @returns {@link CreateProcessingJobCommandOutput}
 * @see {@link CreateProcessingJobCommandInput} for command's `input` shape.
 * @see {@link CreateProcessingJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceInUse} (client fault)
 *  <p>Resource being accessed is in use.</p>
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link ResourceNotFound} (client fault)
 *  <p>Resource being access is not found.</p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateProcessingJobCommand extends $Command<
  CreateProcessingJobCommandInput,
  CreateProcessingJobCommandOutput,
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
  constructor(readonly input: CreateProcessingJobCommandInput) {
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
  ): Handler<CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateProcessingJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateProcessingJobCommand";
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
  private serialize(input: CreateProcessingJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateProcessingJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateProcessingJobCommandOutput> {
    return de_CreateProcessingJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
