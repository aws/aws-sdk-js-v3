// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifySoftwareTokenRequest, VerifySoftwareTokenResponse } from "../models/models_1";
import { VerifySoftwareToken$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Registers the current user's time-based one-time password (TOTP) authenticator with a code generated in their authenticator app from a private key that's supplied by your user pool. Marks the user's software token MFA status as "verified" if successful. The request takes an access token or a session string, but not both.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifySoftwareTokenCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
 *
 * This exception is thrown if the provided code doesn't match what the server was expecting.
 *
 * @throws {@link EnableSoftwareTokenMFAException} (client fault)
 *
 * This exception is thrown when there is a code mismatch and the service fails to configure the software token TOTP multi-factor authentication (MFA).
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
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *
 * This exception is thrown when the user pool configuration is not valid.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link SoftwareTokenMFANotFoundException} (client fault)
 *
 * This exception is thrown when the software token time-based one-time password (TOTP) multi-factor authentication (MFA) isn't activated for the user pool.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *
 * This exception is thrown when a user isn't confirmed successfully.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * This exception is thrown when a user isn't found.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class VerifySoftwareTokenCommand extends command<VerifySoftwareTokenCommandInput, VerifySoftwareTokenCommandOutput>(
  _ep0,
  _mw0,
  "VerifySoftwareToken",
  VerifySoftwareToken$
) {
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
