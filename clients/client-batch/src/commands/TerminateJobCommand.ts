// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BatchClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { TerminateJobRequest, TerminateJobResponse } from "../models/models_0";
import { de_TerminateJobCommand, se_TerminateJobCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link TerminateJobCommand}.
 */
export interface TerminateJobCommandInput extends TerminateJobRequest {}
/**
 * @public
 *
 * The output of {@link TerminateJobCommand}.
 */
export interface TerminateJobCommandOutput extends TerminateJobResponse, __MetadataBearer {}

/**
 * <p>Terminates a job in a job queue. Jobs that are in the <code>STARTING</code> or
 *         <code>RUNNING</code> state are terminated, which causes them to transition to
 *         <code>FAILED</code>. Jobs that have not progressed to the <code>STARTING</code> state are
 *       cancelled.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BatchClient, TerminateJobCommand } from "@aws-sdk/client-batch"; // ES Modules import
 * // const { BatchClient, TerminateJobCommand } = require("@aws-sdk/client-batch"); // CommonJS import
 * const client = new BatchClient(config);
 * const input = { // TerminateJobRequest
 *   jobId: "STRING_VALUE", // required
 *   reason: "STRING_VALUE", // required
 * };
 * const command = new TerminateJobCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param TerminateJobCommandInput - {@link TerminateJobCommandInput}
 * @returns {@link TerminateJobCommandOutput}
 * @see {@link TerminateJobCommandInput} for command's `input` shape.
 * @see {@link TerminateJobCommandOutput} for command's `response` shape.
 * @see {@link BatchClientResolvedConfig | config} for BatchClient's `config` shape.
 *
 * @throws {@link ClientException} (client fault)
 *  <p>These errors are usually caused by a client action. One example cause is using an action or resource on behalf
 *    of a user that doesn't have permissions to use the action or resource. Another cause is specifying an identifier
 *    that's not valid.</p>
 *
 * @throws {@link ServerException} (server fault)
 *  <p>These errors are usually caused by a server issue.</p>
 *
 * @throws {@link BatchServiceException}
 * <p>Base exception class for all service exceptions from Batch service.</p>
 *
 * @public
 * @example To terminate a job
 * ```javascript
 * // This example terminates a job with the specified job ID.
 * const input = {
 *   "jobId": "61e743ed-35e4-48da-b2de-5c8333821c84",
 *   "reason": "Terminating job."
 * };
 * const command = new TerminateJobCommand(input);
 * await client.send(command);
 * // example id: to-terminate-a-job-1481154558276
 * ```
 *
 */
export class TerminateJobCommand extends $Command
  .classBuilder<
    TerminateJobCommandInput,
    TerminateJobCommandOutput,
    BatchClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BatchClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBatchV20160810", "TerminateJob", {})
  .n("BatchClient", "TerminateJobCommand")
  .f(void 0, void 0)
  .ser(se_TerminateJobCommand)
  .de(de_TerminateJobCommand)
  .build() {}
