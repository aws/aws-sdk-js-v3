// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListSubscriptionsByTopicInput, ListSubscriptionsByTopicResponse } from "../models/models_0";
import { de_ListSubscriptionsByTopicCommand, se_ListSubscriptionsByTopicCommand } from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandInput extends ListSubscriptionsByTopicInput {}
/**
 * @public
 *
 * The output of {@link ListSubscriptionsByTopicCommand}.
 */
export interface ListSubscriptionsByTopicCommandOutput extends ListSubscriptionsByTopicResponse, __MetadataBearer {}

/**
 * <p>Returns a list of the subscriptions to a specific topic. Each call returns a limited
 *             list of subscriptions, up to 100. If there are more subscriptions, a
 *                 <code>NextToken</code> is also returned. Use the <code>NextToken</code> parameter in
 *             a new <code>ListSubscriptionsByTopic</code> call to get further results.</p>
 *          <p>This action is throttled at 30 transactions per second (TPS).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ListSubscriptionsByTopicCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ListSubscriptionsByTopicCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * // import type { SNSClientConfig } from "@aws-sdk/client-sns";
 * const config = {}; // type is SNSClientConfig
 * const client = new SNSClient(config);
 * const input = { // ListSubscriptionsByTopicInput
 *   TopicArn: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSubscriptionsByTopicCommand(input);
 * const response = await client.send(command);
 * // { // ListSubscriptionsByTopicResponse
 * //   Subscriptions: [ // SubscriptionsList
 * //     { // Subscription
 * //       SubscriptionArn: "STRING_VALUE",
 * //       Owner: "STRING_VALUE",
 * //       Protocol: "STRING_VALUE",
 * //       Endpoint: "STRING_VALUE",
 * //       TopicArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSubscriptionsByTopicCommandInput - {@link ListSubscriptionsByTopicCommandInput}
 * @returns {@link ListSubscriptionsByTopicCommandOutput}
 * @see {@link ListSubscriptionsByTopicCommandInput} for command's `input` shape.
 * @see {@link ListSubscriptionsByTopicCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 * @throws {@link AuthorizationErrorException} (client fault)
 *  <p>Indicates that the user has been denied access to the requested resource.</p>
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
 * @throws {@link SNSServiceException}
 * <p>Base exception class for all service exceptions from SNS service.</p>
 *
 *
 * @public
 */
export class ListSubscriptionsByTopicCommand extends $Command
  .classBuilder<
    ListSubscriptionsByTopicCommandInput,
    ListSubscriptionsByTopicCommandOutput,
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
  .s("AmazonSimpleNotificationService", "ListSubscriptionsByTopic", {})
  .n("SNSClient", "ListSubscriptionsByTopicCommand")
  .f(void 0, void 0)
  .ser(se_ListSubscriptionsByTopicCommand)
  .de(de_ListSubscriptionsByTopicCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSubscriptionsByTopicInput;
      output: ListSubscriptionsByTopicResponse;
    };
    sdk: {
      input: ListSubscriptionsByTopicCommandInput;
      output: ListSubscriptionsByTopicCommandOutput;
    };
  };
}
