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
  GetUserAuthFactorsRequest,
  GetUserAuthFactorsRequestFilterSensitiveLog,
  GetUserAuthFactorsResponse,
  GetUserAuthFactorsResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_GetUserAuthFactorsCommand, se_GetUserAuthFactorsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserAuthFactorsCommand}.
 */
export interface GetUserAuthFactorsCommandInput extends GetUserAuthFactorsRequest {}
/**
 * @public
 *
 * The output of {@link GetUserAuthFactorsCommand}.
 */
export interface GetUserAuthFactorsCommandOutput extends GetUserAuthFactorsResponse, __MetadataBearer {}

/**
 * <p>Lists the authentication options for the currently signed-in user. Returns the
 *             following:</p>
 *          <ol>
 *             <li>
 *                <p>The user's multi-factor authentication (MFA) preferences.</p>
 *             </li>
 *             <li>
 *                <p>The user's options in the <code>USER_AUTH</code> flow that they can
 *                     select in a <code>SELECT_CHALLENGE</code> response or request in a
 *                         <code>PREFERRED_CHALLENGE</code>request.</p>
 *             </li>
 *          </ol>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserAuthFactorsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserAuthFactorsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUserAuthFactorsRequest
 *   AccessToken: "STRING_VALUE", // required
 * };
 * const command = new GetUserAuthFactorsCommand(input);
 * const response = await client.send(command);
 * // { // GetUserAuthFactorsResponse
 * //   Username: "STRING_VALUE", // required
 * //   PreferredMfaSetting: "STRING_VALUE",
 * //   UserMFASettingList: [ // UserMFASettingListType
 * //     "STRING_VALUE",
 * //   ],
 * //   ConfiguredUserAuthFactors: [ // ConfiguredUserAuthFactorsListType
 * //     "PASSWORD" || "EMAIL_OTP" || "SMS_OTP" || "WEB_AUTHN",
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetUserAuthFactorsCommandInput - {@link GetUserAuthFactorsCommandInput}
 * @returns {@link GetUserAuthFactorsCommandOutput}
 * @see {@link GetUserAuthFactorsCommandInput} for command's `input` shape.
 * @see {@link GetUserAuthFactorsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetUserAuthFactorsCommand extends $Command
  .classBuilder<
    GetUserAuthFactorsCommandInput,
    GetUserAuthFactorsCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "GetUserAuthFactors", {})
  .n("CognitoIdentityProviderClient", "GetUserAuthFactorsCommand")
  .f(GetUserAuthFactorsRequestFilterSensitiveLog, GetUserAuthFactorsResponseFilterSensitiveLog)
  .ser(se_GetUserAuthFactorsCommand)
  .de(de_GetUserAuthFactorsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserAuthFactorsRequest;
      output: GetUserAuthFactorsResponse;
    };
    sdk: {
      input: GetUserAuthFactorsCommandInput;
      output: GetUserAuthFactorsCommandOutput;
    };
  };
}
