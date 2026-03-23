// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteBatchRequest } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { DeleteBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteBatchCommand}.
 */
export interface DeleteBatchCommandInput extends DeleteBatchRequest {}
/**
 * @public
 *
 * The output of {@link DeleteBatchCommand}.
 */
export interface DeleteBatchCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes a run batch resource and its associated metadata. This operation does not delete the individual workflow runs. To delete the runs, call <code>DeleteRunBatch</code> before calling <code>DeleteBatch</code>.</p> <p> <code>DeleteBatch</code> requires the batch to be in a terminal state: <code>PROCESSED</code>, <code>FAILED</code>, <code>CANCELLED</code>, or <code>RUNS_DELETED</code>. After <code>DeleteBatch</code> completes, the batch metadata is no longer accessible. You cannot call <code>GetBatch</code>, <code>ListRunsInBatch</code>, <code>DeleteRunBatch</code>, or <code>CancelRunBatch</code> on a deleted batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, DeleteBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, DeleteBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // DeleteBatchRequest
 *   batchId: "STRING_VALUE", // required
 * };
 * const command = new DeleteBatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteBatchCommandInput - {@link DeleteBatchCommandInput}
 * @returns {@link DeleteBatchCommandOutput}
 * @see {@link DeleteBatchCommandInput} for command's `input` shape.
 * @see {@link DeleteBatchCommandOutput} for command's `response` shape.
 * @see {@link OmicsClientResolvedConfig | config} for OmicsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request cannot be applied to the target resource in its current state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred. Try the request again.</p>
 *
 * @throws {@link RequestTimeoutException} (client fault)
 *  <p>The request timed out.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The target resource was not found in the current Region.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request exceeds a service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link OmicsServiceException}
 * <p>Base exception class for all service exceptions from Omics service.</p>
 *
 *
 * @public
 */
export class DeleteBatchCommand extends $Command
  .classBuilder<
    DeleteBatchCommandInput,
    DeleteBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "DeleteBatch", {})
  .n("OmicsClient", "DeleteBatchCommand")
  .sc(DeleteBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteBatchRequest;
      output: {};
    };
    sdk: {
      input: DeleteBatchCommandInput;
      output: DeleteBatchCommandOutput;
    };
  };
}
