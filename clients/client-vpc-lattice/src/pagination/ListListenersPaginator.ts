// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListListenersCommand,
  ListListenersCommandInput,
  ListListenersCommandOutput,
} from "../commands/ListListenersCommand";
import { VPCLatticeClient } from "../VPCLatticeClient";
import { VPCLatticePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: VPCLatticeClient,
  input: ListListenersCommandInput,
  ...args: any
): Promise<ListListenersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListListenersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListListeners(
  config: VPCLatticePaginationConfiguration,
  input: ListListenersCommandInput,
  ...additionalArguments: any
): Paginator<ListListenersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListListenersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof VPCLatticeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VPCLattice | VPCLatticeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
