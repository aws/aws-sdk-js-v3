import { S3Outposts } from "../S3Outposts";
import { S3OutpostsClient } from "../S3OutpostsClient";
import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { S3OutpostsPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: S3OutpostsClient,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: S3Outposts,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpoints(input, ...args);
};
export async function* listEndpointsPaginate(
  config: S3OutpostsPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
