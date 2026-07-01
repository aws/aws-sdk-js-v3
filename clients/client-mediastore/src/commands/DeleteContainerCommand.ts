// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteContainerInput, DeleteContainerOutput } from "../models/models_0";
import { DeleteContainer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteContainerCommand}.
 */
export interface DeleteContainerCommandInput extends DeleteContainerInput {}
/**
 * @public
 *
 * The output of {@link DeleteContainerCommand}.
 */
export interface DeleteContainerCommandOutput extends DeleteContainerOutput, __MetadataBearer {}

/**
 * <p>Deletes the specified container. Before you make a <code>DeleteContainer</code>
 *          request, delete any objects in the container or in any folders in the container. You can
 *          delete only empty containers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteContainerCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteContainerCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DeleteContainerInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteContainerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteContainerCommandInput - {@link DeleteContainerCommandInput}
 * @returns {@link DeleteContainerCommandOutput}
 * @see {@link DeleteContainerCommandInput} for command's `input` shape.
 * @see {@link DeleteContainerCommandOutput} for command's `response` shape.
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
 * @throws {@link MediaStoreServiceException}
 * <p>Base exception class for all service exceptions from MediaStore service.</p>
 *
 *
 * @public
 */
export class DeleteContainerCommand extends command<DeleteContainerCommandInput, DeleteContainerCommandOutput>(
  _ep0,
  _mw0,
  "DeleteContainer",
  DeleteContainer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteContainerInput;
      output: {};
    };
    sdk: {
      input: DeleteContainerCommandInput;
      output: DeleteContainerCommandOutput;
    };
  };
}
