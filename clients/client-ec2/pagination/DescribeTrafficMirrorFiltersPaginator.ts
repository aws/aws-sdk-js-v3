import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeTrafficMirrorFiltersCommand,
  DescribeTrafficMirrorFiltersCommandInput,
  DescribeTrafficMirrorFiltersCommandOutput,
} from "../commands/DescribeTrafficMirrorFiltersCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTrafficMirrorFiltersCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrafficMirrorFiltersCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeTrafficMirrorFiltersCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorFiltersCommandOutput> => {
  // @ts-ignore
  return await client.describeTrafficMirrorFilters(input, ...args);
};
export async function* describeTrafficMirrorFiltersPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorFiltersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrafficMirrorFiltersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrafficMirrorFiltersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EC2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EC2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EC2 | EC2Client");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
