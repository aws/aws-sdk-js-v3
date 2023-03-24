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
import { AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse } from "../models/models_0";
import {
  deserializeAws_json1_1AdminLinkProviderForUserCommand,
  serializeAws_json1_1AdminLinkProviderForUserCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link AdminLinkProviderForUserCommand}.
 */
export interface AdminLinkProviderForUserCommandInput extends AdminLinkProviderForUserRequest {}
/**
 * @public
 *
 * The output of {@link AdminLinkProviderForUserCommand}.
 */
export interface AdminLinkProviderForUserCommandOutput extends AdminLinkProviderForUserResponse, __MetadataBearer {}

/**
 * @public
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
 * const input = {
 *   UserPoolId: "STRING_VALUE", // required
 *   DestinationUser: {
 *     ProviderName: "STRING_VALUE",
 *     ProviderAttributeName: "STRING_VALUE",
 *     ProviderAttributeValue: "STRING_VALUE",
 *   },
 *   SourceUser: {
 *     ProviderName: "STRING_VALUE",
 *     ProviderAttributeName: "STRING_VALUE",
 *     ProviderAttributeValue: "STRING_VALUE",
 *   },
 * };
 * const command = new AdminLinkProviderForUserCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param AdminLinkProviderForUserCommandInput - {@link AdminLinkProviderForUserCommandInput}
 * @returns {@link AdminLinkProviderForUserCommandOutput}
 * @see {@link AdminLinkProviderForUserCommandInput} for command's `input` shape.
 * @see {@link AdminLinkProviderForUserCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AliasExistsException} (client fault)
 *  <p>This exception is thrown when a user tries to confirm the account with an email
 *             address or phone number that has already been supplied as an alias for a different
 *             user profile. This exception indicates that an account with this email address or phone
 *             already exists in a user pool that you've configured to use email address or phone
 *             number as a sign-in alias.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: AdminLinkProviderForUserCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AdminLinkProviderForUserCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminLinkProviderForUserCommandOutput> {
    return deserializeAws_json1_1AdminLinkProviderForUserCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
