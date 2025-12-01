// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { CancelMessageMoveTaskRequest, CancelMessageMoveTaskResult } from "../models/models_0";
import { CancelMessageMoveTask } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SQSClientResolvedConfig } from "../SQSClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelMessageMoveTaskCommand}.
 */
export interface CancelMessageMoveTaskCommandInput extends CancelMessageMoveTaskRequest {}
/**
 * @public
 *
 * The output of {@link CancelMessageMoveTaskCommand}.
 */
export interface CancelMessageMoveTaskCommandOutput extends CancelMessageMoveTaskResult, __MetadataBearer {}

/**
 * <p>Cancels a specified message movement task. A message movement can only be cancelled
 *             when the current status is RUNNING. Cancelling a message movement task does not revert
 *             the messages that have already been moved. It can only stop the messages that have not
 *             been moved yet.</p>
 *          <note>
 *             <ul>
 *                <li>
 *                   <p>This action is currently limited to supporting message redrive from <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html">dead-letter queues (DLQs)</a> only. In this context, the source
 *                         queue is the dead-letter queue (DLQ), while the destination queue can be the
 *                         original source queue (from which the messages were driven to the
 *                         dead-letter-queue), or a custom destination queue. </p>
 *                </li>
 *                <li>
 *                   <p>Only one active message movement task is supported per queue at any given
 *                         time.</p>
 *                </li>
 *             </ul>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, CancelMessageMoveTaskCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, CancelMessageMoveTaskCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // CancelMessageMoveTaskRequest
 *   TaskHandle: "STRING_VALUE", // required
 * };
 * const command = new CancelMessageMoveTaskCommand(input);
 * const response = await client.send(command);
 * // { // CancelMessageMoveTaskResult
 * //   ApproximateNumberOfMessagesMoved: Number("long"),
 * // };
 *
 * ```
 *
 * @param CancelMessageMoveTaskCommandInput - {@link CancelMessageMoveTaskCommandInput}
 * @returns {@link CancelMessageMoveTaskCommandOutput}
 * @see {@link CancelMessageMoveTaskCommandInput} for command's `input` shape.
 * @see {@link CancelMessageMoveTaskCommandOutput} for command's `response` shape.
 * @see {@link SQSClientResolvedConfig | config} for SQSClient's `config` shape.
 *
 * @throws {@link InvalidAddress} (client fault)
 *  <p>The specified ID is invalid.</p>
 *
 * @throws {@link InvalidSecurity} (client fault)
 *  <p>The request was not made over HTTPS or did not use SigV4 for signing.</p>
 *
 * @throws {@link RequestThrottled} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *          <ul>
 *             <li>
 *                <p>Exceeds the permitted request rate for the queue or for the recipient of the
 *                     request.</p>
 *             </li>
 *             <li>
 *                <p>Ensure that the request rate is within the Amazon SQS limits for
 *                     sending messages. For more information, see <a href="https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests">Amazon SQS quotas</a> in the <i>Amazon SQS
 *                         Developer Guide</i>.</p>
 *             </li>
 *          </ul>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more specified resources don't exist.</p>
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *  <p>Error code 400. Unsupported operation.</p>
 *
 * @throws {@link SQSServiceException}
 * <p>Base exception class for all service exceptions from SQS service.</p>
 *
 *
 * @public
 */
export class CancelMessageMoveTaskCommand extends $Command
  .classBuilder<
    CancelMessageMoveTaskCommandInput,
    CancelMessageMoveTaskCommandOutput,
    SQSClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SQSClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonSQS", "CancelMessageMoveTask", {})
  .n("SQSClient", "CancelMessageMoveTaskCommand")
  .sc(CancelMessageMoveTask)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelMessageMoveTaskRequest;
      output: CancelMessageMoveTaskResult;
    };
    sdk: {
      input: CancelMessageMoveTaskCommandInput;
      output: CancelMessageMoveTaskCommandOutput;
    };
  };
}
