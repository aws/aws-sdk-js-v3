import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeOpsItemsCommand,
  DescribeOpsItemsCommandInput,
  DescribeOpsItemsCommandOutput,
} from "../commands/DescribeOpsItemsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeOpsItemsCommandInput,
  ...args: any
): Promise<DescribeOpsItemsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOpsItemsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeOpsItemsCommandInput,
  ...args: any
): Promise<DescribeOpsItemsCommandOutput> => {
  // @ts-ignore
  return await client.describeOpsItems(input, ...args);
};
export async function* paginateDescribeOpsItems(
  config: SSMPaginationConfiguration,
  input: DescribeOpsItemsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOpsItemsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOpsItemsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSM | SSMClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
