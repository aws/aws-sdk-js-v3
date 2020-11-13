import { WorkLink } from "../WorkLink";
import { WorkLinkClient } from "../WorkLinkClient";
import {
  ListWebsiteAuthorizationProvidersCommand,
  ListWebsiteAuthorizationProvidersCommandInput,
  ListWebsiteAuthorizationProvidersCommandOutput,
} from "../commands/ListWebsiteAuthorizationProvidersCommand";
import { WorkLinkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: WorkLinkClient,
  input: ListWebsiteAuthorizationProvidersCommandInput,
  ...args: any
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWebsiteAuthorizationProvidersCommand(input), ...args);
};
const makePagedRequest = async (
  client: WorkLink,
  input: ListWebsiteAuthorizationProvidersCommandInput,
  ...args: any
): Promise<ListWebsiteAuthorizationProvidersCommandOutput> => {
  // @ts-ignore
  return await client.listWebsiteAuthorizationProviders(input, ...args);
};
export async function* listWebsiteAuthorizationProvidersPaginate(
  config: WorkLinkPaginationConfiguration,
  input: ListWebsiteAuthorizationProvidersCommandInput,
  ...additionalArguments: any
): Paginator<ListWebsiteAuthorizationProvidersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWebsiteAuthorizationProvidersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkLink) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof WorkLinkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
