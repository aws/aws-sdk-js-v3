// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { UpdateParameterGroupRequest, UpdateParameterGroupResponse } from "../models/models_0";
import { de_UpdateParameterGroupCommand, se_UpdateParameterGroupCommand } from "../protocols/Aws_json1_1";

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
 * <p>Updates the parameters of a parameter group. You can modify up to 20 parameters in a single request by submitting a list parameter name and value pairs.</p>
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
 *  <p></p>
 *
 * @throws {@link InvalidParameterGroupStateFault} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ParameterGroupNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class UpdateParameterGroupCommand extends $Command
  .classBuilder<
    UpdateParameterGroupCommandInput,
    UpdateParameterGroupCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "UpdateParameterGroup", {})
  .n("MemoryDBClient", "UpdateParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_UpdateParameterGroupCommand)
  .de(de_UpdateParameterGroupCommand)
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
