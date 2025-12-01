// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ClusterParameterGroupNameMessage, ModifyClusterParameterGroupMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ModifyClusterParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyClusterParameterGroupCommand}.
 */
export interface ModifyClusterParameterGroupCommandInput extends ModifyClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyClusterParameterGroupCommand}.
 */
export interface ModifyClusterParameterGroupCommandOutput extends ClusterParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a parameter group. For the parameters parameter, it can't contain ASCII characters.</p>
 *          <p>
 * For more information about parameters and parameter groups, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-parameter-groups.html">Amazon Redshift Parameter Groups</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ModifyClusterParameterGroupMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   Parameters: [ // ParametersList // required
 *     { // Parameter
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       DataType: "STRING_VALUE",
 *       AllowedValues: "STRING_VALUE",
 *       ApplyType: "static" || "dynamic",
 *       IsModifiable: true || false,
 *       MinimumEngineVersion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new ModifyClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupNameMessage
 * //   ParameterGroupName: "STRING_VALUE",
 * //   ParameterGroupStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyClusterParameterGroupCommandInput - {@link ModifyClusterParameterGroupCommandInput}
 * @returns {@link ModifyClusterParameterGroupCommandOutput}
 * @see {@link ModifyClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link ClusterParameterGroupNotFoundFault} (client fault)
 *  <p>The parameter group name does not refer to an existing parameter group.</p>
 *
 * @throws {@link InvalidClusterParameterGroupStateFault} (client fault)
 *  <p>The cluster parameter group action can not be completed because another task is in
 *             progress that involves the parameter group. Wait a few moments and try the operation
 *             again.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class ModifyClusterParameterGroupCommand extends $Command
  .classBuilder<
    ModifyClusterParameterGroupCommandInput,
    ModifyClusterParameterGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ModifyClusterParameterGroup", {})
  .n("RedshiftClient", "ModifyClusterParameterGroupCommand")
  .sc(ModifyClusterParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyClusterParameterGroupMessage;
      output: ClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ModifyClusterParameterGroupCommandInput;
      output: ModifyClusterParameterGroupCommandOutput;
    };
  };
}
