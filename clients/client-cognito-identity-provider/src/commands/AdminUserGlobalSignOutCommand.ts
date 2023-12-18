// smithy-typescript generated code
import { getAwsAuthPlugin } from "@aws-sdk/middleware-signing";
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
  AdminUserGlobalSignOutRequest,
  AdminUserGlobalSignOutRequestFilterSensitiveLog,
  AdminUserGlobalSignOutResponse,
} from "../models/models_0";
import { de_AdminUserGlobalSignOutCommand, se_AdminUserGlobalSignOutCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link AdminUserGlobalSignOutCommand}.
 */
export interface AdminUserGlobalSignOutCommandInput extends AdminUserGlobalSignOutRequest {}
/**
 * @public
 *
 * The output of {@link AdminUserGlobalSignOutCommand}.
 */
export interface AdminUserGlobalSignOutCommandOutput extends AdminUserGlobalSignOutResponse, __MetadataBearer {}

/**
 * @public
 * <p>Invalidates the identity, access, and refresh tokens that Amazon Cognito issued to a user. Call
 *             this operation with your administrative credentials when your user signs out of your
 *             app. This results in the following behavior. </p>
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
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *             this operation, you must use IAM credentials to authorize requests, and you must
 *             grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUserGlobalSignOutCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminUserGlobalSignOutRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 * };
 * const command = new AdminUserGlobalSignOutCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminUserGlobalSignOutCommandInput - {@link AdminUserGlobalSignOutCommandInput}
 * @returns {@link AdminUserGlobalSignOutCommandOutput}
 * @see {@link AdminUserGlobalSignOutCommandInput} for command's `input` shape.
 * @see {@link AdminUserGlobalSignOutCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 */
export class AdminUserGlobalSignOutCommand extends $Command<
  AdminUserGlobalSignOutCommandInput,
  AdminUserGlobalSignOutCommandOutput,
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
  constructor(readonly input: AdminUserGlobalSignOutCommandInput) {
    super();
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CognitoIdentityProviderClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<AdminUserGlobalSignOutCommandInput, AdminUserGlobalSignOutCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AdminUserGlobalSignOutCommand.getEndpointParameterInstructions())
    );
    this.middlewareStack.use(getAwsAuthPlugin(configuration));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CognitoIdentityProviderClient";
    const commandName = "AdminUserGlobalSignOutCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AdminUserGlobalSignOutRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSCognitoIdentityProviderService",
        operation: "AdminUserGlobalSignOut",
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
  private serialize(input: AdminUserGlobalSignOutCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_AdminUserGlobalSignOutCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AdminUserGlobalSignOutCommandOutput> {
    return de_AdminUserGlobalSignOutCommand(output, context);
  }
}
