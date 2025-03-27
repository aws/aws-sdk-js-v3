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
  VerifySoftwareTokenRequest,
  VerifySoftwareTokenRequestFilterSensitiveLog,
  VerifySoftwareTokenResponse,
  VerifySoftwareTokenResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_VerifySoftwareTokenCommand, se_VerifySoftwareTokenCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link VerifySoftwareTokenCommand}.
 */
export interface VerifySoftwareTokenCommandInput extends VerifySoftwareTokenRequest {}
/**
 * @public
 *
 * The output of {@link VerifySoftwareTokenCommand}.
 */
export interface VerifySoftwareTokenCommandOutput extends VerifySoftwareTokenResponse, __MetadataBearer {}

/**
 * <p>Registers the current user's time-based one-time password (TOTP) authenticator
 *             with a code generated in their authenticator app from a private key that's supplied
 *             by your user pool. Marks the user's software token MFA status as "verified" if
 *             successful. The request takes an access token or a session string, but not both.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // VerifySoftwareTokenRequest
 *   AccessToken: "STRING_VALUE",
 *   Session: "STRING_VALUE",
 *   UserCode: "STRING_VALUE", // required
 *   FriendlyDeviceName: "STRING_VALUE",
 * };
 * const command = new VerifySoftwareTokenCommand(input);
 * const response = await client.send(command);
 * // { // VerifySoftwareTokenResponse
 * //   Status: "SUCCESS" || "ERROR",
 * //   Session: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param VerifySoftwareTokenCommandInput - {@link VerifySoftwareTokenCommandInput}
 * @returns {@link VerifySoftwareTokenCommandOutput}
 * @see {@link VerifySoftwareTokenCommandInput} for command's `input` shape.
 * @see {@link VerifySoftwareTokenCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeMismatchException} (client fault)
 *  <p>This exception is thrown if the provided code doesn't match what the server was
 *             expecting.</p>
 *
 * @throws {@link EnableSoftwareTokenMFAException} (client fault)
 *  <p>This exception is thrown when there is a code mismatch and the service fails to
 *             configure the software token TOTP multi-factor authentication (MFA).</p>
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
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
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
 * @throws {@link SoftwareTokenMFANotFoundException} (client fault)
 *  <p>This exception is thrown when the software token time-based one-time password (TOTP)
 *             multi-factor authentication (MFA) isn't activated for the user pool.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
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
export class VerifySoftwareTokenCommand extends $Command
  .classBuilder<
    VerifySoftwareTokenCommandInput,
    VerifySoftwareTokenCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "VerifySoftwareToken", {})
  .n("CognitoIdentityProviderClient", "VerifySoftwareTokenCommand")
  .f(VerifySoftwareTokenRequestFilterSensitiveLog, VerifySoftwareTokenResponseFilterSensitiveLog)
  .ser(se_VerifySoftwareTokenCommand)
  .de(de_VerifySoftwareTokenCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifySoftwareTokenRequest;
      output: VerifySoftwareTokenResponse;
    };
    sdk: {
      input: VerifySoftwareTokenCommandInput;
      output: VerifySoftwareTokenCommandOutput;
    };
  };
}
