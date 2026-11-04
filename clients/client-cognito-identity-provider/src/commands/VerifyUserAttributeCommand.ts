// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { VerifyUserAttributeRequest, VerifyUserAttributeResponse } from "../models/models_1";
import { VerifyUserAttribute$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link VerifyUserAttributeCommand}.
 */
export interface VerifyUserAttributeCommandInput extends VerifyUserAttributeRequest {}
/**
 * @public
 *
 * The output of {@link VerifyUserAttributeCommand}.
 */
export interface VerifyUserAttributeCommandOutput extends VerifyUserAttributeResponse, __MetadataBearer {}

/**
 * Submits a verification code for a signed-in user who has added or changed a value of an auto-verified attribute. When successful, the user's attribute becomes verified and the attribute `email_verified` or `phone_number_verified` becomes `true`.
 *
 * If your user pool requires verification before Amazon Cognito updates the attribute value, this operation updates the affected attribute to its pending value.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, VerifyUserAttributeCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, VerifyUserAttributeCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // VerifyUserAttributeRequest
 *   AccessToken: "STRING_VALUE", // required
 *   AttributeName: "STRING_VALUE", // required
 *   Code: "STRING_VALUE", // required
 * };
 * const command = new VerifyUserAttributeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param VerifyUserAttributeCommandInput - {@link VerifyUserAttributeCommandInput}
 * @returns {@link VerifyUserAttributeCommandOutput}
 * @see {@link VerifyUserAttributeCommandInput} for command's `input` shape.
 * @see {@link VerifyUserAttributeCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link AliasExistsException} (client fault)
 *
 * This exception is thrown when a user tries to confirm the account with an email address or phone number that has already been supplied as an alias for a different user profile. This exception indicates that an account with this email address or phone already exists in a user pool that you've configured to use email address or phone number as a sign-in alias.
 *
 * @throws {@link CodeMismatchException} (client fault)
 *
 * This exception is thrown if the provided code doesn't match what the server was expecting.
 *
 * @throws {@link ExpiredCodeException} (client fault)
 *
 * This exception is thrown if a code has expired.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
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
export class VerifyUserAttributeCommand extends command<VerifyUserAttributeCommandInput, VerifyUserAttributeCommandOutput>(
  _ep0,
  _mw0,
  "VerifyUserAttribute",
  VerifyUserAttribute$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: VerifyUserAttributeRequest;
      output: {};
    };
    sdk: {
      input: VerifyUserAttributeCommandInput;
      output: VerifyUserAttributeCommandOutput;
    };
  };
}
