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
import { DeleteReplicationInstanceMessage, DeleteReplicationInstanceResponse } from "../models/models_0";
import { de_DeleteReplicationInstanceCommand, se_DeleteReplicationInstanceCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteReplicationInstanceCommand}.
 */
export interface DeleteReplicationInstanceCommandInput extends DeleteReplicationInstanceMessage {}
/**
 * @public
 *
 * The output of {@link DeleteReplicationInstanceCommand}.
 */
export interface DeleteReplicationInstanceCommandOutput extends DeleteReplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified replication instance.</p>
 *          <note>
 *             <p>You must delete any migration tasks that are associated with the replication instance
 *             before you can delete it.</p>
 *          </note>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DeleteReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DeleteReplicationInstanceMessage
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteReplicationInstanceResponse
 * //   ReplicationInstance: { // ReplicationInstance
 * //     ReplicationInstanceIdentifier: "STRING_VALUE",
 * //     ReplicationInstanceClass: "STRING_VALUE",
 * //     ReplicationInstanceStatus: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AvailabilityZone: "STRING_VALUE",
 * //     ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //       ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //       ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       SubnetGroupStatus: "STRING_VALUE",
 * //       Subnets: [ // SubnetList
 * //         { // Subnet
 * //           SubnetIdentifier: "STRING_VALUE",
 * //           SubnetAvailabilityZone: { // AvailabilityZone
 * //             Name: "STRING_VALUE",
 * //           },
 * //           SubnetStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedNetworkTypes: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // ReplicationPendingModifiedValues
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       NetworkType: "STRING_VALUE",
 * //     },
 * //     MultiAZ: true || false,
 * //     EngineVersion: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     ReplicationInstanceArn: "STRING_VALUE",
 * //     ReplicationInstancePublicIpAddress: "STRING_VALUE",
 * //     ReplicationInstancePrivateIpAddress: "STRING_VALUE",
 * //     ReplicationInstancePublicIpAddresses: [ // ReplicationInstancePublicIpAddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationInstancePrivateIpAddresses: [ // ReplicationInstancePrivateIpAddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReplicationInstanceIpv6Addresses: [ // ReplicationInstanceIpv6AddressList
 * //       "STRING_VALUE",
 * //     ],
 * //     PubliclyAccessible: true || false,
 * //     SecondaryAvailabilityZone: "STRING_VALUE",
 * //     FreeUntil: new Date("TIMESTAMP"),
 * //     DnsNameServers: "STRING_VALUE",
 * //     NetworkType: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteReplicationInstanceCommandInput - {@link DeleteReplicationInstanceCommandInput}
 * @returns {@link DeleteReplicationInstanceCommandOutput}
 * @see {@link DeleteReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteReplicationInstanceCommandOutput} for command's `response` shape.
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
export class DeleteReplicationInstanceCommand extends $Command
  .classBuilder<
    DeleteReplicationInstanceCommandInput,
    DeleteReplicationInstanceCommandOutput,
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
  .s("AmazonDMSv20160101", "DeleteReplicationInstance", {})
  .n("DatabaseMigrationServiceClient", "DeleteReplicationInstanceCommand")
  .f(void 0, void 0)
  .ser(se_DeleteReplicationInstanceCommand)
  .de(de_DeleteReplicationInstanceCommand)
  .build() {}
