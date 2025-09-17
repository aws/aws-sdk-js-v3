// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterParameterGroupNameMessage, ResetDBClusterParameterGroupMessage } from "../models/models_1";
import { de_ResetDBClusterParameterGroupCommand, se_ResetDBClusterParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandInput extends ResetDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetDBClusterParameterGroupCommand}.
 */
export interface ResetDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB cluster parameter group to the default value. To
 *             reset specific parameters submit a list of the following: <code>ParameterName</code>
 *             and <code>ApplyMethod</code>. To reset the
 *             entire DB cluster parameter group, specify the <code>DBClusterParameterGroupName</code>
 *             and <code>ResetAllParameters</code> parameters.</p>
 *          <p>When resetting the entire group, dynamic parameters are updated immediately and static parameters
 *             are set to <code>pending-reboot</code> to take effect on the next DB instance restart
 *             or <code>RebootDBInstance</code> request. You must call <code>RebootDBInstance</code> for every
 *             DB instance in your DB cluster that you want the updated static parameter to apply to.</p>
 *          <p>For more information on Amazon Aurora DB clusters, see
 *           <a href="https://docs.aws.amazon.com/AmazonRDS/latest/AuroraUserGuide/CHAP_AuroraOverview.html">
 *               What is Amazon Aurora?</a> in the <i>Amazon Aurora User Guide</i>.</p>
 *          <p>For more information on Multi-AZ DB clusters, see <a href="https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/multi-az-db-clusters-concepts.html"> Multi-AZ DB
 *                 cluster deployments</a> in the <i>Amazon RDS User
 *             Guide.</i>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBClusterParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBClusterParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
 * const input = { // ResetDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   ResetAllParameters: true || false,
 *   Parameters: [ // ParametersList
 *     { // Parameter
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *       Description: "STRING_VALUE",
 *       Source: "STRING_VALUE",
 *       ApplyType: "STRING_VALUE",
 *       DataType: "STRING_VALUE",
 *       AllowedValues: "STRING_VALUE",
 *       IsModifiable: true || false,
 *       MinimumEngineVersion: "STRING_VALUE",
 *       ApplyMethod: "immediate" || "pending-reboot",
 *       SupportedEngineModes: [ // EngineModeList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDBClusterParameterGroupCommandInput - {@link ResetDBClusterParameterGroupCommandInput}
 * @returns {@link ResetDBClusterParameterGroupCommandOutput}
 * @see {@link ResetDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBClusterParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for RDSClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <code>DBParameterGroupName</code> doesn't refer to an
 *         existing DB parameter group.</p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The DB parameter group is in use or is in an invalid state. If you are attempting
 *             to delete the parameter group, you can't delete it when the parameter group is in
 *             this state.</p>
 *
 * @throws {@link RDSServiceException}
 * <p>Base exception class for all service exceptions from RDS service.</p>
 *
 *
 * @example To reset all parameters to their default values
 * ```javascript
 * // The following example resets all parameter values in a customer-created DB cluster parameter group to their default values.
 * const input = {
 *   DBClusterParameterGroupName: "mydbclpg",
 *   ResetAllParameters: true
 * };
 * const command = new ResetDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBClusterParameterGroupName: "mydbclpg"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    ResetDBClusterParameterGroupCommandInput,
    ResetDBClusterParameterGroupCommandOutput,
    RDSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RDSClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ResetDBClusterParameterGroup", {})
  .n("RDSClient", "ResetDBClusterParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ResetDBClusterParameterGroupCommand)
  .de(de_ResetDBClusterParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetDBClusterParameterGroupMessage;
      output: DBClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ResetDBClusterParameterGroupCommandInput;
      output: ResetDBClusterParameterGroupCommandOutput;
    };
  };
}
