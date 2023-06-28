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

import { CreateTransformJobRequest, CreateTransformJobResponse } from "../models/models_1";
import { de_CreateTransformJobCommand, se_CreateTransformJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateTransformJobCommand}.
 */
export interface CreateTransformJobCommandInput extends CreateTransformJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateTransformJobCommand}.
 */
export interface CreateTransformJobCommandOutput extends CreateTransformJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a transform job. A transform job uses a trained model to get inferences on a
 *             dataset and saves these results to an Amazon S3 location that you specify.</p>
 *          <p>To perform batch transformations, you create a transform job and use the data that you
 *             have readily available.</p>
 *          <p>In the request body, you provide the following:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>TransformJobName</code> - Identifies the transform job. The name must be
 *                     unique within an Amazon Web Services Region in an Amazon Web Services account.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ModelName</code> - Identifies the model to use. <code>ModelName</code>
 *                     must be the name of an existing Amazon SageMaker model in the same Amazon Web Services Region and Amazon Web Services
 * 		    account. For information on creating a model, see <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_CreateModel.html">CreateModel</a>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TransformInput</code> - Describes the dataset to be transformed and the
 *                     Amazon S3 location where it is stored.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TransformOutput</code> - Identifies the Amazon S3 location where you want
 *                     Amazon SageMaker to save the results from the transform job.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TransformResources</code> - Identifies the ML compute instances for the
 *                     transform job.</p>
 *             </li>
 *          </ul>
 *          <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch
 *                 Transform</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateTransformJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateTransformJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateTransformJobRequest
 *   TransformJobName: "STRING_VALUE", // required
 *   ModelName: "STRING_VALUE", // required
 *   MaxConcurrentTransforms: Number("int"),
 *   ModelClientConfig: { // ModelClientConfig
 *     InvocationsTimeoutInSeconds: Number("int"),
 *     InvocationsMaxRetries: Number("int"),
 *   },
 *   MaxPayloadInMB: Number("int"),
 *   BatchStrategy: "MultiRecord" || "SingleRecord",
 *   Environment: { // TransformEnvironmentMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TransformInput: { // TransformInput
 *     DataSource: { // TransformDataSource
 *       S3DataSource: { // TransformS3DataSource
 *         S3DataType: "ManifestFile" || "S3Prefix" || "AugmentedManifestFile", // required
 *         S3Uri: "STRING_VALUE", // required
 *       },
 *     },
 *     ContentType: "STRING_VALUE",
 *     CompressionType: "None" || "Gzip",
 *     SplitType: "None" || "Line" || "RecordIO" || "TFRecord",
 *   },
 *   TransformOutput: { // TransformOutput
 *     S3OutputPath: "STRING_VALUE", // required
 *     Accept: "STRING_VALUE",
 *     AssembleWith: "None" || "Line",
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   DataCaptureConfig: { // BatchDataCaptureConfig
 *     DestinationS3Uri: "STRING_VALUE", // required
 *     KmsKeyId: "STRING_VALUE",
 *     GenerateInferenceId: true || false,
 *   },
 *   TransformResources: { // TransformResources
 *     InstanceType: "ml.m4.xlarge" || "ml.m4.2xlarge" || "ml.m4.4xlarge" || "ml.m4.10xlarge" || "ml.m4.16xlarge" || "ml.c4.xlarge" || "ml.c4.2xlarge" || "ml.c4.4xlarge" || "ml.c4.8xlarge" || "ml.p2.xlarge" || "ml.p2.8xlarge" || "ml.p2.16xlarge" || "ml.p3.2xlarge" || "ml.p3.8xlarge" || "ml.p3.16xlarge" || "ml.c5.xlarge" || "ml.c5.2xlarge" || "ml.c5.4xlarge" || "ml.c5.9xlarge" || "ml.c5.18xlarge" || "ml.m5.large" || "ml.m5.xlarge" || "ml.m5.2xlarge" || "ml.m5.4xlarge" || "ml.m5.12xlarge" || "ml.m5.24xlarge" || "ml.g4dn.xlarge" || "ml.g4dn.2xlarge" || "ml.g4dn.4xlarge" || "ml.g4dn.8xlarge" || "ml.g4dn.12xlarge" || "ml.g4dn.16xlarge", // required
 *     InstanceCount: Number("int"), // required
 *     VolumeKmsKeyId: "STRING_VALUE",
 *   },
 *   DataProcessing: { // DataProcessing
 *     InputFilter: "STRING_VALUE",
 *     OutputFilter: "STRING_VALUE",
 *     JoinSource: "Input" || "None",
 *   },
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
 * const command = new CreateTransformJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateTransformJobResponse
 * //   TransformJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateTransformJobCommandInput - {@link CreateTransformJobCommandInput}
 * @returns {@link CreateTransformJobCommandOutput}
 * @see {@link CreateTransformJobCommandInput} for command's `input` shape.
 * @see {@link CreateTransformJobCommandOutput} for command's `response` shape.
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
export class CreateTransformJobCommand extends $Command<
  CreateTransformJobCommandInput,
  CreateTransformJobCommandOutput,
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
  constructor(readonly input: CreateTransformJobCommandInput) {
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
  ): Handler<CreateTransformJobCommandInput, CreateTransformJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateTransformJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateTransformJobCommand";
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
  private serialize(input: CreateTransformJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateTransformJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTransformJobCommandOutput> {
    return de_CreateTransformJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
