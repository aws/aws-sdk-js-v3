// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteCatalogRequest, DeleteCatalogResponse } from "../models/models_1";
import { de_DeleteCatalogCommand, se_DeleteCatalogCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Removes the specified catalog from the Glue Data Catalog.</p>
 *          <p>After completing this operation, you no longer have access to the databases, tables (and all table versions and partitions that might belong to the tables) and the user-defined functions in the deleted catalog. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.</p>
 *          <p>To ensure the immediate deletion of all related resources before calling the <code>DeleteCatalog</code> operation, use <code>DeleteTableVersion</code> (or <code>BatchDeleteTableVersion</code>), <code>DeletePartition</code> (or <code>BatchDeletePartition</code>), <code>DeleteTable</code> (or <code>BatchDeleteTable</code>), <code>DeleteUserDefinedFunction</code> and <code>DeleteDatabase</code> to delete any resources that belong to the catalog.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteCatalogCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteCatalogCommand } = require("@aws-sdk/client-glue"); // CommonJS import
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
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
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
export class DeleteCatalogCommand extends $Command
  .classBuilder<
    DeleteCatalogCommandInput,
    DeleteCatalogCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteCatalog", {})
  .n("GlueClient", "DeleteCatalogCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCatalogCommand)
  .de(de_DeleteCatalogCommand)
  .build() {
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
