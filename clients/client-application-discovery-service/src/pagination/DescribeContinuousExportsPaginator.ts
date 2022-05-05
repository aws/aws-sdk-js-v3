// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ApplicationDiscoveryService } from "../ApplicationDiscoveryService";
import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeContinuousExportsCommand,
  DescribeContinuousExportsCommandInput,
  DescribeContinuousExportsCommandOutput,
} from "../commands/DescribeContinuousExportsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ApplicationDiscoveryServiceClient,
  input: DescribeContinuousExportsCommandInput,
  ...args: any
): Promise<DescribeContinuousExportsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeContinuousExportsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ApplicationDiscoveryService,
  input: DescribeContinuousExportsCommandInput,
  ...args: any
): Promise<DescribeContinuousExportsCommandOutput> => {
  // @ts-ignore
  return await client.describeContinuousExports(input, ...args);
};
export async function* paginateDescribeContinuousExports(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeContinuousExportsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeContinuousExportsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeContinuousExportsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationDiscoveryService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ApplicationDiscoveryServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ApplicationDiscoveryService | ApplicationDiscoveryServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
