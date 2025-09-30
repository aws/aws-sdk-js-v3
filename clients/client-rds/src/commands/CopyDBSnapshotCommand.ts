// smithy-typescript generated code
import { getCrossRegionPresignedUrlPlugin } from "@aws-sdk/middleware-sdk-rds";
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  CopyDBSnapshotMessage,
  CopyDBSnapshotMessageFilterSensitiveLog,
  CopyDBSnapshotResult,
} from "../models/models_0";
import { de_CopyDBSnapshotCommand, se_CopyDBSnapshotCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CopyDBSnapshotCommand}.
 */
export interface CopyDBSnapshotCommandInput extends CopyDBSnapshotMessage {}
/**
 * @public
 *
 * The output of {@link CopyDBSnapshotCommand}.
 */
export interface CopyDBSnapshotCommandOutput extends CopyDBSnapshotResult, __MetadataBearer {}

/**
 * <p>Copies the specified DB snapshot. The source DB snapshot must be in the <code>available</code> state.</p>
 *          <p>You can copy a snapshot from one Amazon Web Services Region to another. In that case, the
 *             Amazon Web Services Region where you call the <code>CopyDBSnapshot</code> operation is the destination
 *             Amazon Web Services Region for the DB snapshot copy.</p>
 *          <p>This command doesn't apply to RDS Custom.</p>
 *          <p>For more information about copying snapshots, see
 *             <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_CopySnapshot.html#USER_CopyDBSnapshot">Copying a DB Snapshot</a> in the <i>Amazon RDS User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CopyDBSnapshotCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CopyDBSnapshotCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // CopyDBSnapshotMessage
 *   SourceDBSnapshotIdentifier: "STRING_VALUE", // required
 *   TargetDBSnapshotIdentifier: "STRING_VALUE", // required
 *   KmsKeyId: "STRING_VALUE",
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 *   CopyTags: true || false,
 *   PreSignedUrl: "STRING_VALUE",
 *   OptionGroupName: "STRING_VALUE",
 *   TargetCustomAvailabilityZone: "STRING_VALUE",
 *   SnapshotTarget: "STRING_VALUE",
 *   CopyOptionGroup: true || false,
 *   SnapshotAvailabilityZone: "STRING_VALUE",
 * };
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * // { // CopyDBSnapshotResult
 * //   DBSnapshot: { // DBSnapshot
 * //     DBSnapshotIdentifier: "STRING_VALUE",
 * //     DBInstanceIdentifier: "STRING_VALUE",
 * //     SnapshotCreateTime: new Date("TIMESTAMP"),
 * //     Engine: "STRING_VALUE",
 * //     AllocatedStorage: Number("int"),
 * //     Status: "STRING_VALUE",
 * //     Port: Number("int"),
 * //     AvailabilityZone: "STRING_VALUE",
 * //     VpcId: "STRING_VALUE",
 * //     InstanceCreateTime: new Date("TIMESTAMP"),
 * //     MasterUsername: "STRING_VALUE",
 * //     EngineVersion: "STRING_VALUE",
 * //     LicenseModel: "STRING_VALUE",
 * //     SnapshotType: "STRING_VALUE",
 * //     Iops: Number("int"),
 * //     StorageThroughput: Number("int"),
 * //     OptionGroupName: "STRING_VALUE",
 * //     PercentProgress: Number("int"),
 * //     SourceRegion: "STRING_VALUE",
 * //     SourceDBSnapshotIdentifier: "STRING_VALUE",
 * //     StorageType: "STRING_VALUE",
 * //     TdeCredentialArn: "STRING_VALUE",
 * //     Encrypted: true || false,
 * //     KmsKeyId: "STRING_VALUE",
 * //     DBSnapshotArn: "STRING_VALUE",
 * //     Timezone: "STRING_VALUE",
 * //     IAMDatabaseAuthenticationEnabled: true || false,
 * //     ProcessorFeatures: [ // ProcessorFeatureList
 * //       { // ProcessorFeature
 * //         Name: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     DbiResourceId: "STRING_VALUE",
 * //     TagList: [ // TagList
 * //       { // Tag
 * //         Key: "STRING_VALUE",
 * //         Value: "STRING_VALUE",
 * //       },
 * //     ],
 * //     SnapshotTarget: "STRING_VALUE",
 * //     OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //     SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //     DBSystemId: "STRING_VALUE",
 * //     MultiTenant: true || false,
 * //     DedicatedLogVolume: true || false,
 * //     SnapshotAvailabilityZone: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CopyDBSnapshotCommandInput - {@link CopyDBSnapshotCommandInput}
 * @returns {@link CopyDBSnapshotCommandOutput}
 * @see {@link CopyDBSnapshotCommandInput} for command's `input` shape.
 * @see {@link CopyDBSnapshotCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link CustomAvailabilityZoneNotFoundFault} (client fault)
 *  <p>
 *             <code>CustomAvailabilityZoneId</code> doesn't refer to an existing custom
 *             Availability Zone identifier.</p>
 *
 * @throws {@link DBSnapshotAlreadyExistsFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> is already used by an existing snapshot.</p>
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link InvalidDBSnapshotStateFault} (client fault)
 *  <p>The state of the DB snapshot doesn't allow deletion.</p>
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
 *
 * @example To copy a DB snapshot
 * ```javascript
 * // The following example creates a copy of a DB snapshot.
 * const input = {
 *   SourceDBSnapshotIdentifier: "rds:database-mysql-2019-06-06-08-38",
 *   TargetDBSnapshotIdentifier: "mydbsnapshotcopy"
 * };
 * const command = new CopyDBSnapshotCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshot: {
 *     AllocatedStorage: 100,
 *     AvailabilityZone: "us-east-1f",
 *     DBInstanceIdentifier: "database-mysql",
 *     DBSnapshotArn: "arn:aws:rds:us-east-1:123456789012:snapshot:mydbsnapshotcopy",
 *     DBSnapshotIdentifier: "mydbsnapshotcopy",
 *     DbiResourceId: "db-ZI7UJ5BLKMBYFGX7FDENCKADC4",
 *     Encrypted: true,
 *     Engine: "mysql",
 *     EngineVersion: "5.6.40",
 *     IAMDatabaseAuthenticationEnabled: false,
 *     InstanceCreateTime: "2019-04-30T15:45:53.663Z",
 *     Iops: 1000,
 *     KmsKeyId: "arn:aws:kms:us-east-1:123456789012:key/AKIAIOSFODNN7EXAMPLE",
 *     LicenseModel: "general-public-license",
 *     MasterUsername: "admin",
 *     OptionGroupName: "default:mysql-5-6",
 *     PercentProgress: 0,
 *     Port: 3306,
 *     ProcessorFeatures:     [],
 *     SnapshotType: "manual",
 *     SourceDBSnapshotIdentifier: "arn:aws:rds:us-east-1:123456789012:snapshot:rds:database-mysql-2019-06-06-08-38",
 *     SourceRegion: "us-east-1",
 *     Status: "creating",
 *     StorageType: "io1",
 *     VpcId: "vpc-6594f31c"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CopyDBSnapshotCommand extends $Command
  .classBuilder<
    CopyDBSnapshotCommandInput,
    CopyDBSnapshotCommandOutput,
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
  .s("AmazonRDSv19", "CopyDBSnapshot", {})
  .n("RDSClient", "CopyDBSnapshotCommand")
  .f(CopyDBSnapshotMessageFilterSensitiveLog, void 0)
  .ser(se_CopyDBSnapshotCommand)
  .de(de_CopyDBSnapshotCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CopyDBSnapshotMessage;
      output: CopyDBSnapshotResult;
    };
    sdk: {
      input: CopyDBSnapshotCommandInput;
      output: CopyDBSnapshotCommandOutput;
    };
  };
}
