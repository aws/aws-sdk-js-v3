// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContainerPolicyInput, DeleteContainerPolicyOutput } from "../models/models_0";
import { DeleteContainerPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContainerPolicyCommand}.
 */
export interface DeleteContainerPolicyCommandInput extends DeleteContainerPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteContainerPolicyCommand}.
 */
export interface DeleteContainerPolicyCommandOutput extends DeleteContainerPolicyOutput, __MetadataBearer {}

/**
 * <p>Deletes the access policy that is associated with the specified container.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DeleteContainerPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerPolicyCommandInput - {@link DeleteContainerPolicyCommandInput}
 * @returns {@link DeleteContainerPolicyCommandOutput}
 * @see {@link DeleteContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerPolicyCommandOutput} for command's `response` shape.
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
export class DeleteContainerPolicyCommand extends command<DeleteContainerPolicyCommandInput, DeleteContainerPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContainerPolicy",
  DeleteContainerPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteContainerPolicyCommandInput;
      output: DeleteContainerPolicyCommandOutput;
    };
  };
}
