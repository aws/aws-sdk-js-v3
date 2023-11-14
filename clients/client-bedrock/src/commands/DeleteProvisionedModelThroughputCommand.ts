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

import { BedrockClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BedrockClient";
import { DeleteProvisionedModelThroughputRequest, DeleteProvisionedModelThroughputResponse } from "../models/models_0";
import {
  de_DeleteProvisionedModelThroughputCommand,
  se_DeleteProvisionedModelThroughputCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteProvisionedModelThroughputCommand}.
 */
export interface DeleteProvisionedModelThroughputCommandInput extends DeleteProvisionedModelThroughputRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProvisionedModelThroughputCommand}.
 */
export interface DeleteProvisionedModelThroughputCommandOutput
  extends DeleteProvisionedModelThroughputResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Deletes a provisioned throughput. For more information, see <a href="https://docs.aws.amazon.com/bedrock/latest/userguide/what-is-service.html">Provisioned throughput</a> in the Bedrock User Guide.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockClient, DeleteProvisionedModelThroughputCommand } from "@aws-sdk/client-bedrock"; // ES Modules import
 * // const { BedrockClient, DeleteProvisionedModelThroughputCommand } = require("@aws-sdk/client-bedrock"); // CommonJS import
 * const client = new BedrockClient(config);
 * const input = { // DeleteProvisionedModelThroughputRequest
 *   provisionedModelId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProvisionedModelThroughputCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProvisionedModelThroughputCommandInput - {@link DeleteProvisionedModelThroughputCommandInput}
 * @returns {@link DeleteProvisionedModelThroughputCommandOutput}
 * @see {@link DeleteProvisionedModelThroughputCommandInput} for command's `input` shape.
 * @see {@link DeleteProvisionedModelThroughputCommandOutput} for command's `response` shape.
 * @see {@link BedrockClientResolvedConfig | config} for BedrockClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request is denied because of missing access permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Error occurred because of a conflict while performing an operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Retry your request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource ARN was not found. Check the ARN and try your request again.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The number of requests exceeds the limit. Resubmit your request later.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Input validation failed. Check your request parameters and retry the request.</p>
 *
 * @throws {@link BedrockServiceException}
 * <p>Base exception class for all service exceptions from Bedrock service.</p>
 *
 */
export class DeleteProvisionedModelThroughputCommand extends $Command<
  DeleteProvisionedModelThroughputCommandInput,
  DeleteProvisionedModelThroughputCommandOutput,
  BedrockClientResolvedConfig
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
  constructor(readonly input: DeleteProvisionedModelThroughputCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BedrockClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteProvisionedModelThroughputCommandInput, DeleteProvisionedModelThroughputCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteProvisionedModelThroughputCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BedrockClient";
    const commandName = "DeleteProvisionedModelThroughputCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonBedrockControlPlaneService",
        operation: "DeleteProvisionedModelThroughput",
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
    input: DeleteProvisionedModelThroughputCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return se_DeleteProvisionedModelThroughputCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProvisionedModelThroughputCommandOutput> {
    return de_DeleteProvisionedModelThroughputCommand(output, context);
  }
}
