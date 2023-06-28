// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "../commands/DescribeDataRepositoryTasksCommand";
import { FSxClient } from "../FSxClient";
import { FSxPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeDataRepositoryTasksCommandInput,
  ...args: any
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDataRepositoryTasksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeDataRepositoryTasks(
  config: FSxPaginationConfiguration,
  input: DescribeDataRepositoryTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDataRepositoryTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDataRepositoryTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
