// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteRunBatchRequest, DeleteRunBatchResponse } from "../models/models_0";
import { DeleteRunBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteRunBatchCommand}.
 */
export interface DeleteRunBatchCommandInput extends DeleteRunBatchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRunBatchCommand}.
 */
export interface DeleteRunBatchCommandOutput extends DeleteRunBatchResponse, __MetadataBearer {}

/**
 * Deletes the individual workflow runs within a batch. This operation is separate from `DeleteBatch`, which removes the batch metadata.
 *
 * Delete is only allowed on batches in `PROCESSED` or `CANCELLED` state. Delete operations are non-atomic and may be partially successful. Use `GetBatch` to review `successfulDeleteSubmissionCount` and `failedDeleteSubmissionCount` in the `submissionSummary`. Only one cancel or delete operation per batch is allowed at a time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteRunBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteRunBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteRunBatchRequest
 *   batchId: "STRING_VALUE", // required
 * };
 * const command = new DeleteRunBatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRunBatchCommandInput - {@link DeleteRunBatchCommandInput}
 * @returns {@link DeleteRunBatchCommandOutput}
 * @see {@link DeleteRunBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteRunBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request cannot be applied to the target resource in its current state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred. Try the request again.
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *
 * The request timed out.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The target resource was not found in the current Region.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * The request exceeds a service quota.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link OmicsServiceException}
 *
 * Base exception class for all service exceptions from Omics service.
 *
 * @public
 */
export class DeleteRunBatchCommand extends command<DeleteRunBatchCommandInput, DeleteRunBatchCommandOutput>(
  _ep0,
  _mw0,
  "DeleteRunBatch",
  DeleteRunBatch$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRunBatchRequest;
      output: {};
    };
    sdk: {
      input: DeleteRunBatchCommandInput;
      output: DeleteRunBatchCommandOutput;
    };
  };
}
