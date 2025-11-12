// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeEngineDefaultClusterParametersMessage,
  DescribeEngineDefaultClusterParametersResult,
} from "../models/models_0";
import { DescribeEngineDefaultClusterParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEngineDefaultClusterParametersCommand}.
 */
export interface DescribeEngineDefaultClusterParametersCommandInput
  extends DescribeEngineDefaultClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeEngineDefaultClusterParametersCommand}.
 */
export interface DescribeEngineDefaultClusterParametersCommandOutput
  extends DescribeEngineDefaultClusterParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns the default engine and system parameter information for the cluster database
 *             engine.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeEngineDefaultClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeEngineDefaultClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * // import type { DocDBClientConfig } from "@aws-sdk/client-docdb";
 * const config = {}; // type is DocDBClientConfig
 * const client = new DocDBClient(config);
 * const input = { // DescribeEngineDefaultClusterParametersMessage
 *   DBParameterGroupFamily: "STRING_VALUE", // required
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
 * const command = new DescribeEngineDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEngineDefaultClusterParametersResult
 * //   EngineDefaults: { // EngineDefaults
 * //     DBParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         ApplyType: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //         ApplyMethod: "immediate" || "pending-reboot",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeEngineDefaultClusterParametersCommandInput - {@link DescribeEngineDefaultClusterParametersCommandInput}
 * @returns {@link DescribeEngineDefaultClusterParametersCommandOutput}
 * @see {@link DescribeEngineDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeEngineDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeEngineDefaultClusterParametersCommand extends $Command
  .classBuilder<
    DescribeEngineDefaultClusterParametersCommandInput,
    DescribeEngineDefaultClusterParametersCommandOutput,
    DocDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DocDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeEngineDefaultClusterParameters", {})
  .n("DocDBClient", "DescribeEngineDefaultClusterParametersCommand")
  .sc(DescribeEngineDefaultClusterParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEngineDefaultClusterParametersMessage;
      output: DescribeEngineDefaultClusterParametersResult;
    };
    sdk: {
      input: DescribeEngineDefaultClusterParametersCommandInput;
      output: DescribeEngineDefaultClusterParametersCommandOutput;
    };
  };
}
