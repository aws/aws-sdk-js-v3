// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AdminListUserAuthEventsRequest, AdminListUserAuthEventsResponse } from "../models/models_0";
import { AdminListUserAuthEvents$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Requests a history of user activity and any risks detected as part of Amazon Cognito threat protection. For more information, see [Viewing user event history](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pool-settings-adaptive-authentication.html#user-pool-settings-adaptive-authentication-event-user-history).
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
 * import { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminListUserAuthEventsCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * // import type { CognitoIdentityProviderClientConfig } from "@aws-sdk/client-cognito-identity-provider";
 * const config = {}; // type is CognitoIdentityProviderClientConfig
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * This exception is thrown when the Amazon Cognito service can't find the requested resource.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * This exception is thrown when the user has made too many requests for a given operation.
 *
 * @throws {@link UserNotFoundException} (client fault)
 *
 * This exception is thrown when a user isn't found.
 *
 * @throws {@link UserPoolAddOnNotEnabledException} (client fault)
 *
 * This exception is thrown when user pool add-ons aren't enabled.
 *
 * @throws {@link CognitoIdentityProviderServiceException}
 *
 * Base exception class for all service exceptions from CognitoIdentityProvider service.
 *
 * @public
 */
export class AdminListUserAuthEventsCommand extends command<AdminListUserAuthEventsCommandInput, AdminListUserAuthEventsCommandOutput>(
  _ep0,
  _mw0,
  "AdminListUserAuthEvents",
  AdminListUserAuthEvents$
) {
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
