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
import type { MoveReplicationTaskMessage, MoveReplicationTaskResponse } from "../models/models_0";
import { MoveReplicationTask } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link MoveReplicationTaskCommand}.
 */
export interface MoveReplicationTaskCommandInput extends MoveReplicationTaskMessage {}
/**
 * @public
 *
 * The output of {@link MoveReplicationTaskCommand}.
 */
export interface MoveReplicationTaskCommandOutput extends MoveReplicationTaskResponse, __MetadataBearer {}

/**
 * <p>Moves a replication task from its current replication instance to a different target
 *          replication instance using the specified parameters. The target replication instance must
 *          be created with the same or later DMS version as the current replication instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, MoveReplicationTaskCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // MoveReplicationTaskMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 *   TargetReplicationInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new MoveReplicationTaskCommand(input);
 * const response = await client.send(command);
 * // { // MoveReplicationTaskResponse
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
 * @param MoveReplicationTaskCommandInput - {@link MoveReplicationTaskCommandInput}
 * @returns {@link MoveReplicationTaskCommandOutput}
 * @see {@link MoveReplicationTaskCommandInput} for command's `input` shape.
 * @see {@link MoveReplicationTaskCommandOutput} for command's `response` shape.
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
 * @public
 */
export class MoveReplicationTaskCommand extends $Command
  .classBuilder<
    MoveReplicationTaskCommandInput,
    MoveReplicationTaskCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "MoveReplicationTask", {})
  .n("DatabaseMigrationServiceClient", "MoveReplicationTaskCommand")
  .sc(MoveReplicationTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: MoveReplicationTaskMessage;
      output: MoveReplicationTaskResponse;
    };
    sdk: {
      input: MoveReplicationTaskCommandInput;
      output: MoveReplicationTaskCommandOutput;
    };
  };
}
