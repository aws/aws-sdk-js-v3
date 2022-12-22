// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVpcEndpointsCommand,
  ListVpcEndpointsCommandInput,
  ListVpcEndpointsCommandOutput,
} from "../commands/ListVpcEndpointsCommand";
import { OpenSearchServerless } from "../OpenSearchServerless";
import { OpenSearchServerlessClient } from "../OpenSearchServerlessClient";
import { OpenSearchServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: OpenSearchServerless,
  input: ListVpcEndpointsCommandInput,
  ...args: any
): Promise<ListVpcEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listVpcEndpoints(input, ...args);
};
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
    if (config.client instanceof OpenSearchServerless) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchServerlessClient) {
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
