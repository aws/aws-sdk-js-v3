// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterParameterGroupDetails, DescribeClusterParametersMessage } from "../models/models_0";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeClusterParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeClusterParametersCommand}.
 */
export interface DescribeClusterParametersCommandInput extends DescribeClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeClusterParametersCommand}.
 */
export interface DescribeClusterParametersCommandOutput extends ClusterParameterGroupDetails, __MetadataBearer {}

/**
 * <p>Returns a detailed list of parameters contained within the specified Amazon Redshift
 *             parameter group. For each parameter the response includes information such as parameter
 *             name, description, data type, value, whether the parameter value is modifiable, and so
 *             on.</p>
 *          <p>You can specify <i>source</i> filter to retrieve parameters of only
 *             specific type. For example, to retrieve parameters that were modified by a user action
 *             such as from <a>ModifyClusterParameterGroup</a>, you can specify
 *                 <i>source</i> equal to <i>user</i>.</p>
 *          <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeClusterParametersMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   Source: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupDetails
 * //   Parameters: [ // ParametersList
 * //     { // Parameter
 * //       ParameterName: "STRING_VALUE",
 * //       ParameterValue: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Source: "STRING_VALUE",
 * //       DataType: "STRING_VALUE",
 * //       AllowedValues: "STRING_VALUE",
 * //       ApplyType: "static" || "dynamic",
 * //       IsModifiable: true || false,
 * //       MinimumEngineVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeClusterParametersCommandInput - {@link DescribeClusterParametersCommandInput}
 * @returns {@link DescribeClusterParametersCommandOutput}
 * @see {@link DescribeClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeClusterParametersCommand extends $Command
  .classBuilder<
    DescribeClusterParametersCommandInput,
    DescribeClusterParametersCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeClusterParameters", {})
  .n("RedshiftClient", "DescribeClusterParametersCommand")
  .sc(DescribeClusterParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeClusterParametersMessage;
      output: ClusterParameterGroupDetails;
    };
    sdk: {
      input: DescribeClusterParametersCommandInput;
      output: DescribeClusterParametersCommandOutput;
    };
  };
}
