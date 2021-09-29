import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import {
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "../commands/DescribeDBProxyEndpointsCommand";
import { RDSPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxyEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxyEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxyEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBProxyEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxyEndpoints(input, ...args);
};
export async function* paginateDescribeDBProxyEndpoints(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxyEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxyEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBProxyEndpointsCommandOutput;
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
