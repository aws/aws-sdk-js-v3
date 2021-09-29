import { IoTSecureTunneling } from "../IoTSecureTunneling";
import { IoTSecureTunnelingClient } from "../IoTSecureTunnelingClient";
import { ListTunnelsCommand, ListTunnelsCommandInput, ListTunnelsCommandOutput } from "../commands/ListTunnelsCommand";
import { IoTSecureTunnelingPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoTSecureTunneling,
  input: ListTunnelsCommandInput,
  ...args: any
): Promise<ListTunnelsCommandOutput> => {
  // @ts-ignore
  return await client.listTunnels(input, ...args);
};
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
    if (config.client instanceof IoTSecureTunneling) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTSecureTunnelingClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTSecureTunneling | IoTSecureTunnelingClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
