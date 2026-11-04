// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DBParameterGroupNameMessage, ResetDBParameterGroupMessage } from "../models/models_0";
import { ResetDBParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Modifies the parameters of a DB parameter group to the engine/system default value. To reset specific parameters, provide a list of the following: `ParameterName` and `ApplyMethod`. To reset the entire DB parameter group, specify the `DBParameterGroup` name and `ResetAllParameters` parameters. When resetting the entire group, dynamic parameters are updated immediately and static parameters are set to `pending-reboot` to take effect on the next DB instance restart or `RebootDBInstance` request.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, ResetDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, ResetDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
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
 *
 * *DBParameterGroupName* does not refer to an existing DB parameter group.
 *
 * @throws {@link InvalidDBParameterGroupStateFault} (client fault)
 *
 * The DB parameter group is in use or is in an invalid state. If you are attempting to delete the parameter group, you cannot delete it when the parameter group is in this state.
 *
 * @throws {@link NeptuneServiceException}
 *
 * Base exception class for all service exceptions from Neptune service.
 *
 * @public
 */
export class ResetDBParameterGroupCommand extends command<ResetDBParameterGroupCommandInput, ResetDBParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "ResetDBParameterGroup",
  ResetDBParameterGroup$
) {
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
