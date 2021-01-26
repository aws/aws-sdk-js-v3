import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { ForgotPasswordRequest, ForgotPasswordResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ForgotPasswordCommand,
  serializeAws_json1_1ForgotPasswordCommand,
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

export type ForgotPasswordCommandInput = ForgotPasswordRequest;
export type ForgotPasswordCommandOutput = ForgotPasswordResponse & __MetadataBearer;

/**
 * <p>Calling this API causes a message to be sent to the end user with a confirmation code
 *             that is required to change the user's password. For the <code>Username</code> parameter,
 *             you can use the username or user alias. The method used to send the confirmation code is
 *             sent according to the specified AccountRecoverySetting. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/how-to-recover-a-user-account.html">Recovering User Accounts</a> in the <i>Amazon Cognito Developer Guide</i>.
 *             If neither a verified phone number nor a verified email exists, an
 *                 <code>InvalidParameterException</code> is thrown. To use the confirmation code for
 *         resetting the password, call <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_ConfirmForgotPassword.html">ConfirmForgotPassword</a>.</p>
 */
export class ForgotPasswordCommand extends $Command<
  ForgotPasswordCommandInput,
  ForgotPasswordCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ForgotPasswordCommandInput) {
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
  ): Handler<ForgotPasswordCommandInput, ForgotPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "ForgotPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ForgotPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ForgotPasswordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ForgotPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ForgotPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ForgotPasswordCommandOutput> {
    return deserializeAws_json1_1ForgotPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
