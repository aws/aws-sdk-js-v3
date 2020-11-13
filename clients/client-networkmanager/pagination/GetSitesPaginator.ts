import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { GetSitesCommand, GetSitesCommandInput, GetSitesCommandOutput } from "../commands/GetSitesCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetSitesCommandInput,
  ...args: any
): Promise<GetSitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetSitesCommand(input), ...args);
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetSitesCommandInput,
  ...args: any
): Promise<GetSitesCommandOutput> => {
  // @ts-ignore
  return await client.getSites(input, ...args);
};
export async function* getSitesPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetSitesCommandInput,
  ...additionalArguments: any
): Paginator<GetSitesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetSitesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
