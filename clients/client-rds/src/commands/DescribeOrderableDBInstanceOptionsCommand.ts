// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage } from "../models/models_1";
import {
  de_DescribeOrderableDBInstanceOptionsCommand,
  se_DescribeOrderableDBInstanceOptionsCommand,
} from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeOrderableDBInstanceOptionsCommand}.
 */
export interface DescribeOrderableDBInstanceOptionsCommandInput extends DescribeOrderableDBInstanceOptionsMessage {}
/**
 * @public
 *
 * The output of {@link DescribeOrderableDBInstanceOptionsCommand}.
 */
export interface DescribeOrderableDBInstanceOptionsCommandOutput
  extends OrderableDBInstanceOptionsMessage,
    __MetadataBearer {}

/**
 * <p>Describes the orderable DB instance options for a specified DB engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeOrderableDBInstanceOptionsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeOrderableDBInstanceOptionsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const input = { // DescribeOrderableDBInstanceOptionsMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   LicenseModel: "STRING_VALUE",
 *   AvailabilityZoneGroup: "STRING_VALUE",
 *   Vpc: true || false,
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
 * const command = new DescribeOrderableDBInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * // { // OrderableDBInstanceOptionsMessage
 * //   OrderableDBInstanceOptions: [ // OrderableDBInstanceOptionsList
 * //     { // OrderableDBInstanceOption
 * //       Engine: "STRING_VALUE",
 * //       EngineVersion: "STRING_VALUE",
 * //       DBInstanceClass: "STRING_VALUE",
 * //       LicenseModel: "STRING_VALUE",
 * //       AvailabilityZoneGroup: "STRING_VALUE",
 * //       AvailabilityZones: [ // AvailabilityZoneList
 * //         { // AvailabilityZone
 * //           Name: "STRING_VALUE",
 * //         },
 * //       ],
 * //       MultiAZCapable: true || false,
 * //       ReadReplicaCapable: true || false,
 * //       Vpc: true || false,
 * //       SupportsStorageEncryption: true || false,
 * //       StorageType: "STRING_VALUE",
 * //       SupportsIops: true || false,
 * //       SupportsEnhancedMonitoring: true || false,
 * //       SupportsIAMDatabaseAuthentication: true || false,
 * //       SupportsPerformanceInsights: true || false,
 * //       MinStorageSize: Number("int"),
 * //       MaxStorageSize: Number("int"),
 * //       MinIopsPerDbInstance: Number("int"),
 * //       MaxIopsPerDbInstance: Number("int"),
 * //       MinIopsPerGib: Number("double"),
 * //       MaxIopsPerGib: Number("double"),
 * //       AvailableProcessorFeatures: [ // AvailableProcessorFeatureList
 * //         { // AvailableProcessorFeature
 * //           Name: "STRING_VALUE",
 * //           DefaultValue: "STRING_VALUE",
 * //           AllowedValues: "STRING_VALUE",
 * //         },
 * //       ],
 * //       SupportedEngineModes: [ // EngineModeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsStorageAutoscaling: true || false,
 * //       SupportsKerberosAuthentication: true || false,
 * //       OutpostCapable: true || false,
 * //       SupportedActivityStreamModes: [ // ActivityStreamModeList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsGlobalDatabases: true || false,
 * //       SupportsClusters: true || false,
 * //       SupportedNetworkTypes: [ // StringList
 * //         "STRING_VALUE",
 * //       ],
 * //       SupportsStorageThroughput: true || false,
 * //       MinStorageThroughputPerDbInstance: Number("int"),
 * //       MaxStorageThroughputPerDbInstance: Number("int"),
 * //       MinStorageThroughputPerIops: Number("double"),
 * //       MaxStorageThroughputPerIops: Number("double"),
 * //       SupportsDedicatedLogVolume: true || false,
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeOrderableDBInstanceOptionsCommandInput - {@link DescribeOrderableDBInstanceOptionsCommandInput}
 * @returns {@link DescribeOrderableDBInstanceOptionsCommandOutput}
 * @see {@link DescribeOrderableDBInstanceOptionsCommandInput} for command's `input` shape.
 * @see {@link DescribeOrderableDBInstanceOptionsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 * @public
 * @example To describe orderable DB instance options
 * ```javascript
 * // The following example retrieves details about the orderable options for a DB instances running the MySQL DB engine.
 * const input = {
 *   "Engine": "mysql"
 * };
 * const command = new DescribeOrderableDBInstanceOptionsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "OrderableDBInstanceOptions": [
 *     {
 *       "AvailabilityZones": [
 *         {
 *           "Name": "us-east-1a"
 *         },
 *         {
 *           "Name": "us-east-1b"
 *         },
 *         {
 *           "Name": "us-east-1c"
 *         },
 *         {
 *           "Name": "us-east-1d"
 *         },
 *         {
 *           "Name": "us-east-1e"
 *         },
 *         {
 *           "Name": "us-east-1f"
 *         }
 *       ],
 *       "DBInstanceClass": "db.m4.10xlarge",
 *       "Engine": "mysql",
 *       "EngineVersion": "5.7.33",
 *       "LicenseModel": "general-public-license",
 *       "MultiAZCapable": true,
 *       "ReadReplicaCapable": true,
 *       "StorageType": "gp2",
 *       "SupportsStorageEncryption": true,
 *       "Vpc": true
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-orderable-db-instance-options-1680283253165
 * ```
 *
 */
export class DescribeOrderableDBInstanceOptionsCommand extends $Command
  .classBuilder<
    DescribeOrderableDBInstanceOptionsCommandInput,
    DescribeOrderableDBInstanceOptionsCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeOrderableDBInstanceOptions", {})
  .n("RDSClient", "DescribeOrderableDBInstanceOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOrderableDBInstanceOptionsCommand)
  .de(de_DescribeOrderableDBInstanceOptionsCommand)
  .build() {}
