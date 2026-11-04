// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateTableObjectsRequest, UpdateTableObjectsResponse } from "../models/models_0";
import { UpdateTableObjects$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateTableObjectsCommand}.
 */
export interface UpdateTableObjectsCommandInput extends UpdateTableObjectsRequest {}
/**
 * @public
 *
 * The output of {@link UpdateTableObjectsCommand}.
 */
export interface UpdateTableObjectsCommandOutput extends UpdateTableObjectsResponse, __MetadataBearer {}

/**
 * Updates the manifest of Amazon S3 objects that make up the specified governed table.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, UpdateTableObjectsCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, UpdateTableObjectsCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * // import type { LakeFormationClientConfig } from "@aws-sdk/client-lakeformation";
 * const config = {}; // type is LakeFormationClientConfig
 * const client = new LakeFormationClient(config);
 * const input = { // UpdateTableObjectsRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE",
 *   WriteOperations: [ // WriteOperationList // required
 *     { // WriteOperation
 *       AddObject: { // AddObjectInput
 *         Uri: "STRING_VALUE", // required
 *         ETag: "STRING_VALUE", // required
 *         Size: Number("long"), // required
 *         PartitionValues: [ // PartitionValuesList
 *           "STRING_VALUE",
 *         ],
 *       },
 *       DeleteObject: { // DeleteObjectInput
 *         Uri: "STRING_VALUE", // required
 *         ETag: "STRING_VALUE",
 *         PartitionValues: [
 *           "STRING_VALUE",
 *         ],
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateTableObjectsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateTableObjectsCommandInput - {@link UpdateTableObjectsCommandInput}
 * @returns {@link UpdateTableObjectsCommandOutput}
 * @see {@link UpdateTableObjectsCommandInput} for command's `input` shape.
 * @see {@link UpdateTableObjectsCommandOutput} for command's `response` shape.
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
 * @throws {@link TransactionCommitInProgressException} (client fault)
 *
 * Contains details about an error related to a transaction commit that was in progress.
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
export class UpdateTableObjectsCommand extends command<UpdateTableObjectsCommandInput, UpdateTableObjectsCommandOutput>(
  _ep0,
  _mw0,
  "UpdateTableObjects",
  UpdateTableObjects$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateTableObjectsRequest;
      output: {};
    };
    sdk: {
      input: UpdateTableObjectsCommandInput;
      output: UpdateTableObjectsCommandOutput;
    };
  };
}
