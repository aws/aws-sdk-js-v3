// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteCatalogRequest, DeleteCatalogResponse } from "../models/models_1";
import { DeleteCatalog$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteCatalogCommand}.
 */
export interface DeleteCatalogCommandInput extends DeleteCatalogRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCatalogCommand}.
 */
export interface DeleteCatalogCommandOutput extends DeleteCatalogResponse, __MetadataBearer {}

/**
 * Removes the specified catalog from the Glue Data Catalog.
 *
 * After completing this operation, you no longer have access to the databases, tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted catalog. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.
 *
 * To ensure the immediate deletion of all related resources before calling the `DeleteCatalog` operation, use `DeleteTableVersion` (or `BatchDeleteTableVersion`), `DeletePartition` (or `BatchDeletePartition`), `DeleteTable` (or `BatchDeleteTable`), `DeleteUserDefinedFunction` and `DeleteDatabase` to delete any resources that belong to the catalog.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCatalogCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCatalogCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteCatalogRequest
 *   CatalogId: "STRING_VALUE", // required
 * };
 * const command = new DeleteCatalogCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCatalogCommandInput - {@link DeleteCatalogCommandInput}
 * @returns {@link DeleteCatalogCommandOutput}
 * @see {@link DeleteCatalogCommandInput} for command's `input` shape.
 * @see {@link DeleteCatalogCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * Access to a resource was denied.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
 *
 * @throws {@link FederationSourceException} (client fault)
 *
 * A federation source failed.
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *
 * An encryption operation failed.
 *
 * @throws {@link InternalServiceException} (server fault)
 *
 * An internal service error occurred.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The input provided was not valid.
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *
 * The operation timed out.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class DeleteCatalogCommand extends command<DeleteCatalogCommandInput, DeleteCatalogCommandOutput>(
  _ep0,
  _mw0,
  "DeleteCatalog",
  DeleteCatalog$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCatalogRequest;
      output: {};
    };
    sdk: {
      input: DeleteCatalogCommandInput;
      output: DeleteCatalogCommandOutput;
    };
  };
}
