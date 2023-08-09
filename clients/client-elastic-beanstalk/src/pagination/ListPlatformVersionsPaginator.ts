// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPlatformVersionsCommand,
  ListPlatformVersionsCommandInput,
  ListPlatformVersionsCommandOutput,
} from "../commands/ListPlatformVersionsCommand";
import { ElasticBeanstalkClient } from "../ElasticBeanstalkClient";
import { ElasticBeanstalkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticBeanstalkClient,
  input: ListPlatformVersionsCommandInput,
  ...args: any
): Promise<ListPlatformVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPlatformVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPlatformVersions(
  config: ElasticBeanstalkPaginationConfiguration,
  input: ListPlatformVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPlatformVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPlatformVersionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof ElasticBeanstalkClient) {
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
