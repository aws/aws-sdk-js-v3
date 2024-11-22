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
import { GetUserPoolMfaConfigRequest } from "../models/models_0";
import { GetUserPoolMfaConfigResponse } from "../models/models_1";
import { de_GetUserPoolMfaConfigCommand, se_GetUserPoolMfaConfigCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetUserPoolMfaConfigCommand}.
 */
export interface GetUserPoolMfaConfigCommandInput extends GetUserPoolMfaConfigRequest {}
/**
 * @public
 *
 * The output of {@link GetUserPoolMfaConfigCommand}.
 */
export interface GetUserPoolMfaConfigCommandOutput extends GetUserPoolMfaConfigResponse, __MetadataBearer {}

/**
 * <p>Gets the user pool multi-factor authentication (MFA) configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // GetUserPoolMfaConfigRequest
 *   UserPoolId: "STRING_VALUE", // required
 * };
 * const command = new GetUserPoolMfaConfigCommand(input);
 * const response = await client.send(command);
 * // { // GetUserPoolMfaConfigResponse
 * //   SmsMfaConfiguration: { // SmsMfaConfigType
 * //     SmsAuthenticationMessage: "STRING_VALUE",
 * //     SmsConfiguration: { // SmsConfigurationType
 * //       SnsCallerArn: "STRING_VALUE", // required
 * //       ExternalId: "STRING_VALUE",
 * //       SnsRegion: "STRING_VALUE",
 * //     },
 * //   },
 * //   SoftwareTokenMfaConfiguration: { // SoftwareTokenMfaConfigType
 * //     Enabled: true || false,
 * //   },
 * //   EmailMfaConfiguration: { // EmailMfaConfigType
 * //     Message: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //   },
 * //   MfaConfiguration: "OFF" || "ON" || "OPTIONAL",
 * //   WebAuthnConfiguration: { // WebAuthnConfigurationType
 * //     RelyingPartyId: "STRING_VALUE",
 * //     UserVerification: "required" || "preferred",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetUserPoolMfaConfigCommandInput - {@link GetUserPoolMfaConfigCommandInput}
 * @returns {@link GetUserPoolMfaConfigCommandOutput}
 * @see {@link GetUserPoolMfaConfigCommandInput} for command's `input` shape.
 * @see {@link GetUserPoolMfaConfigCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>This exception is thrown when the Amazon Cognito service can't find the requested
 *             resource.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>This exception is thrown when the user has made too many requests for a given
 *             operation.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class GetUserPoolMfaConfigCommand extends $Command
  .classBuilder<
    GetUserPoolMfaConfigCommandInput,
    GetUserPoolMfaConfigCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "GetUserPoolMfaConfig", {})
  .n("CognitoIdentityProviderClient", "GetUserPoolMfaConfigCommand")
  .f(void 0, void 0)
  .ser(se_GetUserPoolMfaConfigCommand)
  .de(de_GetUserPoolMfaConfigCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetUserPoolMfaConfigRequest;
      output: GetUserPoolMfaConfigResponse;
    };
    sdk: {
      input: GetUserPoolMfaConfigCommandInput;
      output: GetUserPoolMfaConfigCommandOutput;
    };
  };
}
