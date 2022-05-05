// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSharedEndpointsCommand,
  ListSharedEndpointsCommandInput,
  ListSharedEndpointsCommandOutput,
} from "../commands/ListSharedEndpointsCommand";
import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3OutpostsClient,
  input: ListSharedEndpointsCommandInput,
  ...args: any
): Promise<ListSharedEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSharedEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Outposts,
  input: ListSharedEndpointsCommandInput,
  ...args: any
): Promise<ListSharedEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listSharedEndpoints(input, ...args);
};
export async function* paginateListSharedEndpoints(
  config: S3OutpostsPaginationConfiguration,
  input: ListSharedEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListSharedEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSharedEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof S3Outposts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof S3OutpostsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected S3Outposts | S3OutpostsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
