// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ApplicationDiscoveryServiceClient } from "../ApplicationDiscoveryServiceClient";
import {
  DescribeImportTasksCommand,
  DescribeImportTasksCommandInput,
  DescribeImportTasksCommandOutput,
} from "../commands/DescribeImportTasksCommand";
import { ApplicationDiscoveryServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ApplicationDiscoveryServiceClient,
  input: DescribeImportTasksCommandInput,
  ...args: any
): Promise<DescribeImportTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeImportTasksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeImportTasks(
  config: ApplicationDiscoveryServicePaginationConfiguration,
  input: DescribeImportTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeImportTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeImportTasksCommandOutput;
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
