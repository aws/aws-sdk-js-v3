// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteAssetRequest, DeleteAssetResponse } from "../models/models_1";
import { DeleteAsset$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandInput extends DeleteAssetRequest {}
/**
 * @public
 *
 * The output of {@link DeleteAssetCommand}.
 */
export interface DeleteAssetCommandOutput extends DeleteAssetResponse, __MetadataBearer {}

/**
 * <p>Deletes an asset from Glue Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteAssetCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteAssetCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteAssetRequest
 *   Identifier: "STRING_VALUE", // required
 * };
 * const command = new DeleteAssetCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteAssetCommandInput - {@link DeleteAssetCommandInput}
 * @returns {@link DeleteAssetCommandOutput}
 * @see {@link DeleteAssetCommandInput} for command's `input` shape.
 * @see {@link DeleteAssetCommandOutput} for command's `response` shape.
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
export class DeleteAssetCommand extends command<DeleteAssetCommandInput, DeleteAssetCommandOutput>(
  _ep0,
  _mw0,
  "DeleteAsset",
  DeleteAsset$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteAssetRequest;
      output: {};
    };
    sdk: {
      input: DeleteAssetCommandInput;
      output: DeleteAssetCommandOutput;
    };
  };
}
