import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: S3OutpostsClient,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: S3Outposts,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpoints(input, ...args);
};
export async function* paginateListEndpoints(
  config: S3OutpostsPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
