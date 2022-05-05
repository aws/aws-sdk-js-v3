// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeJobsCommand,
  DescribeJobsCommandInput,
  DescribeJobsCommandOutput,
} from "../commands/DescribeJobsCommand";
import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: DescribeJobsCommandInput,
  ...args: any
): Promise<DescribeJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Mgn,
  input: DescribeJobsCommandInput,
  ...args: any
): Promise<DescribeJobsCommandOutput> => {
  // @ts-ignore
  return await client.describeJobs(input, ...args);
};
export async function* paginateDescribeJobs(
  config: MgnPaginationConfiguration,
  input: DescribeJobsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Mgn) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
