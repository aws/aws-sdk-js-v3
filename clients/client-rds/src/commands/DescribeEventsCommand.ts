// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventsMessage, EventsMessage } from "../models/models_1";
import { de_DescribeEventsCommand, se_DescribeEventsCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandInput extends DescribeEventsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEventsCommand}.
 */
export interface DescribeEventsCommandOutput extends EventsMessage, __MetadataBearer {}

/**
 * <p>Returns events related to DB instances, DB clusters, DB parameter groups, DB security groups, DB snapshots, DB cluster snapshots, and RDS Proxies for the past 14 days.
 *           Events specific to a particular DB instance, DB cluster, DB parameter group, DB security group, DB snapshot, DB cluster snapshot group, or RDS Proxy can be
 *           obtained by providing the name as a parameter.</p>
 *          <p>For more information on working with events, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/working-with-events.html">Monitoring Amazon RDS events</a> in the <i>Amazon RDS User Guide</i> and <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/working-with-events.html">Monitoring  Amazon Aurora
 *                 events</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <note>
 *             <p>By default, RDS returns events that were generated in the past hour.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeEventsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeEventsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeEventsMessage
 *   SourceIdentifier: "STRING_VALUE",
 *   SourceType: "db-instance" || "db-parameter-group" || "db-security-group" || "db-snapshot" || "db-cluster" || "db-cluster-snapshot" || "custom-engine-version" || "db-proxy" || "blue-green-deployment",
 *   StartTime: new Date("TIMESTAMP"),
 *   EndTime: new Date("TIMESTAMP"),
 *   Duration: Number("int"),
 *   EventCategories: [ // EventCategoriesList
 *     "STRING_VALUE",
 *   ],
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
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * // { // EventsMessage
 * //   Marker: "STRING_VALUE",
 * //   Events: [ // EventList
 * //     { // Event
 * //       SourceIdentifier: "STRING_VALUE",
 * //       SourceType: "db-instance" || "db-parameter-group" || "db-security-group" || "db-snapshot" || "db-cluster" || "db-cluster-snapshot" || "custom-engine-version" || "db-proxy" || "blue-green-deployment",
 * //       Message: "STRING_VALUE",
 * //       EventCategories: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //       Date: new Date("TIMESTAMP"),
 * //       SourceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeEventsCommandInput - {@link DescribeEventsCommandInput}
 * @returns {@link DescribeEventsCommandOutput}
 * @see {@link DescribeEventsCommandInput} for command's `input` shape.
 * @see {@link DescribeEventsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe events
 * ```javascript
 * // The following retrieves details for the events that have occurred for the specified DB instance.
 * const input = {
 *   SourceIdentifier: "test-instance",
 *   SourceType: "db-instance"
 * };
 * const command = new DescribeEventsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Events: [
 *     {
 *       Date: "2018-07-31T23:09:23.983Z",
 *       EventCategories: [
 *         "backup"
 *       ],
 *       Message: "Backing up DB instance",
 *       SourceArn: "arn:aws:rds:us-east-1:123456789012:db:test-instance",
 *       SourceIdentifier: "test-instance",
 *       SourceType: "db-instance"
 *     },
 *     {
 *       Date: "2018-07-31T23:15:13.049Z",
 *       EventCategories: [
 *         "backup"
 *       ],
 *       Message: "Finished DB Instance backup",
 *       SourceArn: "arn:aws:rds:us-east-1:123456789012:db:test-instance",
 *       SourceIdentifier: "test-instance",
 *       SourceType: "db-instance"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
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
  .s("AmazonRDSv19", "DescribeEvents", {})
  .n("RDSClient", "DescribeEventsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventsCommand)
  .de(de_DescribeEventsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEventsMessage;
      output: EventsMessage;
    };
    sdk: {
      input: DescribeEventsCommandInput;
      output: DescribeEventsCommandOutput;
    };
  };
}
