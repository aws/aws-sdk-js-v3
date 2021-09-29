import { EFS } from "../EFS";
import { EFSClient } from "../EFSClient";
import {
  DescribeAccessPointsCommand,
  DescribeAccessPointsCommandInput,
  DescribeAccessPointsCommandOutput,
} from "../commands/DescribeAccessPointsCommand";
import { EFSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EFSClient,
  input: DescribeAccessPointsCommandInput,
  ...args: any
): Promise<DescribeAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeAccessPointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: EFS,
  input: DescribeAccessPointsCommandInput,
  ...args: any
): Promise<DescribeAccessPointsCommandOutput> => {
  // @ts-ignore
  return await client.describeAccessPoints(input, ...args);
};
export async function* paginateDescribeAccessPoints(
  config: EFSPaginationConfiguration,
  input: DescribeAccessPointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeAccessPointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeAccessPointsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof EFS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EFSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EFS | EFSClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
