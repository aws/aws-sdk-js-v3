// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeDBProxyEndpointsCommand,
  DescribeDBProxyEndpointsCommandInput,
  DescribeDBProxyEndpointsCommandOutput,
} from "../commands/DescribeDBProxyEndpointsCommand";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof RDSClient) {
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
