// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCorsPolicyInput, DeleteCorsPolicyOutput } from "../models/models_0";
import { DeleteCorsPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCorsPolicyCommand}.
 */
export interface DeleteCorsPolicyCommandInput extends DeleteCorsPolicyInput {}
/**
 * @public
 *
 * The output of {@link DeleteCorsPolicyCommand}.
 */
export interface DeleteCorsPolicyCommandOutput extends DeleteCorsPolicyOutput, __MetadataBearer {}

/**
 * Deletes the cross-origin resource sharing (CORS) configuration information that is set for the container.
 *
 * To use this operation, you must have permission to perform the `MediaStore:DeleteCorsPolicy` action. The container owner has this permission by default and can grant this permission to others.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, DeleteCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, DeleteCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * // import type { MediaStoreClientConfig } from "@aws-sdk/client-mediastore";
 * const config = {}; // type is MediaStoreClientConfig
 * const client = new MediaStoreClient(config);
 * const input = { // DeleteCorsPolicyInput
 *   ContainerName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCorsPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCorsPolicyCommandInput - {@link DeleteCorsPolicyCommandInput}
 * @returns {@link DeleteCorsPolicyCommandOutput}
 * @see {@link DeleteCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteCorsPolicyCommandOutput} for command's `response` shape.
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
 * @throws {@link CorsPolicyNotFoundException} (client fault)
 *
 * The CORS policy that you specified in the request does not exist.
 *
 * @throws {@link InternalServerError} (server fault)
 *
 * The service is temporarily unavailable.
 *
 * @throws {@link MediaStoreServiceException}
 *
 * Base exception class for all service exceptions from MediaStore service.
 *
 * @public
 */
export class DeleteCorsPolicyCommand extends command<DeleteCorsPolicyCommandInput, DeleteCorsPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCorsPolicy",
  DeleteCorsPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCorsPolicyInput;
      output: {};
    };
    sdk: {
      input: DeleteCorsPolicyCommandInput;
      output: DeleteCorsPolicyCommandOutput;
    };
  };
}
