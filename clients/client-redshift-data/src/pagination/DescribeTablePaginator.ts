// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "../commands/DescribeTableCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: DescribeTableCommandInput,
  ...args: any
): Promise<DescribeTableCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeTableCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeTable(
  config: RedshiftDataPaginationConfiguration,
  input: DescribeTableCommandInput,
  ...additionalArguments: any
): Paginator<DescribeTableCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeTableCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RedshiftDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftData | RedshiftDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
