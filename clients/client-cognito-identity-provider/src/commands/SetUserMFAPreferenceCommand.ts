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
  SetUserMFAPreferenceRequest,
  SetUserMFAPreferenceRequestFilterSensitiveLog,
  SetUserMFAPreferenceResponse,
} from "../models/models_1";
import { de_SetUserMFAPreferenceCommand, se_SetUserMFAPreferenceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetUserMFAPreferenceCommand}.
 */
export interface SetUserMFAPreferenceCommandInput extends SetUserMFAPreferenceRequest {}
/**
 * @public
 *
 * The output of {@link SetUserMFAPreferenceCommand}.
 */
export interface SetUserMFAPreferenceCommandOutput extends SetUserMFAPreferenceResponse, __MetadataBearer {}

/**
 * <p>Set the user's multi-factor authentication (MFA) method preference, including which
 *             MFA factors are activated and if any are preferred. Only one factor can be set as
 *             preferred. The preferred MFA factor will be used to authenticate a user if multiple
 *             factors are activated. If multiple options are activated and no preference is set, a
 *             challenge to choose an MFA option will be returned during sign-in. If an MFA type is
 *             activated for a user, the user will be prompted for MFA during all sign-in attempts
 *             unless device tracking is turned on and the device has been trusted. If you want MFA to
 *             be applied selectively based on the assessed risk level of sign-in attempts, deactivate
 *             MFA for users and turn on Adaptive Authentication for the user pool.</p>
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
 * import { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserMFAPreferenceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserMFAPreferenceRequest
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
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new SetUserMFAPreferenceCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetUserMFAPreferenceCommandInput - {@link SetUserMFAPreferenceCommandInput}
 * @returns {@link SetUserMFAPreferenceCommandOutput}
 * @see {@link SetUserMFAPreferenceCommandInput} for command's `input` shape.
 * @see {@link SetUserMFAPreferenceCommandOutput} for command's `response` shape.
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
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class SetUserMFAPreferenceCommand extends $Command
  .classBuilder<
    SetUserMFAPreferenceCommandInput,
    SetUserMFAPreferenceCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "SetUserMFAPreference", {})
  .n("CognitoIdentityProviderClient", "SetUserMFAPreferenceCommand")
  .f(SetUserMFAPreferenceRequestFilterSensitiveLog, void 0)
  .ser(se_SetUserMFAPreferenceCommand)
  .de(de_SetUserMFAPreferenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUserMFAPreferenceRequest;
      output: {};
    };
    sdk: {
      input: SetUserMFAPreferenceCommandInput;
      output: SetUserMFAPreferenceCommandOutput;
    };
  };
}
