// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep5, _mw0, command } from "../commandBuilder";
import type { DeleteQueueInput } from "../models/models_0";
import { DeleteQueue$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandInput extends DeleteQueueInput {}
/**
 * @public
 *
 * The output of {@link DeleteQueueCommand}.
 */
export interface DeleteQueueCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified queue. Records that are in flight when you delete the queue are not
 *             delivered again, and receipt handles issued by the queue stop being valid.</p>
 *          <p>Deleting a queue does not delete the data stream the queue was created on, and does not
 *             delete any records in that stream. Those records remain available to stream consumers and
 *             to other queues on the same stream for the rest of their retention period.</p>
 *          <p>
 *             <code>DeleteQueue</code> is an asynchronous operation. Upon receiving a
 *             <code>DeleteQueue</code> request, Amazon Kinesis Data Streams sets the
 *             <code>QueueStatus</code> to <code>DELETING</code>. The queue is deleted when the operation
 *             completes. A queue in the <code>DELETING</code> state does not deliver records.</p>
 *          <p>You must delete every queue on a data stream before you can delete the stream, or switch
 *             it from on-demand to provisioned capacity mode.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KinesisClient, DeleteQueueCommand } from "@aws-sdk/client-kinesis"; // ES Modules import
 * // const { KinesisClient, DeleteQueueCommand } = require("@aws-sdk/client-kinesis"); // CommonJS import
 * // import type { KinesisClientConfig } from "@aws-sdk/client-kinesis";
 * const config = {}; // type is KinesisClientConfig
 * const client = new KinesisClient(config);
 * const input = { // DeleteQueueInput
 *   QueueARN: "STRING_VALUE", // required
 * };
 * const command = new DeleteQueueCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteQueueCommandInput - {@link DeleteQueueCommandInput}
 * @returns {@link DeleteQueueCommandOutput}
 * @see {@link DeleteQueueCommandInput} for command's `input` shape.
 * @see {@link DeleteQueueCommandOutput} for command's `response` shape.
 * @see {@link KinesisClientResolvedConfig | config} for KinesisClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Specifies that you do not have the permissions required to perform this
 *             operation.</p>
 *
 * @throws {@link InternalFailureException} (server fault)
 *  <p>The processing of the request failed because of an unknown error, exception, or
 *             failure.</p>
 *
 * @throws {@link InvalidArgumentException} (client fault)
 *  <p>A specified parameter exceeds its restrictions, is not supported, or can't be used.
 *             For more information, see the returned message.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The requested resource exceeds the maximum number allowed, or the number of concurrent
 *             stream requests exceeds the maximum number allowed. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The requested resource could not be found. The stream might not be specified
 *             correctly.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. For example, a parameter value is not valid, a
 *             combination of parameters is not supported, or the operation is not supported for the
 *             stream's capacity mode. The error message describes the specific reason.</p>
 *
 * @throws {@link KinesisServiceException}
 * <p>Base exception class for all service exceptions from Kinesis service.</p>
 *
 *
 * @public
 */
export class DeleteQueueCommand extends command<DeleteQueueCommandInput, DeleteQueueCommandOutput>(
  _ep5,
  _mw0,
  "DeleteQueue",
  DeleteQueue$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteQueueInput;
      output: {};
    };
    sdk: {
      input: DeleteQueueCommandInput;
      output: DeleteQueueCommandOutput;
    };
  };
}
