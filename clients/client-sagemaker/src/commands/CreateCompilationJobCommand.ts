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

import { CreateCompilationJobRequest, CreateCompilationJobResponse } from "../models/models_0";
import { de_CreateCompilationJobCommand, se_CreateCompilationJobCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateCompilationJobCommand}.
 */
export interface CreateCompilationJobCommandInput extends CreateCompilationJobRequest {}
/**
 * @public
 *
 * The output of {@link CreateCompilationJobCommand}.
 */
export interface CreateCompilationJobCommandOutput extends CreateCompilationJobResponse, __MetadataBearer {}

/**
 * @public
 * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the
 *             resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p>
 *          <p>If
 *             you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
 *             model artifacts as part of the model. You can also use the artifacts with
 *                 Amazon Web Services IoT Greengrass. In that case, deploy them as an ML
 *             resource.</p>
 *          <p>In the request body, you provide the following:</p>
 *          <ul>
 *             <li>
 *                <p>A name for the compilation job</p>
 *             </li>
 *             <li>
 *                <p> Information about the input model artifacts </p>
 *             </li>
 *             <li>
 *                <p>The output location for the compiled model and the device (target) that the
 *                     model runs on </p>
 *             </li>
 *             <li>
 *                <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform
 *                     the model compilation job. </p>
 *             </li>
 *          </ul>
 *          <p>You can also provide a <code>Tag</code> to track the model compilation job's resource
 *             use and costs. The response body contains the
 *                 <code>CompilationJobArn</code>
 *             for the compiled job.</p>
 *          <p>To stop a model compilation job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_StopCompilationJob.html">StopCompilationJob</a>. To get information about a particular model compilation
 *             job, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_DescribeCompilationJob.html">DescribeCompilationJob</a>. To get information about multiple model compilation
 *             jobs, use <a href="https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_ListCompilationJobs.html">ListCompilationJobs</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCompilationJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCompilationJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateCompilationJobRequest
 *   CompilationJobName: "STRING_VALUE", // required
 *   RoleArn: "STRING_VALUE", // required
 *   ModelPackageVersionArn: "STRING_VALUE",
 *   InputConfig: { // InputConfig
 *     S3Uri: "STRING_VALUE", // required
 *     DataInputConfig: "STRING_VALUE",
 *     Framework: "TENSORFLOW" || "KERAS" || "MXNET" || "ONNX" || "PYTORCH" || "XGBOOST" || "TFLITE" || "DARKNET" || "SKLEARN", // required
 *     FrameworkVersion: "STRING_VALUE",
 *   },
 *   OutputConfig: { // OutputConfig
 *     S3OutputLocation: "STRING_VALUE", // required
 *     TargetDevice: "lambda" || "ml_m4" || "ml_m5" || "ml_c4" || "ml_c5" || "ml_p2" || "ml_p3" || "ml_g4dn" || "ml_inf1" || "ml_inf2" || "ml_trn1" || "ml_eia2" || "jetson_tx1" || "jetson_tx2" || "jetson_nano" || "jetson_xavier" || "rasp3b" || "imx8qm" || "deeplens" || "rk3399" || "rk3288" || "aisage" || "sbe_c" || "qcs605" || "qcs603" || "sitara_am57x" || "amba_cv2" || "amba_cv22" || "amba_cv25" || "x86_win32" || "x86_win64" || "coreml" || "jacinto_tda4vm" || "imx8mplus",
 *     TargetPlatform: { // TargetPlatform
 *       Os: "ANDROID" || "LINUX", // required
 *       Arch: "X86_64" || "X86" || "ARM64" || "ARM_EABI" || "ARM_EABIHF", // required
 *       Accelerator: "INTEL_GRAPHICS" || "MALI" || "NVIDIA" || "NNA",
 *     },
 *     CompilerOptions: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *   },
 *   VpcConfig: { // NeoVpcConfig
 *     SecurityGroupIds: [ // NeoVpcSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // NeoVpcSubnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   StoppingCondition: { // StoppingCondition
 *     MaxRuntimeInSeconds: Number("int"),
 *     MaxWaitTimeInSeconds: Number("int"),
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateCompilationJobCommand(input);
 * const response = await client.send(command);
 * // { // CreateCompilationJobResponse
 * //   CompilationJobArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateCompilationJobCommandInput - {@link CreateCompilationJobCommandInput}
 * @returns {@link CreateCompilationJobCommandOutput}
 * @see {@link CreateCompilationJobCommandInput} for command's `input` shape.
 * @see {@link CreateCompilationJobCommandOutput} for command's `response` shape.
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
export class CreateCompilationJobCommand extends $Command<
  CreateCompilationJobCommandInput,
  CreateCompilationJobCommandOutput,
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
  constructor(readonly input: CreateCompilationJobCommandInput) {
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
  ): Handler<CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateCompilationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateCompilationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateCompilationJob",
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
  private serialize(input: CreateCompilationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateCompilationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCompilationJobCommandOutput> {
    return de_CreateCompilationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
