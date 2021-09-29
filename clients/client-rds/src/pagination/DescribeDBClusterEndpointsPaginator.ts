import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterEndpoints(input, ...args);
};
export async function* paginateDescribeDBClusterEndpoints(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterEndpointsCommandOutput;
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
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
