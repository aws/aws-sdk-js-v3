import { DataExchange } from "../DataExchange";
import { DataExchangeClient } from "../DataExchangeClient";
import {
  ListDataSetRevisionsCommand,
  ListDataSetRevisionsCommandInput,
  ListDataSetRevisionsCommandOutput,
} from "../commands/ListDataSetRevisionsCommand";
import { DataExchangePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataExchangeClient,
  input: ListDataSetRevisionsCommandInput,
  ...args: any
): Promise<ListDataSetRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSetRevisionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DataExchange,
  input: ListDataSetRevisionsCommandInput,
  ...args: any
): Promise<ListDataSetRevisionsCommandOutput> => {
  // @ts-ignore
  return await client.listDataSetRevisions(input, ...args);
};
export async function* listDataSetRevisionsPaginate(
  config: DataExchangePaginationConfiguration,
  input: ListDataSetRevisionsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSetRevisionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSetRevisionsCommandOutput;
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
