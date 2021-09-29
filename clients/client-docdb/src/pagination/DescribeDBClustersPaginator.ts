import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import {
  DescribeDBClustersCommand,
  DescribeDBClustersCommandInput,
  DescribeDBClustersCommandOutput,
} from "../commands/DescribeDBClustersCommand";
import { DocDBPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DocDBClient,
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
  client: DocDB,
  input: DescribeDBClustersCommandInput,
  ...args: any
): Promise<DescribeDBClustersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusters(input, ...args);
};
export async function* paginateDescribeDBClusters(
  config: DocDBPaginationConfiguration,
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
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
