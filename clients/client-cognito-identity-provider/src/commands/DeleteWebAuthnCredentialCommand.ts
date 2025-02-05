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
  DeleteWebAuthnCredentialRequest,
  DeleteWebAuthnCredentialRequestFilterSensitiveLog,
  DeleteWebAuthnCredentialResponse,
} from "../models/models_0";
import { de_DeleteWebAuthnCredentialCommand, se_DeleteWebAuthnCredentialCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteWebAuthnCredentialCommand}.
 */
export interface DeleteWebAuthnCredentialCommandInput extends DeleteWebAuthnCredentialRequest {}
/**
 * @public
 *
 * The output of {@link DeleteWebAuthnCredentialCommand}.
 */
export interface DeleteWebAuthnCredentialCommandOutput extends DeleteWebAuthnCredentialResponse, __MetadataBearer {}

/**
 * <p>Deletes a registered passkey, or webauthN, authenticator for the currently signed-in
 *             user.</p>
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
 * import { CognitoIdentityProviderClient, DeleteWebAuthnCredentialCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DeleteWebAuthnCredentialCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DeleteWebAuthnCredentialRequest
 *   AccessToken: "STRING_VALUE", // required
 *   CredentialId: "STRING_VALUE", // required
 * };
 * const command = new DeleteWebAuthnCredentialCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteWebAuthnCredentialCommandInput - {@link DeleteWebAuthnCredentialCommandInput}
 * @returns {@link DeleteWebAuthnCredentialCommandOutput}
 * @see {@link DeleteWebAuthnCredentialCommandInput} for command's `input` shape.
 * @see {@link DeleteWebAuthnCredentialCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class DeleteWebAuthnCredentialCommand extends $Command
  .classBuilder<
    DeleteWebAuthnCredentialCommandInput,
    DeleteWebAuthnCredentialCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DeleteWebAuthnCredential", {})
  .n("CognitoIdentityProviderClient", "DeleteWebAuthnCredentialCommand")
  .f(DeleteWebAuthnCredentialRequestFilterSensitiveLog, void 0)
  .ser(se_DeleteWebAuthnCredentialCommand)
  .de(de_DeleteWebAuthnCredentialCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteWebAuthnCredentialRequest;
      output: {};
    };
    sdk: {
      input: DeleteWebAuthnCredentialCommandInput;
      output: DeleteWebAuthnCredentialCommandOutput;
    };
  };
}
