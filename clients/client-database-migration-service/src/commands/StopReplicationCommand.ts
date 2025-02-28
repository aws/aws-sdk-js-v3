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
import { StopReplicationMessage, StopReplicationResponse } from "../models/models_1";
import { de_StopReplicationCommand, se_StopReplicationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandInput extends StopReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StopReplicationCommand}.
 */
export interface StopReplicationCommandOutput extends StopReplicationResponse, __MetadataBearer {}

/**
 * <p>For a given DMS Serverless replication configuration, DMS stops any and all ongoing
 *          DMS Serverless replications. This command doesn't deprovision the stopped
 *          replications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StopReplicationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StopReplicationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StopReplicationMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 * };
 * const command = new StopReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StopReplicationResponse
 * //   Replication: { // Replication
 * //     ReplicationConfigIdentifier: "STRING_VALUE",
 * //     ReplicationConfigArn: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     Status: "STRING_VALUE",
 * //     ProvisionData: { // ProvisionData
 * //       ProvisionState: "STRING_VALUE",
 * //       ProvisionedCapacityUnits: Number("int"),
 * //       DateProvisioned: new Date("TIMESTAMP"),
 * //       IsNewProvisioningAvailable: true || false,
 * //       DateNewProvisioningDataAvailable: new Date("TIMESTAMP"),
 * //       ReasonForNewProvisioningData: "STRING_VALUE",
 * //     },
 * //     PremigrationAssessmentStatuses: [ // PremigrationAssessmentStatusList
 * //       { // PremigrationAssessmentStatus
 * //         PremigrationAssessmentRunArn: "STRING_VALUE",
 * //         FailOnAssessmentFailure: true || false,
 * //         Status: "STRING_VALUE",
 * //         PremigrationAssessmentRunCreationDate: new Date("TIMESTAMP"),
 * //         AssessmentProgress: { // ReplicationTaskAssessmentRunProgress
 * //           IndividualAssessmentCount: Number("int"),
 * //           IndividualAssessmentCompletedCount: Number("int"),
 * //         },
 * //         LastFailureMessage: "STRING_VALUE",
 * //         ResultLocationBucket: "STRING_VALUE",
 * //         ResultLocationFolder: "STRING_VALUE",
 * //         ResultEncryptionMode: "STRING_VALUE",
 * //         ResultKmsKeyArn: "STRING_VALUE",
 * //         ResultStatistic: { // ReplicationTaskAssessmentRunResultStatistic
 * //           Passed: Number("int"),
 * //           Failed: Number("int"),
 * //           Error: Number("int"),
 * //           Warning: Number("int"),
 * //           Cancelled: Number("int"),
 * //           Skipped: Number("int"),
 * //         },
 * //       },
 * //     ],
 * //     StopReason: "STRING_VALUE",
 * //     FailureMessages: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationStats: { // ReplicationStats
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
 * //     StartReplicationType: "STRING_VALUE",
 * //     CdcStartTime: new Date("TIMESTAMP"),
 * //     CdcStartPosition: "STRING_VALUE",
 * //     CdcStopPosition: "STRING_VALUE",
 * //     RecoveryCheckpoint: "STRING_VALUE",
 * //     ReplicationCreateTime: new Date("TIMESTAMP"),
 * //     ReplicationUpdateTime: new Date("TIMESTAMP"),
 * //     ReplicationLastStopTime: new Date("TIMESTAMP"),
 * //     ReplicationDeprovisionTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param StopReplicationCommandInput - {@link StopReplicationCommandInput}
 * @returns {@link StopReplicationCommandOutput}
 * @see {@link StopReplicationCommandInput} for command's `input` shape.
 * @see {@link StopReplicationCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
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
export class StopReplicationCommand extends $Command
  .classBuilder<
    StopReplicationCommandInput,
    StopReplicationCommandOutput,
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
  .s("AmazonDMSv20160101", "StopReplication", {})
  .n("DatabaseMigrationServiceClient", "StopReplicationCommand")
  .f(void 0, void 0)
  .ser(se_StopReplicationCommand)
  .de(de_StopReplicationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopReplicationMessage;
      output: StopReplicationResponse;
    };
    sdk: {
      input: StopReplicationCommandInput;
      output: StopReplicationCommandOutput;
    };
  };
}
