import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminDisableProviderForUserRequest, AdminDisableProviderForUserResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminDisableProviderForUserCommand,
  serializeAws_json1_1AdminDisableProviderForUserCommand,
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

export type AdminDisableProviderForUserCommandInput = AdminDisableProviderForUserRequest;
export type AdminDisableProviderForUserCommandOutput = AdminDisableProviderForUserResponse & __MetadataBearer;

/**
 * <p>Disables the user from signing in with the specified external (SAML or social)
 *             identity provider. If the user to disable is a Cognito User Pools native username +
 *             password user, they are not permitted to use their password to sign-in. If the user to
 *             disable is a linked external IdP user, any link between that user and an existing user
 *             is removed. The next time the external user (no longer attached to the previously linked
 *                 <code>DestinationUser</code>) signs in, they must create a new user account. See
 *             <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_AdminLinkProviderForUser.html">AdminLinkProviderForUser</a>.</p>
 *         <p>This action is enabled only for admin access and requires developer
 *             credentials.</p>
 *         <p>The <code>ProviderName</code> must match the value specified when creating an IdP for
 *             the pool. </p>
 *         <p>To disable a native username + password user, the <code>ProviderName</code> value must
 *             be <code>Cognito</code> and the <code>ProviderAttributeName</code> must be
 *                 <code>Cognito_Subject</code>, with the <code>ProviderAttributeValue</code> being the
 *             name that is used in the user pool for the user.</p>
 *         <p>The <code>ProviderAttributeName</code> must always be <code>Cognito_Subject</code> for
 *             social identity providers. The <code>ProviderAttributeValue</code> must always be the
 *             exact subject that was used when the user was originally linked as a source user.</p>
 *         <p>For de-linking a SAML identity, there are two scenarios. If the linked identity has
 *             not yet been used to sign-in, the <code>ProviderAttributeName</code> and
 *                 <code>ProviderAttributeValue</code> must be the same values that were used for the
 *                 <code>SourceUser</code> when the identities were originally linked using  <code>
 *                 AdminLinkProviderForUser</code> call. (If the linking was done with
 *                 <code>ProviderAttributeName</code> set to <code>Cognito_Subject</code>, the same
 *             applies here). However, if the user has already signed in, the
 *                 <code>ProviderAttributeName</code> must be <code>Cognito_Subject</code> and
 *                 <code>ProviderAttributeValue</code> must be the subject of the SAML
 *             assertion.</p>
 */
export class AdminDisableProviderForUserCommand extends $Command<
  AdminDisableProviderForUserCommandInput,
  AdminDisableProviderForUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminDisableProviderForUserCommandInput) {
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
  ): Handler<AdminDisableProviderForUserCommandInput, AdminDisableProviderForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminDisableProviderForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminDisableProviderForUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminDisableProviderForUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminDisableProviderForUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminDisableProviderForUserCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AdminDisableProviderForUserCommandOutput> {
    return deserializeAws_json1_1AdminDisableProviderForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
