// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeAgentsCommand,
  DescribeAgentsCommandInput,
  DescribeAgentsCommandOutput,
} from "../commands/DescribeAgentsCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationDiscoveryServiceClient,
  input: DescribeAgentsCommandInput,
  ...args: any
): Promise<DescribeAgentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAgentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeAgents(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeAgentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAgentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAgentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ApplicationDiscoveryServiceClient) {
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
