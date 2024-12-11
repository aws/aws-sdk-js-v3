// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GlobalSignOutRequest,
  GlobalSignOutRequestFilterSensitiveLog,
  GlobalSignOutResponse,
} from "../models/models_1";
import { de_GlobalSignOutCommand, se_GlobalSignOutCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 *          <p>Other requests might be valid until your user's token expires. This operation
 *             doesn't clear the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-managed-login.html">managed login</a> session cookie. To clear the session for
 *             a user who signed in with managed login or the classic hosted UI, direct their browser
 *             session to the <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/logout-endpoint.html">logout endpoint</a>.</p>
 *          <p>Authorize this action with a signed-in user's access token. It must include the scope <code>aws.cognito.signin.user.admin</code>.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
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
 * @public
 */
export class GlobalSignOutCommand extends $Command
  .classBuilder<
    GlobalSignOutCommandInput,
    GlobalSignOutCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "GlobalSignOut", {})
  .n("CognitoIdentityProviderClient", "GlobalSignOutCommand")
  .f(GlobalSignOutRequestFilterSensitiveLog, void 0)
  .ser(se_GlobalSignOutCommand)
  .de(de_GlobalSignOutCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GlobalSignOutRequest;
      output: {};
    };
    sdk: {
      input: GlobalSignOutCommandInput;
      output: GlobalSignOutCommandOutput;
    };
  };
}
