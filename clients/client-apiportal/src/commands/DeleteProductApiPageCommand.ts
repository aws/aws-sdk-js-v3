// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductApiPageRequest } from "../models/models_0";
import { DeleteProductApiPage$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductApiPageCommand}.
 */
export interface DeleteProductApiPageCommandInput extends DeleteProductApiPageRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductApiPageCommand}.
 */
export interface DeleteProductApiPageCommandOutput extends __MetadataBearer {}

/**
 * Deletes an API page.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteProductApiPageCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteProductApiPageCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DeleteProductApiPageRequest
 *   productId: "STRING_VALUE", // required
 *   productApiPageId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductApiPageCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductApiPageCommandInput - {@link DeleteProductApiPageCommandInput}
 * @returns {@link DeleteProductApiPageCommandOutput}
 * @see {@link DeleteProductApiPageCommandInput} for command's `input` shape.
 * @see {@link DeleteProductApiPageCommandOutput} for command's `response` shape.
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
export class DeleteProductApiPageCommand extends command<DeleteProductApiPageCommandInput, DeleteProductApiPageCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProductApiPage",
  DeleteProductApiPage$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductApiPageRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductApiPageCommandInput;
      output: DeleteProductApiPageCommandOutput;
    };
  };
}
