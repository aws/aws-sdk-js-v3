import { DynamoDB } from "../DynamoDB";
import { DynamoDBClient } from "../DynamoDBClient";
import { ListExportsCommand, ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { DynamoDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DynamoDBClient,
  input: ListExportsCommandInput,
  ...args: any
): Promise<ListExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExportsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DynamoDB,
  input: ListExportsCommandInput,
  ...args: any
): Promise<ListExportsCommandOutput> => {
  // @ts-ignore
  return await client.listExports(input, ...args);
};
export async function* listExportsPaginate(
  config: DynamoDBPaginationConfiguration,
  input: ListExportsCommandInput,
  ...additionalArguments: any
): Paginator<ListExportsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExportsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DynamoDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DynamoDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DynamoDB | DynamoDBClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
