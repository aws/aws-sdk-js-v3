// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { QueryCommand, QueryCommandInput, QueryCommandOutput } from "../commands/QueryCommand";
import { DynamoDBDocument } from "../DynamoDBDocument";
import { DynamoDBDocumentClient } from "../DynamoDBDocumentClient";
import { DynamoDBDocumentPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBDocumentClient,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.send(new QueryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDBDocument,
  input: QueryCommandInput,
  ...args: any
): Promise<QueryCommandOutput> => {
  // @ts-ignore
  return await client.query(input, ...args);
};
export async function* paginateQuery(
  config: DynamoDBDocumentPaginationConfiguration,
  input: QueryCommandInput,
  ...additionalArguments: any
): Paginator<QueryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ExclusiveStartKey
  let token: typeof input.ExclusiveStartKey | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: QueryCommandOutput;
  while (hasNext) {
    input.ExclusiveStartKey = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDBDocument) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBDocumentClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDBDocument | DynamoDBDocumentClient");
    }
    yield page;
    token = page.LastEvaluatedKey;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
