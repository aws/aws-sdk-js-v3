// smithy-typescript generated code
import { BatchGetCommand, type BatchGetCommandInput, type BatchGetCommandOutput } from "../commands/BatchGetCommand";
import type { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";

/**
 * Issues batch get requests until every key is processed. Each response is yielded as a page.
 * When a response contains unprocessed keys, the next request includes only those keys.
 * Each BatchGet request must contain no more than 100 items.
 *
 * @public
 */
export async function* paginatedBatchGet(
  config: { client: DynamoDBDocumentClient },
  input: BatchGetCommandInput
): AsyncGenerator<BatchGetCommandOutput> {
  let requestItems = input.RequestItems;

  while (requestItems && Object.keys(requestItems).length > 0) {
    const response = await config.client.send(
      new BatchGetCommand({ ...input, RequestItems: requestItems })
    );
    requestItems = response.UnprocessedKeys;

    yield response;
  }
}
