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

import { CreateModelInput, CreateModelOutput } from "../models/models_1";
import { de_CreateModelCommand, se_CreateModelCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateModelCommand}.
 */
export interface CreateModelCommandInput extends CreateModelInput {}
/**
 * @public
 *
 * The output of {@link CreateModelCommand}.
 */
export interface CreateModelCommandOutput extends CreateModelOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates a model in SageMaker. In the request, you name the model and describe a primary
 *             container. For the primary container, you specify the Docker image that
 *             contains inference code, artifacts (from prior training), and a custom environment map
 *             that the inference code uses when you deploy the model for predictions.</p>
 *          <p>Use this API to create a model if you want to use SageMaker hosting services or run a batch
 *             transform job.</p>
 *          <p>To host your model, you create an endpoint configuration with the
 *                 <code>CreateEndpointConfig</code> API, and then create an endpoint with the
 *                 <code>CreateEndpoint</code> API. SageMaker then deploys all of the containers that you
 *             defined for the model in the hosting environment. </p>
 *          <p>For an example that calls this method when deploying a model to SageMaker hosting services,
 *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/realtime-endpoints-deployment.html#realtime-endpoints-deployment-create-model">Create a Model (Amazon Web Services SDK for Python (Boto 3)).</a>
 *          </p>
 *          <p>To run a batch transform using your model, you start a job with the
 *                 <code>CreateTransformJob</code> API. SageMaker uses your model and your dataset to get
 *             inferences which are then saved to a specified S3 location.</p>
 *          <p>In the request, you also provide an IAM role that SageMaker can assume to access model
 *             artifacts and docker image for deployment on ML compute hosting instances or for batch
 *             transform jobs. In addition, you also use the IAM role to manage permissions the
 *             inference code needs. For example, if the inference code access any other Amazon Web Services resources, you grant necessary permissions via this role.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateModelCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateModelCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateModelInput
 *   ModelName: "STRING_VALUE", // required
 *   PrimaryContainer: { // ContainerDefinition
 *     ContainerHostname: "STRING_VALUE",
 *     Image: "STRING_VALUE",
 *     ImageConfig: { // ImageConfig
 *       RepositoryAccessMode: "Platform" || "Vpc", // required
 *       RepositoryAuthConfig: { // RepositoryAuthConfig
 *         RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 *       },
 *     },
 *     Mode: "SingleModel" || "MultiModel",
 *     ModelDataUrl: "STRING_VALUE",
 *     Environment: { // EnvironmentMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     ModelPackageName: "STRING_VALUE",
 *     InferenceSpecificationName: "STRING_VALUE",
 *     MultiModelConfig: { // MultiModelConfig
 *       ModelCacheSetting: "Enabled" || "Disabled",
 *     },
 *     ModelDataSource: { // ModelDataSource
 *       S3DataSource: { // S3ModelDataSource
 *         S3Uri: "STRING_VALUE", // required
 *         S3DataType: "S3Prefix" || "S3Object", // required
 *         CompressionType: "None" || "Gzip", // required
 *       },
 *     },
 *   },
 *   Containers: [ // ContainerDefinitionList
 *     {
 *       ContainerHostname: "STRING_VALUE",
 *       Image: "STRING_VALUE",
 *       ImageConfig: {
 *         RepositoryAccessMode: "Platform" || "Vpc", // required
 *         RepositoryAuthConfig: {
 *           RepositoryCredentialsProviderArn: "STRING_VALUE", // required
 *         },
 *       },
 *       Mode: "SingleModel" || "MultiModel",
 *       ModelDataUrl: "STRING_VALUE",
 *       Environment: {
 *         "<keys>": "STRING_VALUE",
 *       },
 *       ModelPackageName: "STRING_VALUE",
 *       InferenceSpecificationName: "STRING_VALUE",
 *       MultiModelConfig: {
 *         ModelCacheSetting: "Enabled" || "Disabled",
 *       },
 *       ModelDataSource: {
 *         S3DataSource: {
 *           S3Uri: "STRING_VALUE", // required
 *           S3DataType: "S3Prefix" || "S3Object", // required
 *           CompressionType: "None" || "Gzip", // required
 *         },
 *       },
 *     },
 *   ],
 *   InferenceExecutionConfig: { // InferenceExecutionConfig
 *     Mode: "Serial" || "Direct", // required
 *   },
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   VpcConfig: { // VpcConfig
 *     SecurityGroupIds: [ // VpcSecurityGroupIds // required
 *       "STRING_VALUE",
 *     ],
 *     Subnets: [ // Subnets // required
 *       "STRING_VALUE",
 *     ],
 *   },
 *   EnableNetworkIsolation: true || false,
 * };
 * const command = new CreateModelCommand(input);
 * const response = await client.send(command);
 * // { // CreateModelOutput
 * //   ModelArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateModelCommandInput - {@link CreateModelCommandInput}
 * @returns {@link CreateModelCommandOutput}
 * @see {@link CreateModelCommandInput} for command's `input` shape.
 * @see {@link CreateModelCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for SageMakerClient's `config` shape.
 *
 * @throws {@link ResourceLimitExceeded} (client fault)
 *  <p> You have exceeded an SageMaker resource limit. For example, you might have too many
 *             training jobs created. </p>
 *
 * @throws {@link SageMakerServiceException}
 * <p>Base exception class for all service exceptions from SageMaker service.</p>
 *
 */
export class CreateModelCommand extends $Command<
  CreateModelCommandInput,
  CreateModelCommandOutput,
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
  constructor(readonly input: CreateModelCommandInput) {
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
  ): Handler<CreateModelCommandInput, CreateModelCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, CreateModelCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateModelCommand";
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
  private serialize(input: CreateModelCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateModelCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateModelCommandOutput> {
    return de_CreateModelCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
