import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeTrafficMirrorSessionsCommand,
  DescribeTrafficMirrorSessionsCommandInput,
  DescribeTrafficMirrorSessionsCommandOutput,
} from "../commands/DescribeTrafficMirrorSessionsCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeTrafficMirrorSessionsCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTrafficMirrorSessionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeTrafficMirrorSessionsCommandInput,
  ...args: any
): Promise<DescribeTrafficMirrorSessionsCommandOutput> => {
  // @ts-ignore
  return await client.describeTrafficMirrorSessions(input, ...args);
};
export async function* paginateDescribeTrafficMirrorSessions(
  config: EC2PaginationConfiguration,
  input: DescribeTrafficMirrorSessionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTrafficMirrorSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTrafficMirrorSessionsCommandOutput;
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
