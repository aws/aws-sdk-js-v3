import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: FSx,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.describeFileSystems(input, ...args);
};
export async function* paginateDescribeFileSystems(
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFileSystemsCommandOutput;
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
