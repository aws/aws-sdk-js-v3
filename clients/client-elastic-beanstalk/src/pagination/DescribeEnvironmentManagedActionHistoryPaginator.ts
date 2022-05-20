// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEnvironmentManagedActionHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeEnvironmentManagedActionHistory(input, ...args);
};
export async function* paginateDescribeEnvironmentManagedActionHistory(
  config: ElasticBeanstalkPaginationConfiguration,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEnvironmentManagedActionHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
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
