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
import type { StartReplicationMessage, StartReplicationResponse } from "../models/models_1";
import { StartReplication$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartReplicationCommand}.
 */
export interface StartReplicationCommandInput extends StartReplicationMessage {}
/**
 * @public
 *
 * The output of {@link StartReplicationCommand}.
 */
export interface StartReplicationCommandOutput extends StartReplicationResponse, __MetadataBearer {}

/**
 * <p>For a given DMS Serverless replication configuration, DMS connects to the source
 *          endpoint and collects the metadata to analyze the replication workload. Using this
 *          metadata, DMS then computes and provisions the required capacity and starts replicating
 *          to the target endpoint using the server resources that DMS has provisioned for the DMS
 *          Serverless replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartReplicationMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   StartReplicationType: "STRING_VALUE", // required
 *   PremigrationAssessmentSettings: "STRING_VALUE",
 *   CdcStartTime: new Date("TIMESTAMP"),
 *   CdcStartPosition: "STRING_VALUE",
 *   CdcStopPosition: "STRING_VALUE",
 * };
 * const command = new StartReplicationCommand(input);
 * const response = await client.send(command);
 * // { // StartReplicationResponse
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
 * //     IsReadOnly: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param StartReplicationCommandInput - {@link StartReplicationCommandInput}
 * @returns {@link StartReplicationCommandOutput}
 * @see {@link StartReplicationCommandInput} for command's `input` shape.
 * @see {@link StartReplicationCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StartReplicationCommand extends $Command
  .classBuilder<
    StartReplicationCommandInput,
    StartReplicationCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "StartReplication", {})
  .n("DatabaseMigrationServiceClient", "StartReplicationCommand")
  .sc(StartReplication$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartReplicationMessage;
      output: StartReplicationResponse;
    };
    sdk: {
      input: StartReplicationCommandInput;
      output: StartReplicationCommandOutput;
    };
  };
}
