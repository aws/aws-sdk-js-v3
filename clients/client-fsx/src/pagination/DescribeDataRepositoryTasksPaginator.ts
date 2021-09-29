import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeDataRepositoryTasksCommand,
  DescribeDataRepositoryTasksCommandInput,
  DescribeDataRepositoryTasksCommandOutput,
} from "../commands/DescribeDataRepositoryTasksCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: FSx,
  input: DescribeDataRepositoryTasksCommandInput,
  ...args: any
): Promise<DescribeDataRepositoryTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeDataRepositoryTasks(input, ...args);
};
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
    if (config.client instanceof FSx) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
