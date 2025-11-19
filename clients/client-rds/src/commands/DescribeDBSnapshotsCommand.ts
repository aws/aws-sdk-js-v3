// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBSnapshotMessage, DescribeDBSnapshotsMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBSnapshots } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBSnapshotsCommand}.
 */
export interface DescribeDBSnapshotsCommandInput extends DescribeDBSnapshotsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBSnapshotsCommand}.
 */
export interface DescribeDBSnapshotsCommandOutput extends DBSnapshotMessage, __MetadataBearer {}

/**
 * <p>Returns information about DB snapshots. This API action supports pagination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBSnapshotsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBSnapshotsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBSnapshotsMessage
 *   DBInstanceIdentifier: "STRING_VALUE",
 *   DBSnapshotIdentifier: "STRING_VALUE",
 *   SnapshotType: "STRING_VALUE",
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
 *   IncludeShared: true || false,
 *   IncludePublic: true || false,
 *   DbiResourceId: "STRING_VALUE",
 * };
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * // { // DBSnapshotMessage
 * //   Marker: "STRING_VALUE",
 * //   DBSnapshots: [ // DBSnapshotList
 * //     { // DBSnapshot
 * //       DBSnapshotIdentifier: "STRING_VALUE",
 * //       DBInstanceIdentifier: "STRING_VALUE",
 * //       SnapshotCreateTime: new Date("TIMESTAMP"),
 * //       Engine: "STRING_VALUE",
 * //       AllocatedStorage: Number("int"),
 * //       Status: "STRING_VALUE",
 * //       Port: Number("int"),
 * //       AvailabilityZone: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       InstanceCreateTime: new Date("TIMESTAMP"),
 * //       MasterUsername: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       SnapshotType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //       StorageThroughput: Number("int"),
 * //       OptionGroupName: "STRING_VALUE",
 * //       PercentProgress: Number("int"),
 * //       SourceRegion: "STRING_VALUE",
 * //       SourceDBSnapshotIdentifier: "STRING_VALUE",
 * //       StorageType: "STRING_VALUE",
 * //       TdeCredentialArn: "STRING_VALUE",
 * //       Encrypted: true || false,
 * //       KmsKeyId: "STRING_VALUE",
 * //       DBSnapshotArn: "STRING_VALUE",
 * //       Timezone: "STRING_VALUE",
 * //       IAMDatabaseAuthenticationEnabled: true || false,
 * //       ProcessorFeatures: [ // ProcessorFeatureList
 * //         { // ProcessorFeature
 * //           Name: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       DbiResourceId: "STRING_VALUE",
 * //       TagList: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE",
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SnapshotTarget: "STRING_VALUE",
 * //       OriginalSnapshotCreateTime: new Date("TIMESTAMP"),
 * //       SnapshotDatabaseTime: new Date("TIMESTAMP"),
 * //       DBSystemId: "STRING_VALUE",
 * //       MultiTenant: true || false,
 * //       DedicatedLogVolume: true || false,
 * //       SnapshotAvailabilityZone: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeDBSnapshotsCommandInput - {@link DescribeDBSnapshotsCommandInput}
 * @returns {@link DescribeDBSnapshotsCommandOutput}
 * @see {@link DescribeDBSnapshotsCommandInput} for command's `input` shape.
 * @see {@link DescribeDBSnapshotsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBSnapshotNotFoundFault} (client fault)
 *  <p>
 *             <code>DBSnapshotIdentifier</code> doesn't refer to an existing DB snapshot.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe a DB snapshot for a DB instance
 * ```javascript
 * // The following example retrieves the details of a DB snapshot for a DB instance.
 * const input = {
 *   DBSnapshotIdentifier: "mydbsnapshot"
 * };
 * const command = new DescribeDBSnapshotsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBSnapshots: [
 *     {
 *       AllocatedStorage: 20,
 *       AvailabilityZone: "us-east-1f",
 *       DBInstanceIdentifier: "mysqldb",
 *       DBSnapshotArn: "arn:aws:rds:us-east-1:123456789012:snapshot:mydbsnapshot",
 *       DBSnapshotIdentifier: "mydbsnapshot",
 *       DbiResourceId: "db-AKIAIOSFODNN7EXAMPLE",
 *       Encrypted: false,
 *       Engine: "mysql",
 *       EngineVersion: "5.6.37",
 *       IAMDatabaseAuthenticationEnabled: false,
 *       InstanceCreateTime: "2018-02-08T22:24:55.973Z",
 *       LicenseModel: "general-public-license",
 *       MasterUsername: "mysqladmin",
 *       OptionGroupName: "default:mysql-5-6",
 *       PercentProgress: 100,
 *       Port: 3306,
 *       ProcessorFeatures:       [],
 *       SnapshotCreateTime: "2018-02-08T22:28:08.598Z",
 *       SnapshotType: "manual",
 *       Status: "available",
 *       StorageType: "gp2",
 *       VpcId: "vpc-6594f31c"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBSnapshotsCommand extends $Command
  .classBuilder<
    DescribeDBSnapshotsCommandInput,
    DescribeDBSnapshotsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBSnapshots", {})
  .n("RDSClient", "DescribeDBSnapshotsCommand")
  .sc(DescribeDBSnapshots)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBSnapshotsMessage;
      output: DBSnapshotMessage;
    };
    sdk: {
      input: DescribeDBSnapshotsCommandInput;
      output: DescribeDBSnapshotsCommandOutput;
    };
  };
}
