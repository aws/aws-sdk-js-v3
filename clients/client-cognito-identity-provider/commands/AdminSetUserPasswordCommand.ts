import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminSetUserPasswordRequest, AdminSetUserPasswordResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminSetUserPasswordCommand,
  serializeAws_json1_1AdminSetUserPasswordCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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

export type AdminSetUserPasswordCommandInput = AdminSetUserPasswordRequest;
export type AdminSetUserPasswordCommandOutput = AdminSetUserPasswordResponse & __MetadataBearer;

/**
 * <p>Sets the specified user's password in a user pool as an administrator. Works on any
 *             user. </p>
 *         <p>The password can be temporary or permanent. If it is temporary, the user status will
 *             be placed into the <code>FORCE_CHANGE_PASSWORD</code> state. When the user next tries to
 *             sign in, the InitiateAuth/AdminInitiateAuth response will contain the
 *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user does not sign in before it
 *             expires, the user will not be able to sign in and their password will need to be reset
 *             by an administrator. </p>
 *         <p>Once the user has set a new password, or the password is permanent, the user status
 *             will be set to <code>Confirmed</code>.</p>
 */
export class AdminSetUserPasswordCommand extends $Command<
  AdminSetUserPasswordCommandInput,
  AdminSetUserPasswordCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminSetUserPasswordCommandInput) {
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
  ): Handler<AdminSetUserPasswordCommandInput, AdminSetUserPasswordCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminSetUserPasswordCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminSetUserPasswordRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminSetUserPasswordResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminSetUserPasswordCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminSetUserPasswordCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminSetUserPasswordCommandOutput> {
    return deserializeAws_json1_1AdminSetUserPasswordCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
