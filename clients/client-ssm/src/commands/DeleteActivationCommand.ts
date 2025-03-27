// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteActivationRequest, DeleteActivationResult } from "../models/models_0";
import { de_DeleteActivationCommand, se_DeleteActivationCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteActivationCommand}.
 */
export interface DeleteActivationCommandInput extends DeleteActivationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteActivationCommand}.
 */
export interface DeleteActivationCommandOutput extends DeleteActivationResult, __MetadataBearer {}

/**
 * <p>Deletes an activation. You aren't required to delete an activation. If you delete an
 *    activation, you can no longer use it to register additional managed nodes. Deleting an activation
 *    doesn't de-register managed nodes. You must manually de-register managed nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteActivationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteActivationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteActivationRequest
 *   ActivationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteActivationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteActivationCommandInput - {@link DeleteActivationCommandInput}
 * @returns {@link DeleteActivationCommandOutput}
 * @see {@link DeleteActivationCommandInput} for command's `input` shape.
 * @see {@link DeleteActivationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidActivation} (client fault)
 *  <p>The activation isn't valid. The activation might have been deleted, or the ActivationId and
 *    the ActivationCode don't match.</p>
 *
 * @throws {@link InvalidActivationId} (client fault)
 *  <p>The activation ID isn't valid. Verify that you entered the correct ActivationId or
 *    ActivationCode and try again.</p>
 *
 * @throws {@link TooManyUpdates} (client fault)
 *  <p>There are concurrent updates for a resource that supports one update at a time.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 *
 * @public
 */
export class DeleteActivationCommand extends $Command
  .classBuilder<
    DeleteActivationCommandInput,
    DeleteActivationCommandOutput,
    SSMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SSMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonSSM", "DeleteActivation", {})
  .n("SSMClient", "DeleteActivationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteActivationCommand)
  .de(de_DeleteActivationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteActivationRequest;
      output: {};
    };
    sdk: {
      input: DeleteActivationCommandInput;
      output: DeleteActivationCommandOutput;
    };
  };
}
