import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeTrafficMirrorTargetsCommand,
  DescribeTrafficMirrorTargetsCommandInput,
  DescribeTrafficMirrorTargetsCommandOutput,
} from "../commands/DescribeTrafficMirrorTargetsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTrafficMirrorTargetsCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorTargetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrafficMirrorTargetsCommand(input), ...args);
};
const makePagedRequest = async (
  client: EC2,
  input: DescribeTrafficMirrorTargetsCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorTargetsCommandOutput> => {
  // @ts-ignore
  return await client.describeTrafficMirrorTargets(input, ...args);
};
export async function* describeTrafficMirrorTargetsPaginate(
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorTargetsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrafficMirrorTargetsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrafficMirrorTargetsCommandOutput;
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
