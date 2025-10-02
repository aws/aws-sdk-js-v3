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
  ListWebAuthnCredentialsRequest,
  ListWebAuthnCredentialsRequestFilterSensitiveLog,
  ListWebAuthnCredentialsResponse,
} from "../models/models_1";
import { de_ListWebAuthnCredentialsCommand, se_ListWebAuthnCredentialsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListWebAuthnCredentialsCommand}.
 */
export interface ListWebAuthnCredentialsCommandInput extends ListWebAuthnCredentialsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebAuthnCredentialsCommand}.
 */
export interface ListWebAuthnCredentialsCommandOutput extends ListWebAuthnCredentialsResponse, __MetadataBearer {}

/**
 * <p>Generates a list of the currently signed-in user's registered passkey, or
 *             WebAuthn, credentials.</p>
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
 * import { CognitoIdentityProviderClient, ListWebAuthnCredentialsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ListWebAuthnCredentialsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ListWebAuthnCredentialsRequest
 *   AccessToken: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListWebAuthnCredentialsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebAuthnCredentialsResponse
 * //   Credentials: [ // WebAuthnCredentialDescriptionListType // required
 * //     { // WebAuthnCredentialDescription
 * //       CredentialId: "STRING_VALUE", // required
 * //       FriendlyCredentialName: "STRING_VALUE", // required
 * //       RelyingPartyId: "STRING_VALUE", // required
 * //       AuthenticatorAttachment: "STRING_VALUE",
 * //       AuthenticatorTransports: [ // WebAuthnAuthenticatorTransportsList // required
 * //         "STRING_VALUE",
 * //       ],
 * //       CreatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebAuthnCredentialsCommandInput - {@link ListWebAuthnCredentialsCommandInput}
 * @returns {@link ListWebAuthnCredentialsCommandOutput}
 * @see {@link ListWebAuthnCredentialsCommandInput} for command's `input` shape.
 * @see {@link ListWebAuthnCredentialsCommandOutput} for command's `response` shape.
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>This exception is thrown when a user exceeds the limit for a requested Amazon Web Services
 *             resource.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class ListWebAuthnCredentialsCommand extends $Command
  .classBuilder<
    ListWebAuthnCredentialsCommandInput,
    ListWebAuthnCredentialsCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "ListWebAuthnCredentials", {})
  .n("CognitoIdentityProviderClient", "ListWebAuthnCredentialsCommand")
  .f(ListWebAuthnCredentialsRequestFilterSensitiveLog, void 0)
  .ser(se_ListWebAuthnCredentialsCommand)
  .de(de_ListWebAuthnCredentialsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebAuthnCredentialsRequest;
      output: ListWebAuthnCredentialsResponse;
    };
    sdk: {
      input: ListWebAuthnCredentialsCommandInput;
      output: ListWebAuthnCredentialsCommandOutput;
    };
  };
}
