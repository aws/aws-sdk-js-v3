// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPlatformBranchesCommand,
  ListPlatformBranchesCommandInput,
  ListPlatformBranchesCommandOutput,
} from "../commands/ListPlatformBranchesCommand";
import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: ListPlatformBranchesCommandInput,
  ...args: any
): Promise<ListPlatformBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlatformBranchesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: ListPlatformBranchesCommandInput,
  ...args: any
): Promise<ListPlatformBranchesCommandOutput> => {
  // @ts-ignore
  return await client.listPlatformBranches(input, ...args);
};
export async function* paginateListPlatformBranches(
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformBranchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlatformBranchesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElasticBeanstalk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticBeanstalkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticBeanstalk | ElasticBeanstalkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
