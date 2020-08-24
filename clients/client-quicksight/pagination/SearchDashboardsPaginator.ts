import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import {
  SearchDashboardsCommand,
  SearchDashboardsCommandInput,
  SearchDashboardsCommandOutput,
} from "../commands/SearchDashboardsCommand";
import { QuickSightPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: QuickSightClient,
  input: SearchDashboardsCommandInput,
  ...args: any
): Promise<SearchDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchDashboardsCommand(input, ...args));
};
const makePagedRequest = async (
  client: QuickSight,
  input: SearchDashboardsCommandInput,
  ...args: any
): Promise<SearchDashboardsCommandOutput> => {
  // @ts-ignore
  return await client.searchDashboards(input, ...args);
};
export async function* searchDashboardsPaginate(
  config: QuickSightPaginationConfiguration,
  input: SearchDashboardsCommandInput,
  ...additionalArguments: any
): Paginator<SearchDashboardsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: SearchDashboardsCommandOutput;
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
