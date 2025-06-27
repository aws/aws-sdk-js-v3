// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { de_ResetDBParameterGroupCommand, se_ResetDBParameterGroupCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetDBParameterGroupCommand}.
 */
export interface ResetDBParameterGroupCommandInput extends ResetDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ResetDBParameterGroupCommand}.
 */
export interface ResetDBParameterGroupCommandOutput extends DBParameterGroupNameMessage, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value. To
 *       reset specific parameters, provide a list of the following: <code>ParameterName</code> and
 *       <code>ApplyMethod</code>. To reset the entire DB parameter group, specify the
 *       <code>DBParameterGroup</code> name and <code>ResetAllParameters</code> parameters. When
 *       resetting the entire group, dynamic parameters are updated immediately and static parameters
 *       are set to <code>pending-reboot</code> to take effect on the next DB instance restart or
 *       <code>RebootDBInstance</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ResetDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
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
 *     },
 *   ],
 * };
 * const command = new ResetDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBParameterGroupNameMessage
 * //   DBParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ResetDBParameterGroupCommandInput - {@link ResetDBParameterGroupCommandInput}
 * @returns {@link ResetDBParameterGroupCommandOutput}
 * @see {@link ResetDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetDBParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link NeptuneClientResolvedConfig | config} for NeptuneClient's `config` shape.
 *
 * @throws {@link DBParameterGroupNotFoundFault} (client fault)
 *  <p>
 *             <i>DBParameterGroupName</i> does not refer to an
 *       existing DB parameter group.</p>
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *  <p>The DB parameter group is in use or is in an invalid state. If you are attempting to
 *       delete the parameter group, you cannot delete it when the parameter group is in this state.</p>
 *
 * @throws {@link NeptuneServiceException}
 * <p>Base exception class for all service exceptions from Neptune service.</p>
 *
 *
 * @public
 */
export class ResetDBParameterGroupCommand extends $Command
  .classBuilder<
    ResetDBParameterGroupCommandInput,
    ResetDBParameterGroupCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonRDSv19", "ResetDBParameterGroup", {})
  .n("NeptuneClient", "ResetDBParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ResetDBParameterGroupCommand)
  .de(de_ResetDBParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetDBParameterGroupMessage;
      output: DBParameterGroupNameMessage;
    };
    sdk: {
      input: ResetDBParameterGroupCommandInput;
      output: ResetDBParameterGroupCommandOutput;
    };
  };
}
