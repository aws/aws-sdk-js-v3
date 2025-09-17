// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeOrderableDBInstanceOptionsMessage, OrderableDBInstanceOptionsMessage } from "../models/models_0";
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
 * <p>Returns a list of orderable instance options for the specified engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeOrderableDBInstanceOptionsCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeOrderableDBInstanceOptionsCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
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
 * //       Vpc: true || false,
 * //       StorageType: "STRING_VALUE",
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
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeOrderableDBInstanceOptionsCommand extends $Command
  .classBuilder<
    DescribeOrderableDBInstanceOptionsCommandInput,
    DescribeOrderableDBInstanceOptionsCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "DescribeOrderableDBInstanceOptions", {})
  .n("DocDBClient", "DescribeOrderableDBInstanceOptionsCommand")
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
