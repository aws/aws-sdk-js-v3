// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_DescribeOrderableDBInstanceOptionsCommand,
  se_DescribeOrderableDBInstanceOptionsCommand,
} from "../protocols/Aws_query";

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
 * <p>Returns a list of orderable DB instance options for the specified engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DescribeOrderableDBInstanceOptionsCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DescribeOrderableDBInstanceOptionsCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DescribeOrderableDBInstanceOptionsMessage
 *   Engine: "STRING_VALUE", // required
 *   EngineVersion: "STRING_VALUE",
 *   DBInstanceClass: "STRING_VALUE",
 *   LicenseModel: "STRING_VALUE",
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
 * //       SupportsGlobalDatabases: true || false,
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
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class DescribeOrderableDBInstanceOptionsCommand extends $Command
  .classBuilder<
    DescribeOrderableDBInstanceOptionsCommandInput,
    DescribeOrderableDBInstanceOptionsCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeOrderableDBInstanceOptions", {})
  .n("NeptuneClient", "DescribeOrderableDBInstanceOptionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeOrderableDBInstanceOptionsCommand)
  .de(de_DescribeOrderableDBInstanceOptionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeOrderableDBInstanceOptionsMessage;
      output: OrderableDBInstanceOptionsMessage;
    };
    sdk: {
      input: DescribeOrderableDBInstanceOptionsCommandInput;
      output: DescribeOrderableDBInstanceOptionsCommandOutput;
    };
  };
}
