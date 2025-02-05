// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DeleteParameterGroupRequest, DeleteParameterGroupResponse } from "../models/models_0";
import { de_DeleteParameterGroupCommand, se_DeleteParameterGroupCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteParameterGroupCommand}.
 */
export interface DeleteParameterGroupCommandInput extends DeleteParameterGroupRequest {}
/**
 * @public
 *
 * The output of {@link DeleteParameterGroupCommand}.
 */
export interface DeleteParameterGroupCommandOutput extends DeleteParameterGroupResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified parameter group. You cannot delete a parameter group if it is associated with any clusters.
 *          You cannot delete the default parameter groups in your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DeleteParameterGroupCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DeleteParameterGroupCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MemoryDBClient(config);
 * const input = { // DeleteParameterGroupRequest
 *   ParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteParameterGroupCommand(input);
 * const response = await client.send(command);
 * // { // DeleteParameterGroupResponse
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
 * @param DeleteParameterGroupCommandInput - {@link DeleteParameterGroupCommandInput}
 * @returns {@link DeleteParameterGroupCommandOutput}
 * @see {@link DeleteParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteParameterGroupCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DeleteParameterGroupCommand extends $Command
  .classBuilder<
    DeleteParameterGroupCommandInput,
    DeleteParameterGroupCommandOutput,
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
  .s("AmazonMemoryDB", "DeleteParameterGroup", {})
  .n("MemoryDBClient", "DeleteParameterGroupCommand")
  .f(void 0, void 0)
  .ser(se_DeleteParameterGroupCommand)
  .de(de_DeleteParameterGroupCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteParameterGroupRequest;
      output: DeleteParameterGroupResponse;
    };
    sdk: {
      input: DeleteParameterGroupCommandInput;
      output: DeleteParameterGroupCommandOutput;
    };
  };
}
