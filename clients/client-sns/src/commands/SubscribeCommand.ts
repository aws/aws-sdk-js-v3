// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { SubscribeInput, SubscribeResponse } from "../models/models_0";
import { de_SubscribeCommand, se_SubscribeCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SubscribeCommand}.
 */
export interface SubscribeCommandInput extends SubscribeInput {}
/**
 * @public
 *
 * The output of {@link SubscribeCommand}.
 */
export interface SubscribeCommandOutput extends SubscribeResponse, __MetadataBearer {}

/**
 * <p>Subscribes an endpoint to an Amazon SNS topic. If the endpoint type is HTTP/S or email, or
 *             if the endpoint and the topic are not in the same Amazon Web Services account, the endpoint owner must
 *             run the <code>ConfirmSubscription</code> action to confirm the subscription.</p>
 *          <p>You call the <code>ConfirmSubscription</code> action with the token from the
 *             subscription response. Confirmation tokens are valid for two days.</p>
 *          <p>This action is throttled at 100 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SubscribeCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SubscribeCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const input = { // SubscribeInput
 *   TopicArn: "STRING_VALUE", // required
 *   Protocol: "STRING_VALUE", // required
 *   Endpoint: "STRING_VALUE",
 *   Attributes: { // SubscriptionAttributesMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ReturnSubscriptionArn: true || false,
 * };
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * // { // SubscribeResponse
 * //   SubscriptionArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SubscribeCommandInput - {@link SubscribeCommandInput}
 * @returns {@link SubscribeCommandOutput}
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
 *
 * @throws {@link FilterPolicyLimitExceededException} (client fault)
 *  <p>Indicates that the number of filter polices in your Amazon Web Services account exceeds the limit. To
 *             add more filter polices, submit an Amazon SNS Limit Increase case in the Amazon Web ServicesSupport
 *             Center.</p>
 *
 * @throws {@link InternalErrorException} (server fault)
 *  <p>Indicates an internal service error.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>Indicates that a request parameter does not comply with the associated
 *             constraints.</p>
 *
 * @throws {@link InvalidSecurityException} (client fault)
 *  <p>The credential signature isn't valid. You must use an HTTPS endpoint and sign your
 *             request using Signature Version 4.</p>
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
 *
 * @public
 */
export class SubscribeCommand extends $Command
  .classBuilder<
    SubscribeCommandInput,
    SubscribeCommandOutput,
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
  .s("AmazonSimpleNotificationService", "Subscribe", {})
  .n("SNSClient", "SubscribeCommand")
  .f(void 0, void 0)
  .ser(se_SubscribeCommand)
  .de(de_SubscribeCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SubscribeInput;
      output: SubscribeResponse;
    };
    sdk: {
      input: SubscribeCommandInput;
      output: SubscribeCommandOutput;
    };
  };
}
