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
  SetRiskConfigurationRequest,
  SetRiskConfigurationRequestFilterSensitiveLog,
  SetRiskConfigurationResponse,
  SetRiskConfigurationResponseFilterSensitiveLog,
} from "../models/models_1";
import { de_SetRiskConfigurationCommand, se_SetRiskConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SetRiskConfigurationCommand}.
 */
export interface SetRiskConfigurationCommandInput extends SetRiskConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link SetRiskConfigurationCommand}.
 */
export interface SetRiskConfigurationCommandOutput extends SetRiskConfigurationResponse, __MetadataBearer {}

/**
 * <p>Configures actions on detected risks. To delete the risk configuration for
 *                 <code>UserPoolId</code> or <code>ClientId</code>, pass null values for all four
 *             configuration types.</p>
 *          <p>To activate Amazon Cognito advanced security features, update the user pool to include the
 *                 <code>UserPoolAddOns</code> key<code>AdvancedSecurityMode</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, SetRiskConfigurationCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, SetRiskConfigurationCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // SetRiskConfigurationRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   ClientId: "STRING_VALUE",
 *   CompromisedCredentialsRiskConfiguration: { // CompromisedCredentialsRiskConfigurationType
 *     EventFilter: [ // EventFiltersType
 *       "SIGN_IN" || "PASSWORD_CHANGE" || "SIGN_UP",
 *     ],
 *     Actions: { // CompromisedCredentialsActionsType
 *       EventAction: "BLOCK" || "NO_ACTION", // required
 *     },
 *   },
 *   AccountTakeoverRiskConfiguration: { // AccountTakeoverRiskConfigurationType
 *     NotifyConfiguration: { // NotifyConfigurationType
 *       From: "STRING_VALUE",
 *       ReplyTo: "STRING_VALUE",
 *       SourceArn: "STRING_VALUE", // required
 *       BlockEmail: { // NotifyEmailType
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *       NoActionEmail: {
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *       MfaEmail: {
 *         Subject: "STRING_VALUE", // required
 *         HtmlBody: "STRING_VALUE",
 *         TextBody: "STRING_VALUE",
 *       },
 *     },
 *     Actions: { // AccountTakeoverActionsType
 *       LowAction: { // AccountTakeoverActionType
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *       MediumAction: {
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *       HighAction: {
 *         Notify: true || false, // required
 *         EventAction: "BLOCK" || "MFA_IF_CONFIGURED" || "MFA_REQUIRED" || "NO_ACTION", // required
 *       },
 *     },
 *   },
 *   RiskExceptionConfiguration: { // RiskExceptionConfigurationType
 *     BlockedIPRangeList: [ // BlockedIPRangeListType
 *       "STRING_VALUE",
 *     ],
 *     SkippedIPRangeList: [ // SkippedIPRangeListType
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new SetRiskConfigurationCommand(input);
 * const response = await client.send(command);
 * // { // SetRiskConfigurationResponse
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
 * @param SetRiskConfigurationCommandInput - {@link SetRiskConfigurationCommandInput}
 * @returns {@link SetRiskConfigurationCommandOutput}
 * @see {@link SetRiskConfigurationCommandInput} for command's `input` shape.
 * @see {@link SetRiskConfigurationCommandOutput} for command's `response` shape.
 * @see {@link CognitoIdentityProviderClientResolvedConfig | config} for CognitoIdentityProviderClient's `config` shape.
 *
 * @throws {@link CodeDeliveryFailureException} (client fault)
 *  <p>This exception is thrown when a verification code fails to deliver
 *             successfully.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>This exception is thrown when Amazon Cognito encounters an internal error.</p>
 *
 * @throws {@link InvalidEmailRoleAccessPolicyException} (client fault)
 *  <p>This exception is thrown when Amazon Cognito isn't allowed to use your email identity. HTTP
 *             status code: 400.</p>
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
 * @public
 */
export class SetRiskConfigurationCommand extends $Command
  .classBuilder<
    SetRiskConfigurationCommandInput,
    SetRiskConfigurationCommandOutput,
    CognitoIdentityProviderClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: CognitoIdentityProviderClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSCognitoIdentityProviderService", "SetRiskConfiguration", {})
  .n("CognitoIdentityProviderClient", "SetRiskConfigurationCommand")
  .f(SetRiskConfigurationRequestFilterSensitiveLog, SetRiskConfigurationResponseFilterSensitiveLog)
  .ser(se_SetRiskConfigurationCommand)
  .de(de_SetRiskConfigurationCommand)
  .build() {}
