// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_1";
import { de_ResetDBParameterGroupCommand, se_ResetDBParameterGroupCommand } from "../protocols/Aws_query";
import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";

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
 * <p>Modifies the parameters of a DB parameter group to the engine/system default value.
 *             To reset specific parameters, provide a list of the following:
 *                 <code>ParameterName</code> and <code>ApplyMethod</code>. To reset the entire DB
 *             parameter group, specify the <code>DBParameterGroup</code> name and
 *                 <code>ResetAllParameters</code> parameters. When resetting the entire group, dynamic
 *             parameters are updated immediately and static parameters are set to
 *                 <code>pending-reboot</code> to take effect on the next DB instance restart or
 *                 <code>RebootDBInstance</code> request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * // import type { RDSClientConfig } from "@aws-sdk/client-rds";
 * const config = {}; // type is RDSClientConfig
 * const client = new RDSClient(config);
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
 *       SupportedEngineModes: [ // EngineModeList
 *         "STRING_VALUE",
 *       ],
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
 * // The following example resets all parameter values in a customer-created DB parameter group to their default values.
 * const input = {
 *   DBParameterGroupName: "mypg",
 *   ResetAllParameters: true
 * };
 * const command = new ResetDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   DBParameterGroupName: "mypg"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ResetDBParameterGroupCommand extends $Command
  .classBuilder<
    ResetDBParameterGroupCommandInput,
    ResetDBParameterGroupCommandOutput,
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
  .s("AmazonRDSv19", "ResetDBParameterGroup", {})
  .n("RDSClient", "ResetDBParameterGroupCommand")
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
