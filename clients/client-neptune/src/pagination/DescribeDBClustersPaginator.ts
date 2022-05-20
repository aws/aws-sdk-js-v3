// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NeptuneClient,
  input: DescribeDBClustersCommandInput,
  ...args: any
): Promise<DescribeDBClustersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClustersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Neptune,
  input: DescribeDBClustersCommandInput,
  ...args: any
): Promise<DescribeDBClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusters(input, ...args);
};
export async function* paginateDescribeDBClusters(
  config: NeptunePaginationConfiguration,
  input: DescribeDBClustersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClustersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClustersCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof Neptune) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NeptuneClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Neptune | NeptuneClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
