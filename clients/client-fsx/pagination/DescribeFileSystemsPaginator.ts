import { FSx } from "../FSx";
import { FSxClient } from "../FSxClient";
import {
  DescribeFileSystemsCommand,
  DescribeFileSystemsCommandInput,
  DescribeFileSystemsCommandOutput,
} from "../commands/DescribeFileSystemsCommand";
import { FSxPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: FSxClient,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFileSystemsCommand(input, ...args));
};
const makePagedRequest = async (
  client: FSx,
  input: DescribeFileSystemsCommandInput,
  ...args: any
): Promise<DescribeFileSystemsCommandOutput> => {
  // @ts-ignore
  return await client.describeFileSystems(input, ...args);
};
export async function* describeFileSystemsPaginate(
  config: FSxPaginationConfiguration,
  input: DescribeFileSystemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFileSystemsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeFileSystemsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof FSx) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FSxClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected FSx | FSxClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
