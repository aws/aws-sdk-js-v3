// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { BatchDeleteTableRequest, BatchDeleteTableResponse } from "../models/models_0";
import { BatchDeleteTable$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Deletes multiple tables at once.
 *
 * > **Note:**
 * >
 * > After completing this operation, you no longer have access to the table versions and partitions that belong to the deleted table. Glue deletes these "orphaned" resources asynchronously in a timely manner, at the discretion of the service.
 * >
 * > To ensure the immediate deletion of all related resources, before calling `BatchDeleteTable`, use `DeleteTableVersion` or `BatchDeleteTableVersion`, and `DeletePartition` or `BatchDeletePartition`, to delete any resources that belong to the table.
 *
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
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *
 * A resource was not ready for a transaction.
 *
 * @throws {@link GlueServiceException}
 *
 * Base exception class for all service exceptions from Glue service.
 *
 * @public
 */
export class BatchDeleteTableCommand extends command<BatchDeleteTableCommandInput, BatchDeleteTableCommandOutput>(
  _ep0,
  _mw0,
  "BatchDeleteTable",
  BatchDeleteTable$
) {
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
