import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeBackupsCommand,
  DescribeBackupsCommandInput,
  DescribeBackupsCommandOutput,
} from "../commands/DescribeBackupsCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeBackupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: FSx,
  input: DescribeBackupsCommandInput,
  ...args: any
): Promise<DescribeBackupsCommandOutput> => {
  // @ts-ignore
  return await client.describeBackups(input, ...args);
};
export async function* paginateDescribeBackups(
  config: FSxPaginationConfiguration,
  input: DescribeBackupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeBackupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeBackupsCommandOutput;
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
