import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import {
  DescribeEnvironmentManagedActionHistoryCommand,
  DescribeEnvironmentManagedActionHistoryCommandInput,
  DescribeEnvironmentManagedActionHistoryCommandOutput,
} from "../commands/DescribeEnvironmentManagedActionHistoryCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEnvironmentManagedActionHistoryCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...args: any
): Promise<DescribeEnvironmentManagedActionHistoryCommandOutput> => {
  // @ts-ignore
  return await client.describeEnvironmentManagedActionHistory(input, ...args);
};
export async function* describeEnvironmentManagedActionHistoryPaginate(
  config: ElasticBeanstalkPaginationConfiguration,
  input: DescribeEnvironmentManagedActionHistoryCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEnvironmentManagedActionHistoryCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
