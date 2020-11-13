import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";
import {
  ListDataSetsCommand,
  ListDataSetsCommandInput,
  ListDataSetsCommandOutput,
} from "../commands/ListDataSetsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataExchangeClient,
  input: ListDataSetsCommandInput,
  ...args: any
): Promise<ListDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataExchange,
  input: ListDataSetsCommandInput,
  ...args: any
): Promise<ListDataSetsCommandOutput> => {
  // @ts-ignore
  return await client.listDataSets(input, ...args);
};
export async function* listDataSetsPaginate(
  config: DataExchangePaginationConfiguration,
  input: ListDataSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof DataExchange) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataExchangeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataExchange | DataExchangeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
