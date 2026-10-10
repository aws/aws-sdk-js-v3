// smithy-typescript generated code
import { BatchGetItemCommand, type BatchGetItemCommandInput, type BatchGetItemCommandOutput } from "../commands/BatchGetItemCommand";
import type { DynamoDBClient } from "../DynamoDBClient";

/**
 * Issues batch get requests until every key is processed. Each response is yielded as a page.
 * When a response contains unprocessed keys, the next request includes only those keys.
 * Each BatchGet request must contain no more than 100 items.
 *
 * @public
 */
export async function* paginatedBatchGetItem(
  config: { client: DynamoDBClient },
  input: BatchGetItemCommandInput
): AsyncGenerator<BatchGetItemCommandOutput> {
  let requestItems = input.RequestItems;

  while (requestItems && Object.keys(requestItems).length > 0) {
    const response = await config.client.send(
      new BatchGetItemCommand({ ...input, RequestItems: requestItems })
    );
    requestItems = response.UnprocessedKeys;

    yield response;
  }
}
