import { type DynamoDBClient } from "@aws-sdk/client-dynamodb";

import { BatchGetCommand, BatchGetCommandInput, BatchGetCommandOutput } from "../commands/BatchGetCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";

/**
 * @public
 *
 * Async generator that issues {@link BatchGetCommand}s repeatedly until all keys are processed or an error response is received.
 *
 * @see {@link paginateBatchGetItem} for a variant that uses the {@link DynamoDBClient | low level DynamoDB client}.
 *
 * @example
 *
 * ```
 * const client = new DynamoDBClient();
 * const docClient = DynamoDBDocumentClient.from(client);
 * const input: BatchGetCommandInput = {
 *   RequestItems: {
 *     table1: Keys: [...],
 *     table2: Keys: [...],
 *   }
 * };
 *
 * let pageNumber = 1;
 * for await (const page of paginateBatchGet({ client: docClient }, input)) {
 *   console.log("page:", pageNumber++);
 *   console.log("items:", page.Responses);
 *   console.log("unprocessed:", page.UnprocessedKeys); // will be returned in the next page(s)
 * }
 * ```
 */
export async function* paginateBatchGet(
  config: {
    client: DynamoDBDocumentClient;
  },
  input: BatchGetCommandInput
): AsyncGenerator<BatchGetCommandOutput> {
  let RequestItems = input.RequestItems;

  while (RequestItems && Object.keys(RequestItems).length > 0) {
    const cmd = new BatchGetCommand({ ...input, RequestItems });
    const response = await config.client.send(cmd);
    RequestItems = { ...response.UnprocessedKeys };

    yield response;
  }
}
