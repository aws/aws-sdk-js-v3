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
  UpdateAuthEventFeedbackRequest,
  UpdateAuthEventFeedbackRequestFilterSensitiveLog,
  UpdateAuthEventFeedbackResponse,
} from "../models/models_1";
import { de_UpdateAuthEventFeedbackCommand, se_UpdateAuthEventFeedbackCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateAuthEventFeedbackCommand}.
 */
export interface UpdateAuthEventFeedbackCommandInput extends UpdateAuthEventFeedbackRequest {}
/**
 * @public
 *
 * The output of {@link UpdateAuthEventFeedbackCommand}.
 */
export interface UpdateAuthEventFeedbackCommandOutput extends UpdateAuthEventFeedbackResponse, __MetadataBearer {}

/**
 * <p>Provides the feedback for an authentication event, whether it was from a valid user or
 *             not. This feedback is used for improving the risk evaluation decision for the user pool
 *             as part of Amazon Cognito advanced security.</p>
 *          <note>
 *             <p>Amazon Cognito doesn't evaluate Identity and Access Management (IAM) policies in requests for this API operation. For
 *     this operation, you can't use IAM credentials to authorize requests, and you can't
 *     grant IAM permissions in policies. For more information about authorization models in
 *     Amazon Cognito, see <a href="https://docs.aws.amazon.com/cognito/latest/developerguide/user-pools-API-operations.html">Using the Amazon Cognito user pools API and user pool endpoints</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
 * // const { CognitoIdentityProviderClient, UpdateAuthEventFeedbackCommand } = require("@aws-sdk/client-cognito-identity-provider"); // CommonJS import
 * const client = new CognitoIdentityProviderClient(config);
 * const input = { // UpdateAuthEventFeedbackRequest
 *   UserPoolId: "STRING_VALUE", // required
 *   Username: "STRING_VALUE", // required
 *   EventId: "STRING_VALUE", // required
 *   FeedbackToken: "STRING_VALUE", // required
 *   FeedbackValue: "Valid" || "Invalid", // required
 * };
 * const command = new UpdateAuthEventFeedbackCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateAuthEventFeedbackCommandInput - {@link UpdateAuthEventFeedbackCommandInput}
 * @returns {@link UpdateAuthEventFeedbackCommandOutput}
 * @see {@link UpdateAuthEventFeedbackCommandInput} for command's `input` shape.
 * @see {@link UpdateAuthEventFeedbackCommandOutput} for command's `response` shape.
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
export class UpdateAuthEventFeedbackCommand extends $Command
  .classBuilder<
    UpdateAuthEventFeedbackCommandInput,
    UpdateAuthEventFeedbackCommandOutput,
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
  .s("AWSCognitoIdentityProviderService", "UpdateAuthEventFeedback", {})
  .n("CognitoIdentityProviderClient", "UpdateAuthEventFeedbackCommand")
  .f(UpdateAuthEventFeedbackRequestFilterSensitiveLog, void 0)
  .ser(se_UpdateAuthEventFeedbackCommand)
  .de(de_UpdateAuthEventFeedbackCommand)
  .build() {}
