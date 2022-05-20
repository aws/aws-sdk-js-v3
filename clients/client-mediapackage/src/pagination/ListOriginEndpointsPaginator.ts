// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListOriginEndpointsCommand,
  ListOriginEndpointsCommandInput,
  ListOriginEndpointsCommandOutput,
} from "../commands/ListOriginEndpointsCommand";
import { MediaPackage } from "../MediaPackage";
import { MediaPackageClient } from "../MediaPackageClient";
import { MediaPackagePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaPackageClient,
  input: ListOriginEndpointsCommandInput,
  ...args: any
): Promise<ListOriginEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListOriginEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaPackage,
  input: ListOriginEndpointsCommandInput,
  ...args: any
): Promise<ListOriginEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listOriginEndpoints(input, ...args);
};
export async function* paginateListOriginEndpoints(
  config: MediaPackagePaginationConfiguration,
  input: ListOriginEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListOriginEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListOriginEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaPackage) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaPackageClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaPackage | MediaPackageClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
