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
 * Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, UpdateParameterGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, UpdateParameterGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
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
 * //     Name: "STRING_VALUE",
 * //     Family: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateParameterGroupCommandInput - {@link UpdateParameterGroupCommandInput}
 * @returns {@link UpdateParameterGroupCommandOutput}
 * @see {@link UpdateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *
 * The specified parameter combination is not valid.
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *
 * The parameter group is not in a valid state for the requested operation.
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *
 * The specified parameter value is not valid.
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *
 * The specified parameter group does not exist.
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *
 * The required service-linked role was not found.
 *
 * @throws {@link MemoryDBServiceException}
 *
 * Base exception class for all service exceptions from MemoryDB service.
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
