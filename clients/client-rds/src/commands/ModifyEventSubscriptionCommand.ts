// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ModifyEventSubscriptionMessage, ModifyEventSubscriptionResult } from "../models/models_1";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ModifyEventSubscription } from "../schemas/schemas_26_Event";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandInput extends ModifyEventSubscriptionMessage {}
/**
 * @public
 *
 * The output of {@link ModifyEventSubscriptionCommand}.
 */
export interface ModifyEventSubscriptionCommandOutput extends ModifyEventSubscriptionResult, __MetadataBearer {}

/**
 * <p>Modifies an existing RDS event notification subscription. You can't modify the source identifiers using this call. To change
 *         source identifiers for a subscription, use the <code>AddSourceIdentifierToSubscription</code> and <code>RemoveSourceIdentifierFromSubscription</code> calls.</p>
 *          <p>You can see a list of the event categories for a given source type (<code>SourceType</code>)
 *           in <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.html">Events</a> in the <i>Amazon RDS User Guide</i>
 *             or by using the <code>DescribeEventCategories</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ModifyEventSubscriptionCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ModifyEventSubscriptionCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ModifyEventSubscriptionMessage
 *   SubscriptionName: "STRING_VALUE", // required
 *   SnsTopicArn: "STRING_VALUE",
 *   SourceType: "STRING_VALUE",
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
 *   Enabled: true || false,
 * };
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * // { // ModifyEventSubscriptionResult
 * //   EventSubscription: { // EventSubscription
 * //     CustomerAwsId: "STRING_VALUE",
 * //     CustSubscriptionId: "STRING_VALUE",
 * //     SnsTopicArn: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     SubscriptionCreationTime: "STRING_VALUE",
 * //     SourceType: "STRING_VALUE",
 * //     SourceIdsList: [ // SourceIdsList
 * //       "STRING_VALUE",
 * //     ],
 * //     EventCategoriesList: [ // EventCategoriesList
 * //       "STRING_VALUE",
 * //     ],
 * //     Enabled: true || false,
 * //     EventSubscriptionArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyEventSubscriptionCommandInput - {@link ModifyEventSubscriptionCommandInput}
 * @returns {@link ModifyEventSubscriptionCommandOutput}
 * @see {@link ModifyEventSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ModifyEventSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link EventSubscriptionQuotaExceededFault} (client fault)
 *  <p>You have reached the maximum number of event subscriptions.</p>
 *
 * @throws {@link SNSInvalidTopicFault} (client fault)
 *  <p>SNS has responded that there is a problem with the SNS topic specified.</p>
 *
 * @throws {@link SNSNoAuthorizationFault} (client fault)
 *  <p>You do not have permission to publish to the SNS topic ARN.</p>
 *
 * @throws {@link SNSTopicArnNotFoundFault} (client fault)
 *  <p>The SNS topic ARN does not exist.</p>
 *
 * @throws {@link SubscriptionCategoryNotFoundFault} (client fault)
 *  <p>The supplied category does not exist.</p>
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To modify an event subscription
 * ```javascript
 * // The following example turns off the specified event subscription, so that it no longer publishes notifications to the specified Amazon Simple Notification Service topic.
 * const input = {
 *   Enabled: false,
 *   SubscriptionName: "my-instance-events"
 * };
 * const command = new ModifyEventSubscriptionCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventSubscription: {
 *     CustSubscriptionId: "my-instance-events",
 *     CustomerAwsId: "123456789012",
 *     Enabled: false,
 *     EventCategoriesList: [
 *       "backup",
 *       "recovery"
 *     ],
 *     EventSubscriptionArn: "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *     SnsTopicArn: "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *     SourceType: "db-instance",
 *     Status: "modifying",
 *     SubscriptionCreationTime: "Tue Jul 31 23:22:01 UTC 2018"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyEventSubscriptionCommand extends $Command
  .classBuilder<
    ModifyEventSubscriptionCommandInput,
    ModifyEventSubscriptionCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "ModifyEventSubscription", {})
  .n("RDSClient", "ModifyEventSubscriptionCommand")
  .sc(ModifyEventSubscription)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyEventSubscriptionMessage;
      output: ModifyEventSubscriptionResult;
    };
    sdk: {
      input: ModifyEventSubscriptionCommandInput;
      output: ModifyEventSubscriptionCommandOutput;
    };
  };
}
