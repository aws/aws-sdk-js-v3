// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/models_1";
import { StartReplicationTaskAssessment$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartReplicationTaskAssessmentCommand}.
 */
export interface StartReplicationTaskAssessmentCommandInput extends StartReplicationTaskAssessmentMessage {}
/**
 * @public
 *
 * The output of {@link StartReplicationTaskAssessmentCommand}.
 */
export interface StartReplicationTaskAssessmentCommandOutput extends StartReplicationTaskAssessmentResponse, __MetadataBearer {}

/**
 * Starts the replication task assessment for unsupported data types in the source database.
 *
 * You can only use this operation for a task if the following conditions are true:
 *
 * - The task must be in the `stopped` state.
 * - The task must have successful connections to the source and target.
 *
 * If either of these conditions are not met, an `InvalidResourceStateFault` error will result.
 *
 * For information about DMS task assessments, see [Creating a task assessment report](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html) in the *Database Migration Service User Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartReplicationTaskAssessmentMessage
 *   ReplicationTaskArn: "STRING_VALUE", // required
 * };
 * const command = new StartReplicationTaskAssessmentCommand(input);
 * const response = await client.send(command);
 * // { // StartReplicationTaskAssessmentResponse
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
 * @param StartReplicationTaskAssessmentCommandInput - {@link StartReplicationTaskAssessmentCommandInput}
 * @returns {@link StartReplicationTaskAssessmentCommandOutput}
 * @see {@link StartReplicationTaskAssessmentCommandInput} for command's `input` shape.
 * @see {@link StartReplicationTaskAssessmentCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class StartReplicationTaskAssessmentCommand extends command<StartReplicationTaskAssessmentCommandInput, StartReplicationTaskAssessmentCommandOutput>(
  _ep0,
  _mw0,
  "StartReplicationTaskAssessment",
  StartReplicationTaskAssessment$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReplicationTaskAssessmentMessage;
      output: StartReplicationTaskAssessmentResponse;
    };
    sdk: {
      input: StartReplicationTaskAssessmentCommandInput;
      output: StartReplicationTaskAssessmentCommandOutput;
    };
  };
}
