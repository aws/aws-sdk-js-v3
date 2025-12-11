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
import type { DeleteReplicationTaskMessage, DeleteReplicationTaskResponse } from "../models/models_0";
import { DeleteReplicationTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationTaskCommand}.
 */
export interface DeleteReplicationTaskCommandInput extends DeleteReplicationTaskMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationTaskCommand}.
 */
export interface DeleteReplicationTaskCommandOutput extends DeleteReplicationTaskResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified replication task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteReplicationTaskMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationTaskCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicationTaskResponse
 * //   ReplicationTask: { // ReplicationTask
 * //     ReplicationTaskIdentifier: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     MigrationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     TableMappings: "STRING_VALUE",
 * //     ReplicationTaskSettings: "STRING_VALUE",
 * //     Status: "STRING_VALUE",
 * //     LastFailureMessage: "STRING_VALUE",
 * //     StopReason: "STRING_VALUE",
 * //     ReplicationTaskCreationDate: new Date("TIMESTAMP"),
 * //     ReplicationTaskStartDate: new Date("TIMESTAMP"),
 * //     CdcStartPosition: "STRING_VALUE",
 * //     CdcStopPosition: "STRING_VALUE",
 * //     RecoveryCheckpoint: "STRING_VALUE",
 * //     ReplicationTaskArn: "STRING_VALUE",
 * //     ReplicationTaskStats: { // ReplicationTaskStats
 * //       FullLoadProgressPercent: Number("int"),
 * //       ElapsedTimeMillis: Number("long"),
 * //       TablesLoaded: Number("int"),
 * //       TablesLoading: Number("int"),
 * //       TablesQueued: Number("int"),
 * //       TablesErrored: Number("int"),
 * //       FreshStartDate: new Date("TIMESTAMP"),
 * //       StartDate: new Date("TIMESTAMP"),
 * //       StopDate: new Date("TIMESTAMP"),
 * //       FullLoadStartDate: new Date("TIMESTAMP"),
 * //       FullLoadFinishDate: new Date("TIMESTAMP"),
 * //     },
 * //     TaskData: "STRING_VALUE",
 * //     TargetReplicationInstanceArn: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteReplicationTaskCommandInput - {@link DeleteReplicationTaskCommandInput}
 * @returns {@link DeleteReplicationTaskCommandOutput}
 * @see {@link DeleteReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationTaskCommandOutput} for command's `response` shape.
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
 * @example Delete Replication Task
 * ```javascript
 * // Deletes the specified replication task.
 * const input = {
 *   ReplicationTaskArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ"
 * };
 * const command = new DeleteReplicationTaskCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReplicationTask: {
 *     MigrationType: "full-load",
 *     ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *     ReplicationTaskArn: "arn:aws:dms:us-east-1:123456789012:task:OEAMB3NXSTZ6LFYZFEPPBBXPYM",
 *     ReplicationTaskCreationDate: "2016-12-14T18:25:43Z",
 *     ReplicationTaskIdentifier: "task1",
 *     ReplicationTaskSettings: `{"TargetMetadata":{"TargetSchema":"","SupportLobs":true,"FullLobMode":true,"LobChunkSize":64,"LimitedSizeLobMode":false,"LobMaxSize":0},"FullLoadSettings":{"FullLoadEnabled":true,"ApplyChangesEnabled":false,"TargetTablePrepMode":"DROP_AND_CREATE","CreatePkAfterFullLoad":false,"StopTaskCachedChangesApplied":false,"StopTaskCachedChangesNotApplied":false,"ResumeEnabled":false,"ResumeMinTableSize":100000,"ResumeOnlyClusteredPKTables":true,"MaxFullLoadSubTasks":8,"TransactionConsistencyTimeout":600,"CommitRate":10000},"Logging":{"EnableLogging":false}}`,
 *     SourceEndpointArn: "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
 *     Status: "creating",
 *     TableMappings: "file://mappingfile.json",
 *     TargetEndpointArn: "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteReplicationTaskCommand extends $Command
  .classBuilder<
    DeleteReplicationTaskCommandInput,
    DeleteReplicationTaskCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteReplicationTask", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationTaskCommand")
  .sc(DeleteReplicationTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationTaskMessage;
      output: DeleteReplicationTaskResponse;
    };
    sdk: {
      input: DeleteReplicationTaskCommandInput;
      output: DeleteReplicationTaskCommandOutput;
    };
  };
}
