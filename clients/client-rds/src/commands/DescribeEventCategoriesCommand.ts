// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventCategoriesMessage, EventCategoriesMessage } from "../models/models_1";
import { de_DescribeEventCategoriesCommand, se_DescribeEventCategoriesCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandInput extends DescribeEventCategoriesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventCategoriesCommand}.
 */
export interface DescribeEventCategoriesCommandOutput extends EventCategoriesMessage, __MetadataBearer {}

/**
 * <p>Displays a list of categories for all event source types, or, if specified, for a specified source type.
 *             You can also see this list in the "Amazon RDS event categories and event messages" section of the <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_Events.Messages.html">
 *                <i>Amazon RDS User Guide</i>
 *             </a> or the
 *                 <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_Events.Messages.html">
 *                <i>Amazon Aurora User Guide</i>
 *             </a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEventCategoriesCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEventCategoriesCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // DescribeEventCategoriesMessage
 *   SourceType: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * // { // EventCategoriesMessage
 * //   EventCategoriesMapList: [ // EventCategoriesMapList
 * //     { // EventCategoriesMap
 * //       SourceType: "STRING_VALUE",
 * //       EventCategories: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventCategoriesCommandInput - {@link DescribeEventCategoriesCommandInput}
 * @returns {@link DescribeEventCategoriesCommandOutput}
 * @see {@link DescribeEventCategoriesCommandInput} for command's `input` shape.
 * @see {@link DescribeEventCategoriesCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe event categories
 * ```javascript
 * // The following example retrieves details about the event categories for all available event sources.
 * const input = {
 *   "Filters": [],
 *   "SourceType": ""
 * };
 * const command = new DescribeEventCategoriesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "EventCategoriesMapList": [
 *     {
 *       "EventCategories": [
 *         "deletion",
 *         "read replica",
 *         "failover",
 *         "restoration",
 *         "maintenance",
 *         "low storage",
 *         "configuration change",
 *         "backup",
 *         "creation",
 *         "availability",
 *         "recovery",
 *         "failure",
 *         "backtrack",
 *         "notification"
 *       ],
 *       "SourceType": "db-instance"
 *     },
 *     {
 *       "EventCategories": [
 *         "configuration change",
 *         "failure"
 *       ],
 *       "SourceType": "db-security-group"
 *     },
 *     {
 *       "EventCategories": [
 *         "configuration change"
 *       ],
 *       "SourceType": "db-parameter-group"
 *     },
 *     {
 *       "EventCategories": [
 *         "deletion",
 *         "creation",
 *         "restoration",
 *         "notification"
 *       ],
 *       "SourceType": "db-snapshot"
 *     },
 *     {
 *       "EventCategories": [
 *         "failover",
 *         "failure",
 *         "notification"
 *       ],
 *       "SourceType": "db-cluster"
 *     },
 *     {
 *       "EventCategories": [
 *         "backup"
 *       ],
 *       "SourceType": "db-cluster-snapshot"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-event-categories-1680281431508
 * ```
 *
 */
export class DescribeEventCategoriesCommand extends $Command
  .classBuilder<
    DescribeEventCategoriesCommandInput,
    DescribeEventCategoriesCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeEventCategories", {})
  .n("RDSClient", "DescribeEventCategoriesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventCategoriesCommand)
  .de(de_DescribeEventCategoriesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventCategoriesMessage;
      output: EventCategoriesMessage;
    };
    sdk: {
      input: DescribeEventCategoriesCommandInput;
      output: DescribeEventCategoriesCommandOutput;
    };
  };
}
