// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetConnectorsCommand,
  GetConnectorsCommandInput,
  GetConnectorsCommandOutput,
} from "../commands/GetConnectorsCommand";
import { SMSClient } from "../SMSClient";
import { SMSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SMSClient,
  input: GetConnectorsCommandInput,
  ...args: any
): Promise<GetConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetConnectorsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetConnectors(
  config: SMSPaginationConfiguration,
  input: GetConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<GetConnectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetConnectorsCommandOutput;
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
