import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import {
  GetLinkAssociationsCommand,
  GetLinkAssociationsCommandInput,
  GetLinkAssociationsCommandOutput,
} from "../commands/GetLinkAssociationsCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetLinkAssociationsCommandInput,
  ...args: any
): Promise<GetLinkAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLinkAssociationsCommand(input), ...args);
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetLinkAssociationsCommandInput,
  ...args: any
): Promise<GetLinkAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.getLinkAssociations(input, ...args);
};
export async function* paginateGetLinkAssociations(
  config: NetworkManagerPaginationConfiguration,
  input: GetLinkAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<GetLinkAssociationsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetLinkAssociationsCommandOutput;
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
