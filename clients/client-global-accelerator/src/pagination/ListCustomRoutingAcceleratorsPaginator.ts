// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCustomRoutingAcceleratorsCommand,
  ListCustomRoutingAcceleratorsCommandInput,
  ListCustomRoutingAcceleratorsCommandOutput,
} from "../commands/ListCustomRoutingAcceleratorsCommand";
import { GlobalAccelerator } from "../GlobalAccelerator";
import { GlobalAcceleratorClient } from "../GlobalAcceleratorClient";
import { GlobalAcceleratorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GlobalAcceleratorClient,
  input: ListCustomRoutingAcceleratorsCommandInput,
  ...args: any
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCustomRoutingAcceleratorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GlobalAccelerator,
  input: ListCustomRoutingAcceleratorsCommandInput,
  ...args: any
): Promise<ListCustomRoutingAcceleratorsCommandOutput> => {
  // @ts-ignore
  return await client.listCustomRoutingAccelerators(input, ...args);
};
export async function* paginateListCustomRoutingAccelerators(
  config: GlobalAcceleratorPaginationConfiguration,
  input: ListCustomRoutingAcceleratorsCommandInput,
  ...additionalArguments: any
): Paginator<ListCustomRoutingAcceleratorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCustomRoutingAcceleratorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GlobalAccelerator) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GlobalAcceleratorClient) {
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
