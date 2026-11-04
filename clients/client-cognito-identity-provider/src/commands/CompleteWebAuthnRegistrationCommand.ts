// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CompleteWebAuthnRegistrationRequest, CompleteWebAuthnRegistrationResponse } from "../models/models_0";
import { CompleteWebAuthnRegistration$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface CompleteWebAuthnRegistrationCommandOutput extends CompleteWebAuthnRegistrationResponse, __MetadataBearer {}

/**
 * Completes registration of a passkey authenticator for the currently signed-in user.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
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
 * @throws {@link WebAuthnChallengeNotFoundException} (client fault)
 *
 * This exception is thrown when the challenge from `StartWebAuthn` registration has expired.
 *
 * @throws {@link WebAuthnClientMismatchException} (client fault)
 *
 * This exception is thrown when the access token is for a different client than the one in the original `StartWebAuthnRegistration` request.
 *
 * @throws {@link WebAuthnCredentialNotSupportedException} (client fault)
 *
 * This exception is thrown when a user presents passkey credentials from an unsupported device or provider.
 *
 * @throws {@link WebAuthnNotEnabledException} (client fault)
 *
 * This exception is thrown when the passkey feature isn't enabled for the user pool.
 *
 * @throws {@link WebAuthnOriginNotAllowedException} (client fault)
 *
 * This exception is thrown when the passkey credential's registration origin does not align with the user pool relying party id.
 *
 * @throws {@link WebAuthnRelyingPartyMismatchException} (client fault)
 *
 * This exception is thrown when the given passkey credential is associated with a different relying party ID than the user pool relying party ID.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class CompleteWebAuthnRegistrationCommand extends command<CompleteWebAuthnRegistrationCommandInput, CompleteWebAuthnRegistrationCommandOutput>(
  _ep0,
  _mw0,
  "CompleteWebAuthnRegistration",
  CompleteWebAuthnRegistration$
) {
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
