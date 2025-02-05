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
import { StartReplicationMessage, StartReplicationResponse } from "../models/models_1";
import { de_StartReplicationCommand, se_StartReplicationCommand } from "../protocols/Aws_json1_1";

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
 * <p>For a given DMS Serverless replication configuration, DMS connects to the source endpoint and
 *          collects the metadata to analyze the replication workload. Using this metadata, DMS then
 *          computes and provisions the required capacity and starts replicating to the target endpoint
 *          using the server resources that DMS has provisioned for the DMS Serverless replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, StartReplicationCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, StartReplicationCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // StartReplicationMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 *   StartReplicationType: "STRING_VALUE", // required
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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "StartReplication", {})
  .n("DatabaseMigrationServiceClient", "StartReplicationCommand")
  .f(void 0, void 0)
  .ser(se_StartReplicationCommand)
  .de(de_StartReplicationCommand)
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
