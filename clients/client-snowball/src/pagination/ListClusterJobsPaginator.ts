// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListClusterJobsCommand,
  ListClusterJobsCommandInput,
  ListClusterJobsCommandOutput,
} from "../commands/ListClusterJobsCommand";
import { Snowball } from "../Snowball";
import { SnowballClient } from "../SnowballClient";
import { SnowballPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SnowballClient,
  input: ListClusterJobsCommandInput,
  ...args: any
): Promise<ListClusterJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListClusterJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Snowball,
  input: ListClusterJobsCommandInput,
  ...args: any
): Promise<ListClusterJobsCommandOutput> => {
  // @ts-ignore
  return await client.listClusterJobs(input, ...args);
};
export async function* paginateListClusterJobs(
  config: SnowballPaginationConfiguration,
  input: ListClusterJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListClusterJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListClusterJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Snowball) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SnowballClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Snowball | SnowballClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
