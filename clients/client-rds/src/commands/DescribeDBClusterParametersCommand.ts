// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterParameterGroupDetails, DescribeDBClusterParametersMessage } from "../models/models_1";
import { de_DescribeDBClusterParametersCommand, se_DescribeDBClusterParametersCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * <p>Returns the detailed parameter list for a particular DB cluster parameter group.</p>
 *          <p>For more information on Amazon Aurora, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeDBClusterParametersCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeDBClusterParametersCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
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
 * @param DescribeDBClusterParametersCommandInput - {@link DescribeDBClusterParametersCommandInput}
 * @returns {@link DescribeDBClusterParametersCommandOutput}
 * @see {@link DescribeDBClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDBClusterParametersCommandOutput} for command's `response` shape.
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
 * @public
 * @example To describe the parameters in a DB cluster parameter group
 * ```javascript
 * // The following example retrieves details about the parameters in a DB cluster parameter group.
 * const input = {
 *   "DBClusterParameterGroupName": "mydbclusterpg"
 * };
 * const command = new DescribeDBClusterParametersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Parameters": [
 *     {
 *       "AllowedValues": "0,1",
 *       "ApplyMethod": "pending-reboot",
 *       "ApplyType": "static",
 *       "DataType": "boolean",
 *       "Description": "Controls whether user-defined functions that have only an xxx symbol for the main function can be loaded",
 *       "IsModifiable": false,
 *       "ParameterName": "allow-suspicious-udfs",
 *       "Source": "engine-default",
 *       "SupportedEngineModes": [
 *         "provisioned"
 *       ]
 *     },
 *     {
 *       "AllowedValues": "0,1",
 *       "ApplyMethod": "pending-reboot",
 *       "ApplyType": "static",
 *       "DataType": "boolean",
 *       "Description": "Enables new features in the Aurora engine.",
 *       "IsModifiable": true,
 *       "ParameterName": "aurora_lab_mode",
 *       "ParameterValue": "0",
 *       "Source": "engine-default",
 *       "SupportedEngineModes": [
 *         "provisioned"
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-describe-the-parameters-in-a-db-cluster-parameter-group-1680213275624
 * ```
 *
 */
export class DescribeDBClusterParametersCommand extends $Command
  .classBuilder<
    DescribeDBClusterParametersCommandInput,
    DescribeDBClusterParametersCommandOutput,
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
  .s("AmazonRDSv19", "DescribeDBClusterParameters", {})
  .n("RDSClient", "DescribeDBClusterParametersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeDBClusterParametersCommand)
  .de(de_DescribeDBClusterParametersCommand)
  .build() {}
