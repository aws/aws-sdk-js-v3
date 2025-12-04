// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteDBInstanceMessage, DeleteDBInstanceResult } from "../models/models_0";
import type { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBInstance } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBInstanceCommand}.
 */
export interface DeleteDBInstanceCommandInput extends DeleteDBInstanceMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBInstanceCommand}.
 */
export interface DeleteDBInstanceCommandOutput extends DeleteDBInstanceResult, __MetadataBearer {}

/**
 * <p>The DeleteDBInstance action deletes a previously provisioned DB instance. When you delete
 *       a DB instance, all automated backups for that instance are deleted and can't be recovered.
 *       Manual DB snapshots of the DB instance to be deleted by <code>DeleteDBInstance</code> are not
 *       deleted.</p>
 *          <p> If you request a final DB snapshot the status of the Amazon Neptune DB instance is
 *       <code>deleting</code> until the DB snapshot is created. The API action
 *       <code>DescribeDBInstance</code> is used to monitor the status of this operation. The action
 *       can't be canceled or reverted once submitted.</p>
 *          <p>Note that when a DB instance is in a failure state and has a status of
 *       <code>failed</code>, <code>incompatible-restore</code>, or <code>incompatible-network</code>,
 *       you can only delete it when the <code>SkipFinalSnapshot</code> parameter is set to
 *       <code>true</code>.</p>
 *          <p>You can't delete a DB instance if it is the only instance in the DB cluster, or
 *       if it has deletion protection enabled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBInstanceCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBInstanceCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBInstanceMessage
 *   DBInstanceIdentifier: "STRING_VALUE", // required
 *   SkipFinalSnapshot: true || false,
 *   FinalDBSnapshotIdentifier: "STRING_VALUE",
 * };
 * const command = new DeleteDBInstanceCommand(input);
 * const response = await client.send(command);
 * // { // DeleteDBInstanceResult
 * //   DBInstance: { // DBInstance
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     DBInstanceClass: "STRING_VALUE",
 * //     Engine: "STRING_VALUE",
 * //     DBInstanceStatus: "STRING_VALUE",
 * //     MasterUsername: "STRING_VALUE",
 * //     DBName: "STRING_VALUE",
 * //     Endpoint: { // Endpoint
 * //       Address: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       HostedZoneId: "STRING_VALUE",
 * //     },
 * //     AllocatedStorage: Number("int"),
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     PreferredBackupWindow: "STRING_VALUE",
 * //     BackupRetentionPeriod: Number("int"),
 * //     DBSecurityGroups: [ // DBSecurityGroupMembershipList
 * //       { // DBSecurityGroupMembership
 * //         DBSecurityGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     VpcSecurityGroups: [ // VpcSecurityGroupMembershipList
 * //       { // VpcSecurityGroupMembership
 * //         VpcSecurityGroupId: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBParameterGroups: [ // DBParameterGroupStatusList
 * //       { // DBParameterGroupStatus
 * //         DBParameterGroupName: "STRING_VALUE",
 * //         ParameterApplyStatus: "STRING_VALUE",
 * //       },
 * //     ],
 * //     AvailabilityZone: "STRING_VALUE",
 * //     DBSubnetGroup: { // DBSubnetGroup
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       DBSubnetGroupDescription: "STRING_VALUE",
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
 * //       DBSubnetGroupArn: "STRING_VALUE",
 * //     },
 * //     PreferredMaintenanceWindow: "STRING_VALUE",
 * //     PendingModifiedValues: { // PendingModifiedValues
 * //       DBInstanceClass: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       MasterUserPassword: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       BackupRetentionPeriod: Number("int"),
 * //       MultiAZ: true || false,
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       CACertificateIdentifier: "STRING_VALUE",
 * //       DBSubnetGroupName: "STRING_VALUE",
 * //       PendingCloudwatchLogsExports: { // PendingCloudwatchLogsExports
 * //         LogTypesToEnable: [ // LogTypeList
 * //           "STRING_VALUE",
 * //         ],
 * //         LogTypesToDisable: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     },
 * //     LatestRestorableTime: new Date("TIMESTAMP"),
 * //     MultiAZ: true || false,
 * //     EngineVersion: "STRING_VALUE",
 * //     AutoMinorVersionUpgrade: true || false,
 * //     ReadReplicaSourceDBInstanceIdentifier: "STRING_VALUE",
 * //     ReadReplicaDBInstanceIdentifiers: [ // ReadReplicaDBInstanceIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     ReadReplicaDBClusterIdentifiers: [ // ReadReplicaDBClusterIdentifierList
 * //       "STRING_VALUE",
 * //     ],
 * //     LicenseModel: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     OptionGroupMemberships: [ // OptionGroupMembershipList
 * //       { // OptionGroupMembership
 * //         OptionGroupName: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CharacterSetName: "STRING_VALUE",
 * //     SecondaryAvailabilityZone: "STRING_VALUE",
 * //     PubliclyAccessible: true || false,
 * //     StatusInfos: [ // DBInstanceStatusInfoList
 * //       { // DBInstanceStatusInfo
 * //         StatusType: "STRING_VALUE",
 * //         Normal: true || false,
 * //         Status: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     ],
 * //     StorageType: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     DbInstancePort: Number("int"),
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DbiResourceId: "STRING_VALUE",
 * //     CACertificateIdentifier: "STRING_VALUE",
 * //     DomainMemberships: [ // DomainMembershipList
 * //       { // DomainMembership
 * //         Domain: "STRING_VALUE",
 * //         Status: "STRING_VALUE",
 * //         FQDN: "STRING_VALUE",
 * //         IAMRoleName: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CopyTagsToSnapshot: true || false,
 * //     MonitoringInterval: Number("int"),
 * //     EnhancedMonitoringResourceArn: "STRING_VALUE",
 * //     MonitoringRoleArn: "STRING_VALUE",
 * //     PromotionTier: Number("int"),
 * //     DBInstanceArn: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     PerformanceInsightsEnabled: true || false,
 * //     PerformanceInsightsKMSKeyId: "STRING_VALUE",
 * //     EnabledCloudwatchLogsExports: [
 * //       "STRING_VALUE",
 * //     ],
 * //     DeletionProtection: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteDBInstanceCommandInput - {@link DeleteDBInstanceCommandInput}
 * @returns {@link DeleteDBInstanceCommandOutput}
 * @see {@link DeleteDBInstanceCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBInstanceNotFoundFault} (client fault)
 *  <p>
 *             <i>DBInstanceIdentifier</i> does not refer to an existing DB instance.</p>
 *
 * @throws {@link DBSnapshotAlreadyExistsFault} (client fault)
 *  <p>
 *             <i>DBSnapshotIdentifier</i> is already used by an existing snapshot.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The DB cluster is not in a valid state.</p>
 *
 * @throws {@link InvalidDBInstanceStateFault} (client fault)
 *  <p>The specified DB instance is not in the <i>available</i> state.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>Request would result in user exceeding the allowed number of DB snapshots.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DeleteDBInstanceCommand extends $Command
  .classBuilder<
    DeleteDBInstanceCommandInput,
    DeleteDBInstanceCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBInstance", {})
  .n("NeptuneClient", "DeleteDBInstanceCommand")
  .sc(DeleteDBInstance)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBInstanceMessage;
      output: DeleteDBInstanceResult;
    };
    sdk: {
      input: DeleteDBInstanceCommandInput;
      output: DeleteDBInstanceCommandOutput;
    };
  };
}
