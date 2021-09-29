import { EC2 } from "../EC2";
import { EC2Client } from "../EC2Client";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "../commands/DescribeVolumesCommand";
import { EC2PaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EC2Client,
  input: DescribeVolumesCommandInput,
  ...args: any
): Promise<DescribeVolumesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeVolumesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EC2,
  input: DescribeVolumesCommandInput,
  ...args: any
): Promise<DescribeVolumesCommandOutput> => {
  // @ts-ignore
  return await client.describeVolumes(input, ...args);
};
export async function* paginateDescribeVolumes(
  config: EC2PaginationConfiguration,
  input: DescribeVolumesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeVolumesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeVolumesCommandOutput;
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
