import { AuditManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AuditManagerClient";
import { RegisterAccountRequest, RegisterAccountResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RegisterAccountCommand,
  serializeAws_restJson1RegisterAccountCommand,
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

export type RegisterAccountCommandInput = RegisterAccountRequest;
export type RegisterAccountCommandOutput = RegisterAccountResponse & __MetadataBearer;

/**
 * <p>
 *  Enables AWS Audit Manager for the specified AWS account.
 * </p>
 */
export class RegisterAccountCommand extends $Command<
  RegisterAccountCommandInput,
  RegisterAccountCommandOutput,
  AuditManagerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RegisterAccountCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AuditManagerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RegisterAccountCommandInput, RegisterAccountCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AuditManagerClient";
    const commandName = "RegisterAccountCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterAccountRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RegisterAccountResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterAccountCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterAccountCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterAccountCommandOutput> {
    return deserializeAws_restJson1RegisterAccountCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
