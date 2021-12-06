import { Paginator } from "@aws-sdk/types";

import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: ScanCommandInput,
  ...args: any
): Promise<ScanCommandOutput> => {
  // @ts-ignore
  return await client.send(new ScanCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DynamoDB,
  input: ScanCommandInput,
  ...args: any
): Promise<ScanCommandOutput> => {
  // @ts-ignore
  return await client.scan(input, ...args);
};
export async function* paginateScan(
  config: DynamoDBPaginationConfiguration,
  input: ScanCommandInput,
  ...additionalArguments: any
): Paginator<ScanCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.ExclusiveStartKey
  let token: typeof input.ExclusiveStartKey | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ScanCommandOutput;
  while (hasNext) {
    input.ExclusiveStartKey = token;
    input["Limit"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.LastEvaluatedKey;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
