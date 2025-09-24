// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ClusterParameterGroupNameMessage } from "../models/models_0";
import { ResetClusterParameterGroupMessage } from "../models/models_1";
import { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { ResetClusterParameterGroup } from "../schemas/schemas_13_Cluster";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetClusterParameterGroupCommand}.
 */
export interface ResetClusterParameterGroupCommandInput extends ResetClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetClusterParameterGroupCommand}.
 */
export interface ResetClusterParameterGroupCommandOutput extends ClusterParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Sets one or more parameters of the specified parameter group to their default
 *             values and sets the source values of the parameters to "engine-default". To reset the
 *             entire parameter group specify the <i>ResetAllParameters</i> parameter.
 *             For parameter changes to take effect you must reboot any associated clusters. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ResetClusterParameterGroupCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ResetClusterParameterGroupCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // ResetClusterParameterGroupMessage
 *   ParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   Parameters: [ // ParametersList
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
 * const command = new ResetClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // ClusterParameterGroupNameMessage
 * //   ParameterGroupName: "STRING_VALUE",
 * //   ParameterGroupStatus: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetClusterParameterGroupCommandInput - {@link ResetClusterParameterGroupCommandInput}
 * @returns {@link ResetClusterParameterGroupCommandOutput}
 * @see {@link ResetClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetClusterParameterGroupCommandOutput} for command's `response` shape.
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
export class ResetClusterParameterGroupCommand extends $Command
  .classBuilder<
    ResetClusterParameterGroupCommandInput,
    ResetClusterParameterGroupCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "ResetClusterParameterGroup", {})
  .n("RedshiftClient", "ResetClusterParameterGroupCommand")
  .sc(ResetClusterParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetClusterParameterGroupMessage;
      output: ClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ResetClusterParameterGroupCommandInput;
      output: ResetClusterParameterGroupCommandOutput;
    };
  };
}
