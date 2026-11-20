// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductPageRequest } from "../models/models_0";
import { DeleteProductPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductPageCommand}.
 */
export interface DeleteProductPageCommandInput extends DeleteProductPageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductPageCommand}.
 */
export interface DeleteProductPageCommandOutput extends __MetadataBearer {}

/**
 * Deletes a product page.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteProductPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteProductPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DeleteProductPageRequest
 *   productId: "STRING_VALUE", // required
 *   productPageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductPageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductPageCommandInput - {@link DeleteProductPageCommandInput}
 * @returns {@link DeleteProductPageCommandOutput}
 * @see {@link DeleteProductPageCommandInput} for command's `input` shape.
 * @see {@link DeleteProductPageCommandOutput} for command's `response` shape.
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
export class DeleteProductPageCommand extends command<DeleteProductPageCommandInput, DeleteProductPageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProductPage",
  DeleteProductPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductPageRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductPageCommandInput;
      output: DeleteProductPageCommandOutput;
    };
  };
}
