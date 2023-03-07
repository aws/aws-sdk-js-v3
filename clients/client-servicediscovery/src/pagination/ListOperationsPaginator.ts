// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOperationsCommand,
  ListOperationsCommandInput,
  ListOperationsCommandOutput,
} from "../commands/ListOperationsCommand";
import { ServiceDiscoveryClient } from "../ServiceDiscoveryClient";
import { ServiceDiscoveryPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ServiceDiscoveryClient,
  input: ListOperationsCommandInput,
  ...args: any
): Promise<ListOperationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOperationsCommand(input), ...args);
};
export async function* paginateListOperations(
  config: ServiceDiscoveryPaginationConfiguration,
  input: ListOperationsCommandInput,
  ...additionalArguments: any
): Paginator<ListOperationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOperationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ServiceDiscoveryClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ServiceDiscovery | ServiceDiscoveryClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
