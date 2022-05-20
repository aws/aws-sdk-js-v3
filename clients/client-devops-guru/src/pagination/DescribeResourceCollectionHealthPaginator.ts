// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeResourceCollectionHealthCommand,
  DescribeResourceCollectionHealthCommandInput,
  DescribeResourceCollectionHealthCommandOutput,
} from "../commands/DescribeResourceCollectionHealthCommand";
import { DevOpsGuru } from "../DevOpsGuru";
import { DevOpsGuruClient } from "../DevOpsGuruClient";
import { DevOpsGuruPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DevOpsGuruClient,
  input: DescribeResourceCollectionHealthCommandInput,
  ...args: any
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeResourceCollectionHealthCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DevOpsGuru,
  input: DescribeResourceCollectionHealthCommandInput,
  ...args: any
): Promise<DescribeResourceCollectionHealthCommandOutput> => {
  // @ts-ignore
  return await client.describeResourceCollectionHealth(input, ...args);
};
export async function* paginateDescribeResourceCollectionHealth(
  config: DevOpsGuruPaginationConfiguration,
  input: DescribeResourceCollectionHealthCommandInput,
  ...additionalArguments: any
): Paginator<DescribeResourceCollectionHealthCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeResourceCollectionHealthCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof DevOpsGuru) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DevOpsGuruClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DevOpsGuru | DevOpsGuruClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
