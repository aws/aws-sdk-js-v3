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
import { DescribeTableStatisticsMessage, DescribeTableStatisticsResponse } from "../models/models_0";
import { de_DescribeTableStatisticsCommand, se_DescribeTableStatisticsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTableStatisticsCommand}.
 */
export interface DescribeTableStatisticsCommandInput extends DescribeTableStatisticsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeTableStatisticsCommand}.
 */
export interface DescribeTableStatisticsCommandOutput extends DescribeTableStatisticsResponse, __MetadataBearer {}

/**
 * <p>Returns table statistics on the database migration task, including table name, rows
 *          inserted, rows updated, and rows deleted.</p>
 *          <p>Note that the "last updated" column the DMS console only indicates the time that DMS
 *          last updated the table statistics record for a table. It does not indicate the time of the
 *          last update to the table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeTableStatisticsMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE", // required
 *       Values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTableStatisticsResponse
 * //   ReplicationTaskArn: "STRING_VALUE",
 * //   TableStatistics: [ // TableStatisticsList
 * //     { // TableStatistics
 * //       SchemaName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       Inserts: Number("long"),
 * //       Deletes: Number("long"),
 * //       Updates: Number("long"),
 * //       Ddls: Number("long"),
 * //       AppliedInserts: Number("long"),
 * //       AppliedDeletes: Number("long"),
 * //       AppliedUpdates: Number("long"),
 * //       AppliedDdls: Number("long"),
 * //       FullLoadRows: Number("long"),
 * //       FullLoadCondtnlChkFailedRows: Number("long"),
 * //       FullLoadErrorRows: Number("long"),
 * //       FullLoadStartTime: new Date("TIMESTAMP"),
 * //       FullLoadEndTime: new Date("TIMESTAMP"),
 * //       FullLoadReloaded: true || false,
 * //       LastUpdateTime: new Date("TIMESTAMP"),
 * //       TableState: "STRING_VALUE",
 * //       ValidationPendingRecords: Number("long"),
 * //       ValidationFailedRecords: Number("long"),
 * //       ValidationSuspendedRecords: Number("long"),
 * //       ValidationState: "STRING_VALUE",
 * //       ValidationStateDetails: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeTableStatisticsCommandInput - {@link DescribeTableStatisticsCommandInput}
 * @returns {@link DescribeTableStatisticsCommandOutput}
 * @see {@link DescribeTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeTableStatisticsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Describe table statistics
 * ```javascript
 * // Returns table statistics on the database migration task, including table name, rows inserted, rows updated, and rows deleted.
 * const input = {
 *   "Marker": "",
 *   "MaxRecords": 123,
 *   "ReplicationTaskArn": ""
 * };
 * const command = new DescribeTableStatisticsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationTaskArn": "",
 *   "TableStatistics": []
 * }
 * *\/
 * // example id: describe-table-statistics-1481756071890
 * ```
 *
 */
export class DescribeTableStatisticsCommand extends $Command
  .classBuilder<
    DescribeTableStatisticsCommandInput,
    DescribeTableStatisticsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeTableStatistics", {})
  .n("DatabaseMigrationServiceClient", "DescribeTableStatisticsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeTableStatisticsCommand)
  .de(de_DescribeTableStatisticsCommand)
  .build() {}
