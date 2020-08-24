import { NetworkManager } from "../NetworkManager";
import { NetworkManagerClient } from "../NetworkManagerClient";
import { GetLinksCommand, GetLinksCommandInput, GetLinksCommandOutput } from "../commands/GetLinksCommand";
import { NetworkManagerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: NetworkManagerClient,
  input: GetLinksCommandInput,
  ...args: any
): Promise<GetLinksCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetLinksCommand(input, ...args));
};
const makePagedRequest = async (
  client: NetworkManager,
  input: GetLinksCommandInput,
  ...args: any
): Promise<GetLinksCommandOutput> => {
  // @ts-ignore
  return await client.getLinks(input, ...args);
};
export async function* getLinksPaginate(
  config: NetworkManagerPaginationConfiguration,
  input: GetLinksCommandInput,
  ...additionalArguments: any
): Paginator<GetLinksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: GetLinksCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof NetworkManager) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NetworkManagerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected NetworkManager | NetworkManagerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
