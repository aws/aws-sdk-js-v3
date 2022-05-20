// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
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
  client: RDS,
  input: DescribeDBClustersCommandInput,
  ...args: any
): Promise<DescribeDBClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusters(input, ...args);
};
export async function* paginateDescribeDBClusters(
  config: RDSPaginationConfiguration,
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
    if (config.client instanceof RDS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RDSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RDS | RDSClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
