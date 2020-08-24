import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import {
  DescribeEventsCommand,
  DescribeEventsCommandInput,
  DescribeEventsCommandOutput,
} from "../commands/DescribeEventsCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventsCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: DescribeEventsCommandInput,
  ...args: any
): Promise<DescribeEventsCommandOutput> => {
  // @ts-ignore
  return await client.describeEvents(input, ...args);
};
export async function* describeEventsPaginate(
  config: ElasticBeanstalkPaginationConfiguration,
  input: DescribeEventsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEventsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElasticBeanstalk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticBeanstalkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticBeanstalk | ElasticBeanstalkClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
