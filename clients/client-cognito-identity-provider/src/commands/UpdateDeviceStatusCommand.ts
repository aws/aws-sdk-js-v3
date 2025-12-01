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
import type { UpdateDeviceStatusRequest, UpdateDeviceStatusResponse } from "../models/models_0";
import { UpdateDeviceStatus } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateDeviceStatusCommand}.
 */
export interface UpdateDeviceStatusCommandInput extends UpdateDeviceStatusRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDeviceStatusCommand}.
 */
export interface UpdateDeviceStatusCommandOutput extends UpdateDeviceStatusResponse, __MetadataBearer {}

/**
 * <p>Updates the status of a the currently signed-in user's device so that it is
 *             marked as remembered or not remembered for the purpose of device authentication. Device
 *             authentication is a "remember me" mechanism that silently completes sign-in from trusted
 *             devices with a device key instead of a user-provided MFA code. This operation changes
 *             the status of a device without deleting it, so you can enable it again later. For more
 *             information about device authentication, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/amazon-cognito-user-pools-device-tracking.html">Working with devices</a>.</p>
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
 * import { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateDeviceStatusCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateDeviceStatusRequest
 *   AccessToken: "STRING_VALUE", // required
 *   DeviceKey: "STRING_VALUE", // required
 *   DeviceRememberedStatus: "remembered" || "not_remembered",
 * };
 * const command = new UpdateDeviceStatusCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateDeviceStatusCommandInput - {@link UpdateDeviceStatusCommandInput}
 * @returns {@link UpdateDeviceStatusCommandOutput}
 * @see {@link UpdateDeviceStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceStatusCommandOutput} for command's `response` shape.
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
export class UpdateDeviceStatusCommand extends $Command
  .classBuilder<
    UpdateDeviceStatusCommandInput,
    UpdateDeviceStatusCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "UpdateDeviceStatus", {})
  .n("CognitoIdentityProviderClient", "UpdateDeviceStatusCommand")
  .sc(UpdateDeviceStatus)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateDeviceStatusRequest;
      output: {};
    };
    sdk: {
      input: UpdateDeviceStatusCommandInput;
      output: UpdateDeviceStatusCommandOutput;
    };
  };
}
