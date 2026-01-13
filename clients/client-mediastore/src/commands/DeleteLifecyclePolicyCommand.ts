// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { MediaStoreClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MediaStoreClient";
import type { DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput } from "../models/models_0";
import { DeleteLifecyclePolicy$ } from "../schemas/schemas_0";

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
export interface DeleteLifecyclePolicyCommandInput extends DeleteLifecyclePolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteLifecyclePolicyCommand}.
 */
export interface DeleteLifecyclePolicyCommandOutput extends DeleteLifecyclePolicyOutput, __MetadataBearer {}

/**
 * <p>Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteLifecyclePolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteLifecyclePolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DeleteLifecyclePolicyInput
 *   ContainerName: "STRING_VALUE", // required
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
 * @see {@link MediaStoreClientResolvedConfig | config} for MediaStoreClient's `config` shape.
 *
 * @throws {@link ContainerInUseException} (client fault)
 *  <p>The container that you specified in the request already exists or is being
 *          updated.</p>
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *  <p>The container that you specified in the request does not exist.</p>
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>The service is temporarily unavailable.</p>
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *  <p>The policy that you specified in the request does not exist.</p>
 *
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class DeleteLifecyclePolicyCommand extends $Command
  .classBuilder<
    DeleteLifecyclePolicyCommandInput,
    DeleteLifecyclePolicyCommandOutput,
    MediaStoreClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MediaStoreClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("MediaStore_20170901", "DeleteLifecyclePolicy", {})
  .n("MediaStoreClient", "DeleteLifecyclePolicyCommand")
  .sc(DeleteLifecyclePolicy$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteLifecyclePolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteLifecyclePolicyCommandInput;
      output: DeleteLifecyclePolicyCommandOutput;
    };
  };
}
