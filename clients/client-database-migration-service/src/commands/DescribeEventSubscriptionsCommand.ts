// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventSubscriptionsMessage, DescribeEventSubscriptionsResponse } from "../models/models_0";
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
export interface DescribeEventSubscriptionsCommandOutput extends DescribeEventSubscriptionsResponse, __MetadataBearer {}

/**
 * <p>Lists all the event subscriptions for a customer account. The description of a
 *          subscription includes <code>SubscriptionName</code>, <code>SNSTopicARN</code>,
 *             <code>CustomerID</code>, <code>SourceType</code>, <code>SourceID</code>,
 *             <code>CreationTime</code>, and <code>Status</code>. </p>
 *          <p>If you specify <code>SubscriptionName</code>, this action lists the description for that
 *          subscription.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventSubscriptionsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventSubscriptionsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
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
 * // { // DescribeEventSubscriptionsResponse
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
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @public
 */
export class DescribeEventSubscriptionsCommand extends $Command
  .classBuilder<
    DescribeEventSubscriptionsCommandInput,
    DescribeEventSubscriptionsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeEventSubscriptions", {})
  .n("DatabaseMigrationServiceClient", "DescribeEventSubscriptionsCommand")
  .sc(DescribeEventSubscriptions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventSubscriptionsMessage;
      output: DescribeEventSubscriptionsResponse;
    };
    sdk: {
      input: DescribeEventSubscriptionsCommandInput;
      output: DescribeEventSubscriptionsCommandOutput;
    };
  };
}
