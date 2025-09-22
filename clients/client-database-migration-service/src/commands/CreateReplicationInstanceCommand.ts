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
import { CreateReplicationInstanceMessage, CreateReplicationInstanceResponse } from "../models/models_0";
import { CreateReplicationInstance } from "../schemas/schemas_8_Replication";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandInput extends CreateReplicationInstanceMessage {}
/**
 * @public
 *
 * The output of {@link CreateReplicationInstanceCommand}.
 */
export interface CreateReplicationInstanceCommandOutput extends CreateReplicationInstanceResponse, __MetadataBearer {}

/**
 * <p>Creates the replication instance using the specified parameters.</p>
 *          <p>DMS requires that your account have certain roles with appropriate permissions before
 *          you can create a replication instance. For information on the required roles, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.APIRole">Creating the IAM Roles to Use With the CLI and DMS API</a>. For information on
 *          the required permissions, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_Security.html#CHAP_Security.IAMPermissions">IAM
 *             Permissions Needed to Use DMS</a>.</p>
 *          <note>
 *             <p>If you don't specify a version when creating a replication instance, DMS will
 *             create the instance using the default engine version. For information about the default
 *             engine version, see <a href="https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReleaseNotes.html">Release Notes</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, CreateReplicationInstanceCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // import type { DatabaseMigrationServiceClientConfig } from "@aws-sdk/client-database-migration-service";
 * const config = {}; // type is DatabaseMigrationServiceClientConfig
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // CreateReplicationInstanceMessage
 *   ReplicationInstanceIdentifier: "STRING_VALUE", // required
 *   AllocatedStorage: Number("int"),
 *   ReplicationInstanceClass: "STRING_VALUE", // required
 *   VpcSecurityGroupIds: [ // VpcSecurityGroupIdList
 *     "STRING_VALUE",
 *   ],
 *   AvailabilityZone: "STRING_VALUE",
 *   ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 *   PreferredMaintenanceWindow: "STRING_VALUE",
 *   MultiAZ: true || false,
 *   EngineVersion: "STRING_VALUE",
 *   AutoMinorVersionUpgrade: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *       ResourceArn: "STRING_VALUE",
 *     },
 *   ],
 *   KmsKeyId: "STRING_VALUE",
 *   PubliclyAccessible: true || false,
 *   DnsNameServers: "STRING_VALUE",
 *   ResourceIdentifier: "STRING_VALUE",
 *   NetworkType: "STRING_VALUE",
 *   KerberosAuthenticationSettings: { // KerberosAuthenticationSettings
 *     KeyCacheSecretId: "STRING_VALUE",
 *     KeyCacheSecretIamArn: "STRING_VALUE",
 *     Krb5FileContents: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateReplicationInstanceCommand(input);
 * const response = await client.send(command);
 * // { // CreateReplicationInstanceResponse
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
 * @param CreateReplicationInstanceCommandInput - {@link CreateReplicationInstanceCommandInput}
 * @returns {@link CreateReplicationInstanceCommandOutput}
 * @see {@link CreateReplicationInstanceCommandInput} for command's `input` shape.
 * @see {@link CreateReplicationInstanceCommandOutput} for command's `response` shape.
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
 * @throws {@link StorageQuotaExceededFault} (client fault)
 *  <p>The storage quota has been exceeded.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 *
 * @example Create replication instance
 * ```javascript
 * // Creates the replication instance using the specified parameters.
 * const input = {
 *   AllocatedStorage: 123,
 *   AutoMinorVersionUpgrade: true,
 *   AvailabilityZone: "",
 *   EngineVersion: "",
 *   KmsKeyId: "",
 *   MultiAZ: true,
 *   PreferredMaintenanceWindow: "",
 *   PubliclyAccessible: true,
 *   ReplicationInstanceClass: "",
 *   ReplicationInstanceIdentifier: "",
 *   ReplicationSubnetGroupIdentifier: "",
 *   Tags: [
 *     {
 *       Key: "string",
 *       Value: "string"
 *     }
 *   ],
 *   VpcSecurityGroupIds:   []
 * };
 * const command = new CreateReplicationInstanceCommand(input);
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
 *     ReplicationInstanceStatus: "creating",
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
export class CreateReplicationInstanceCommand extends $Command
  .classBuilder<
    CreateReplicationInstanceCommandInput,
    CreateReplicationInstanceCommandOutput,
    DatabaseMigrationServiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DatabaseMigrationServiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDMSv20160101", "CreateReplicationInstance", {})
  .n("DatabaseMigrationServiceClient", "CreateReplicationInstanceCommand")
  .sc(CreateReplicationInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateReplicationInstanceMessage;
      output: CreateReplicationInstanceResponse;
    };
    sdk: {
      input: CreateReplicationInstanceCommandInput;
      output: CreateReplicationInstanceCommandOutput;
    };
  };
}
