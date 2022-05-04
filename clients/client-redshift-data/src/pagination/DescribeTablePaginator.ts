// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeTableCommand,
  DescribeTableCommandInput,
  DescribeTableCommandOutput,
} from "../commands/DescribeTableCommand";
import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: RedshiftData,
  input: DescribeTableCommandInput,
  ...args: any
): Promise<DescribeTableCommandOutput> => {
  // @ts-ignore
  return await client.describeTable(input, ...args);
};
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
    if (config.client instanceof RedshiftData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftDataClient) {
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
