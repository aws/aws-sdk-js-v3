// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeDefaultClusterParametersMessage, DescribeDefaultClusterParametersResult } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeDefaultClusterParameters } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeDefaultClusterParametersCommand}.
 */
export interface DescribeDefaultClusterParametersCommandInput extends DescribeDefaultClusterParametersMessage {}
/**
 * @public
 *
 * The output of {@link DescribeDefaultClusterParametersCommand}.
 */
export interface DescribeDefaultClusterParametersCommandOutput
  extends DescribeDefaultClusterParametersResult,
    __MetadataBearer {}

/**
 * <p>Returns a list of parameter settings for the specified parameter group
 *             family.</p>
 *          <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeDefaultClusterParametersCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeDefaultClusterParametersCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeDefaultClusterParametersMessage
 *   ParameterGroupFamily: "STRING_VALUE", // required
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeDefaultClusterParametersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeDefaultClusterParametersResult
 * //   DefaultClusterParameters: { // DefaultClusterParameters
 * //     ParameterGroupFamily: "STRING_VALUE",
 * //     Marker: "STRING_VALUE",
 * //     Parameters: [ // ParametersList
 * //       { // Parameter
 * //         ParameterName: "STRING_VALUE",
 * //         ParameterValue: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         Source: "STRING_VALUE",
 * //         DataType: "STRING_VALUE",
 * //         AllowedValues: "STRING_VALUE",
 * //         ApplyType: "static" || "dynamic",
 * //         IsModifiable: true || false,
 * //         MinimumEngineVersion: "STRING_VALUE",
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeDefaultClusterParametersCommandInput - {@link DescribeDefaultClusterParametersCommandInput}
 * @returns {@link DescribeDefaultClusterParametersCommandOutput}
 * @see {@link DescribeDefaultClusterParametersCommandInput} for command's `input` shape.
 * @see {@link DescribeDefaultClusterParametersCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeDefaultClusterParametersCommand extends $Command
  .classBuilder<
    DescribeDefaultClusterParametersCommandInput,
    DescribeDefaultClusterParametersCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeDefaultClusterParameters", {})
  .n("RedshiftClient", "DescribeDefaultClusterParametersCommand")
  .sc(DescribeDefaultClusterParameters)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeDefaultClusterParametersMessage;
      output: DescribeDefaultClusterParametersResult;
    };
    sdk: {
      input: DescribeDefaultClusterParametersCommandInput;
      output: DescribeDefaultClusterParametersCommandOutput;
    };
  };
}
