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
import { ModifyReplicationSubnetGroupMessage, ModifyReplicationSubnetGroupResponse } from "../models/models_1";
import {
  de_ModifyReplicationSubnetGroupCommand,
  se_ModifyReplicationSubnetGroupCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationSubnetGroupCommand}.
 */
export interface ModifyReplicationSubnetGroupCommandInput extends ModifyReplicationSubnetGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationSubnetGroupCommand}.
 */
export interface ModifyReplicationSubnetGroupCommandOutput
  extends ModifyReplicationSubnetGroupResponse,
    __MetadataBearer {}

/**
 * <p>Modifies the settings for the specified replication subnet group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationSubnetGroupCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationSubnetGroupMessage
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE", // required
 *   ReplicationSubnetGroupDescription: "STRING_VALUE",
 *   SubnetIds: [ // SubnetIdentifierList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationSubnetGroupResponse
 * //   ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //     ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //     ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     SubnetGroupStatus: "STRING_VALUE",
 * //     Subnets: [ // SubnetList
 * //       { // Subnet
 * //         SubnetIdentifier: "STRING_VALUE",
 * //         SubnetAvailabilityZone: { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //         SubnetStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SupportedNetworkTypes: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationSubnetGroupCommandInput - {@link ModifyReplicationSubnetGroupCommandInput}
 * @returns {@link ModifyReplicationSubnetGroupCommandOutput}
 * @see {@link ModifyReplicationSubnetGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationSubnetGroupCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InvalidSubnet} (client fault)
 *  <p>The subnet provided isn't valid.</p>
 *
 * @throws {@link ReplicationSubnetGroupDoesNotCoverEnoughAZs} (client fault)
 *  <p>The replication subnet group does not cover enough Availability Zones (AZs). Edit the replication subnet group and add more AZs.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ResourceQuotaExceededFault} (client fault)
 *  <p>The quota for this resource quota has been exceeded.</p>
 *
 * @throws {@link SubnetAlreadyInUse} (client fault)
 *  <p>The specified subnet is already in use.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Modify replication subnet group
 * ```javascript
 * // Modifies the settings for the specified replication subnet group.
 * const input = {
 *   "ReplicationSubnetGroupDescription": "",
 *   "ReplicationSubnetGroupIdentifier": "",
 *   "SubnetIds": []
 * };
 * const command = new ModifyReplicationSubnetGroupCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "ReplicationSubnetGroup": {}
 * }
 * *\/
 * // example id: modify-replication-subnet-group-1481762275392
 * ```
 *
 */
export class ModifyReplicationSubnetGroupCommand extends $Command
  .classBuilder<
    ModifyReplicationSubnetGroupCommandInput,
    ModifyReplicationSubnetGroupCommandOutput,
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
  .s("AmazonDMSv20160101", "ModifyReplicationSubnetGroup", {})
  .n("DatabaseMigrationServiceClient", "ModifyReplicationSubnetGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyReplicationSubnetGroupCommand)
  .de(de_ModifyReplicationSubnetGroupCommand)
  .build() {}
