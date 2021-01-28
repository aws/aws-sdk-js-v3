import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { LogoutUserRequest, LogoutUserResponse } from "../models/models_1";
import {
  deserializeAws_restJson1LogoutUserCommand,
  serializeAws_restJson1LogoutUserCommand,
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

export type LogoutUserCommandInput = LogoutUserRequest;
export type LogoutUserCommandOutput = LogoutUserResponse & __MetadataBearer;

/**
 * <p>Logs out the specified user from all of the devices they are currently logged into.</p>
 */
export class LogoutUserCommand extends $Command<
  LogoutUserCommandInput,
  LogoutUserCommandOutput,
  ChimeClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: LogoutUserCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<LogoutUserCommandInput, LogoutUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "LogoutUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: LogoutUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: LogoutUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: LogoutUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1LogoutUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<LogoutUserCommandOutput> {
    return deserializeAws_restJson1LogoutUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
