// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBClusterEndpointsCommand,
  DescribeDBClusterEndpointsCommandInput,
  DescribeDBClusterEndpointsCommandOutput,
} from "../commands/DescribeDBClusterEndpointsCommand";
import { Neptune } from "../Neptune";
import { NeptuneClient } from "../NeptuneClient";
import { NeptunePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NeptuneClient,
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
  client: Neptune,
  input: DescribeDBClusterEndpointsCommandInput,
  ...args: any
): Promise<DescribeDBClusterEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterEndpoints(input, ...args);
};
export async function* paginateDescribeDBClusterEndpoints(
  config: NeptunePaginationConfiguration,
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
