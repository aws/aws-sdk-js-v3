// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartWebAuthnRegistrationRequest, StartWebAuthnRegistrationResponse } from "../models/models_1";
import { StartWebAuthnRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Requests credential creation options from your user pool for the currently signed-in user. Returns information about the user pool, the user profile, and authentication requirements. Users must provide this information in their request to enroll your application with their passkey provider.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
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
 *
 * This exception is thrown when WAF doesn't allow your request based on a web ACL that's associated with your user pool.
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * This exception is thrown when Amazon Cognito encounters an internal error.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service encounters an invalid parameter.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * This exception is thrown when a user exceeds the limit for a requested Amazon Web Services resource.
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *
 * This exception is thrown when a user isn't authorized.
 *
 * @throws {@link OperationNotEnabledException} (client fault)
 *
 * This exception is thrown when an operation is not available in the current region or for the current user pool configuration. This can occur when attempting to perform operations that are not supported in secondary replica regions.
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *
 * This exception is thrown when a password reset is required.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link WebAuthnConfigurationMissingException} (client fault)
 *
 * This exception is thrown when a user pool doesn't have a configured relying party id or a user pool domain.
 *
 * @throws {@link WebAuthnNotEnabledException} (client fault)
 *
 * This exception is thrown when the passkey feature isn't enabled for the user pool.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class StartWebAuthnRegistrationCommand extends command<StartWebAuthnRegistrationCommandInput, StartWebAuthnRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "StartWebAuthnRegistration",
  StartWebAuthnRegistration$
) {
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
