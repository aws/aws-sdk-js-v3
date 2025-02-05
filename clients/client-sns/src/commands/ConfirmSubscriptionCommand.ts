// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ConfirmSubscriptionInput, ConfirmSubscriptionResponse } from "../models/models_0";
import { de_ConfirmSubscriptionCommand, se_ConfirmSubscriptionCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ConfirmSubscriptionCommand}.
 */
export interface ConfirmSubscriptionCommandInput extends ConfirmSubscriptionInput {}
/**
 * @public
 *
 * The output of {@link ConfirmSubscriptionCommand}.
 */
export interface ConfirmSubscriptionCommandOutput extends ConfirmSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ConfirmSubscriptionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SNSClient(config);
 * const input = { // ConfirmSubscriptionInput
 *   TopicArn: "STRING_VALUE", // required
 *   Token: "STRING_VALUE", // required
 *   AuthenticateOnUnsubscribe: "STRING_VALUE",
 * };
 * const command = new ConfirmSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // ConfirmSubscriptionResponse
 * //   SubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ConfirmSubscriptionCommandInput - {@link ConfirmSubscriptionCommandInput}
 * @returns {@link ConfirmSubscriptionCommandOutput}
 * @see {@link ConfirmSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ConfirmSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link FilterPolicyLimitExceededException} (client fault)
 *  <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web Services Support
 *             Center.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Indicates that the requested resource does not exist.</p>
 *
 * @throws {@link ReplayLimitExceededException} (client fault)
 *  <p>Indicates that the request parameter has exceeded the maximum number of concurrent message replays.</p>
 *
 * @throws {@link SubscriptionLimitExceededException} (client fault)
 *  <p>Indicates that the customer already owns the maximum allowed number of
 *             subscriptions.</p>
 *
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 * @public
 */
export class ConfirmSubscriptionCommand extends $Command
  .classBuilder<
    ConfirmSubscriptionCommandInput,
    ConfirmSubscriptionCommandOutput,
    SNSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SNSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSimpleNotificationService", "ConfirmSubscription", {})
  .n("SNSClient", "ConfirmSubscriptionCommand")
  .f(void 0, void 0)
  .ser(se_ConfirmSubscriptionCommand)
  .de(de_ConfirmSubscriptionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ConfirmSubscriptionInput;
      output: ConfirmSubscriptionResponse;
    };
    sdk: {
      input: ConfirmSubscriptionCommandInput;
      output: ConfirmSubscriptionCommandOutput;
    };
  };
}
