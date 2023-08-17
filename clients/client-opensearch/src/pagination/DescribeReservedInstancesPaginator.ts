// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeReservedInstancesCommand,
  DescribeReservedInstancesCommandInput,
  DescribeReservedInstancesCommandOutput,
} from "../commands/DescribeReservedInstancesCommand";
import { OpenSearchClient } from "../OpenSearchClient";
import { OpenSearchPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: DescribeReservedInstancesCommandInput,
  ...args: any
): Promise<DescribeReservedInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReservedInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeReservedInstances(
  config: OpenSearchPaginationConfiguration,
  input: DescribeReservedInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReservedInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReservedInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
