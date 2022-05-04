// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBProxiesCommand,
  DescribeDBProxiesCommandInput,
  DescribeDBProxiesCommandOutput,
} from "../commands/DescribeDBProxiesCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBProxiesCommandInput,
  ...args: any
): Promise<DescribeDBProxiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBProxiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBProxiesCommandInput,
  ...args: any
): Promise<DescribeDBProxiesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBProxies(input, ...args);
};
export async function* paginateDescribeDBProxies(
  config: RDSPaginationConfiguration,
  input: DescribeDBProxiesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBProxiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBProxiesCommandOutput;
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
