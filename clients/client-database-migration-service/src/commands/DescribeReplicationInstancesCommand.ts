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
import { DescribeReplicationInstancesMessage, DescribeReplicationInstancesResponse } from "../models/models_0";
import {
  de_DescribeReplicationInstancesCommand,
  se_DescribeReplicationInstancesCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReplicationInstancesCommand}.
 */
export interface DescribeReplicationInstancesCommandInput extends DescribeReplicationInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReplicationInstancesCommand}.
 */
export interface DescribeReplicationInstancesCommandOutput
  extends DescribeReplicationInstancesResponse,
    __MetadataBearer {}

/**
 * <p>Returns information about replication instances for your account in the current
 *          region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } from "@aws-sdk/client-database-migration-service"; // ES Modules import
 * // const { DatabaseMigrationServiceClient, DescribeReplicationInstancesCommand } = require("@aws-sdk/client-database-migration-service"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new DatabaseMigrationServiceClient(config);
 * const input = { // DescribeReplicationInstancesMessage
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
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReplicationInstancesResponse
 * //   Marker: "STRING_VALUE",
 * //   ReplicationInstances: [ // ReplicationInstanceList
 * //     { // ReplicationInstance
 * //       ReplicationInstanceIdentifier: "STRING_VALUE",
 * //       ReplicationInstanceClass: "STRING_VALUE",
 * //       ReplicationInstanceStatus: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ReplicationSubnetGroup: { // ReplicationSubnetGroup
 * //         ReplicationSubnetGroupIdentifier: "STRING_VALUE",
 * //         ReplicationSubnetGroupDescription: "STRING_VALUE",
 * //         VpcId: "STRING_VALUE",
 * //         SubnetGroupStatus: "STRING_VALUE",
 * //         Subnets: [ // SubnetList
 * //           { // Subnet
 * //             SubnetIdentifier: "STRING_VALUE",
 * //             SubnetAvailabilityZone: { // AvailabilityZone
 * //               Name: "STRING_VALUE",
 * //             },
 * //             SubnetStatus: "STRING_VALUE",
 * //           },
 * //         ],
 * //         SupportedNetworkTypes: [ // StringList
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // ReplicationPendingModifiedValues
 * //         ReplicationInstanceClass: "STRING_VALUE",
 * //         AllocatedStorage: Number("int"),
 * //         MultiAZ: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         NetworkType: "STRING_VALUE",
 * //       },
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       ReplicationInstanceArn: "STRING_VALUE",
 * //       ReplicationInstancePublicIpAddress: "STRING_VALUE",
 * //       ReplicationInstancePrivateIpAddress: "STRING_VALUE",
 * //       ReplicationInstancePublicIpAddresses: [ // ReplicationInstancePublicIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationInstancePrivateIpAddresses: [ // ReplicationInstancePrivateIpAddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReplicationInstanceIpv6Addresses: [ // ReplicationInstanceIpv6AddressList
 * //         "STRING_VALUE",
 * //       ],
 * //       PubliclyAccessible: true || false,
 * //       SecondaryAvailabilityZone: "STRING_VALUE",
 * //       FreeUntil: new Date("TIMESTAMP"),
 * //       DnsNameServers: "STRING_VALUE",
 * //       NetworkType: "STRING_VALUE",
 * //       KerberosAuthenticationSettings: { // KerberosAuthenticationSettings
 * //         KeyCacheSecretId: "STRING_VALUE",
 * //         KeyCacheSecretIamArn: "STRING_VALUE",
 * //         Krb5FileContents: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReplicationInstancesCommandInput - {@link DescribeReplicationInstancesCommandInput}
 * @returns {@link DescribeReplicationInstancesCommandOutput}
 * @see {@link DescribeReplicationInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeReplicationInstancesCommandOutput} for command's `response` shape.
 * @see {@link DatabaseMigrationServiceClientResolvedConfig | config} for DatabaseMigrationServiceClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundFault} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link DatabaseMigrationServiceServiceException}
 * <p>Base exception class for all service exceptions from DatabaseMigrationService service.</p>
 *
 * @public
 * @example Describe replication instances
 * ```javascript
 * // Returns the status of the refresh-schemas operation.
 * const input = {
 *   "Filters": [
 *     {
 *       "Name": "string",
 *       "Values": [
 *         "string",
 *         "string"
 *       ]
 *     }
 *   ],
 *   "Marker": "",
 *   "MaxRecords": 123
 * };
 * const command = new DescribeReplicationInstancesCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Marker": "",
 *   "ReplicationInstances": []
 * }
 * *\/
 * // example id: describe-replication-instances-1481755443952
 * ```
 *
 */
export class DescribeReplicationInstancesCommand extends $Command
  .classBuilder<
    DescribeReplicationInstancesCommandInput,
    DescribeReplicationInstancesCommandOutput,
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
  .s("AmazonDMSv20160101", "DescribeReplicationInstances", {})
  .n("DatabaseMigrationServiceClient", "DescribeReplicationInstancesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReplicationInstancesCommand)
  .de(de_DescribeReplicationInstancesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReplicationInstancesMessage;
      output: DescribeReplicationInstancesResponse;
    };
    sdk: {
      input: DescribeReplicationInstancesCommandInput;
      output: DescribeReplicationInstancesCommandOutput;
    };
  };
}
