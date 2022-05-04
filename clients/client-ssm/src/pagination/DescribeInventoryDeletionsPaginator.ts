// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeInventoryDeletionsCommand,
  DescribeInventoryDeletionsCommandInput,
  DescribeInventoryDeletionsCommandOutput,
} from "../commands/DescribeInventoryDeletionsCommand";
import { SSM } from "../SSM";
import { SSMClient } from "../SSMClient";
import { SSMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMClient,
  input: DescribeInventoryDeletionsCommandInput,
  ...args: any
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInventoryDeletionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSM,
  input: DescribeInventoryDeletionsCommandInput,
  ...args: any
): Promise<DescribeInventoryDeletionsCommandOutput> => {
  // @ts-ignore
  return await client.describeInventoryDeletions(input, ...args);
};
export async function* paginateDescribeInventoryDeletions(
  config: SSMPaginationConfiguration,
  input: DescribeInventoryDeletionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInventoryDeletionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
