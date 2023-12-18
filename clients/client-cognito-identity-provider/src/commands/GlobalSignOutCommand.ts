// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import {
  GlobalSignOutRequest,
  GlobalSignOutRequestFilterSensitiveLog,
  GlobalSignOutResponse,
} from "../models/models_0";
import { de_GlobalSignOutCommand, se_GlobalSignOutCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GlobalSignOutCommand}.
 */
export interface GlobalSignOutCommandInput extends GlobalSignOutRequest {}
/**
 * @public
 *
 * The output of {@link GlobalSignOutCommand}.
 */
export interface GlobalSignOutCommandOutput extends GlobalSignOutResponse, __MetadataBearer {}

/**
 * @public
 * <p>Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 *             this operation when your user signs out of your app. This results in the following
 *             behavior. </p>
 *          <ul>
 *             <li>
 *                <p>Amazon Cognito no longer accepts <i>token-authorized</i> user operations
 *                     that you authorize with a signed-out user's access tokens. For more information,
 *                     see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool
 *                         endpoints</a>.</p>
 *                <p>Amazon Cognito returns an <code>Access Token has been revoked</code> error when your
 *                     app attempts to authorize a user pools API request with a revoked access token
 *                     that contains the scope <code>aws.cognito.signin.user.admin</code>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Cognito no longer accepts a signed-out user's ID token in a <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_GetId.html">GetId </a> request to an identity pool with
 *                         <code>ServerSideTokenCheck</code> enabled for its user pool IdP
 *                     configuration in <a href="https://docs.aws.amazon.com/cognitoidentity/latest/APIReference/API_CognitoIdentityProvider.html">CognitoIdentityProvider</a>.</p>
 *             </li>
 *             <li>
 *                <p>Amazon Cognito no longer accepts a signed-out user's refresh tokens in refresh
 *                     requests.</p>
 *             </li>
 *          </ul>
 *          <p>Other requests might be valid until your user's token expires.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *             this operation, you can't use IAM credentials to authorize requests, and you can't
 *             grant IAM permissions in policies. For more information about authorization models in
 *             Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito native and OIDC APIs</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GlobalSignOutRequest
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new GlobalSignOutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param GlobalSignOutCommandInput - {@link GlobalSignOutCommandInput}
 * @returns {@link GlobalSignOutCommandOutput}
 * @see {@link GlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link GlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class GlobalSignOutCommand extends $Command<
  GlobalSignOutCommandInput,
  GlobalSignOutCommandOutput,
  CognitoIdentityProviderClientResolvedConfig
> {
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
  constructor(readonly input: GlobalSignOutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GlobalSignOutCommandInput, GlobalSignOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, GlobalSignOutCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "GlobalSignOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GlobalSignOutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "GlobalSignOut",
      },
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
  private serialize(input: GlobalSignOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GlobalSignOutCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GlobalSignOutCommandOutput> {
    return de_GlobalSignOutCommand(output, context);
  }
}
