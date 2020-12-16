import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminCreateUserRequest, AdminCreateUserResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminCreateUserCommand,
  serializeAws_json1_1AdminCreateUserCommand,
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

export type AdminCreateUserCommandInput = AdminCreateUserRequest;
export type AdminCreateUserCommandOutput = AdminCreateUserResponse & __MetadataBearer;

/**
 * <p>Creates a new user in the specified user pool.</p>
 *         <p>If <code>MessageAction</code> is not set, the default is to send a welcome message via
 *             email or phone (SMS).</p>
 *         <p>This message is based on a template that you configured in your call to create or
 *             update a user pool. This template includes your custom sign-up instructions and placeholders
 *             for user name and temporary password.</p>
 *         <p>Alternatively, you can call <code>AdminCreateUser</code> with “SUPPRESS” for the
 *                 <code>MessageAction</code> parameter, and Amazon Cognito will not send any email. </p>
 *         <p>In either case, the user will be in the <code>FORCE_CHANGE_PASSWORD</code> state until
 *             they sign in and change their password.</p>
 *         <p>
 *             <code>AdminCreateUser</code> requires developer credentials.</p>
 */
export class AdminCreateUserCommand extends $Command<
  AdminCreateUserCommandInput,
  AdminCreateUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminCreateUserCommandInput) {
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
  ): Handler<AdminCreateUserCommandInput, AdminCreateUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminCreateUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminCreateUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminCreateUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminCreateUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminCreateUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminCreateUserCommandOutput> {
    return deserializeAws_json1_1AdminCreateUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
