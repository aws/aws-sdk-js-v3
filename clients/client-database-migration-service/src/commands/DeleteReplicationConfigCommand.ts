// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteReplicationConfigMessage, DeleteReplicationConfigResponse } from "../models/models_0";
import { DeleteReplicationConfig } from "../schemas/schemas_33_Replication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationConfigCommand}.
 */
export interface DeleteReplicationConfigCommandInput extends DeleteReplicationConfigMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationConfigCommand}.
 */
export interface DeleteReplicationConfigCommandOutput extends DeleteReplicationConfigResponse, __MetadataBearer {}

/**
 * <p>Deletes an DMS Serverless replication configuration. This effectively deprovisions any
 *          and all replications that use this configuration. You can't delete the configuration for an
 *          DMS Serverless replication that is ongoing. You can delete the configuration when the
 *          replication is in a non-RUNNING and non-STARTING state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationConfigCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationConfigCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteReplicationConfigMessage
 *   ReplicationConfigArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationConfigCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicationConfigResponse
 * //   ReplicationConfig: { // ReplicationConfig
 * //     ReplicationConfigIdentifier: "STRING_VALUE",
 * //     ReplicationConfigArn: "STRING_VALUE",
 * //     SourceEndpointArn: "STRING_VALUE",
 * //     TargetEndpointArn: "STRING_VALUE",
 * //     ReplicationType: "full-load" || "cdc" || "full-load-and-cdc",
 * //     ComputeConfig: { // ComputeConfig
 * //       AvailabilityZone: "STRING_VALUE",
 * //       DnsNameServers: "STRING_VALUE",
 * //       KmsKeyId: "STRING_VALUE",
 * //       MaxCapacityUnits: Number("int"),
 * //       MinCapacityUnits: Number("int"),
 * //       MultiAZ: true || false,
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       ReplicationSubnetGroupId: "STRING_VALUE",
 * //       VpcSecurityGroupIds: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ReplicationSettings: "STRING_VALUE",
 * //     SupplementalSettings: "STRING_VALUE",
 * //     TableMappings: "STRING_VALUE",
 * //     ReplicationConfigCreateTime: new Date("TIMESTAMP"),
 * //     ReplicationConfigUpdateTime: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteReplicationConfigCommandInput - {@link DeleteReplicationConfigCommandInput}
 * @returns {@link DeleteReplicationConfigCommandOutput}
 * @see {@link DeleteReplicationConfigCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationConfigCommandOutput} for command's `response` shape.
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
export class DeleteReplicationConfigCommand extends $Command
  .classBuilder<
    DeleteReplicationConfigCommandInput,
    DeleteReplicationConfigCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "DeleteReplicationConfig", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationConfigCommand")
  .sc(DeleteReplicationConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteReplicationConfigMessage;
      output: DeleteReplicationConfigResponse;
    };
    sdk: {
      input: DeleteReplicationConfigCommandInput;
      output: DeleteReplicationConfigCommandOutput;
    };
  };
}
