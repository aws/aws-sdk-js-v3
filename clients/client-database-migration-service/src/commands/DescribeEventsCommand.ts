// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEventsMessage, DescribeEventsResponse } from "../models/models_0";
import { de_DescribeEventsCommand, se_DescribeEventsCommand } from "../protocols/Aws_json1_1";

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
export interface DescribeEventsCommandOutput extends DescribeEventsResponse, __MetadataBearer {}

/**
 * <p> Lists events for a given source identifier and source type. You can also specify a
 *          start and end time. For more information on DMS events, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Events.html">Working with Events and
 *             Notifications</a> in the <i>Database Migration Service User
 *          Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeEventsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeEventsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeEventsMessage
 *   SourceIdentifier: "STRING_VALUE",
 *   SourceType: "replication-instance",
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
 * // { // DescribeEventsResponse
 * //   Marker: "STRING_VALUE",
 * //   Events: [ // EventList
 * //     { // Event
 * //       SourceIdentifier: "STRING_VALUE",
 * //       SourceType: "replication-instance",
 * //       Message: "STRING_VALUE",
 * //       EventCategories: [ // EventCategoriesList
 * //         "STRING_VALUE",
 * //       ],
 * //       Date: new Date("TIMESTAMP"),
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
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class DescribeEventsCommand extends $Command
  .classBuilder<
    DescribeEventsCommandInput,
    DescribeEventsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeEvents", {})
  .n("DatabaseMigrationServiceClient", "DescribeEventsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEventsCommand)
  .de(de_DescribeEventsCommand)
  .build() {}
