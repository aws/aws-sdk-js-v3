import { SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOOIDCClient";
import { RegisterClientRequest, RegisterClientResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterClientCommand,
  serializeAws_restJson1RegisterClientCommand,
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

export interface RegisterClientCommandInput extends RegisterClientRequest {}
export interface RegisterClientCommandOutput extends RegisterClientResponse, __MetadataBearer {}

/**
 * <p>Registers a client with AWS SSO. This allows clients to initiate device authorization.
 *       The output should be persisted for reuse through many authentication requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, RegisterClientCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, RegisterClientCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new RegisterClientCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterClientCommandInput} for command's `input` shape.
 * @see {@link RegisterClientCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class RegisterClientCommand extends $Command<
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
  SSOOIDCClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterClientCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOOIDCClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterClientCommandInput, RegisterClientCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "RegisterClientCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterClientRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterClientResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterClientCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterClientCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterClientCommandOutput> {
    return deserializeAws_restJson1RegisterClientCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
