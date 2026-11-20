// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductRequest } from "../models/models_0";
import { DeleteProduct$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductCommand}.
 */
export interface DeleteProductCommandInput extends DeleteProductRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductCommand}.
 */
export interface DeleteProductCommandOutput extends __MetadataBearer {}

/**
 * Deletes a product.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteProductCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteProductCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DeleteProductRequest
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductCommandInput - {@link DeleteProductCommandInput}
 * @returns {@link DeleteProductCommandOutput}
 * @see {@link DeleteProductCommandInput} for command's `input` shape.
 * @see {@link DeleteProductCommandOutput} for command's `response` shape.
 * @see {@link APIPortalClientResolvedConfig | config} for APIPortalClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  You do not have permission to perform this operation.
 *
 * @throws {@link BadRequestException} (client fault)
 *  The request is not valid. The message identifies the field or value that failed validation.
 *
 * @throws {@link LimitExceededException} (client fault)
 *  The request rate or a service quota was exceeded. Reduce the request rate or the number of resources and try again.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  The requested resource does not exist, or you do not have access to it.
 *
 * @throws {@link APIPortalServiceException}
 * <p>Base exception class for all service exceptions from APIPortal service.</p>
 *
 *
 * @public
 */
export class DeleteProductCommand extends command<DeleteProductCommandInput, DeleteProductCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProduct",
  DeleteProduct$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductCommandInput;
      output: DeleteProductCommandOutput;
    };
  };
}
