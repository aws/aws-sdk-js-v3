// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  AdminLinkProviderForUserRequest,
  AdminLinkProviderForUserRequestFilterSensitiveLog,
  AdminLinkProviderForUserResponse,
  AdminLinkProviderForUserResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AdminLinkProviderForUserCommand,
  serializeAws_json1_1AdminLinkProviderForUserCommand,
} from "../protocols/Aws_json1_1";

export interface AdminLinkProviderForUserCommandInput extends AdminLinkProviderForUserRequest {}
export interface AdminLinkProviderForUserCommandOutput extends AdminLinkProviderForUserResponse, __MetadataBearer {}

/**
 * <p>Links an existing user account in a user pool (<code>DestinationUser</code>) to an
 *             identity from an external IdP (<code>SourceUser</code>) based on a specified attribute
 *             name and value from the external IdP. This allows you to create a link from the existing
 *             user account to an external federated user identity that has not yet been used to sign
 *             in. You can then use the federated user identity to sign in as the existing user
 *             account. </p>
 *         <p> For example, if there is an existing user with a username and password, this API
 *             links that user to a federated user identity. When the user signs in with a federated
 *             user identity, they sign in as the existing user account.</p>
 *         <note>
 *             <p>The maximum number of federated identities linked to a user is five.</p>
 *         </note>
 *         <important>
 *             <p>Because this API allows a user with an external federated identity to sign in as
 *                 an existing user in the user pool, it is critical that it only be used with external
 *                 IdPs and provider attributes that have been trusted by the application owner.</p>
 *         </important>
 *
 *         <p>This action is administrative and requires developer credentials.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const command = new AdminLinkProviderForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AdminLinkProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminLinkProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 */
export class AdminLinkProviderForUserCommand extends $Command<
  AdminLinkProviderForUserCommandInput,
  AdminLinkProviderForUserCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminLinkProviderForUserCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminLinkProviderForUserCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminLinkProviderForUserRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AdminLinkProviderForUserResponseFilterSensitiveLog,
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
