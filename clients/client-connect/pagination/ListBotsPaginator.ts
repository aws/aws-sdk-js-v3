import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ListBotsCommand, ListBotsCommandInput, ListBotsCommandOutput } from "../commands/ListBotsCommand";
import { ConnectPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBotsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListBotsCommandInput,
  ...args: any
): Promise<ListBotsCommandOutput> => {
  // @ts-ignore
  return await client.listBots(input, ...args);
};
export async function* paginateListBots(
  config: ConnectPaginationConfiguration,
  input: ListBotsCommandInput,
  ...additionalArguments: any
): Paginator<ListBotsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBotsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
