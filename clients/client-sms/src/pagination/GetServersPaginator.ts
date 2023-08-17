// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { GetServersCommand, GetServersCommandInput, GetServersCommandOutput } from "../commands/GetServersCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SMSClient,
  input: GetServersCommandInput,
  ...args: any
): Promise<GetServersCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetServersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetServers(
  config: SMSPaginationConfiguration,
  input: GetServersCommandInput,
  ...additionalArguments: any
): Paginator<GetServersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetServersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SMSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SMS | SMSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
