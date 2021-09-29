import { SSOOIDCClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOOIDCClient";
import { CreateTokenRequest, CreateTokenResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateTokenCommand,
  serializeAws_restJson1CreateTokenCommand,
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

export interface CreateTokenCommandInput extends CreateTokenRequest {}
export interface CreateTokenCommandOutput extends CreateTokenResponse, __MetadataBearer {}

/**
 * <p>Creates and returns an access token for the authorized client. The access token issued
 *       will be used to fetch short-term credentials for the assigned roles in the AWS
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOOIDCClient, CreateTokenCommand } from "@aws-sdk/client-sso-oidc"; // ES Modules import
 * // const { SSOOIDCClient, CreateTokenCommand } = require("@aws-sdk/client-sso-oidc"); // CommonJS import
 * const client = new SSOOIDCClient(config);
 * const command = new CreateTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateTokenCommandInput} for command's `input` shape.
 * @see {@link CreateTokenCommandOutput} for command's `response` shape.
 * @see {@link SSOOIDCClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreateTokenCommand extends $Command<
  CreateTokenCommandInput,
  CreateTokenCommandOutput,
  SSOOIDCClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTokenCommandInput) {
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
  ): Handler<CreateTokenCommandInput, CreateTokenCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOOIDCClient";
    const commandName = "CreateTokenCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTokenRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTokenResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTokenCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateTokenCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTokenCommandOutput> {
    return deserializeAws_restJson1CreateTokenCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
