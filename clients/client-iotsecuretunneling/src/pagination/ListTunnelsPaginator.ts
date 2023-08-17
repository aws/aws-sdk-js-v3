// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListTunnelsCommand, ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient";
import { IoTSecureTunnelingPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTSecureTunnelingClient,
  input: ListTunnelsCommandInput,
  ...args: any
): Promise<ListTunnelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTunnelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTunnels(
  config: IoTSecureTunnelingPaginationConfiguration,
  input: ListTunnelsCommandInput,
  ...additionalArguments: any
): Paginator<ListTunnelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTunnelsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTSecureTunnelingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSecureTunneling | IoTSecureTunnelingClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
