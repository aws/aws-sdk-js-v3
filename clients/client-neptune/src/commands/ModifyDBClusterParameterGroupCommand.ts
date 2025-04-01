// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DBClusterParameterGroupNameMessage, ModifyDBClusterParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import {
  de_ModifyDBClusterParameterGroupCommand,
  se_ModifyDBClusterParameterGroupCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandInput extends ModifyDBClusterParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link ModifyDBClusterParameterGroupCommand}.
 */
export interface ModifyDBClusterParameterGroupCommandOutput
  extends DBClusterParameterGroupNameMessage,
    __MetadataBearer {}

/**
 * <p> Modifies the parameters of a DB cluster parameter group. To modify more than one
 *       parameter, submit a list of the following: <code>ParameterName</code>,
 *       <code>ParameterValue</code>, and <code>ApplyMethod</code>. A maximum of 20 parameters can be
 *       modified in a single request.</p>
 *          <note>
 *             <p>Changes to dynamic parameters are applied immediately. Changes to static parameters
 *         require a reboot without failover to the DB cluster associated with the parameter group
 *         before the change can take effect.</p>
 *          </note>
 *          <important>
 *             <p>After you create a DB cluster parameter group, you should wait at least 5 minutes before
 *         creating your first DB cluster that uses that DB cluster parameter group as the default
 *         parameter group. This allows Amazon Neptune to fully complete the create action before the
 *         parameter group is used as the default for a new DB cluster. This is especially important
 *         for parameters that are critical when creating the default database for a DB cluster, such
 *         as the character set for the default database defined by the
 *         <code>character_set_database</code> parameter. You can use the <i>Parameter
 *         Groups</i> option of the Amazon Neptune console or the <a>DescribeDBClusterParameters</a> command to verify that your DB cluster parameter
 *         group has been created or modified.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ModifyDBClusterParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ModifyDBClusterParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * const client = new NeptuneClient(config);
 * const input = { // ModifyDBClusterParameterGroupMessage
 *   DBClusterParameterGroupName: "STRING_VALUE", // required
 *   Parameters: [ // ParametersList // required
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
 * const command = new ModifyDBClusterParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DBClusterParameterGroupNameMessage
 * //   DBClusterParameterGroupName: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ModifyDBClusterParameterGroupCommandInput - {@link ModifyDBClusterParameterGroupCommandInput}
 * @returns {@link ModifyDBClusterParameterGroupCommandOutput}
 * @see {@link ModifyDBClusterParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ModifyDBClusterParameterGroupCommandOutput} for command's `response` shape.
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
export class ModifyDBClusterParameterGroupCommand extends $Command
  .classBuilder<
    ModifyDBClusterParameterGroupCommandInput,
    ModifyDBClusterParameterGroupCommandOutput,
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
  .s("AmazonRDSv19", "ModifyDBClusterParameterGroup", {})
  .n("NeptuneClient", "ModifyDBClusterParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_ModifyDBClusterParameterGroupCommand)
  .de(de_ModifyDBClusterParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyDBClusterParameterGroupMessage;
      output: DBClusterParameterGroupNameMessage;
    };
    sdk: {
      input: ModifyDBClusterParameterGroupCommandInput;
      output: ModifyDBClusterParameterGroupCommandOutput;
    };
  };
}
