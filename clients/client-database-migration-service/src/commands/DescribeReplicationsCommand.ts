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
import { DescribeReplicationsMessage, DescribeReplicationsResponse } from "../models/models_0";
import { de_DescribeReplicationsCommand, se_DescribeReplicationsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationsCommand}.
 */
export interface DescribeReplicationsCommandInput extends DescribeReplicationsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationsCommand}.
 */
export interface DescribeReplicationsCommandOutput extends DescribeReplicationsResponse, __MetadataBearer {}

/**
 * <p>Provides details on replication progress by returning status information for one or more
 *          provisioned DMS Serverless replications.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationsMessage
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
 * };
 * const command = new DescribeReplicationsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationsResponse
 * //   Marker: "STRING_VALUE",
 * //   Replications: [ // ReplicationList
 * //     { // Replication
 * //       ReplicationConfigIdentifier: "STRING_VALUE",
 * //       ReplicationConfigArn: "STRING_VALUE",
 * //       SourceEndpointArn: "STRING_VALUE",
 * //       TargetEndpointArn: "STRING_VALUE",
 * //       ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       Status: "STRING_VALUE",
 * //       ProvisionData: { // ProvisionData
 * //         ProvisionState: "STRING_VALUE",
 * //         ProvisionedCapacityUnits: Number("int"),
 * //         DateProvisioned: new Date("TIMESTAMP"),
 * //         IsNewProvisioningAvailable: true || false,
 * //         DateNewProvisioningDataAvailable: new Date("TIMESTAMP"),
 * //         ReasonForNewProvisioningData: "STRING_VALUE",
 * //       },
 * //       StopReason: "STRING_VALUE",
 * //       FailureMessages: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationStats: { // ReplicationStats
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
 * //       StartReplicationType: "STRING_VALUE",
 * //       CdcStartTime: new Date("TIMESTAMP"),
 * //       CdcStartPosition: "STRING_VALUE",
 * //       CdcStopPosition: "STRING_VALUE",
 * //       RecoveryCheckpoint: "STRING_VALUE",
 * //       ReplicationCreateTime: new Date("TIMESTAMP"),
 * //       ReplicationUpdateTime: new Date("TIMESTAMP"),
 * //       ReplicationLastStopTime: new Date("TIMESTAMP"),
 * //       ReplicationDeprovisionTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationsCommandInput - {@link DescribeReplicationsCommandInput}
 * @returns {@link DescribeReplicationsCommandOutput}
 * @see {@link DescribeReplicationsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 */
export class DescribeReplicationsCommand extends $Command
  .classBuilder<
    DescribeReplicationsCommandInput,
    DescribeReplicationsCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonDMSv20160101", "DescribeReplications", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationsCommand)
  .de(de_DescribeReplicationsCommand)
  .build() {}
