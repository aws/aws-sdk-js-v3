// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import { UpdateParameterGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateParameterGroupCommand}.
 */
export interface UpdateParameterGroupCommandInput extends UpdateParameterGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateParameterGroupCommand}.
 */
export interface UpdateParameterGroupCommandOutput extends UpdateParameterGroupResponse, __MetadataBearer {}

/**
 * Modifies the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, UpdateParameterGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, UpdateParameterGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // UpdateParameterGroupRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 *   ParameterNameValues: [ // ParameterNameValueList // required
 *     { // ParameterNameValue
 *       ParameterName: "STRING_VALUE",
 *       ParameterValue: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateParameterGroupResponse
 * //   ParameterGroup: { // ParameterGroup
 * //     ParameterGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateParameterGroupCommandInput - {@link UpdateParameterGroupCommandInput}
 * @returns {@link UpdateParameterGroupCommandOutput}
 * @see {@link UpdateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link DAXClientResolvedConfig | config} for DAXClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * Two or more incompatible parameters were specified.
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *
 * One or more parameters in a parameter group are in an invalid state.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The value for a parameter is invalid.
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *
 * The specified parameter group does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The specified service linked role (SLR) was not found.
 *
 * @throws {@link DAXServiceException}
 *
 * Base exception class for all service exceptions from DAX service.
 *
 * @public
 */
export class UpdateParameterGroupCommand extends command<UpdateParameterGroupCommandInput, UpdateParameterGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateParameterGroup",
  UpdateParameterGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateParameterGroupRequest;
      output: UpdateParameterGroupResponse;
    };
    sdk: {
      input: UpdateParameterGroupCommandInput;
      output: UpdateParameterGroupCommandOutput;
    };
  };
}
