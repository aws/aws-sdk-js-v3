// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/models_1";
import { DeleteDatabase$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteDatabaseCommand}.
 */
export interface DeleteDatabaseCommandInput extends DeleteDatabaseRequest {}
/**
 * @public
 *
 * The output of {@link DeleteDatabaseCommand}.
 */
export interface DeleteDatabaseCommandOutput extends DeleteDatabaseResponse, __MetadataBearer {}

/**
 * Removes a specified database from a Data Catalog.
 *
 * > **Note:**
 * >
 * > After completing this operation, you no longer have access to the tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.
 * >
 * > To ensure the immediate deletion of all related resources, before calling `DeleteDatabase`, use `DeleteTableVersion` or `BatchDeleteTableVersion`, `DeletePartition` or `BatchDeletePartition`, `DeleteUserDefinedFunction`, and `DeleteTable` or `BatchDeleteTable`, to delete any resources that belong to the database.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteDatabaseCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteDatabaseCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // DeleteDatabaseRequest
 *   CatalogId: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteDatabaseCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteDatabaseCommandInput - {@link DeleteDatabaseCommandInput}
 * @returns {@link DeleteDatabaseCommandOutput}
 * @see {@link DeleteDatabaseCommandInput} for command's `input` shape.
 * @see {@link DeleteDatabaseCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
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
 * @throws {@link FederationSourceRetryableException} (client fault)
 *
 * A federation source failed, but the operation may be retried.
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
export class DeleteDatabaseCommand extends command<DeleteDatabaseCommandInput, DeleteDatabaseCommandOutput>(
  _ep0,
  _mw0,
  "DeleteDatabase",
  DeleteDatabase$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteDatabaseRequest;
      output: {};
    };
    sdk: {
      input: DeleteDatabaseCommandInput;
      output: DeleteDatabaseCommandOutput;
    };
  };
}
