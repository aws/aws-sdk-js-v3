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
  DescribeRiskConfigurationRequest,
  DescribeRiskConfigurationRequestFilterSensitiveLog,
  DescribeRiskConfigurationResponse,
  DescribeRiskConfigurationResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeRiskConfigurationCommand, se_DescribeRiskConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRiskConfigurationCommand}.
 */
export interface DescribeRiskConfigurationCommandInput extends DescribeRiskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRiskConfigurationCommand}.
 */
export interface DescribeRiskConfigurationCommandOutput extends DescribeRiskConfigurationResponse, __MetadataBearer {}

/**
 * <p>Given an app client or user pool ID where threat protection is configured, describes
 *             the risk configuration. This operation returns details about adaptive authentication,
 *             compromised credentials, and IP-address allow- and denylists. For more information about
 *             threat protection, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-threat-protection.html">Threat protection</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, DescribeRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // DescribeRiskConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 * };
 * const command = new DescribeRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRiskConfigurationResponse
 * //   RiskConfiguration: { // RiskConfigurationType
 * //     UserPoolId: "STRING_VALUE",
 * //     ClientId: "STRING_VALUE",
 * //     CompromisedCredentialsRiskConfiguration: { // CompromisedCredentialsRiskConfigurationType
 * //       EventFilter: [ // EventFiltersType
 * //         "SIGN_IN" || "PASSWORD_CHANGE" || "SIGN_UP",
 * //       ],
 * //       Actions: { // CompromisedCredentialsActionsType
 * //         EventAction: "BLOCK" || "NO_ACTION", // required
 * //       },
 * //     },
 * //     AccountTakeoverRiskConfiguration: { // AccountTakeoverRiskConfigurationType
 * //       NotifyConfiguration: { // NotifyConfigurationType
 * //         From: "STRING_VALUE",
 * //         ReplyTo: "STRING_VALUE",
 * //         SourceArn: "STRING_VALUE", // required
 * //         BlockEmail: { // NotifyEmailType
 * //           Subject: "STRING_VALUE", // required
 * //           HtmlBody: "STRING_VALUE",
 * //           TextBody: "STRING_VALUE",
 * //         },
 * //         NoActionEmail: {
 * //           Subject: "STRING_VALUE", // required
 * //           HtmlBody: "STRING_VALUE",
 * //           TextBody: "STRING_VALUE",
 * //         },
 * //         MfaEmail: {
 * //           Subject: "STRING_VALUE", // required
 * //           HtmlBody: "STRING_VALUE",
 * //           TextBody: "STRING_VALUE",
 * //         },
 * //       },
 * //       Actions: { // AccountTakeoverActionsType
 * //         LowAction: { // AccountTakeoverActionType
 * //           Notify: true || false, // required
 * //           EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 * //         },
 * //         MediumAction: {
 * //           Notify: true || false, // required
 * //           EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 * //         },
 * //         HighAction: {
 * //           Notify: true || false, // required
 * //           EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 * //         },
 * //       },
 * //     },
 * //     RiskExceptionConfiguration: { // RiskExceptionConfigurationType
 * //       BlockedIPRangeList: [ // BlockedIPRangeListType
 * //         "STRING_VALUE",
 * //       ],
 * //       SkippedIPRangeList: [ // SkippedIPRangeListType
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     LastModifiedDate: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeRiskConfigurationCommandInput - {@link DescribeRiskConfigurationCommandInput}
 * @returns {@link DescribeRiskConfigurationCommandOutput}
 * @see {@link DescribeRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeRiskConfigurationCommandOutput} for command's `response` shape.
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
 * @throws {@link UserPoolAddOnNotEnabledException} (client fault)
 *  <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 *
 * @public
 */
export class DescribeRiskConfigurationCommand extends $Command
  .classBuilder<
    DescribeRiskConfigurationCommandInput,
    DescribeRiskConfigurationCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "DescribeRiskConfiguration", {})
  .n("CognitoIdentityProviderClient", "DescribeRiskConfigurationCommand")
  .f(DescribeRiskConfigurationRequestFilterSensitiveLog, DescribeRiskConfigurationResponseFilterSensitiveLog)
  .ser(se_DescribeRiskConfigurationCommand)
  .de(de_DescribeRiskConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRiskConfigurationRequest;
      output: DescribeRiskConfigurationResponse;
    };
    sdk: {
      input: DescribeRiskConfigurationCommandInput;
      output: DescribeRiskConfigurationCommandOutput;
    };
  };
}
