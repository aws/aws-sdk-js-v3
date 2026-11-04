// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateReplicationConfigMessage, CreateReplicationConfigResponse } from "../models/models_0";
import { CreateReplicationConfig$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a configuration that you can later provide to configure and start an DMS Serverless replication. You can also provide options to validate the configuration inputs before you start the replication.
 *
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
 * //     IsReadOnly: true || false,
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
 *
 * DMS was denied access to the endpoint. Check that the role is correctly configured.
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *
 * The resource is in a state that prevents it from being used for database migration.
 *
 * @throws {@link InvalidSubnet} (client fault)
 *
 * The subnet provided isn't valid.
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *
 * DMS cannot access the KMS key.
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *
 * The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *
 * The resource you are attempting to create already exists.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *
 * The resource could not be found.
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *
 * The quota for this resource quota has been exceeded.
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 *
 * Base exception class for all service exceptions from DatabaseMigrationService service.
 *
 * @public
 */
export class CreateReplicationConfigCommand extends command<CreateReplicationConfigCommandInput, CreateReplicationConfigCommandOutput>(
  _ep0,
  _mw0,
  "CreateReplicationConfig",
  CreateReplicationConfig$
) {
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
