// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSolNetworkInstancesCommand,
  ListSolNetworkInstancesCommandInput,
  ListSolNetworkInstancesCommandOutput,
} from "../commands/ListSolNetworkInstancesCommand";
import { Tnb } from "../Tnb";
import { TnbClient } from "../TnbClient";
import { TnbPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TnbClient,
  input: ListSolNetworkInstancesCommandInput,
  ...args: any
): Promise<ListSolNetworkInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSolNetworkInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Tnb,
  input: ListSolNetworkInstancesCommandInput,
  ...args: any
): Promise<ListSolNetworkInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listSolNetworkInstances(input, ...args);
};
export async function* paginateListSolNetworkInstances(
  config: TnbPaginationConfiguration,
  input: ListSolNetworkInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListSolNetworkInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSolNetworkInstancesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Tnb) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TnbClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Tnb | TnbClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
