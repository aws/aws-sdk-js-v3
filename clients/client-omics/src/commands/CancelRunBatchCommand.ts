// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelRunBatchRequest, CancelRunBatchResponse } from "../models/models_0";
import type { OmicsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OmicsClient";
import { CancelRunBatch$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelRunBatchCommand}.
 */
export interface CancelRunBatchCommandInput extends CancelRunBatchRequest {}
/**
 * @public
 *
 * The output of {@link CancelRunBatchCommand}.
 */
export interface CancelRunBatchCommandOutput extends CancelRunBatchResponse, __MetadataBearer {}

/**
 * <p>Cancels all runs within a specified batch. This operation prevents not-yet-submitted runs from starting and submits <code>CancelRun</code> requests for runs that have already started.</p> <p>Cancel is only allowed on batches in <code>PENDING</code>, <code>SUBMITTING</code>, or <code>INPROGRESS</code> state. Cancel operations are non-atomic and may be partially successful. Use <code>GetBatch</code> to review <code>successfulCancelSubmissionCount</code> and <code>failedCancelSubmissionCount</code> in the <code>submissionSummary</code>. Only one cancel or delete operation per batch is allowed at a time.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OmicsClient, CancelRunBatchCommand } from "@aws-sdk/client-omics"; // ES Modules import
 * // const { OmicsClient, CancelRunBatchCommand } = require("@aws-sdk/client-omics"); // CommonJS import
 * // import type { OmicsClientConfig } from "@aws-sdk/client-omics";
 * const config = {}; // type is OmicsClientConfig
 * const client = new OmicsClient(config);
 * const input = { // CancelRunBatchRequest
 *   batchId: "STRING_VALUE", // required
 * };
 * const command = new CancelRunBatchCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelRunBatchCommandInput - {@link CancelRunBatchCommandInput}
 * @returns {@link CancelRunBatchCommandOutput}
 * @see {@link CancelRunBatchCommandInput} for command's `input` shape.
 * @see {@link CancelRunBatchCommandOutput} for command's `response` shape.
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
export class CancelRunBatchCommand extends $Command
  .classBuilder<
    CancelRunBatchCommandInput,
    CancelRunBatchCommandOutput,
    OmicsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OmicsClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Omics", "CancelRunBatch", {})
  .n("OmicsClient", "CancelRunBatchCommand")
  .sc(CancelRunBatch$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelRunBatchRequest;
      output: {};
    };
    sdk: {
      input: CancelRunBatchCommandInput;
      output: CancelRunBatchCommandOutput;
    };
  };
}
