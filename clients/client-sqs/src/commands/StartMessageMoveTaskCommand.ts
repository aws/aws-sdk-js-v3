// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartMessageMoveTaskRequest, StartMessageMoveTaskResult } from "../models/models_0";
import { StartMessageMoveTask$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandInput extends StartMessageMoveTaskRequest {}
/**
 * @public
 *
 * The output of {@link StartMessageMoveTaskCommand}.
 */
export interface StartMessageMoveTaskCommandOutput extends StartMessageMoveTaskResult, __MetadataBearer {}

/**
 * Starts an asynchronous task to move messages from a specified source queue to a specified destination queue.
 *
 * > **Note:**
 * >
 * > - This action is currently limited to supporting message redrive from queues that are configured as [dead-letter queues (DLQs)](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-dead-letter-queues.html) of other Amazon SQS queues only. Non-SQS queue sources of dead-letter queues, such as Lambda or Amazon SNS topics, are currently not supported.
 * > - In dead-letter queues redrive context, the `StartMessageMoveTask` the source queue is the DLQ, while the destination queue can be the original source queue (from which the messages were driven to the dead-letter-queue), or a custom destination queue.
 * > - Only one active message movement task is supported per queue at any given time.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, StartMessageMoveTaskCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, StartMessageMoveTaskCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // StartMessageMoveTaskRequest
 *   SourceArn: "STRING_VALUE", // required
 *   DestinationArn: "STRING_VALUE",
 *   MaxNumberOfMessagesPerSecond: Number("int"),
 * };
 * const command = new StartMessageMoveTaskCommand(input);
 * const response = await client.send(command);
 * // { // StartMessageMoveTaskResult
 * //   TaskHandle: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param StartMessageMoveTaskCommandInput - {@link StartMessageMoveTaskCommandInput}
 * @returns {@link StartMessageMoveTaskCommandOutput}
 * @see {@link StartMessageMoveTaskCommandInput} for command's `input` shape.
 * @see {@link StartMessageMoveTaskCommandOutput} for command's `response` shape.
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
export class StartMessageMoveTaskCommand extends command<StartMessageMoveTaskCommandInput, StartMessageMoveTaskCommandOutput>(
  _ep0,
  _mw0,
  "StartMessageMoveTask",
  StartMessageMoveTask$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMessageMoveTaskRequest;
      output: StartMessageMoveTaskResult;
    };
    sdk: {
      input: StartMessageMoveTaskCommandInput;
      output: StartMessageMoveTaskCommandOutput;
    };
  };
}
