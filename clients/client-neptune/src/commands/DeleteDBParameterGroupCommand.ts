// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteDBParameterGroupMessage } from "../models/models_0";
import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { DeleteDBParameterGroup } from "../schemas/schemas_1_Group";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandInput extends DeleteDBParameterGroupMessage {}
/**
 * @public
 *
 * The output of {@link DeleteDBParameterGroupCommand}.
 */
export interface DeleteDBParameterGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a specified DBParameterGroup. The DBParameterGroup to be deleted can't be
 *       associated with any DB instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { NeptuneClient, DeleteDBParameterGroupCommand } from "@aws-sdk/client-neptune"; // ES Modules import
 * // const { NeptuneClient, DeleteDBParameterGroupCommand } = require("@aws-sdk/client-neptune"); // CommonJS import
 * // import type { NeptuneClientConfig } from "@aws-sdk/client-neptune";
 * const config = {}; // type is NeptuneClientConfig
 * const client = new NeptuneClient(config);
 * const input = { // DeleteDBParameterGroupMessage
 *   DBParameterGroupName: "STRING_VALUE", // required
 * };
 * const command = new DeleteDBParameterGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDBParameterGroupCommandInput - {@link DeleteDBParameterGroupCommandInput}
 * @returns {@link DeleteDBParameterGroupCommandOutput}
 * @see {@link DeleteDBParameterGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBParameterGroupCommandOutput} for command's `response` shape.
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
export class DeleteDBParameterGroupCommand extends $Command
  .classBuilder<
    DeleteDBParameterGroupCommandInput,
    DeleteDBParameterGroupCommandOutput,
    NeptuneClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: NeptuneClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonRDSv19", "DeleteDBParameterGroup", {})
  .n("NeptuneClient", "DeleteDBParameterGroupCommand")
  .sc(DeleteDBParameterGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDBParameterGroupMessage;
      output: {};
    };
    sdk: {
      input: DeleteDBParameterGroupCommandInput;
      output: DeleteDBParameterGroupCommandOutput;
    };
  };
}
