import { ElasticBeanstalk } from "../ElasticBeanstalk";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import {
  ListPlatformVersionsCommand,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "../commands/ListPlatformVersionsCommand";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: ListPlatformVersionsCommandInput,
  ...args: any
): Promise<ListPlatformVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlatformVersionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: ElasticBeanstalk,
  input: ListPlatformVersionsCommandInput,
  ...args: any
): Promise<ListPlatformVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listPlatformVersions(input, ...args);
};
export async function* listPlatformVersionsPaginate(
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformVersionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlatformVersionsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
