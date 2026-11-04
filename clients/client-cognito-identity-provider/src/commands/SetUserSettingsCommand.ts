// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SetUserSettingsRequest, SetUserSettingsResponse } from "../models/models_1";
import { SetUserSettings$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SetUserSettingsCommand}.
 */
export interface SetUserSettingsCommandInput extends SetUserSettingsRequest {}
/**
 * @public
 *
 * The output of {@link SetUserSettingsCommand}.
 */
export interface SetUserSettingsCommandOutput extends SetUserSettingsResponse, __MetadataBearer {}

/**
 * *This action is no longer supported.* You can use it to configure only SMS MFA. You can't use it to configure time-based one-time password (TOTP) software token or email MFA.
 *
 * Authorize this action with a signed-in user's access token. It must include the scope `aws.cognito.signin.user.admin`.
 *
 * > **Note:** Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you can't use IAM credentials to authorize requests, and you can't grant IAM permissions in policies. For more information about authorization models in Amazon Cognito, see [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetUserSettingsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetUserSettingsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetUserSettingsRequest
 *   AccessToken: "STRING_VALUE", // required
 *   MFAOptions: [ // MFAOptionListType // required
 *     { // MFAOptionType
 *       DeliveryMedium: "SMS" || "EMAIL",
 *       AttributeName: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new SetUserSettingsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SetUserSettingsCommandInput - {@link SetUserSettingsCommandInput}
 * @returns {@link SetUserSettingsCommandOutput}
 * @see {@link SetUserSettingsCommandInput} for command's `input` shape.
 * @see {@link SetUserSettingsCommandOutput} for command's `response` shape.
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
export class SetUserSettingsCommand extends command<SetUserSettingsCommandInput, SetUserSettingsCommandOutput>(
  _ep0,
  _mw0,
  "SetUserSettings",
  SetUserSettings$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SetUserSettingsRequest;
      output: {};
    };
    sdk: {
      input: SetUserSettingsCommandInput;
      output: SetUserSettingsCommandOutput;
    };
  };
}
