// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteResourcePolicyRequest, DeleteResourcePolicyResponse } from "../models/models_0";
import { DeleteResourcePolicy$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandInput extends DeleteResourcePolicyRequest {}
/**
 * @public
 *
 * The output of {@link DeleteResourcePolicyCommand}.
 */
export interface DeleteResourcePolicyCommandOutput extends DeleteResourcePolicyResponse, __MetadataBearer {}

/**
 * Deletes a resource-based policy on an entity that is identified by its resource ARN.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, DeleteResourcePolicyCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, DeleteResourcePolicyCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // DeleteResourcePolicyRequest
 *   ResourceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteResourcePolicyCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteResourcePolicyCommandInput - {@link DeleteResourcePolicyCommandInput}
 * @returns {@link DeleteResourcePolicyCommandOutput}
 * @see {@link DeleteResourcePolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcePolicyCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceCatalogClientResolvedConfig | config} for MarketplaceCatalogClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access is denied.
 *
 * HTTP status code: 403
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * There was an internal service exception.
 *
 * HTTP status code: 500
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified resource wasn't found.
 *
 * HTTP status code: 404
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Too many requests.
 *
 * HTTP status code: 429
 *
 * @throws {@link ValidationException} (client fault)
 *
 * An error occurred during validation.
 *
 * HTTP status code: 422
 *
 * @throws {@link MarketplaceCatalogServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceCatalog service.
 *
 * @public
 */
export class DeleteResourcePolicyCommand extends command<DeleteResourcePolicyCommandInput, DeleteResourcePolicyCommandOutput>(
  _ep0,
  _mw0,
  "DeleteResourcePolicy",
  DeleteResourcePolicy$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteResourcePolicyRequest;
      output: {};
    };
    sdk: {
      input: DeleteResourcePolicyCommandInput;
      output: DeleteResourcePolicyCommandOutput;
    };
  };
}
