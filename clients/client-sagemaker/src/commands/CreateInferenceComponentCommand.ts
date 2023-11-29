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

import { CreateInferenceComponentInput, CreateInferenceComponentOutput } from "../models/models_1";
import { de_CreateInferenceComponentCommand, se_CreateInferenceComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateInferenceComponentCommand}.
 */
export interface CreateInferenceComponentCommandInput extends CreateInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link CreateInferenceComponentCommand}.
 */
export interface CreateInferenceComponentCommandOutput extends CreateInferenceComponentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Creates an inference component, which is a SageMaker hosting object that you can
 *          use to deploy a model to an endpoint. In the inference component settings, you specify the
 *          model, the endpoint, and how the model utilizes the resources that the endpoint hosts. You
 *          can optimize resource utilization by tailoring how the required CPU cores, accelerators,
 *          and memory are allocated. You can deploy multiple inference components to an endpoint,
 *          where each inference component contains one model and the resource utilization needs for
 *          that individual model. After you deploy an inference component, you can directly invoke the
 *          associated model when you use the InvokeEndpoint API action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // CreateInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
 *   EndpointName: "STRING_VALUE", // required
 *   VariantName: "STRING_VALUE", // required
 *   Specification: { // InferenceComponentSpecification
 *     ModelName: "STRING_VALUE",
 *     Container: { // InferenceComponentContainerSpecification
 *       Image: "STRING_VALUE",
 *       ArtifactUrl: "STRING_VALUE",
 *       Environment: { // EnvironmentMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *     StartupParameters: { // InferenceComponentStartupParameters
 *       ModelDataDownloadTimeoutInSeconds: Number("int"),
 *       ContainerStartupHealthCheckTimeoutInSeconds: Number("int"),
 *     },
 *     ComputeResourceRequirements: { // InferenceComponentComputeResourceRequirements
 *       NumberOfCpuCoresRequired: Number("float"),
 *       NumberOfAcceleratorDevicesRequired: Number("float"),
 *       MinMemoryRequiredInMb: Number("int"), // required
 *       MaxMemoryRequiredInMb: Number("int"),
 *     },
 *   },
 *   RuntimeConfig: { // InferenceComponentRuntimeConfig
 *     CopyCount: Number("int"), // required
 *   },
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // { // CreateInferenceComponentOutput
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param CreateInferenceComponentCommandInput - {@link CreateInferenceComponentCommandInput}
 * @returns {@link CreateInferenceComponentCommandOutput}
 * @see {@link CreateInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link CreateInferenceComponentCommandOutput} for command's `response` shape.
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
export class CreateInferenceComponentCommand extends $Command<
  CreateInferenceComponentCommandInput,
  CreateInferenceComponentCommandOutput,
  SageMakerClientResolvedConfig
> {
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
  constructor(readonly input: CreateInferenceComponentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateInferenceComponentCommandInput, CreateInferenceComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateInferenceComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "CreateInferenceComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "CreateInferenceComponent",
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
  private serialize(input: CreateInferenceComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateInferenceComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateInferenceComponentCommandOutput> {
    return de_CreateInferenceComponentCommand(output, context);
  }
}
