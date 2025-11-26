// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { BatchDeleteTableRequest, BatchDeleteTableResponse } from "../models/models_0";
import { BatchDeleteTable } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchDeleteTableCommand}.
 */
export interface BatchDeleteTableCommandInput extends BatchDeleteTableRequest {}
/**
 * @public
 *
 * The output of {@link BatchDeleteTableCommand}.
 */
export interface BatchDeleteTableCommandOutput extends BatchDeleteTableResponse, __MetadataBearer {}

/**
 * <p>Deletes multiple tables at once.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the table versions and
 *         partitions that belong to the deleted table. Glue deletes these "orphaned" resources
 *         asynchronously in a timely manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>BatchDeleteTable</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
 *         table.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, BatchDeleteTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, BatchDeleteTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
 * const client = new GlueClient(config);
 * const input = { // BatchDeleteTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TablesToDelete: [ // BatchDeleteTableNameList // required
 *     "STRING_VALUE",
 *   ],
 *   TransactionId: "STRING_VALUE",
 * };
 * const command = new BatchDeleteTableCommand(input);
 * const response = await client.send(command);
 * // { // BatchDeleteTableResponse
 * //   Errors: [ // TableErrors
 * //     { // TableError
 * //       TableName: "STRING_VALUE",
 * //       ErrorDetail: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchDeleteTableCommandInput - {@link BatchDeleteTableCommandInput}
 * @returns {@link BatchDeleteTableCommandOutput}
 * @see {@link BatchDeleteTableCommandInput} for command's `input` shape.
 * @see {@link BatchDeleteTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>A resource was not ready for a transaction.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 *
 * @public
 */
export class BatchDeleteTableCommand extends $Command
  .classBuilder<
    BatchDeleteTableCommandInput,
    BatchDeleteTableCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "BatchDeleteTable", {})
  .n("GlueClient", "BatchDeleteTableCommand")
  .sc(BatchDeleteTable)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchDeleteTableRequest;
      output: BatchDeleteTableResponse;
    };
    sdk: {
      input: BatchDeleteTableCommandInput;
      output: BatchDeleteTableCommandOutput;
    };
  };
}
