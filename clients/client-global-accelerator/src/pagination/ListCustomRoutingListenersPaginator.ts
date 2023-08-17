// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCustomRoutingListenersCommand,
  ListCustomRoutingListenersCommandInput,
  ListCustomRoutingListenersCommandOutput,
} from "../commands/ListCustomRoutingListenersCommand";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCustomRoutingListenersCommandInput,
  ...args: any
): Promise<ListCustomRoutingListenersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomRoutingListenersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCustomRoutingListeners(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingListenersCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomRoutingListenersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomRoutingListenersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAcceleratorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GlobalAccelerator | GlobalAcceleratorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
