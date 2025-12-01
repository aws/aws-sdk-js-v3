// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DLMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DLMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteLifecyclePolicyRequest, DeleteLifecyclePolicyResponse } from "../models/models_0";
import { DeleteLifecyclePolicy } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyResponse, __MetadataBearer {}

/**
 * <p>Deletes the specified lifecycle policy and halts the automated operations that the
 * 			policy specified.</p>
 *          <p>For more information about deleting a policy, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/view-modify-delete.html#delete">Delete lifecycle
 * 			policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DLMClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-dlm"; // ES Modules import
 * // const { DLMClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-dlm"); // CommonJS import
 * // import type { DLMClientConfig } from "@aws-sdk/client-dlm";
 * const config = {}; // type is DLMClientConfig
 * const client = new DLMClient(config);
 * const input = { // DeleteLifecyclePolicyRequest
 *   PolicyId: "STRING_VALUE", // required
 * };
 * const command = new DeleteLifecyclePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteLifecyclePolicyCommandInput - {@link DeleteLifecyclePolicyCommandInput}
 * @returns {@link DeleteLifecyclePolicyCommandOutput}
 * @see {@link DeleteLifecyclePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteLifecyclePolicyCommandOutput} for command's `response` shape.
 * @see {@link DLMClientResolvedConfig | config} for DLMClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service failed in an unexpected way.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request failed because a limit was exceeded.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>A requested resource was not found.</p>
 *
 * @throws {@link DLMServiceException}
 * <p>Base exception class for all service exceptions from DLM service.</p>
 *
 *
 * @public
 */
export class DeleteLifecyclePolicyCommand extends $Command
  .classBuilder<
    DeleteLifecyclePolicyCommandInput,
    DeleteLifecyclePolicyCommandOutput,
    DLMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DLMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("dlm_20180112", "DeleteLifecyclePolicy", {})
  .n("DLMClient", "DeleteLifecyclePolicyCommand")
  .sc(DeleteLifecyclePolicy)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLifecyclePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteLifecyclePolicyCommandInput;
      output: DeleteLifecyclePolicyCommandOutput;
    };
  };
}
