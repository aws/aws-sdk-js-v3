// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetQueueUrlRequest, GetQueueUrlResult } from "../models/models_0";
import { GetQueueUrl$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetQueueUrlCommand}.
 */
export interface GetQueueUrlCommandInput extends GetQueueUrlRequest {}
/**
 * @public
 *
 * The output of {@link GetQueueUrlCommand}.
 */
export interface GetQueueUrlCommandOutput extends GetQueueUrlResult, __MetadataBearer {}

/**
 * The `GetQueueUrl` API returns the URL of an existing Amazon SQS queue. This is useful when you know the queue's name but need to retrieve its URL for further operations.
 *
 * To access a queue owned by another Amazon Web Services account, use the `QueueOwnerAWSAccountId` parameter to specify the account ID of the queue's owner. Note that the queue owner must grant you the necessary permissions to access the queue. For more information about accessing shared queues, see the `AddPermission` API or [Allow developers to write messages to a shared queue](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-writing-an-sqs-policy.html#write-messages-to-shared-queue) in the *Amazon SQS Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SQSClient, GetQueueUrlCommand } from "@aws-sdk/client-sqs"; // ES Modules import
 * // const { SQSClient, GetQueueUrlCommand } = require("@aws-sdk/client-sqs"); // CommonJS import
 * // import type { SQSClientConfig } from "@aws-sdk/client-sqs";
 * const config = {}; // type is SQSClientConfig
 * const client = new SQSClient(config);
 * const input = { // GetQueueUrlRequest
 *   QueueName: "STRING_VALUE", // required
 *   QueueOwnerAWSAccountId: "STRING_VALUE",
 * };
 * const command = new GetQueueUrlCommand(input);
 * const response = await client.send(command);
 * // { // GetQueueUrlResult
 * //   QueueUrl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetQueueUrlCommandInput - {@link GetQueueUrlCommandInput}
 * @returns {@link GetQueueUrlCommandOutput}
 * @see {@link GetQueueUrlCommandInput} for command's `input` shape.
 * @see {@link GetQueueUrlCommandOutput} for command's `response` shape.
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
 * @throws {@link QueueDoesNotExist} (client fault)
 *
 * Ensure that the `QueueUrl` is correct and that the queue has not been deleted.
 *
 * @throws {@link RequestThrottled} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * - Exceeds the permitted request rate for the queue or for the recipient of the request.
 * - Ensure that the request rate is within the Amazon SQS limits for sending messages. For more information, see [Amazon SQS quotas](https://docs.aws.amazon.com/AWSSimpleQueueService/latest/SQSDeveloperGuide/sqs-quotas.html#quotas-requests) in the *Amazon SQS Developer Guide*.
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
export class GetQueueUrlCommand extends command<GetQueueUrlCommandInput, GetQueueUrlCommandOutput>(
  _ep0,
  _mw0,
  "GetQueueUrl",
  GetQueueUrl$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetQueueUrlRequest;
      output: GetQueueUrlResult;
    };
    sdk: {
      input: GetQueueUrlCommandInput;
      output: GetQueueUrlCommandOutput;
    };
  };
}
