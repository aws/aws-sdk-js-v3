// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelChangeSetRequest, CancelChangeSetResponse } from "../models/models_0";
import { CancelChangeSet$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CancelChangeSetCommand}.
 */
export interface CancelChangeSetCommandInput extends CancelChangeSetRequest {}
/**
 * @public
 *
 * The output of {@link CancelChangeSetCommand}.
 */
export interface CancelChangeSetCommandOutput extends CancelChangeSetResponse, __MetadataBearer {}

/**
 * Used to cancel an open change request. Must be sent before the status of the request changes to `APPLYING`, the final stage of completing your change request. You can describe a change during the 60-day request history retention period for API calls.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceCatalogClient, CancelChangeSetCommand } from "@aws-sdk/client-marketplace-catalog"; // ES Modules import
 * // const { MarketplaceCatalogClient, CancelChangeSetCommand } = require("@aws-sdk/client-marketplace-catalog"); // CommonJS import
 * // import type { MarketplaceCatalogClientConfig } from "@aws-sdk/client-marketplace-catalog";
 * const config = {}; // type is MarketplaceCatalogClientConfig
 * const client = new MarketplaceCatalogClient(config);
 * const input = { // CancelChangeSetRequest
 *   Catalog: "STRING_VALUE", // required
 *   ChangeSetId: "STRING_VALUE", // required
 * };
 * const command = new CancelChangeSetCommand(input);
 * const response = await client.send(command);
 * // { // CancelChangeSetResponse
 * //   ChangeSetId: "STRING_VALUE",
 * //   ChangeSetArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CancelChangeSetCommandInput - {@link CancelChangeSetCommandInput}
 * @returns {@link CancelChangeSetCommandOutput}
 * @see {@link CancelChangeSetCommandInput} for command's `input` shape.
 * @see {@link CancelChangeSetCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceInUseException} (client fault)
 *
 * The resource is currently in use.
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
export class CancelChangeSetCommand extends command<CancelChangeSetCommandInput, CancelChangeSetCommandOutput>(
  _ep0,
  _mw0,
  "CancelChangeSet",
  CancelChangeSet$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelChangeSetRequest;
      output: CancelChangeSetResponse;
    };
    sdk: {
      input: CancelChangeSetCommandInput;
      output: CancelChangeSetCommandOutput;
    };
  };
}
