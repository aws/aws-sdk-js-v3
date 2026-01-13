// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  CognitoIdentityProviderClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CognitoIdentityProviderClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ConfirmDeviceRequest, ConfirmDeviceResponse } from "../models/models_0";
import { ConfirmDevice$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmDeviceCommand}.
 */
export interface ConfirmDeviceCommandInput extends ConfirmDeviceRequest {}
/**
 * @public
 *
 * The output of {@link ConfirmDeviceCommand}.
 */
export interface ConfirmDeviceCommandOutput extends ConfirmDeviceResponse, __MetadataBearer {}

/**
 * <p>Confirms a device that a user wants to remember. A remembered device is a "Remember me
 *             on this device" option for user pools that perform authentication with the device key of
 *             a trusted device in the back end, instead of a user-provided MFA code. For more
 *             information about device authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with user devices in your user pool</a>.</p>
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
 * import { CognitoIdentityProviderClient, ConfirmDeviceCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, ConfirmDeviceCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // ConfirmDeviceRequest
 *   AccessToken: "STRING_VALUE", // required
 *   DeviceKey: "STRING_VALUE", // required
 *   DeviceSecretVerifierConfig: { // DeviceSecretVerifierConfigType
 *     PasswordVerifier: "STRING_VALUE",
 *     Salt: "STRING_VALUE",
 *   },
 *   DeviceName: "STRING_VALUE",
 * };
 * const command = new ConfirmDeviceCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmDeviceResponse
 * //   UserConfirmationNecessary: true || false,
 * // };
 *
 * ```
 *
 * @param ConfirmDeviceCommandInput - {@link ConfirmDeviceCommandInput}
 * @returns {@link ConfirmDeviceCommandOutput}
 * @see {@link ConfirmDeviceCommandInput} for command's `input` shape.
 * @see {@link ConfirmDeviceCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link DeviceKeyExistsException} (client fault)
 *  <p>This exception is thrown when a user attempts to confirm a device with a device key
 *             that already exists.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>This exception is thrown when WAF doesn't allow your request based on a web
 *             ACL that's associated with your user pool.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidLambdaResponseException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid Lambda response.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service encounters an invalid
 *             parameter.</p>
 *
 * @throws {@link InvalidPasswordException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an invalid password.</p>
 *
 * @throws {@link InvalidUserPoolConfigurationException} (client fault)
 *  <p>This exception is thrown when the user pool configuration is not valid.</p>
 *
 * @throws {@link NotAuthorizedException} (client fault)
 *  <p>This exception is thrown when a user isn't authorized.</p>
 *
 * @throws {@link PasswordResetRequiredException} (client fault)
 *  <p>This exception is thrown when a password reset is required.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link UsernameExistsException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito encounters a user name that already
 *             exists in the user pool.</p>
 *
 * @throws {@link UserNotConfirmedException} (client fault)
 *  <p>This exception is thrown when a user isn't confirmed successfully.</p>
 *
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class ConfirmDeviceCommand extends $Command
  .classBuilder<
    ConfirmDeviceCommandInput,
    ConfirmDeviceCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "ConfirmDevice", {})
  .n("CognitoIdentityProviderClient", "ConfirmDeviceCommand")
  .sc(ConfirmDevice$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmDeviceRequest;
      output: ConfirmDeviceResponse;
    };
    sdk: {
      input: ConfirmDeviceCommandInput;
      output: ConfirmDeviceCommandOutput;
    };
  };
}
