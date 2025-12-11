// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DBInstanceMessage, DescribeDBInstancesMessage } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DescribeDBInstances } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBInstancesCommand}.
 */
export interface DescribeDBInstancesCommandInput extends DescribeDBInstancesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBInstancesCommand}.
 */
export interface DescribeDBInstancesCommandOutput extends DBInstanceMessage, __MetadataBearer {}

/**
 * <p>Returns information about provisioned instances, and supports pagination.</p>
 *          <note>
 *             <p>This operation can also return information for Amazon RDS instances
 *     and Amazon DocDB instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeDBInstancesCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeDBInstancesCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeDBInstancesMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
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
 * const command = new DescribeDBInstancesCommand(input);
 * const response = await client.send(command);
 * // { // DBInstanceMessage
 * //   Marker: "STRING_VALUE",
 * //   DBInstances: [ // DBInstanceList
 * //     { // DBInstance
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       Engine: "STRING_VALUE",
 * //       DBInstanceStatus: "STRING_VALUE",
 * //       MasterUsername: "STRING_VALUE",
 * //       DBName: "STRING_VALUE",
 * //       Endpoint: { // Endpoint
 * //         Address: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         HostedZoneId: "STRING_VALUE",
 * //       },
 * //       AllocatedStorage: Number("int"),
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       PreferredBackupWindow: "STRING_VALUE",
 * //       BackupRetentionPeriod: Number("int"),
 * //       DBSecurityGroups: [ // DBSecurityGroupMembershipList
 * //         { // DBSecurityGroupMembership
 * //           DBSecurityGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //         { // VpcSecurityGroupMembership
 * //           VpcSecurityGroupId: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DBParameterGroups: [ // DBParameterGroupStatusList
 * //         { // DBParameterGroupStatus
 * //           DBParameterGroupName: "STRING_VALUE",
 * //           ParameterApplyStatus: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       DBSubnetGroup: { // DBSubnetGroup
 * //         DBSubnetGroupName: "STRING_VALUE",
 * //         DBSubnetGroupDescription: "STRING_VALUE",
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
 * //         DBSubnetGroupArn: "STRING_VALUE",
 * //       },
 * //       PreferredMaintenanceWindow: "STRING_VALUE",
 * //       PendingModifiedValues: { // PendingModifiedValues
 * //         DBInstanceClass: "STRING_VALUE",
 * //         AllocatedStorage: Number("int"),
 * //         MasterUserPassword: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         BackupRetentionPeriod: Number("int"),
 * //         MultiAZ: true || false,
 * //         EngineVersion: "STRING_VALUE",
 * //         LicenseModel: "STRING_VALUE",
 * //         Iops: Number("int"),
 * //         DBInstanceIdentifier: "STRING_VALUE",
 * //         StorageType: "STRING_VALUE",
 * //         CACertificateIdentifier: "STRING_VALUE",
 * //         DBSubnetGroupName: "STRING_VALUE",
 * //         PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //           LogTypesToEnable: [ // LogTypeList
 * //             "STRING_VALUE",
 * //           ],
 * //           LogTypesToDisable: [
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       LatestRestorableTime: new Date("TIMESTAMP"),
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       AutoMinorVersionUpgrade: true || false,
 * //       ReadReplicaSourceDBInstanceIdentifier: "STRING_VALUE",
 * //       ReadReplicaDBInstanceIdentifiers: [ // ReadReplicaDBInstanceIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       ReadReplicaDBClusterIdentifiers: [ // ReadReplicaDBClusterIdentifierList
 * //         "STRING_VALUE",
 * //       ],
 * //       LicenseModel: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       OptionGroupMemberships: [ // OptionGroupMembershipList
 * //         { // OptionGroupMembership
 * //           OptionGroupName: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CharacterSetName: "STRING_VALUE",
 * //       SecondaryAvailabilityZone: "STRING_VALUE",
 * //       PubliclyAccessible: true || false,
 * //       StatusInfos: [ // DBInstanceStatusInfoList
 * //         { // DBInstanceStatusInfo
 * //           StatusType: "STRING_VALUE",
 * //           Normal: true || false,
 * //           Status: "STRING_VALUE",
 * //           Message: "STRING_VALUE",
 * //         },
 * //       ],
 * //       StorageType: "STRING_VALUE",
 * //       TdeCredentialArn: "STRING_VALUE",
 * //       DbInstancePort: Number("int"),
 * //       DBClusterIdentifier: "STRING_VALUE",
 * //       StorageEncrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DbiResourceId: "STRING_VALUE",
 * //       CACertificateIdentifier: "STRING_VALUE",
 * //       DomainMemberships: [ // DomainMembershipList
 * //         { // DomainMembership
 * //           Domain: "STRING_VALUE",
 * //           Status: "STRING_VALUE",
 * //           FQDN: "STRING_VALUE",
 * //           IAMRoleName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CopyTagsToSnapshot: true || false,
 * //       MonitoringInterval: Number("int"),
 * //       EnhancedMonitoringResourceArn: "STRING_VALUE",
 * //       MonitoringRoleArn: "STRING_VALUE",
 * //       PromotionTier: Number("int"),
 * //       DBInstanceArn: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       PerformanceInsightsEnabled: true || false,
 * //       PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //       EnabledCloudwatchLogsExports: [
 * //         "STRING_VALUE",
 * //       ],
 * //       DeletionProtection: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBInstancesCommandInput - {@link DescribeDBInstancesCommandInput}
 * @returns {@link DescribeDBInstancesCommandOutput}
 * @see {@link DescribeDBInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeDBInstancesCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeDBInstancesCommand extends $Command
  .classBuilder<
    DescribeDBInstancesCommandInput,
    DescribeDBInstancesCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBInstances", {})
  .n("NeptuneClient", "DescribeDBInstancesCommand")
  .sc(DescribeDBInstances)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBInstancesMessage;
      output: DBInstanceMessage;
    };
    sdk: {
      input: DescribeDBInstancesCommandInput;
      output: DescribeDBInstancesCommandOutput;
    };
  };
}
