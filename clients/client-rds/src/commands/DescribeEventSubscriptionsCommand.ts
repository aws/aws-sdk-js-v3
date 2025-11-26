// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import type { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeEventSubscriptions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventSubscriptionsCommand}.
 */
export interface DescribeEventSubscriptionsCommandInput extends DescribeEventSubscriptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventSubscriptionsCommand}.
 */
export interface DescribeEventSubscriptionsCommandOutput extends EventSubscriptionsMessage, __MetadataBearer {}

/**
 * <p>Lists all the subscription descriptions for a customer account. The description for a subscription includes
 *           <code>SubscriptionName</code>, <code>SNSTopicARN</code>, <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>, <code>CreationTime</code>, and <code>Status</code>.</p>
 *          <p>If you specify a <code>SubscriptionName</code>, lists the description for that subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeEventSubscriptionsMessage
 *   SubscriptionName: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * // { // EventSubscriptionsMessage
 * //   Marker: "STRING_VALUE",
 * //   EventSubscriptionsList: [ // EventSubscriptionsList
 * //     { // EventSubscription
 * //       CustomerAwsId: "STRING_VALUE",
 * //       CustSubscriptionId: "STRING_VALUE",
 * //       SnsTopicArn: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       SubscriptionCreationTime: "STRING_VALUE",
 * //       SourceType: "STRING_VALUE",
 * //       SourceIdsList: [ // SourceIdsList
 * //         "STRING_VALUE",
 * //       ],
 * //       EventCategoriesList: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //       Enabled: true || false,
 * //       EventSubscriptionArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventSubscriptionsCommandInput - {@link DescribeEventSubscriptionsCommandInput}
 * @returns {@link DescribeEventSubscriptionsCommandOutput}
 * @see {@link DescribeEventSubscriptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSubscriptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The subscription name does not exist.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe event subscriptions
 * ```javascript
 * // This example describes all of the Amazon RDS event subscriptions for the current AWS account.
 * const input = { /* empty *\/ };
 * const command = new DescribeEventSubscriptionsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   EventSubscriptionsList: [
 *     {
 *       CustSubscriptionId: "my-instance-events",
 *       CustomerAwsId: "123456789012",
 *       Enabled: true,
 *       EventCategoriesList: [
 *         "backup",
 *         "recovery"
 *       ],
 *       EventSubscriptionArn: "arn:aws:rds:us-east-1:123456789012:es:my-instance-events",
 *       SnsTopicArn: "arn:aws:sns:us-east-1:123456789012:interesting-events",
 *       SourceType: "db-instance",
 *       Status: "creating",
 *       SubscriptionCreationTime: "2018-07-31 23:22:01.893"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEventSubscriptionsCommand extends $Command
  .classBuilder<
    DescribeEventSubscriptionsCommandInput,
    DescribeEventSubscriptionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeEventSubscriptions", {})
  .n("RDSClient", "DescribeEventSubscriptionsCommand")
  .sc(DescribeEventSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventSubscriptionsMessage;
      output: EventSubscriptionsMessage;
    };
    sdk: {
      input: DescribeEventSubscriptionsCommandInput;
      output: DescribeEventSubscriptionsCommandOutput;
    };
  };
}
