// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import type { DeleteObjectsOnCancelRequest, DeleteObjectsOnCancelResponse } from "../models/models_0";
import { DeleteObjectsOnCancel } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>For a specific governed table, provides a list of Amazon S3 objects that will be written during the current transaction and that can be automatically deleted
 *       if the transaction is canceled. Without this call, no Amazon S3 objects are automatically deleted when a transaction cancels.
 *     </p>
 *          <p>
 *       The Glue ETL library function <code>write_dynamic_frame.from_catalog()</code> includes an option to automatically
 *       call <code>DeleteObjectsOnCancel</code> before writes. For more information, see
 *       <a href="https://docs.aws.amazon.com/lake-formation/latest/dg/transactions-data-operations.html#rolling-back-writes">Rolling Back Amazon S3 Writes</a>.
 *     </p>
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
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
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
 *  <p>Contains details about an error related to a resource which is not ready for a transaction.</p>
 *
 * @throws {@link TransactionCanceledException} (client fault)
 *  <p>Contains details about an error related to a transaction that was cancelled.</p>
 *
 * @throws {@link TransactionCommittedException} (client fault)
 *  <p>Contains details about an error where the specified transaction has already been committed and cannot be used for <code>UpdateTableObjects</code>.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 *
 * @public
 */
export class DeleteObjectsOnCancelCommand extends $Command
  .classBuilder<
    DeleteObjectsOnCancelCommandInput,
    DeleteObjectsOnCancelCommandOutput,
    LakeFormationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LakeFormationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSLakeFormation", "DeleteObjectsOnCancel", {})
  .n("LakeFormationClient", "DeleteObjectsOnCancelCommand")
  .sc(DeleteObjectsOnCancel)
  .build() {
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
