import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  ListDataSourcesCommand,
  ListDataSourcesCommandInput,
  ListDataSourcesCommandOutput,
} from "../commands/ListDataSourcesCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataSourcesCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: ListDataSourcesCommandInput,
  ...args: any
): Promise<ListDataSourcesCommandOutput> => {
  // @ts-ignore
  return await client.listDataSources(input, ...args);
};
export async function* listDataSourcesPaginate(
  config: QuickSightPaginationConfiguration,
  input: ListDataSourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListDataSourcesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListDataSourcesCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
