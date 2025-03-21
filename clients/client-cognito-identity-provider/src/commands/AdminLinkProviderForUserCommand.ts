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
import { AdminLinkProviderForUserRequest, AdminLinkProviderForUserResponse } from "../models/models_0";
import { de_AdminLinkProviderForUserCommand, se_AdminLinkProviderForUserCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Links an existing user account in a user pool, or <code>DestinationUser</code>, to an
 *             identity from an external IdP, or <code>SourceUser</code>, based on a specified
 *             attribute name and value from the external IdP.</p>
 *          <p>This operation connects a local user profile with a user identity who hasn't yet
 *             signed in from their third-party IdP. When the user signs in with their IdP, they get
 *             access-control configuration from the local user profile. Linked local users can also
 *             sign in with SDK-based API operations like <code>InitiateAuth</code> after they sign in
 *             at least once through their IdP. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">Linking federated users</a>.</p>
 *          <note>
 *             <p>The maximum number of federated identities linked to a user is five.</p>
 *          </note>
 *          <important>
 *             <p>Because this API allows a user with an external federated identity to sign in as a
 *                 local user, it is critical that it only be used with external IdPs and linked
 *                 attributes that you trust.</p>
 *          </important>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
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
 * import { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminLinkProviderForUserCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminLinkProviderForUserRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   DestinationUser: { // ProviderUserIdentifierType
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
 * // {};
 *
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
 *             address or phone number that has already been supplied as an alias for a different user
 *             profile. This exception indicates that an account with this email address or phone
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
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class AdminLinkProviderForUserCommand extends $Command
  .classBuilder<
    AdminLinkProviderForUserCommandInput,
    AdminLinkProviderForUserCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminLinkProviderForUser", {})
  .n("CognitoIdentityProviderClient", "AdminLinkProviderForUserCommand")
  .f(void 0, void 0)
  .ser(se_AdminLinkProviderForUserCommand)
  .de(de_AdminLinkProviderForUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminLinkProviderForUserRequest;
      output: {};
    };
    sdk: {
      input: AdminLinkProviderForUserCommandInput;
      output: AdminLinkProviderForUserCommandOutput;
    };
  };
}
