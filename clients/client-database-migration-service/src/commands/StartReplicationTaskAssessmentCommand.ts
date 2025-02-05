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
import { StartReplicationTaskAssessmentMessage, StartReplicationTaskAssessmentResponse } from "../models/models_1";
import {
  de_StartReplicationTaskAssessmentCommand,
  se_StartReplicationTaskAssessmentCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface StartReplicationTaskAssessmentCommandOutput
  extends StartReplicationTaskAssessmentResponse,
    __MetadataBearer {}

/**
 * <p> Starts the replication task assessment for unsupported data types in the source
 *          database. </p>
 *          <p>You can only use this operation for a task if the following conditions are true:</p>
 *          <ul>
 *             <li>
 *                <p>The task must be in the <code>stopped</code> state.</p>
 *             </li>
 *             <li>
 *                <p>The task must have successful connections to the source and target.</p>
 *             </li>
 *          </ul>
 *          <p>If either of these conditions are not met, an <code>InvalidResourceStateFault</code> error will result. </p>
 *          <p>For information about DMS task assessments, see
 *           <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Tasks.AssessmentReport.html">Creating a task assessment report</a>
 *           in the <i>Database Migration Service User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationTaskAssessmentCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class StartReplicationTaskAssessmentCommand extends $Command
  .classBuilder<
    StartReplicationTaskAssessmentCommandInput,
    StartReplicationTaskAssessmentCommandOutput,
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
  .s("AmazonDMSv20160101", "StartReplicationTaskAssessment", {})
  .n("DatabaseMigrationServiceClient", "StartReplicationTaskAssessmentCommand")
  .f(void 0, void 0)
  .ser(se_StartReplicationTaskAssessmentCommand)
  .de(de_StartReplicationTaskAssessmentCommand)
  .build() {
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
