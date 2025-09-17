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
import { CreateReplicationTaskMessage, CreateReplicationTaskResponse } from "../models/models_0";
import { de_CreateReplicationTaskCommand, se_CreateReplicationTaskCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationTaskCommand}.
 */
export interface CreateReplicationTaskCommandInput extends CreateReplicationTaskMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationTaskCommand}.
 */
export interface CreateReplicationTaskCommandOutput extends CreateReplicationTaskResponse, __MetadataBearer {}

/**
 * <p>Creates a replication task using the specified parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateReplicationTaskMessage
 *   ReplicationTaskIdentifier: "STRING_VALUE", // required
 *   SourceEndpointArn: "STRING_VALUE", // required
 *   TargetEndpointArn: "STRING_VALUE", // required
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 *   MigrationType: "full-load" || "cdc" || "full-load-and-cdc", // required
 *   TableMappings: "STRING_VALUE", // required
 *   ReplicationTaskSettings: "STRING_VALUE",
 *   CdcStartTime: new Date("TIMESTAMP"),
 *   CdcStartPosition: "STRING_VALUE",
 *   CdcStopPosition: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   TaskData: "STRING_VALUE",
 *   ResourceIdentifier: "STRING_VALUE",
 * };
 * const command = new CreateReplicationTaskCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationTaskResponse
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
 * @param CreateReplicationTaskCommandInput - {@link CreateReplicationTaskCommandInput}
 * @returns {@link CreateReplicationTaskCommandOutput}
 * @see {@link CreateReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationTaskCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Create replication task
 * ```javascript
 * // Creates a replication task using the specified parameters.
 * const input = {
 *   CdcStartTime: "2016-12-14T18:25:43Z",
 *   MigrationType: "full-load",
 *   ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *   ReplicationTaskIdentifier: "task1",
 *   ReplicationTaskSettings: "",
 *   SourceEndpointArn: "arn:aws:dms:us-east-1:123456789012:endpoint:ZW5UAN6P4E77EC7YWHK4RZZ3BE",
 *   TableMappings: "file://mappingfile.json",
 *   Tags: [
 *     {
 *       Key: "Acount",
 *       Value: "24352226"
 *     }
 *   ],
 *   TargetEndpointArn: "arn:aws:dms:us-east-1:123456789012:endpoint:ASXWXJZLNWNT5HTWCGV2BUJQ7E"
 * };
 * const command = new CreateReplicationTaskCommand(input);
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
export class CreateReplicationTaskCommand extends $Command
  .classBuilder<
    CreateReplicationTaskCommandInput,
    CreateReplicationTaskCommandOutput,
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
  .s("AmazonDMSv20160101", "CreateReplicationTask", {})
  .n("DatabaseMigrationServiceClient", "CreateReplicationTaskCommand")
  .f(void 0, void 0)
  .ser(se_CreateReplicationTaskCommand)
  .de(de_CreateReplicationTaskCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationTaskMessage;
      output: CreateReplicationTaskResponse;
    };
    sdk: {
      input: CreateReplicationTaskCommandInput;
      output: CreateReplicationTaskCommandOutput;
    };
  };
}
