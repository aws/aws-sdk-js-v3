// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CopyDBClusterSnapshotMessage, CopyDBClusterSnapshotResult } from "../models/models_0";
import { de_CopyDBClusterSnapshotCommand, se_CopyDBClusterSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandInput extends CopyDBClusterSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBClusterSnapshotCommand}.
 */
export interface CopyDBClusterSnapshotCommandOutput extends CopyDBClusterSnapshotResult, __MetadataBearer {}

/**
 * <p>Copies a snapshot of a DB cluster.</p>
 *          <p>To copy a DB cluster snapshot from a shared manual DB cluster snapshot, <code>SourceDBClusterSnapshotIdentifier</code>
 *           must be the Amazon Resource Name (ARN) of the shared DB cluster snapshot.</p>
 *          <p>You can copy an encrypted DB cluster snapshot from another Amazon Web Services Region. In that case,
 *             the Amazon Web Services Region where you call the <code>CopyDBClusterSnapshot</code> operation is the
 *             destination Amazon Web Services Region for the encrypted DB cluster snapshot to be copied to. To copy
 *             an encrypted DB cluster snapshot from another Amazon Web Services Region, you must provide the
 *             following values:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>KmsKeyId</code> - The Amazon Web Services Key Management System (Amazon Web Services KMS) key identifier for the key to use to
 *               encrypt the copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>TargetDBClusterSnapshotIdentifier</code> - The identifier for the new copy of the DB cluster snapshot in the destination Amazon Web Services Region.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>SourceDBClusterSnapshotIdentifier</code> - The DB cluster snapshot
 *                     identifier for the encrypted DB cluster snapshot to be copied. This identifier
 *                     must be in the ARN format for the source Amazon Web Services Region and is the same value as
 *                     the <code>SourceDBClusterSnapshotIdentifier</code> in the presigned URL.</p>
 *             </li>
 *          </ul>
 *          <p>To cancel the copy operation once it is in progress, delete the target DB cluster snapshot identified
 *           by <code>TargetDBClusterSnapshotIdentifier</code> while that DB cluster snapshot is in "copying" status.</p>
 *          <p>For more information on copying encrypted Amazon Aurora DB cluster snapshots from one Amazon Web Services Region to another, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/USER_CopySnapshot.html">
 *               Copying a Snapshot</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *                 What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBClusterSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBClusterSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new RDSClient(config);
 * const input = { // CopyDBClusterSnapshotMessage
 *   SourceDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   TargetDBClusterSnapshotIdentifier: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   PreSignedUrl: "STRING_VALUE",
 *   CopyTags: true || false,
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBClusterSnapshotResult
 * //   DBClusterSnapshot: { // DBClusterSnapshot
 * //     AvailabilityZones: [ // AvailabilityZones
 * //       "STRING_VALUE",
 * //     ],
 * //     DBClusterSnapshotIdentifier: "STRING_VALUE",
 * //     DBClusterIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     EngineMode: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     VpcId: "STRING_VALUE",
 * //     ClusterCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     StorageEncrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBClusterSnapshotArn: "STRING_VALUE",
 * //     SourceDBClusterSnapshotArn: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DBSystemId: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     DbClusterResourceId: "STRING_VALUE",
 * //     StorageThroughput: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBClusterSnapshotCommandInput - {@link CopyDBClusterSnapshotCommandInput}
 * @returns {@link CopyDBClusterSnapshotCommandOutput}
 * @see {@link CopyDBClusterSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBClusterSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBClusterSnapshotAlreadyExistsFault} (client fault)
 *  <p>The user already has a DB cluster snapshot with the given identifier.</p>
 *
 * @throws {@link DBClusterSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBClusterSnapshotIdentifier</code> doesn't refer to an existing DB cluster snapshot.</p>
 *
 * @throws {@link InvalidDBClusterSnapshotStateFault} (client fault)
 *  <p>The supplied value isn't a valid DB cluster snapshot state.</p>
 *
 * @throws {@link InvalidDBClusterStateFault} (client fault)
 *  <p>The requested operation can't be performed while the cluster is in this state.</p>
 *
 * @throws {@link KMSKeyNotAccessibleFault} (client fault)
 *  <p>An error occurred accessing an Amazon Web Services KMS key.</p>
 *
 * @throws {@link SnapshotQuotaExceededFault} (client fault)
 *  <p>The request would result in the user exceeding the allowed number of DB
 *             snapshots.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To copy a DB cluster snapshot
 * ```javascript
 * // The following example creates a copy of a DB cluster snapshot, including its tags.
 * const input = {
 *   "CopyTags": true,
 *   "SourceDBClusterSnapshotIdentifier": "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:rds:myaurora-2019-06-04-09-16",
 *   "TargetDBClusterSnapshotIdentifier": "myclustersnapshotcopy"
 * };
 * const command = new CopyDBClusterSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "DBClusterSnapshot": {
 *     "AllocatedStorage": 0,
 *     "AvailabilityZones": [
 *       "us-east-1a",
 *       "us-east-1b",
 *       "us-east-1e"
 *     ],
 *     "ClusterCreateTime": "2019-04-15T14:18:42.785Z",
 *     "DBClusterIdentifier": "myaurora",
 *     "DBClusterSnapshotArn": "arn:aws:rds:us-east-1:123456789012:cluster-snapshot:myclustersnapshotcopy",
 *     "DBClusterSnapshotIdentifier": "myclustersnapshotcopy",
 *     "Engine": "aurora-mysql",
 *     "EngineVersion": "5.7.mysql_aurora.2.04.2",
 *     "IAMDatabaseAuthenticationEnabled": false,
 *     "KmsKeyId": "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     "LicenseModel": "aurora-mysql",
 *     "MasterUsername": "myadmin",
 *     "PercentProgress": 100,
 *     "Port": 0,
 *     "SnapshotCreateTime": "2019-06-04T09:16:42.649Z",
 *     "SnapshotType": "manual",
 *     "Status": "available",
 *     "StorageEncrypted": true,
 *     "VpcId": "vpc-123example"
 *   }
 * }
 * *\/
 * // example id: to-copy-a-db-cluster-snapshot-1679695109979
 * ```
 *
 */
export class CopyDBClusterSnapshotCommand extends $Command
  .classBuilder<
    CopyDBClusterSnapshotCommandInput,
    CopyDBClusterSnapshotCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
      getCrossRegionPresignedUrlPlugin(config),
    ];
  })
  .s("AmazonRDSv19", "CopyDBClusterSnapshot", {})
  .n("RDSClient", "CopyDBClusterSnapshotCommand")
  .f(void 0, void 0)
  .ser(se_CopyDBClusterSnapshotCommand)
  .de(de_CopyDBClusterSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyDBClusterSnapshotMessage;
      output: CopyDBClusterSnapshotResult;
    };
    sdk: {
      input: CopyDBClusterSnapshotCommandInput;
      output: CopyDBClusterSnapshotCommandOutput;
    };
  };
}
