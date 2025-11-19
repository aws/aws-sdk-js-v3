// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBParameterGroupDetails, DescribeDBParametersMessage } from "../models/models_0";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DescribeDBParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandInput extends DescribeDBParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDBParametersCommand}.
 */
export interface DescribeDBParametersCommandOutput extends DBParameterGroupDetails, __MetadataBearer {}

/**
 * <p>Returns the detailed parameter list for a particular DB parameter group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // DescribeDBParametersMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
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
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupDetails
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
 * //       SupportedEngineModes: [ // EngineModeList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeDBParametersCommandInput - {@link DescribeDBParametersCommandInput}
 * @returns {@link DescribeDBParametersCommandOutput}
 * @see {@link DescribeDBParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBParametersCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To describe the parameters in a DB parameter group
 * ```javascript
 * // The following example retrieves the details of the specified DB parameter group.
 * const input = {
 *   DBParameterGroupName: "mydbpg"
 * };
 * const command = new DescribeDBParametersCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Parameters: [
 *     {
 *       AllowedValues: "0,1",
 *       ApplyMethod: "pending-reboot",
 *       ApplyType: "static",
 *       DataType: "boolean",
 *       Description: "Controls whether user-defined functions that have only an xxx symbol for the main function can be loaded",
 *       IsModifiable: false,
 *       ParameterName: "allow-suspicious-udfs",
 *       Source: "engine-default"
 *     },
 *     {
 *       AllowedValues: "0,1",
 *       ApplyMethod: "pending-reboot",
 *       ApplyType: "static",
 *       DataType: "boolean",
 *       Description: "Controls whether the server autogenerates SSL key and certificate files in the data directory, if they do not already exist.",
 *       IsModifiable: false,
 *       ParameterName: "auto_generate_certs",
 *       Source: "engine-default"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeDBParametersCommand extends $Command
  .classBuilder<
    DescribeDBParametersCommandInput,
    DescribeDBParametersCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DescribeDBParameters", {})
  .n("RDSClient", "DescribeDBParametersCommand")
  .sc(DescribeDBParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDBParametersMessage;
      output: DBParameterGroupDetails;
    };
    sdk: {
      input: DescribeDBParametersCommandInput;
      output: DescribeDBParametersCommandOutput;
    };
  };
}
