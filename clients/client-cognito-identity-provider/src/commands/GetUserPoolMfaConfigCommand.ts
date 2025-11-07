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
import { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/models_1";
import { GetUserPoolMfaConfig } from "../schemas/schemas_0";

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
 * <p>Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators
 *             and for multi-factor authentication (MFA). This operation describes the
 *             following:</p>
 *          <ul>
 *             <li>
 *                <p>The WebAuthn relying party (RP) ID and user-verification settings.</p>
 *             </li>
 *             <li>
 *                <p>The required, optional, or disabled state of MFA for all user pool
 *                     users.</p>
 *             </li>
 *             <li>
 *                <p>The message templates for email and SMS MFA.</p>
 *             </li>
 *             <li>
 *                <p>The enabled or disabled state of time-based one-time password (TOTP)
 *                     MFA.</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you must use IAM credentials to authorize requests, and you must
 *     grant yourself the corresponding IAM permission in a policy.</p>
 *             <p class="title">
 *                <b>Learn more</b>
 *             </p>
 *             <ul>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html">Signing Amazon Web Services API Requests</a>
 *                   </p>
 *                </li>
 *                <li>
 *                   <p>
 *                      <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>
 *                   </p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, GetUserPoolMfaConfigCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSCognitoIdentityProviderService", "GetUserPoolMfaConfig", {})
  .n("CognitoIdentityProviderClient", "GetUserPoolMfaConfigCommand")
  .sc(GetUserPoolMfaConfig)
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
