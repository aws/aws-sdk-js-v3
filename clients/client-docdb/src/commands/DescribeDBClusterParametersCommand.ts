// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { DocDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DocDBClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/models_0";
import { de_DescribeDBClusterParametersCommand, se_DescribeDBClusterParametersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBClusterParametersCommand}.
 */
export interface DescribeDBClusterParametersCommandInput extends DescribeDBClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBClusterParametersCommand}.
 */
export interface DescribeDBClusterParametersCommandOutput extends DBClusterParameterGroupDetails, __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular cluster parameter
 *             group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DocDBClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-docdb"; // ES Modules import
 * // const { DocDBClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-docdb"); // CommonJS import
 * const client = new DocDBClient(config);
 * const input = { // DescribeDBClusterParametersMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
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
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupDetails
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       ApplyType: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //       ApplyMethod: "immediate" || "pending-reboot",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBClusterParametersCommandInput - {@link DescribeDBClusterParametersCommandInput}
 * @returns {@link DescribeDBClusterParametersCommandOutput}
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link DocDBClientResolvedConfig | config} for DocDBClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an existing parameter group. </p>
 *
 * @throws {@link DocDBServiceException}
 * <p>Base exception class for all service exceptions from DocDB service.</p>
 *
 *
 * @public
 */
export class DescribeDBClusterParametersCommand extends $Command
  .classBuilder<
    DescribeDBClusterParametersCommandInput,
    DescribeDBClusterParametersCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBClusterParameters", {})
  .n("DocDBClient", "DescribeDBClusterParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterParametersCommand)
  .de(de_DescribeDBClusterParametersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBClusterParametersMessage;
      output: DBClusterParameterGroupDetails;
    };
    sdk: {
      input: DescribeDBClusterParametersCommandInput;
      output: DescribeDBClusterParametersCommandOutput;
    };
  };
}
