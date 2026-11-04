// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteObjectsOnCancelRequest, DeleteObjectsOnCancelResponse } from "../models/models_0";
import { DeleteObjectsOnCancel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteObjectsOnCancelCommand}.
 */
export interface DeleteObjectsOnCancelCommandInput extends DeleteObjectsOnCancelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteObjectsOnCancelCommand}.
 */
export interface DeleteObjectsOnCancelCommandOutput extends DeleteObjectsOnCancelResponse, __MetadataBearer {}

/**
 * For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 *
 * The Glue ETL library function `write_dynamic_frame.from_catalog()` includes an option to automatically call `DeleteObjectsOnCancel` before writes. For more information, see [Rolling Back Amazon S3 Writes](https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, DeleteObjectsOnCancelCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, DeleteObjectsOnCancelCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // DeleteObjectsOnCancelRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE", // required
 *   Objects: [ // VirtualObjectList // required
 *     { // VirtualObject
 *       Uri: "STRING_VALUE", // required
 *       ETag: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new DeleteObjectsOnCancelCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteObjectsOnCancelCommandInput - {@link DeleteObjectsOnCancelCommandInput}
 * @returns {@link DeleteObjectsOnCancelCommandOutput}
 * @see {@link DeleteObjectsOnCancelCommandInput} for command's `input` shape.
 * @see {@link DeleteObjectsOnCancelCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *
 * Two processes are trying to modify a resource simultaneously.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *
 * A specified entity does not exist.
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
 * Contains details about an error related to a resource which is not ready for a transaction.
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *
 * Contains details about an error related to a transaction that was cancelled.
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *
 * Contains details about an error where the specified transaction has already been committed and cannot be used for `UpdateTableObjects`.
 *
 * @throws {@link LakeFormationServiceException}
 *
 * Base exception class for all service exceptions from LakeFormation service.
 *
 * @public
 */
export class DeleteObjectsOnCancelCommand extends command<DeleteObjectsOnCancelCommandInput, DeleteObjectsOnCancelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteObjectsOnCancel",
  DeleteObjectsOnCancel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteObjectsOnCancelRequest;
      output: {};
    };
    sdk: {
      input: DeleteObjectsOnCancelCommandInput;
      output: DeleteObjectsOnCancelCommandOutput;
    };
  };
}
