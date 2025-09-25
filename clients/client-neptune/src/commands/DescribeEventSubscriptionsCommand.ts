// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventSubscriptionsMessage, EventSubscriptionsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribeEventSubscriptions } from "../schemas/schemas_8_Event";

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
 * <p>Lists all the subscription descriptions for a customer account. The description for a
 *       subscription includes SubscriptionName, SNSTopicARN, CustomerID, SourceType, SourceID,
 *       CreationTime, and Status.</p>
 *          <p>If you specify a SubscriptionName, lists the description for that subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link SubscriptionNotFoundFault} (client fault)
 *  <p>The designated subscription could not be found.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeEventSubscriptionsCommand extends $Command
  .classBuilder<
    DescribeEventSubscriptionsCommandInput,
    DescribeEventSubscriptionsCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeEventSubscriptions", {})
  .n("NeptuneClient", "DescribeEventSubscriptionsCommand")
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
