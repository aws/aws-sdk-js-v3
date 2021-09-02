import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeVolumesCommand,
  DescribeVolumesCommandInput,
  DescribeVolumesCommandOutput,
} from "../commands/DescribeVolumesCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FSxClient,
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
  client: FSx,
  input: DescribeVolumesCommandInput,
  ...args: any
): Promise<DescribeVolumesCommandOutput> => {
  // @ts-ignore
  return await client.describeVolumes(input, ...args);
};
export async function* paginateDescribeVolumes(
  config: FSxPaginationConfiguration,
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
    if (config.client instanceof FSx) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
