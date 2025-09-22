// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteDatabaseRequest, DeleteDatabaseResponse } from "../models/models_1";
import { DeleteDatabase } from "../schemas/schemas_69_DeleteDatabase";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes a specified database from a Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the tables (and all table
 *         versions and partitions that might belong to the tables) and the user-defined functions in
 *         the deleted database. Glue deletes these "orphaned" resources asynchronously in a timely
 *         manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteDatabase</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, <code>DeleteUserDefinedFunction</code>, and
 *           <code>DeleteTable</code> or <code>BatchDeleteTable</code>, to delete any resources that
 *         belong to the database.</p>
 *          </note>
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
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link FederationSourceException} (client fault)
 *  <p>A federation source failed.</p>
 *
 * @throws {@link FederationSourceRetryableException} (client fault)
 *  <p>A federation source failed, but the operation may be retried.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
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
export class DeleteDatabaseCommand extends $Command
  .classBuilder<
    DeleteDatabaseCommandInput,
    DeleteDatabaseCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteDatabase", {})
  .n("GlueClient", "DeleteDatabaseCommand")
  .sc(DeleteDatabase)
  .build() {
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
