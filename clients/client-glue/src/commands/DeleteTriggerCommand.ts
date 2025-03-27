// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTriggerRequest, DeleteTriggerResponse } from "../models/models_1";
import { de_DeleteTriggerCommand, se_DeleteTriggerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteTriggerCommand}.
 */
export interface DeleteTriggerCommandInput extends DeleteTriggerRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTriggerCommand}.
 */
export interface DeleteTriggerCommandOutput extends DeleteTriggerResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified trigger. If the trigger is not found, no
 *       exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTriggerCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTriggerCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteTriggerRequest
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteTriggerCommand(input);
 * const response = await client.send(command);
 * // { // DeleteTriggerResponse
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeleteTriggerCommandInput - {@link DeleteTriggerCommandInput}
 * @returns {@link DeleteTriggerCommandOutput}
 * @see {@link DeleteTriggerCommandInput} for command's `input` shape.
 * @see {@link DeleteTriggerCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteTriggerCommand extends $Command
  .classBuilder<
    DeleteTriggerCommandInput,
    DeleteTriggerCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteTrigger", {})
  .n("GlueClient", "DeleteTriggerCommand")
  .f(void 0, void 0)
  .ser(se_DeleteTriggerCommand)
  .de(de_DeleteTriggerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteTriggerRequest;
      output: DeleteTriggerResponse;
    };
    sdk: {
      input: DeleteTriggerCommandInput;
      output: DeleteTriggerCommandOutput;
    };
  };
}
