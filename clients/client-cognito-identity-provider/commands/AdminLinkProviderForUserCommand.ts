import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminLinkProviderForUserCommand,
  serializeAws_json1_1AdminLinkProviderForUserCommand,
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

export type AdminLinkProviderForUserCommandInput = AdminLinkProviderForUserRequest;
export type AdminLinkProviderForUserCommandOutput = AdminLinkProviderForUserResponse & __MetadataBearer;

/**
 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an
 *             identity from an external identity provider (<code>SourceUser</code>) based on a
 *             specified attribute name and value from the external identity provider. This allows you
 *             to create a link from the existing user account to an external federated user identity
 *             that has not yet been used to sign in, so that the federated user identity can be used
 *             to sign in as the existing user account. </p>
 *         <p> For example, if there is an existing user with a username and password, this API
 *             links that user to a federated user identity, so that when the federated user identity
 *             is used, the user signs in as the existing user account. </p>
 *         <note>
 *             <p>The maximum number of federated identities linked to a user is 5.</p>
 *          </note>
 *         <important>
 *             <p>Because this API allows a user with an external federated identity to sign in as
 *                 an existing user in the user pool, it is critical that it only be used with external
 *                 identity providers and provider attributes that have been trusted by the application
 *                 owner.</p>
 *         </important>
 *
 *         <p>This action is enabled only for admin access and requires developer
 *             credentials.</p>
 */
export class AdminLinkProviderForUserCommand extends $Command<
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AdminLinkProviderForUserCommandInput) {
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
  ): Handler<AdminLinkProviderForUserCommandInput, AdminLinkProviderForUserCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminLinkProviderForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminLinkProviderForUserRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AdminLinkProviderForUserResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AdminLinkProviderForUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminLinkProviderForUserCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminLinkProviderForUserCommandOutput> {
    return deserializeAws_json1_1AdminLinkProviderForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
