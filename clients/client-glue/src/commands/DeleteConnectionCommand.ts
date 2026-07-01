// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteConnectionRequest, DeleteConnectionResponse } from "../models/models_1";
import { DeleteConnection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandInput extends DeleteConnectionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteConnectionCommand}.
 */
export interface DeleteConnectionCommandOutput extends DeleteConnectionResponse, __MetadataBearer {}

/**
 * <p>Deletes a connection from the Data Catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteConnectionCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteConnectionCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteConnectionRequest
 *   CatalogId: "STRING_VALUE",
 *   ConnectionName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConnectionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConnectionCommandInput - {@link DeleteConnectionCommandInput}
 * @returns {@link DeleteConnectionCommandOutput}
 * @see {@link DeleteConnectionCommandInput} for command's `input` shape.
 * @see {@link DeleteConnectionCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class DeleteConnectionCommand extends command<DeleteConnectionCommandInput, DeleteConnectionCommandOutput>(
  _ep0,
  _mw0,
  "DeleteConnection",
  DeleteConnection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConnectionRequest;
      output: {};
    };
    sdk: {
      input: DeleteConnectionCommandInput;
      output: DeleteConnectionCommandOutput;
    };
  };
}
