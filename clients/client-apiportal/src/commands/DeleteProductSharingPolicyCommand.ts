// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteProductSharingPolicyRequest } from "../models/models_0";
import { DeleteProductSharingPolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteProductSharingPolicyCommand}.
 */
export interface DeleteProductSharingPolicyCommandInput extends DeleteProductSharingPolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteProductSharingPolicyCommand}.
 */
export interface DeleteProductSharingPolicyCommandOutput extends __MetadataBearer {}

/**
 * Deletes the sharing policy of a product. The product is no longer shared.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { APIPortalClient, DeleteProductSharingPolicyCommand } from "@aws-sdk/client-apiportal"; // ES Modules import
 * // const { APIPortalClient, DeleteProductSharingPolicyCommand } = require("@aws-sdk/client-apiportal"); // CommonJS import
 * // import type { APIPortalClientConfig } from "@aws-sdk/client-apiportal";
 * const config = {}; // type is APIPortalClientConfig
 * const client = new APIPortalClient(config);
 * const input = { // DeleteProductSharingPolicyRequest
 *   productId: "STRING_VALUE", // required
 * };
 * const command = new DeleteProductSharingPolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteProductSharingPolicyCommandInput - {@link DeleteProductSharingPolicyCommandInput}
 * @returns {@link DeleteProductSharingPolicyCommandOutput}
 * @see {@link DeleteProductSharingPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteProductSharingPolicyCommandOutput} for command's `response` shape.
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
export class DeleteProductSharingPolicyCommand extends command<DeleteProductSharingPolicyCommandInput, DeleteProductSharingPolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteProductSharingPolicy",
  DeleteProductSharingPolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteProductSharingPolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteProductSharingPolicyCommandInput;
      output: DeleteProductSharingPolicyCommandOutput;
    };
  };
}
