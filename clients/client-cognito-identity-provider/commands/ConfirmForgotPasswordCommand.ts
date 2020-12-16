import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { ConfirmForgotPasswordRequest, ConfirmForgotPasswordResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ConfirmForgotPasswordCommand,
  serializeAws_json1_1ConfirmForgotPasswordCommand,
} from "../protocols/Aws_json1_1";
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

export type ConfirmForgotPasswordCommandInput = ConfirmForgotPasswordRequest;
export type ConfirmForgotPasswordCommandOutput = ConfirmForgotPasswordResponse & __MetadataBearer;

/**
 * <p>Allows a user to enter a confirmation code to reset a forgotten password.</p>
 */
export class ConfirmForgotPasswordCommand extends $Command<
  ConfirmForgotPasswordCommandInput,
  ConfirmForgotPasswordCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ConfirmForgotPasswordCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmForgotPasswordCommandInput, ConfirmForgotPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ConfirmForgotPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmForgotPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ConfirmForgotPasswordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmForgotPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ConfirmForgotPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmForgotPasswordCommandOutput> {
    return deserializeAws_json1_1ConfirmForgotPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
