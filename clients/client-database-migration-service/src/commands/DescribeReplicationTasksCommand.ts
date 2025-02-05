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
import { DescribeReplicationTasksMessage, DescribeReplicationTasksResponse } from "../models/models_1";
import { de_DescribeReplicationTasksCommand, se_DescribeReplicationTasksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationTasksCommand}.
 */
export interface DescribeReplicationTasksCommandInput extends DescribeReplicationTasksMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationTasksCommand}.
 */
export interface DescribeReplicationTasksCommandOutput extends DescribeReplicationTasksResponse, __MetadataBearer {}

/**
 * <p>Returns information about replication tasks for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationTasksCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationTasksMessage
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
 *   WithoutSettings: true || false,
 * };
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationTasksResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationTasks: [ // ReplicationTaskList
 * //     { // ReplicationTask
 * //       ReplicationTaskIdentifier: "STRING_VALUE",
 * //       SourceEndpointArn: "STRING_VALUE",
 * //       TargetEndpointArn: "STRING_VALUE",
 * //       ReplicationInstanceArn: "STRING_VALUE",
 * //       MigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       TableMappings: "STRING_VALUE",
 * //       ReplicationTaskSettings: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       LastFailureMessage: "STRING_VALUE",
 * //       StopReason: "STRING_VALUE",
 * //       ReplicationTaskCreationDate: new Date("TIMESTAMP"),
 * //       ReplicationTaskStartDate: new Date("TIMESTAMP"),
 * //       CdcStartPosition: "STRING_VALUE",
 * //       CdcStopPosition: "STRING_VALUE",
 * //       RecoveryCheckpoint: "STRING_VALUE",
 * //       ReplicationTaskArn: "STRING_VALUE",
 * //       ReplicationTaskStats: { // ReplicationTaskStats
 * //         FullLoadProgressPercent: Number("int"),
 * //         ElapsedTimeMillis: Number("long"),
 * //         TablesLoaded: Number("int"),
 * //         TablesLoading: Number("int"),
 * //         TablesQueued: Number("int"),
 * //         TablesErrored: Number("int"),
 * //         FreshStartDate: new Date("TIMESTAMP"),
 * //         StartDate: new Date("TIMESTAMP"),
 * //         StopDate: new Date("TIMESTAMP"),
 * //         FullLoadStartDate: new Date("TIMESTAMP"),
 * //         FullLoadFinishDate: new Date("TIMESTAMP"),
 * //       },
 * //       TaskData: "STRING_VALUE",
 * //       TargetReplicationInstanceArn: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationTasksCommandInput - {@link DescribeReplicationTasksCommandInput}
 * @returns {@link DescribeReplicationTasksCommandOutput}
 * @see {@link DescribeReplicationTasksCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationTasksCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Describe replication tasks
 * ```javascript
 * // Returns information about replication tasks for your account in the current region.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeReplicationTasksCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationTasks": []
 * }
 * *\/
 * // example id: describe-replication-tasks-1481755777563
 * ```
 *
 */
export class DescribeReplicationTasksCommand extends $Command
  .classBuilder<
    DescribeReplicationTasksCommandInput,
    DescribeReplicationTasksCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeReplicationTasks", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationTasksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationTasksCommand)
  .de(de_DescribeReplicationTasksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationTasksMessage;
      output: DescribeReplicationTasksResponse;
    };
    sdk: {
      input: DescribeReplicationTasksCommandInput;
      output: DescribeReplicationTasksCommandOutput;
    };
  };
}
