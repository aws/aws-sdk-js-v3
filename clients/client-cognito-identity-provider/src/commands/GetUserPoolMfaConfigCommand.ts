// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetUserPoolMfaConfigRequest, GetUserPoolMfaConfigResponse } from "../models/models_0";
import { GetUserPoolMfaConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Given a user pool ID, returns configuration for sign-in with WebAuthn authenticators and for multi-factor authentication (MFA). This operation describes the following:
 *
 * - The WebAuthn relying party (RP) ID and user-verification settings.
 * - The required, optional, or disabled state of MFA for all user pool users.
 * - The message templates for email and SMS MFA.
 * - The enabled or disabled state of time-based one-time password (TOTP) MFA.
 *
 * > **Note:**
 * >
 * > Amazon Cognito evaluates Identity and Access Management (IAM) policies in requests for this API operation. For this operation, you must use IAM credentials to authorize requests, and you must grant yourself the corresponding IAM permission in a policy.
 * >
 * > **Learn more**
 * >
 * > - [Signing Amazon Web Services API Requests](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_aws-signing.html)
 * > - [Using the Amazon Cognito user pools API and user pool endpoints](https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html)
 *
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
 * //       SnsCallerArn: "STRING_VALUE",
 * //       ExternalId: "STRING_VALUE",
 * //       SnsRegion: "STRING_VALUE",
 * //       EumsSms: { // EumsSmsConfigurationType
 * //         CallerArn: "STRING_VALUE", // required
 * //         ExternalId: "STRING_VALUE",
 * //         OriginationIdentity: "STRING_VALUE",
 * //         ConfigurationSetName: "STRING_VALUE",
 * //         InEntityId: "STRING_VALUE",
 * //         InTemplateId: "STRING_VALUE",
 * //         Region: "STRING_VALUE",
 * //       },
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
 * //     FactorConfiguration: "SINGLE_FACTOR" || "MULTI_FACTOR_WITH_USER_VERIFICATION",
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class GetUserPoolMfaConfigCommand extends command<GetUserPoolMfaConfigCommandInput, GetUserPoolMfaConfigCommandOutput>(
  _ep0,
  _mw0,
  "GetUserPoolMfaConfig",
  GetUserPoolMfaConfig$
) {
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
