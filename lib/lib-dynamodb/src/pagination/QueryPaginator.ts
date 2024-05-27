// smithy-typescript generated code
import type { NativeAttributeValue } from "@aws-sdk/util-dynamodb";
import { Paginator } from "@smithy/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @public
 */
export { Paginator };
/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DynamoDBDocumentClient,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  return await client.send(new QueryCommand(input), ...args);
};
/**
 * @public
 *
 * @param QueryCommandInput - {@link QueryCommandInput}
 * @returns {@link QueryCommandOutput}
 *
 */
export async function* paginateQuery(
  config: DynamoDBDocumentPaginationConfiguration,
  input: QueryCommandInput,
  ...additionalArguments: any
): Paginator<QueryCommandOutput> {
  let token: Record<string, NativeAttributeValue> | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryCommandOutput;
  while (hasNext) {
    input.ExclusiveStartKey = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDBDocumentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDBDocument | DynamoDBDocumentClient");
    }
    yield page;
    token = page.LastEvaluatedKey;
    hasNext = !!token;
  }
  return undefined;
}
