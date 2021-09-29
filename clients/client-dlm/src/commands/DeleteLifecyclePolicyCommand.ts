import { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteLifecyclePolicyCommand,
  serializeAws_restJson1DeleteLifecyclePolicyCommand,
} from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyRequest {}
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle policy and halts the automated operations that the
 * 			policy specified.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * const client = new DLMClient(config);
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteLifecyclePolicyCommand extends $Command<
  DeleteLifecyclePolicyCommandInput,
  DeleteLifecyclePolicyCommandOutput,
  DLMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteLifecyclePolicyCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DLMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DLMClient";
    const commandName = "DeleteLifecyclePolicyCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteLifecyclePolicyRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteLifecyclePolicyResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteLifecyclePolicyCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteLifecyclePolicyCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteLifecyclePolicyCommandOutput> {
    return deserializeAws_restJson1DeleteLifecyclePolicyCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
