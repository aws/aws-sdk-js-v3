import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { DeleteBackendAuthRequest, DeleteBackendAuthResponse } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteBackendAuthCommand,
  serializeAws_restJson1DeleteBackendAuthCommand,
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

export interface DeleteBackendAuthCommandInput extends DeleteBackendAuthRequest {}
export interface DeleteBackendAuthCommandOutput extends DeleteBackendAuthResponse, __MetadataBearer {}

/**
 * <p>Deletes an existing backend authentication resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AmplifyBackendClient, DeleteBackendAuthCommand } from "@aws-sdk/client-amplifybackend"; // ES Modules import
 * // const { AmplifyBackendClient, DeleteBackendAuthCommand } = require("@aws-sdk/client-amplifybackend"); // CommonJS import
 * const client = new AmplifyBackendClient(config);
 * const command = new DeleteBackendAuthCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackendAuthCommandInput} for command's `input` shape.
 * @see {@link DeleteBackendAuthCommandOutput} for command's `response` shape.
 * @see {@link AmplifyBackendClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBackendAuthCommand extends $Command<
  DeleteBackendAuthCommandInput,
  DeleteBackendAuthCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackendAuthCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackendAuthCommandInput, DeleteBackendAuthCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "DeleteBackendAuthCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackendAuthRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackendAuthResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackendAuthCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteBackendAuthCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackendAuthCommandOutput> {
    return deserializeAws_restJson1DeleteBackendAuthCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
