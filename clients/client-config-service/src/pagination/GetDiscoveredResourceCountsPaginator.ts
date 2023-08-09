// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetDiscoveredResourceCountsCommand,
  GetDiscoveredResourceCountsCommandInput,
  GetDiscoveredResourceCountsCommandOutput,
} from "../commands/GetDiscoveredResourceCountsCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: GetDiscoveredResourceCountsCommandInput,
  ...args: any
): Promise<GetDiscoveredResourceCountsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetDiscoveredResourceCountsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetDiscoveredResourceCounts(
  config: ConfigServicePaginationConfiguration,
  input: GetDiscoveredResourceCountsCommandInput,
  ...additionalArguments: any
): Paginator<GetDiscoveredResourceCountsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetDiscoveredResourceCountsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["limit"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
