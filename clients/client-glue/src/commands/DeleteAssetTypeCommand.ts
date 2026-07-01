// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssetTypeRequest, DeleteAssetTypeResponse } from "../models/models_1";
import { DeleteAssetType$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssetTypeCommand}.
 */
export interface DeleteAssetTypeCommandInput extends DeleteAssetTypeRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssetTypeCommand}.
 */
export interface DeleteAssetTypeCommandOutput extends DeleteAssetTypeResponse, __MetadataBearer {}

/**
 * <p>Deletes an asset type from Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteAssetTypeCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteAssetTypeCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteAssetTypeRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetTypeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetTypeCommandInput - {@link DeleteAssetTypeCommandInput}
 * @returns {@link DeleteAssetTypeCommandOutput}
 * @see {@link DeleteAssetTypeCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetTypeCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling threshhold was exceeded.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteAssetTypeCommand extends command<DeleteAssetTypeCommandInput, DeleteAssetTypeCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAssetType",
  DeleteAssetType$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetTypeRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssetTypeCommandInput;
      output: DeleteAssetTypeCommandOutput;
    };
  };
}
