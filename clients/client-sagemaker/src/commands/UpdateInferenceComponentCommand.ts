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

import { UpdateInferenceComponentInput, UpdateInferenceComponentOutput } from "../models/models_4";
import { de_UpdateInferenceComponentCommand, se_UpdateInferenceComponentCommand } from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInferenceComponentCommand}.
 */
export interface UpdateInferenceComponentCommandInput extends UpdateInferenceComponentInput {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceComponentCommand}.
 */
export interface UpdateInferenceComponentCommandOutput extends UpdateInferenceComponentOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateInferenceComponentInput
 *   InferenceComponentName: "STRING_VALUE", // required
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
 * };
 * const command = new UpdateInferenceComponentCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInferenceComponentOutput
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInferenceComponentCommandInput - {@link UpdateInferenceComponentCommandInput}
 * @returns {@link UpdateInferenceComponentCommandOutput}
 * @see {@link UpdateInferenceComponentCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceComponentCommandOutput} for command's `response` shape.
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
export class UpdateInferenceComponentCommand extends $Command<
  UpdateInferenceComponentCommandInput,
  UpdateInferenceComponentCommandOutput,
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
  constructor(readonly input: UpdateInferenceComponentCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInferenceComponentCommandInput, UpdateInferenceComponentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInferenceComponentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateInferenceComponentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateInferenceComponent",
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
  private serialize(input: UpdateInferenceComponentCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateInferenceComponentCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateInferenceComponentCommandOutput> {
    return de_UpdateInferenceComponentCommand(output, context);
  }
}
