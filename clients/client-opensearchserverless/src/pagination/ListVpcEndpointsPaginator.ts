// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "../commands/ListVpcEndpointsCommand";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchServerlessClient,
  input: ListVpcEndpointsCommandInput,
  ...args: any
): Promise<ListVpcEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVpcEndpointsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVpcEndpoints(
  config: OpenSearchServerlessPaginationConfiguration,
  input: ListVpcEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListVpcEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVpcEndpointsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof OpenSearchServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearchServerless | OpenSearchServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
