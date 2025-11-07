// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { ResetParameterGroupRequest, ResetParameterGroupResponse } from "../models/models_0";
import { ResetParameterGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResetParameterGroupCommand}.
 */
export interface ResetParameterGroupCommandInput extends ResetParameterGroupRequest {}
/**
 * @public
 *
 * The output of {@link ResetParameterGroupCommand}.
 */
export interface ResetParameterGroupCommandOutput extends ResetParameterGroupResponse, __MetadataBearer {}

/**
 * <p>Modifies the parameters of a parameter group to the engine or system default value. You can reset specific parameters by submitting a list of parameter names. To reset the entire parameter group, specify the AllParameters and ParameterGroupName parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, ResetParameterGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, ResetParameterGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // ResetParameterGroupRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 *   AllParameters: true || false,
 *   ParameterNames: [ // ParameterNameList
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ResetParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // ResetParameterGroupResponse
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
 * @param ResetParameterGroupCommandInput - {@link ResetParameterGroupCommandInput}
 * @returns {@link ResetParameterGroupCommandOutput}
 * @see {@link ResetParameterGroupCommandInput} for command's `input` shape.
 * @see {@link ResetParameterGroupCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *  <p>The parameter group is not in a valid state for the requested operation.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p>The specified parameter group does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class ResetParameterGroupCommand extends $Command
  .classBuilder<
    ResetParameterGroupCommandInput,
    ResetParameterGroupCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "ResetParameterGroup", {})
  .n("MemoryDBClient", "ResetParameterGroupCommand")
  .sc(ResetParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResetParameterGroupRequest;
      output: ResetParameterGroupResponse;
    };
    sdk: {
      input: ResetParameterGroupCommandInput;
      output: ResetParameterGroupCommandOutput;
    };
  };
}
