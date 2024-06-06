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
  AdminUpdateAuthEventFeedbackRequest,
  AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog,
  AdminUpdateAuthEventFeedbackResponse,
} from "../models/models_0";
import {
  de_AdminUpdateAuthEventFeedbackCommand,
  se_AdminUpdateAuthEventFeedbackCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AdminUpdateAuthEventFeedbackCommand}.
 */
export interface AdminUpdateAuthEventFeedbackCommandInput extends AdminUpdateAuthEventFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link AdminUpdateAuthEventFeedbackCommand}.
 */
export interface AdminUpdateAuthEventFeedbackCommandOutput
  extends AdminUpdateAuthEventFeedbackResponse,
    __MetadataBearer {}

/**
 * <p>Provides feedback for an authentication event indicating if it was from a valid user.
 *             This feedback is used for improving the risk evaluation decision for the user pool as
 *             part of Amazon Cognito advanced security.</p>
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
 * import { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, AdminUpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // AdminUpdateAuthEventFeedbackRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   EventId: "STRING_VALUE", // required
 *   FeedbackValue: "Valid" || "Invalid", // required
 * };
 * const command = new AdminUpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AdminUpdateAuthEventFeedbackCommandInput - {@link AdminUpdateAuthEventFeedbackCommandInput}
 * @returns {@link AdminUpdateAuthEventFeedbackCommandOutput}
 * @see {@link AdminUpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link AdminUpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
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
export class AdminUpdateAuthEventFeedbackCommand extends $Command
  .classBuilder<
    AdminUpdateAuthEventFeedbackCommandInput,
    AdminUpdateAuthEventFeedbackCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "AdminUpdateAuthEventFeedback", {})
  .n("CognitoIdentityProviderClient", "AdminUpdateAuthEventFeedbackCommand")
  .f(AdminUpdateAuthEventFeedbackRequestFilterSensitiveLog, void 0)
  .ser(se_AdminUpdateAuthEventFeedbackCommand)
  .de(de_AdminUpdateAuthEventFeedbackCommand)
  .build() {}
