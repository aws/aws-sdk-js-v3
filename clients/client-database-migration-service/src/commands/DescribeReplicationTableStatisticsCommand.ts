// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  DescribeReplicationTableStatisticsMessage,
  DescribeReplicationTableStatisticsResponse,
} from "../models/models_0";
import { DescribeReplicationTableStatistics$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTableStatisticsCommand}.
 */
export interface DescribeReplicationTableStatisticsCommandInput extends DescribeReplicationTableStatisticsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTableStatisticsCommand}.
 */
export interface DescribeReplicationTableStatisticsCommandOutput extends DescribeReplicationTableStatisticsResponse, __MetadataBearer {}

/**
 * <p>Returns table and schema statistics for one or more provisioned replications that use a
 *          given DMS Serverless replication configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTableStatisticsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTableStatisticsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTableStatisticsMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
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
 * const command = new DescribeReplicationTableStatisticsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTableStatisticsResponse
 * //   ReplicationConfigArn: "STRING_VALUE",
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTableStatistics: [ // ReplicationTableStatisticsList
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
 * //       ResyncState: "STRING_VALUE",
 * //       ResyncRowsAttempted: Number("long"),
 * //       ResyncRowsSucceeded: Number("long"),
 * //       ResyncRowsFailed: Number("long"),
 * //       ResyncProgress: Number("double"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTableStatisticsCommandInput - {@link DescribeReplicationTableStatisticsCommandInput}
 * @returns {@link DescribeReplicationTableStatisticsCommandOutput}
 * @see {@link DescribeReplicationTableStatisticsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTableStatisticsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class DescribeReplicationTableStatisticsCommand extends $Command
  .classBuilder<
    DescribeReplicationTableStatisticsCommandInput,
    DescribeReplicationTableStatisticsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DescribeReplicationTableStatistics", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationTableStatisticsCommand")
  .sc(DescribeReplicationTableStatistics$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationTableStatisticsMessage;
      output: DescribeReplicationTableStatisticsResponse;
    };
    sdk: {
      input: DescribeReplicationTableStatisticsCommandInput;
      output: DescribeReplicationTableStatisticsCommandOutput;
    };
  };
}
