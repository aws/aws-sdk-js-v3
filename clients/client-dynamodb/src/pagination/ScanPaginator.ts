// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ScanCommand, ScanCommandInput, ScanCommandOutput } from "../commands/ScanCommand";
import { DynamoDBClient } from "../DynamoDBClient";
import { DynamoDBPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.LastEvaluatedKey;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
