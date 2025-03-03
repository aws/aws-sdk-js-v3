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
  AdminSetUserMFAPreferenceRequest,
  AdminSetUserMFAPreferenceRequestFilterSensitiveLog,
  AdminSetUserMFAPreferenceResponse,
} from "../models/models_0";
import { de_AdminSetUserMFAPreferenceCommand, se_AdminSetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminSetUserMFAPreferenceCommand}.
 */
export interface AdminSetUserMFAPreferenceCommandInput extends AdminSetUserMFAPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link AdminSetUserMFAPreferenceCommand}.
 */
export interface AdminSetUserMFAPreferenceCommandOutput extends AdminSetUserMFAPreferenceResponse, __MetadataBearer {}

/**
 * <p>Sets the user's multi-factor authentication (MFA) preference, including which MFA
 *             options are activated, and if any are preferred. Only one factor can be set as
 *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
 *             factors are activated. If multiple options are activated and no preference is set, a
 *             challenge to choose an MFA option will be returned during sign-in.</p>
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
 * import { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminSetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminSetUserMFAPreferenceRequest
 *   SMSMfaSettings: { // SMSMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   SoftwareTokenMfaSettings: { // SoftwareTokenMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   EmailMfaSettings: { // EmailMfaSettingsType
 *     Enabled: true || false,
 *     PreferredMfa: true || false,
 *   },
 *   Username: "STRING_VALUE", // required
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new AdminSetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminSetUserMFAPreferenceCommandInput - {@link AdminSetUserMFAPreferenceCommandInput}
 * @returns {@link AdminSetUserMFAPreferenceCommandOutput}
 * @see {@link AdminSetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link AdminSetUserMFAPreferenceCommandOutput} for command's `response` shape.
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
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class AdminSetUserMFAPreferenceCommand extends $Command
  .classBuilder<
    AdminSetUserMFAPreferenceCommandInput,
    AdminSetUserMFAPreferenceCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminSetUserMFAPreference", {})
  .n("CognitoIdentityProviderClient", "AdminSetUserMFAPreferenceCommand")
  .f(AdminSetUserMFAPreferenceRequestFilterSensitiveLog, void 0)
  .ser(se_AdminSetUserMFAPreferenceCommand)
  .de(de_AdminSetUserMFAPreferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminSetUserMFAPreferenceRequest;
      output: {};
    };
    sdk: {
      input: AdminSetUserMFAPreferenceCommandInput;
      output: AdminSetUserMFAPreferenceCommandOutput;
    };
  };
}
