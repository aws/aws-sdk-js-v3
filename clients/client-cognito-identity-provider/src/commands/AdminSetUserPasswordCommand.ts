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
  AdminSetUserPasswordRequest,
  AdminSetUserPasswordRequestFilterSensitiveLog,
  AdminSetUserPasswordResponse,
} from "../models/models_0";
import { de_AdminSetUserPasswordCommand, se_AdminSetUserPasswordCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandInput extends AdminSetUserPasswordRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserPasswordCommand}.
 */
export interface AdminSetUserPasswordCommandOutput extends AdminSetUserPasswordResponse, __MetadataBearer {}

/**
 * <p>Sets the specified user's password in a user pool. This operation administratively
 *             sets a temporary or permanent password for a user. With this operation, you can bypass
 *             self-service password changes and permit immediate sign-in with the password that you
 *             set. To do this, set <code>Permanent</code> to <code>true</code>.</p>
 *          <p>You can also set a new temporary password in this request, send it to a user, and
 *             require them to choose a new password on their next sign-in. To do this, set
 *                 <code>Permanent</code> to <code>false</code>.</p>
 *          <p>If the password is temporary, the user's <code>Status</code> becomes
 *                 <code>FORCE_CHANGE_PASSWORD</code>. When the user next tries to sign in, the
 *                 <code>InitiateAuth</code> or <code>AdminInitiateAuth</code> response includes the
 *                 <code>NEW_PASSWORD_REQUIRED</code> challenge. If the user doesn't sign in
 *             before the temporary password expires, they can no longer sign in and you must repeat
 *             this operation to set a temporary or permanent password for them.</p>
 *          <p>After the user sets a new password, or if you set a permanent password, their status
 *             becomes <code>Confirmed</code>.</p>
 *          <p>
 *             <code>AdminSetUserPassword</code> can set a password for the user profile that Amazon Cognito
 *             creates for third-party federated users. When you set a password, the federated user's
 *             status changes from <code>EXTERNAL_PROVIDER</code> to <code>CONFIRMED</code>. A user in
 *             this state can sign in as a federated user, and initiate authentication flows in the API
 *             like a linked native user. They can also modify their password and attributes in
 *             token-authenticated API requests like <code>ChangePassword</code> and
 *                 <code>UpdateUserAttributes</code>. As a best security practice and to keep users in
 *             sync with your external IdP, don't set passwords on federated user profiles. To set up a
 *             federated user for native sign-in with a linked native user, refer to <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-identity-federation-consolidate-users.html">Linking federated users to an existing user
 *             profile</a>.</p>
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
 * import { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserPasswordCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserPasswordRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   Password: "STRING_VALUE", // required
 *   Permanent: true || false,
 * };
 * const command = new AdminSetUserPasswordCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminSetUserPasswordCommandInput - {@link AdminSetUserPasswordCommandInput}
 * @returns {@link AdminSetUserPasswordCommandOutput}
 * @see {@link AdminSetUserPasswordCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserPasswordCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordHistoryPolicyViolationException} (client fault)
 *  <p>The message returned when a user's new password matches a previous password and
 *             doesn't comply with the password-history policy.</p>
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
export class AdminSetUserPasswordCommand extends $Command
  .classBuilder<
    AdminSetUserPasswordCommandInput,
    AdminSetUserPasswordCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminSetUserPassword", {})
  .n("CognitoIdentityProviderClient", "AdminSetUserPasswordCommand")
  .f(AdminSetUserPasswordRequestFilterSensitiveLog, void 0)
  .ser(se_AdminSetUserPasswordCommand)
  .de(de_AdminSetUserPasswordCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminSetUserPasswordRequest;
      output: {};
    };
    sdk: {
      input: AdminSetUserPasswordCommandInput;
      output: AdminSetUserPasswordCommandOutput;
    };
  };
}
