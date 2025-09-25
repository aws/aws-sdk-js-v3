// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociateSoftwareTokenRequest, AssociateSoftwareTokenResponse } from "../models/models_0";
import { AssociateSoftwareToken } from "../schemas/schemas_37_Auth";

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
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "AssociateSoftwareToken", {})
  .n("CognitoIdentityProviderClient", "AssociateSoftwareTokenCommand")
  .sc(AssociateSoftwareToken)
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
