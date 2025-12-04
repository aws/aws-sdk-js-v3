// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DAXClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DAXClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { CreateParameterGroupRequest, CreateParameterGroupResponse } from "../models/models_0";
import { CreateParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateParameterGroupCommand}.
 */
export interface CreateParameterGroupCommandInput extends CreateParameterGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateParameterGroupCommand}.
 */
export interface CreateParameterGroupCommandOutput extends CreateParameterGroupResponse, __MetadataBearer {}

/**
 * <p>Creates a new parameter group. A parameter group is a collection of parameters that
 *             you apply to all of the nodes in a DAX cluster.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DAXClient, CreateParameterGroupCommand } from "@aws-sdk/client-dax"; // ES Modules import
 * // const { DAXClient, CreateParameterGroupCommand } = require("@aws-sdk/client-dax"); // CommonJS import
 * // import type { DAXClientConfig } from "@aws-sdk/client-dax";
 * const config = {}; // type is DAXClientConfig
 * const client = new DAXClient(config);
 * const input = { // CreateParameterGroupRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 * };
 * const command = new CreateParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateParameterGroupResponse
 * //   ParameterGroup: { // ParameterGroup
 * //     ParameterGroupName: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateParameterGroupCommandInput - {@link CreateParameterGroupCommandInput}
 * @returns {@link CreateParameterGroupCommandOutput}
 * @see {@link CreateParameterGroupCommandInput} for command's `input` shape.
 * @see {@link CreateParameterGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ParameterGroupAlreadyExistsFault} (client fault)
 *  <p>The specified parameter group already exists.</p>
 *
 * @throws {@link ParameterGroupQuotaExceededFault} (client fault)
 *  <p>You have attempted to exceed the maximum number of parameter groups.</p>
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
export class CreateParameterGroupCommand extends $Command
  .classBuilder<
    CreateParameterGroupCommandInput,
    CreateParameterGroupCommandOutput,
    DAXClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DAXClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDAXV3", "CreateParameterGroup", {})
  .n("DAXClient", "CreateParameterGroupCommand")
  .sc(CreateParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateParameterGroupRequest;
      output: CreateParameterGroupResponse;
    };
    sdk: {
      input: CreateParameterGroupCommandInput;
      output: CreateParameterGroupCommandOutput;
    };
  };
}
