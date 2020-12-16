import { SSOClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSOClient";
import { LogoutRequest } from "../models/models_0";
import { deserializeAws_restJson1LogoutCommand, serializeAws_restJson1LogoutCommand } from "../protocols/Aws_restJson1";
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

export type LogoutCommandInput = LogoutRequest;
export type LogoutCommandOutput = __MetadataBearer;

/**
 * <p>Removes the client- and server-side session that is associated with the user.</p>
 */
export class LogoutCommand extends $Command<LogoutCommandInput, LogoutCommandOutput, SSOClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LogoutCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSOClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LogoutCommandInput, LogoutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSOClient";
    const commandName = "LogoutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LogoutRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LogoutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LogoutCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LogoutCommandOutput> {
    return deserializeAws_restJson1LogoutCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
