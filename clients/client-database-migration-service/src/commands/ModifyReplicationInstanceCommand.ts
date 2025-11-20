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
import { ModifyReplicationInstanceMessage, ModifyReplicationInstanceResponse } from "../models/models_0";
import { ModifyReplicationInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyReplicationInstanceCommand}.
 */
export interface ModifyReplicationInstanceCommandInput extends ModifyReplicationInstanceMessage {}
/**
 * @public
 *
 * The output of {@link ModifyReplicationInstanceCommand}.
 */
export interface ModifyReplicationInstanceCommandOutput extends ModifyReplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Modifies the replication instance to apply new settings. You can change one or more
 *          parameters by specifying these parameters and the new values in the request.</p>
 *          <p>Some settings are applied during the maintenance window.</p>
 *          <p></p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, ModifyReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // ModifyReplicationInstanceMessage
 *   ReplicationInstanceArn: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   ApplyImmediately: true || false,
 *   ReplicationInstanceClass: "STRING_VALUE",
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AllowMajorVersionUpgrade: true || false,
 *   AutoMinorVersionUpgrade: true || false,
 *   ReplicationInstanceIdentifier: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 *   KerberosAuthenticationSettings: { // KerberosAuthenticationSettings
 *     KeyCacheSecretId: "STRING_VALUE",
 *     KeyCacheSecretIamArn: "STRING_VALUE",
 *     Krb5FileContents: "STRING_VALUE",
 *   },
 * };
 * const command = new ModifyReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // ModifyReplicationInstanceResponse
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
 * //       IsReadOnly: true || false,
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
 * //     KerberosAuthenticationSettings: { // KerberosAuthenticationSettings
 * //       KeyCacheSecretId: "STRING_VALUE",
 * //       KeyCacheSecretIamArn: "STRING_VALUE",
 * //       Krb5FileContents: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param ModifyReplicationInstanceCommandInput - {@link ModifyReplicationInstanceCommandInput}
 * @returns {@link ModifyReplicationInstanceCommandOutput}
 * @see {@link ModifyReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link ModifyReplicationInstanceCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedFault} (client fault)
 *  <p>DMS was denied access to the endpoint. Check that the
 *             role is correctly configured.</p>
 *
 * @throws {@link InsufficientResourceCapacityFault} (client fault)
 *  <p>There are not enough resources allocated to the database migration.</p>
 *
 * @throws {@link InvalidResourceStateFault} (client fault)
 *  <p>The resource is in a state that prevents it from being used for database migration.</p>
 *
 * @throws {@link ResourceAlreadyExistsFault} (client fault)
 *  <p>The resource you are attempting to create already exists.</p>
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The storage quota has been exceeded.</p>
 *
 * @throws {@link UpgradeDependencyFailureFault} (client fault)
 *  <p>An upgrade dependency is preventing the database migration.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Modify replication instance
 * ```javascript
 * // Modifies the replication instance to apply new settings. You can change one or more parameters by specifying these parameters and the new values in the request. Some settings are applied during the maintenance window.
 * const input = {
 *   AllocatedStorage: 123,
 *   AllowMajorVersionUpgrade: true,
 *   ApplyImmediately: true,
 *   AutoMinorVersionUpgrade: true,
 *   EngineVersion: "1.5.0",
 *   MultiAZ: true,
 *   PreferredMaintenanceWindow: "sun:06:00-sun:14:00",
 *   ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *   ReplicationInstanceClass: "dms.t2.micro",
 *   ReplicationInstanceIdentifier: "test-rep-1",
 *   VpcSecurityGroupIds:   []
 * };
 * const command = new ModifyReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   ReplicationInstance: {
 *     AllocatedStorage: 5,
 *     AutoMinorVersionUpgrade: true,
 *     EngineVersion: "1.5.0",
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/4c1731d6-5435-ed4d-be13-d53411a7cfbd",
 *     PendingModifiedValues:     { /* empty *\/ },
 *     PreferredMaintenanceWindow: "sun:06:00-sun:14:00",
 *     PubliclyAccessible: true,
 *     ReplicationInstanceArn: "arn:aws:dms:us-east-1:123456789012:rep:6UTDJGBOUS3VI3SUWA66XFJCJQ",
 *     ReplicationInstanceClass: "dms.t2.micro",
 *     ReplicationInstanceIdentifier: "test-rep-1",
 *     ReplicationInstanceStatus: "available",
 *     ReplicationSubnetGroup: {
 *       ReplicationSubnetGroupDescription: "default",
 *       ReplicationSubnetGroupIdentifier: "default",
 *       SubnetGroupStatus: "Complete",
 *       Subnets: [
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1d"
 *           },
 *           SubnetIdentifier: "subnet-f6dd91af",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1b"
 *           },
 *           SubnetIdentifier: "subnet-3605751d",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1c"
 *           },
 *           SubnetIdentifier: "subnet-c2daefb5",
 *           SubnetStatus: "Active"
 *         },
 *         {
 *           SubnetAvailabilityZone: {
 *             Name: "us-east-1e"
 *           },
 *           SubnetIdentifier: "subnet-85e90cb8",
 *           SubnetStatus: "Active"
 *         }
 *       ],
 *       VpcId: "vpc-6741a603"
 *     }
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ModifyReplicationInstanceCommand extends $Command
  .classBuilder<
    ModifyReplicationInstanceCommandInput,
    ModifyReplicationInstanceCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "ModifyReplicationInstance", {})
  .n("DatabaseMigrationServiceClient", "ModifyReplicationInstanceCommand")
  .sc(ModifyReplicationInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyReplicationInstanceMessage;
      output: ModifyReplicationInstanceResponse;
    };
    sdk: {
      input: ModifyReplicationInstanceCommandInput;
      output: ModifyReplicationInstanceCommandOutput;
    };
  };
}
