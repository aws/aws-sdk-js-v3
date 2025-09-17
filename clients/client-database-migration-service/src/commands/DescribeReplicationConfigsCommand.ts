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
import { DescribeReplicationConfigsMessage, DescribeReplicationConfigsResponse } from "../models/models_0";
import { de_DescribeReplicationConfigsCommand, se_DescribeReplicationConfigsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationConfigsCommand}.
 */
export interface DescribeReplicationConfigsCommandInput extends DescribeReplicationConfigsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationConfigsCommand}.
 */
export interface DescribeReplicationConfigsCommandOutput extends DescribeReplicationConfigsResponse, __MetadataBearer {}

/**
 * <p>Returns one or more existing DMS Serverless replication configurations as a list of
 *          structures.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationConfigsCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationConfigsCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationConfigsMessage
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
 * const command = new DescribeReplicationConfigsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationConfigsResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationConfigs: [ // ReplicationConfigList
 * //     { // ReplicationConfig
 * //       ReplicationConfigIdentifier: "STRING_VALUE",
 * //       ReplicationConfigArn: "STRING_VALUE",
 * //       SourceEndpointArn: "STRING_VALUE",
 * //       TargetEndpointArn: "STRING_VALUE",
 * //       ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //       ComputeConfig: { // ComputeConfig
 * //         AvailabilityZone: "STRING_VALUE",
 * //         DnsNameServers: "STRING_VALUE",
 * //         KmsKeyId: "STRING_VALUE",
 * //         MaxCapacityUnits: Number("int"),
 * //         MinCapacityUnits: Number("int"),
 * //         MultiAZ: true || false,
 * //         PreferredMaintenanceWindow: "STRING_VALUE",
 * //         ReplicationSubnetGroupId: "STRING_VALUE",
 * //         VpcSecurityGroupIds: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       ReplicationSettings: "STRING_VALUE",
 * //       SupplementalSettings: "STRING_VALUE",
 * //       TableMappings: "STRING_VALUE",
 * //       ReplicationConfigCreateTime: new Date("TIMESTAMP"),
 * //       ReplicationConfigUpdateTime: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationConfigsCommandInput - {@link DescribeReplicationConfigsCommandInput}
 * @returns {@link DescribeReplicationConfigsCommandOutput}
 * @see {@link DescribeReplicationConfigsCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationConfigsCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
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
export class DescribeReplicationConfigsCommand extends $Command
  .classBuilder<
    DescribeReplicationConfigsCommandInput,
    DescribeReplicationConfigsCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeReplicationConfigs", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationConfigsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationConfigsCommand)
  .de(de_DescribeReplicationConfigsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationConfigsMessage;
      output: DescribeReplicationConfigsResponse;
    };
    sdk: {
      input: DescribeReplicationConfigsCommandInput;
      output: DescribeReplicationConfigsCommandOutput;
    };
  };
}
