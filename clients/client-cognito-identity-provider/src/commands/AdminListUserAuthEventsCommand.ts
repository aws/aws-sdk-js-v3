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
  AdminListUserAuthEventsRequest,
  AdminListUserAuthEventsRequestFilterSensitiveLog,
  AdminListUserAuthEventsResponse,
} from "../models/models_0";
import { de_AdminListUserAuthEventsCommand, se_AdminListUserAuthEventsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminListUserAuthEventsCommand}.
 */
export interface AdminListUserAuthEventsCommandInput extends AdminListUserAuthEventsRequest {}
/**
 * @public
 *
 * The output of {@link AdminListUserAuthEventsCommand}.
 */
export interface AdminListUserAuthEventsCommandOutput extends AdminListUserAuthEventsResponse, __MetadataBearer {}

/**
 * <p>Requests a history of user activity and any risks detected as part of Amazon Cognito threat
 *             protection. For more information, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-event-user-history">Viewing user event history</a>.</p>
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
 * import { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminListUserAuthEventsRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new AdminListUserAuthEventsCommand(input);
 * const response = await client.send(command);
 * // { // AdminListUserAuthEventsResponse
 * //   AuthEvents: [ // AuthEventsType
 * //     { // AuthEventType
 * //       EventId: "STRING_VALUE",
 * //       EventType: "SignIn" || "SignUp" || "ForgotPassword" || "PasswordChange" || "ResendCode",
 * //       CreationDate: new Date("TIMESTAMP"),
 * //       EventResponse: "Pass" || "Fail" || "InProgress",
 * //       EventRisk: { // EventRiskType
 * //         RiskDecision: "NoRisk" || "AccountTakeover" || "Block",
 * //         RiskLevel: "Low" || "Medium" || "High",
 * //         CompromisedCredentialsDetected: true || false,
 * //       },
 * //       ChallengeResponses: [ // ChallengeResponseListType
 * //         { // ChallengeResponseType
 * //           ChallengeName: "Password" || "Mfa",
 * //           ChallengeResponse: "Success" || "Failure",
 * //         },
 * //       ],
 * //       EventContextData: { // EventContextDataType
 * //         IpAddress: "STRING_VALUE",
 * //         DeviceName: "STRING_VALUE",
 * //         Timezone: "STRING_VALUE",
 * //         City: "STRING_VALUE",
 * //         Country: "STRING_VALUE",
 * //       },
 * //       EventFeedback: { // EventFeedbackType
 * //         FeedbackValue: "Valid" || "Invalid", // required
 * //         Provider: "STRING_VALUE", // required
 * //         FeedbackDate: new Date("TIMESTAMP"),
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AdminListUserAuthEventsCommandInput - {@link AdminListUserAuthEventsCommandInput}
 * @returns {@link AdminListUserAuthEventsCommandOutput}
 * @see {@link AdminListUserAuthEventsCommandInput} for command's `input` shape.
 * @see {@link AdminListUserAuthEventsCommandOutput} for command's `response` shape.
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
 * @throws {@link UserNotFoundException} (client fault)
 *  <p>This exception is thrown when a user isn't found.</p>
 *
 * @throws {@link UserPoolAddOnNotEnabledException} (client fault)
 *  <p>This exception is thrown when user pool add-ons aren't enabled.</p>
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 * <p>Base exception class for all service exceptions from CognitoIdentityProvider service.</p>
 *
 * @public
 */
export class AdminListUserAuthEventsCommand extends $Command
  .classBuilder<
    AdminListUserAuthEventsCommandInput,
    AdminListUserAuthEventsCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminListUserAuthEvents", {})
  .n("CognitoIdentityProviderClient", "AdminListUserAuthEventsCommand")
  .f(AdminListUserAuthEventsRequestFilterSensitiveLog, void 0)
  .ser(se_AdminListUserAuthEventsCommand)
  .de(de_AdminListUserAuthEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AdminListUserAuthEventsRequest;
      output: AdminListUserAuthEventsResponse;
    };
    sdk: {
      input: AdminListUserAuthEventsCommandInput;
      output: AdminListUserAuthEventsCommandOutput;
    };
  };
}
