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
import { StartWebAuthnRegistrationRequest, StartWebAuthnRegistrationResponse } from "../models/models_1";
import { StartWebAuthnRegistration } from "../schemas/schemas_4_ManagedLogin";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartWebAuthnRegistrationCommand}.
 */
export interface StartWebAuthnRegistrationCommandInput extends StartWebAuthnRegistrationRequest {}
/**
 * @public
 *
 * The output of {@link StartWebAuthnRegistrationCommand}.
 */
export interface StartWebAuthnRegistrationCommandOutput extends StartWebAuthnRegistrationResponse, __MetadataBearer {}

/**
 * <p>Requests credential creation options from your user pool for the currently signed-in
 *             user. Returns information about the user pool, the user profile, and authentication
 *             requirements. Users must provide this information in their request to enroll your
 *             application with their passkey provider.</p>
 *          <p>Authorize this action with a signed-in user's access token. It must include the scope <code>aws.cognito.signin.user.admin</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, StartWebAuthnRegistrationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, StartWebAuthnRegistrationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // StartWebAuthnRegistrationRequest
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new StartWebAuthnRegistrationCommand(input);
 * const response = await client.send(command);
 * // { // StartWebAuthnRegistrationResponse
 * //   CredentialCreationOptions: "DOCUMENT_VALUE", // required
 * // };
 *
 * ```
 *
 * @param StartWebAuthnRegistrationCommandInput - {@link StartWebAuthnRegistrationCommandInput}
 * @returns {@link StartWebAuthnRegistrationCommandOutput}
 * @see {@link StartWebAuthnRegistrationCommandInput} for command's `input` shape.
 * @see {@link StartWebAuthnRegistrationCommandOutput} for command's `response` shape.
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
 * @throws {@link WebAuthnConfigurationMissingException} (client fault)
 *  <p>This exception is thrown when a user pool doesn't have a configured relying party
 *             id or a user pool domain.</p>
 *
 * @throws {@link WebAuthnNotEnabledException} (client fault)
 *  <p>This exception is thrown when the passkey feature isn't enabled for the user
 *             pool.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class StartWebAuthnRegistrationCommand extends $Command
  .classBuilder<
    StartWebAuthnRegistrationCommandInput,
    StartWebAuthnRegistrationCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "StartWebAuthnRegistration", {})
  .n("CognitoIdentityProviderClient", "StartWebAuthnRegistrationCommand")
  .sc(StartWebAuthnRegistration)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartWebAuthnRegistrationRequest;
      output: StartWebAuthnRegistrationResponse;
    };
    sdk: {
      input: StartWebAuthnRegistrationCommandInput;
      output: StartWebAuthnRegistrationCommandOutput;
    };
  };
}
