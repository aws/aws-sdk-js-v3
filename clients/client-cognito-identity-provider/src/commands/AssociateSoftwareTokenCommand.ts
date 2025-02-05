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
  AssociateSoftwareTokenRequest,
  AssociateSoftwareTokenRequestFilterSensitiveLog,
  AssociateSoftwareTokenResponse,
  AssociateSoftwareTokenResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_AssociateSoftwareTokenCommand, se_AssociateSoftwareTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociateSoftwareTokenCommand}.
 */
export interface AssociateSoftwareTokenCommandInput extends AssociateSoftwareTokenRequest {}
/**
 * @public
 *
 * The output of {@link AssociateSoftwareTokenCommand}.
 */
export interface AssociateSoftwareTokenCommandOutput extends AssociateSoftwareTokenResponse, __MetadataBearer {}

/**
 * <p>Begins setup of time-based one-time password (TOTP) multi-factor authentication (MFA)
 *             for a user, with a unique private key that Amazon Cognito generates and returns in the API
 *             response. You can authorize an <code>AssociateSoftwareToken</code> request with either
 *             the user's access token, or a session string from a challenge response that you received
 *             from Amazon Cognito.</p>
 *          <note>
 *             <p>Amazon Cognito disassociates an existing software token when you verify the new token in a
 *                     <a href="https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_VerifySoftwareToken.html"> VerifySoftwareToken</a> API request. If you don't verify the software
 *                 token and your user pool doesn't require MFA, the user can then authenticate with
 *                 user name and password credentials alone. If your user pool requires TOTP MFA, Amazon Cognito
 *                 generates an <code>MFA_SETUP</code> or <code>SOFTWARE_TOKEN_SETUP</code> challenge
 *                 each time your user signs in. Complete setup with
 *                     <code>AssociateSoftwareToken</code> and <code>VerifySoftwareToken</code>.</p>
 *             <p>After you set up software token MFA for your user, Amazon Cognito generates a
 *                     <code>SOFTWARE_TOKEN_MFA</code> challenge when they authenticate. Respond to
 *                 this challenge with your user's TOTP.</p>
 *          </note>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
 *          <p>Authorize this action with a signed-in user's access token. It must include the scope <code>aws.cognito.signin.user.admin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AssociateSoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AssociateSoftwareTokenRequest
 *   AccessToken: "STRING_VALUE",
 *   Session: "STRING_VALUE",
 * };
 * const command = new AssociateSoftwareTokenCommand(input);
 * const response = await client.send(command);
 * // { // AssociateSoftwareTokenResponse
 * //   SecretCode: "STRING_VALUE",
 * //   Session: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociateSoftwareTokenCommandInput - {@link AssociateSoftwareTokenCommandInput}
 * @returns {@link AssociateSoftwareTokenCommandOutput}
 * @see {@link AssociateSoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link AssociateSoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>This exception is thrown if two or more modifications are happening
 *             concurrently.</p>
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link SoftwareTokenMFANotFoundException} (client fault)
 *  <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class AssociateSoftwareTokenCommand extends $Command
  .classBuilder<
    AssociateSoftwareTokenCommandInput,
    AssociateSoftwareTokenCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AssociateSoftwareToken", {})
  .n("CognitoIdentityProviderClient", "AssociateSoftwareTokenCommand")
  .f(AssociateSoftwareTokenRequestFilterSensitiveLog, AssociateSoftwareTokenResponseFilterSensitiveLog)
  .ser(se_AssociateSoftwareTokenCommand)
  .de(de_AssociateSoftwareTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateSoftwareTokenRequest;
      output: AssociateSoftwareTokenResponse;
    };
    sdk: {
      input: AssociateSoftwareTokenCommandInput;
      output: AssociateSoftwareTokenCommandOutput;
    };
  };
}
