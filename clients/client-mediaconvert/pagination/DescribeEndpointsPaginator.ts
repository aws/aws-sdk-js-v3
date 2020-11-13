import { MediaConvert } from "../MediaConvert";
import { MediaConvertClient } from "../MediaConvertClient";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "../commands/DescribeEndpointsCommand";
import { MediaConvertPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MediaConvertClient,
  input: DescribeEndpointsCommandInput,
  ...args: any
): Promise<DescribeEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointsCommand(input), ...args);
};
const makePagedRequest = async (
  client: MediaConvert,
  input: DescribeEndpointsCommandInput,
  ...args: any
): Promise<DescribeEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeEndpoints(input, ...args);
};
export async function* describeEndpointsPaginate(
  config: MediaConvertPaginationConfiguration,
  input: DescribeEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaConvert) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaConvertClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaConvert | MediaConvertClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
