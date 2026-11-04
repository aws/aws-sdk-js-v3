// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteLifecyclePolicyInput, DeleteLifecyclePolicyOutput } from "../models/models_0";
import { DeleteLifecyclePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Removes an object lifecycle policy from a container. It takes up to 20 minutes for the change to take effect.
 *
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
 *
 * The container that you specified in the request already exists or is being updated.
 *
 * @throws {@link ContainerNotFoundException} (client fault)
 *
 * The container that you specified in the request does not exist.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link PolicyNotFoundException} (client fault)
 *
 * The policy that you specified in the request does not exist.
 *
 * @throws {@link MediaStoreServiceException}
 *
 * Base exception class for all service exceptions from MediaStore service.
 *
 * @public
 */
export class DeleteLifecyclePolicyCommand extends command<DeleteLifecyclePolicyCommandInput, DeleteLifecyclePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteLifecyclePolicy",
  DeleteLifecyclePolicy$
) {
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
