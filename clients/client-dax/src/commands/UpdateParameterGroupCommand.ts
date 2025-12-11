// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import { UpdateParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Modifies the parameters of a parameter group. You can modify up to 20 parameters in
 *             a single request by submitting a list parameter name and value pairs.</p>
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
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *  <p>One or more parameters in a parameter group are in an invalid state.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The specified service linked role (SLR) was not found.</p>
 *
 * @throws {@link DAXServiceException}
 * <p>Base exception class for all service exceptions from DAX service.</p>
 *
 *
 * @public
 */
export class UpdateParameterGroupCommand extends $Command
  .classBuilder<
    UpdateParameterGroupCommandInput,
    UpdateParameterGroupCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "UpdateParameterGroup", {})
  .n("DAXClient", "UpdateParameterGroupCommand")
  .sc(UpdateParameterGroup)
  .build() {
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
