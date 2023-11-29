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

import {
  UpdateInferenceComponentRuntimeConfigInput,
  UpdateInferenceComponentRuntimeConfigOutput,
} from "../models/models_4";
import {
  de_UpdateInferenceComponentRuntimeConfigCommand,
  se_UpdateInferenceComponentRuntimeConfigCommand,
} from "../protocols/Aws_json1_1";
import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateInferenceComponentRuntimeConfigCommand}.
 */
export interface UpdateInferenceComponentRuntimeConfigCommandInput extends UpdateInferenceComponentRuntimeConfigInput {}
/**
 * @public
 *
 * The output of {@link UpdateInferenceComponentRuntimeConfigCommand}.
 */
export interface UpdateInferenceComponentRuntimeConfigCommandOutput
  extends UpdateInferenceComponentRuntimeConfigOutput,
    __MetadataBearer {}

/**
 * @public
 * <p>Runtime settings for a model that is deployed with an inference component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateInferenceComponentRuntimeConfigCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateInferenceComponentRuntimeConfigCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const input = { // UpdateInferenceComponentRuntimeConfigInput
 *   InferenceComponentName: "STRING_VALUE", // required
 *   DesiredRuntimeConfig: { // InferenceComponentRuntimeConfig
 *     CopyCount: Number("int"), // required
 *   },
 * };
 * const command = new UpdateInferenceComponentRuntimeConfigCommand(input);
 * const response = await client.send(command);
 * // { // UpdateInferenceComponentRuntimeConfigOutput
 * //   InferenceComponentArn: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param UpdateInferenceComponentRuntimeConfigCommandInput - {@link UpdateInferenceComponentRuntimeConfigCommandInput}
 * @returns {@link UpdateInferenceComponentRuntimeConfigCommandOutput}
 * @see {@link UpdateInferenceComponentRuntimeConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateInferenceComponentRuntimeConfigCommandOutput} for command's `response` shape.
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
export class UpdateInferenceComponentRuntimeConfigCommand extends $Command<
  UpdateInferenceComponentRuntimeConfigCommandInput,
  UpdateInferenceComponentRuntimeConfigCommandOutput,
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
  constructor(readonly input: UpdateInferenceComponentRuntimeConfigCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateInferenceComponentRuntimeConfigCommandInput, UpdateInferenceComponentRuntimeConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateInferenceComponentRuntimeConfigCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerClient";
    const commandName = "UpdateInferenceComponentRuntimeConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMaker",
        operation: "UpdateInferenceComponentRuntimeConfig",
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
    input: UpdateInferenceComponentRuntimeConfigCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_UpdateInferenceComponentRuntimeConfigCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateInferenceComponentRuntimeConfigCommandOutput> {
    return de_UpdateInferenceComponentRuntimeConfigCommand(output, context);
  }
}
