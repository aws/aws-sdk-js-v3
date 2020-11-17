import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { KendraPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KendraClient,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourcesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Kendra,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDataSources(input, ...args);
};
export async function* paginateListDataSources(
  config: KendraPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourcesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataSourcesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
