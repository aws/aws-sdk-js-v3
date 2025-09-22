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
import { CreateReplicationConfigMessage, CreateReplicationConfigResponse } from "../models/models_0";
import { CreateReplicationConfig } from "../schemas/schemas_10_Replication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationConfigCommand}.
 */
export interface CreateReplicationConfigCommandInput extends CreateReplicationConfigMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationConfigCommand}.
 */
export interface CreateReplicationConfigCommandOutput extends CreateReplicationConfigResponse, __MetadataBearer {}

/**
 * <p>Creates a configuration that you can later provide to configure and start an DMS
 *          Serverless replication. You can also provide options to validate the configuration inputs
 *          before you start the replication.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationConfigCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationConfigCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateReplicationConfigMessage
 *   ReplicationConfigIdentifier: "STRING_VALUE", // required
 *   SourceEndpointArn: "STRING_VALUE", // required
 *   TargetEndpointArn: "STRING_VALUE", // required
 *   ComputeConfig: { // ComputeConfig
 *     AvailabilityZone: "STRING_VALUE",
 *     DnsNameServers: "STRING_VALUE",
 *     KmsKeyId: "STRING_VALUE",
 *     MaxCapacityUnits: Number("int"),
 *     MinCapacityUnits: Number("int"),
 *     MultiAZ: true || false,
 *     PreferredMaintenanceWindow: "STRING_VALUE",
 *     ReplicationSubnetGroupId: "STRING_VALUE",
 *     VpcSecurityGroupIds: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *   },
 *   ReplicationType: "full-load" || "cdc" || "full-load-and-cdc", // required
 *   TableMappings: "STRING_VALUE", // required
 *   ReplicationSettings: "STRING_VALUE",
 *   SupplementalSettings: "STRING_VALUE",
 *   ResourceIdentifier: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateReplicationConfigCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationConfigResponse
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
 * @param CreateReplicationConfigCommandInput - {@link CreateReplicationConfigCommandInput}
 * @returns {@link CreateReplicationConfigCommandOutput}
 * @see {@link CreateReplicationConfigCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationConfigCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>DMS cannot access the KMS key.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
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
 * @public
 */
export class CreateReplicationConfigCommand extends $Command
  .classBuilder<
    CreateReplicationConfigCommandInput,
    CreateReplicationConfigCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CreateReplicationConfig", {})
  .n("DatabaseMigrationServiceClient", "CreateReplicationConfigCommand")
  .sc(CreateReplicationConfig)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationConfigMessage;
      output: CreateReplicationConfigResponse;
    };
    sdk: {
      input: CreateReplicationConfigCommandInput;
      output: CreateReplicationConfigCommandOutput;
    };
  };
}
