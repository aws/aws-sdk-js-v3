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
import { CompleteWebAuthnRegistrationRequest, CompleteWebAuthnRegistrationResponse } from "../models/models_0";
import { CompleteWebAuthnRegistration } from "../schemas/schemas_4_ManagedLogin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CompleteWebAuthnRegistrationCommand}.
 */
export interface CompleteWebAuthnRegistrationCommandInput extends CompleteWebAuthnRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link CompleteWebAuthnRegistrationCommand}.
 */
export interface CompleteWebAuthnRegistrationCommandOutput
  extends CompleteWebAuthnRegistrationResponse,
    __MetadataBearer {}

/**
 * <p>Completes registration of a passkey authenticator for the currently signed-in
 *             user.</p>
 *          <p>Authorize this action with a signed-in user's access token. It must include the scope <code>aws.cognito.signin.user.admin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, CompleteWebAuthnRegistrationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, CompleteWebAuthnRegistrationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // CompleteWebAuthnRegistrationRequest
 *   AccessToken: "STRING_VALUE", // required
 *   Credential: "DOCUMENT_VALUE", // required
 * };
 * const command = new CompleteWebAuthnRegistrationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CompleteWebAuthnRegistrationCommandInput - {@link CompleteWebAuthnRegistrationCommandInput}
 * @returns {@link CompleteWebAuthnRegistrationCommandOutput}
 * @see {@link CompleteWebAuthnRegistrationCommandInput} for command's `input` shape.
 * @see {@link CompleteWebAuthnRegistrationCommandOutput} for command's `response` shape.
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
 * @throws {@link WebAuthnChallengeNotFoundException} (client fault)
 *  <p>This exception is thrown when the challenge from <code>StartWebAuthn</code>
 *             registration has expired.</p>
 *
 * @throws {@link WebAuthnClientMismatchException} (client fault)
 *  <p>This exception is thrown when the access token is for a different client than the one
 *             in the original <code>StartWebAuthnRegistration</code> request.</p>
 *
 * @throws {@link WebAuthnCredentialNotSupportedException} (client fault)
 *  <p>This exception is thrown when a user presents passkey credentials from an unsupported
 *             device or provider.</p>
 *
 * @throws {@link WebAuthnNotEnabledException} (client fault)
 *  <p>This exception is thrown when the passkey feature isn't enabled for the user
 *             pool.</p>
 *
 * @throws {@link WebAuthnOriginNotAllowedException} (client fault)
 *  <p>This exception is thrown when the passkey credential's registration origin does not
 *             align with the user pool relying party id.</p>
 *
 * @throws {@link WebAuthnRelyingPartyMismatchException} (client fault)
 *  <p>This exception is thrown when the given passkey credential is associated with a
 *             different relying party ID than the user pool relying party ID.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class CompleteWebAuthnRegistrationCommand extends $Command
  .classBuilder<
    CompleteWebAuthnRegistrationCommandInput,
    CompleteWebAuthnRegistrationCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "CompleteWebAuthnRegistration", {})
  .n("CognitoIdentityProviderClient", "CompleteWebAuthnRegistrationCommand")
  .sc(CompleteWebAuthnRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CompleteWebAuthnRegistrationRequest;
      output: {};
    };
    sdk: {
      input: CompleteWebAuthnRegistrationCommandInput;
      output: CompleteWebAuthnRegistrationCommandOutput;
    };
  };
}
