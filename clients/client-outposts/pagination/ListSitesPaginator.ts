import { Outposts } from "../Outposts";
import { OutpostsClient } from "../OutpostsClient";
import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: OutpostsClient,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSitesCommand(input), ...args);
};
const makePagedRequest = async (
  client: Outposts,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.listSites(input, ...args);
};
export async function* paginateListSites(
  config: OutpostsPaginationConfiguration,
  input: ListSitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSitesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSitesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Outposts | OutpostsClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
