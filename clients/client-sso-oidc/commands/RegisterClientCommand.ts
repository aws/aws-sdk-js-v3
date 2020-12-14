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

export type RegisterClientCommandInput = RegisterClientRequest;
export type RegisterClientCommandOutput = RegisterClientResponse & __MetadataBearer;

/**
 * <p>Registers a client with AWS SSO. This allows clients to initiate device authorization.
 *       The output should be persisted for reuse through many authentication requests.</p>
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

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

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
