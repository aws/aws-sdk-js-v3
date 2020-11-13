import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import {
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "../commands/DescribeInventoryDeletionsCommand";
import { SSMPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInventoryDeletionsCommandInput,
  ...args: any
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInventoryDeletionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SSM,
  input: DescribeInventoryDeletionsCommandInput,
  ...args: any
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  // @ts-ignore
  return await client.describeInventoryDeletions(input, ...args);
};
export async function* describeInventoryDeletionsPaginate(
  config: SSMPaginationConfiguration,
  input: DescribeInventoryDeletionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInventoryDeletionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInventoryDeletionsCommandOutput;
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
