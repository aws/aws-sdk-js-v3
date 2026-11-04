// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CancelMessageMoveTaskRequest, CancelMessageMoveTaskResult } from "../models/models_0";
import { CancelMessageMoveTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Cancels a specified message movement task. A message movement can only be cancelled when the current status is RUNNING. Cancelling a message movement task does not revert the messages that have already been moved. It can only stop the messages that have not been moved yet.
 *
 * > **Note:**
 * >
 * > - This action is currently limited to supporting message redrive from [dead-letter queues (DLQs)](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) only. In this context, the source queue is the dead-letter queue (DLQ), while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.
 * > - Only one active message movement task is supported per queue at any given time.
 *
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
 *
 * The specified ID is invalid.
 *
 * @throws {@link InvalidSecurity} (client fault)
 *
 * The request was not made over HTTPS or did not use SigV4 for signing.
 *
 * @throws {@link RequestThrottled} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * - Exceeds the permitted request rate for the queue or for the recipient of the request.
 * - Ensure that the request rate is within the Amazon SQS limits for sending messages. For more information, see [Amazon SQS quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests) in the *Amazon SQS Developer Guide*.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * One or more specified resources don't exist.
 *
 * @throws {@link UnsupportedOperation} (client fault)
 *
 * Error code 400. Unsupported operation.
 *
 * @throws {@link SQSServiceException}
 *
 * Base exception class for all service exceptions from SQS service.
 *
 * @public
 */
export class CancelMessageMoveTaskCommand extends command<CancelMessageMoveTaskCommandInput, CancelMessageMoveTaskCommandOutput>(
  _ep0,
  _mw0,
  "CancelMessageMoveTask",
  CancelMessageMoveTask$
) {
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
