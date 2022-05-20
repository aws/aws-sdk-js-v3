// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeSourceRegionsCommand,
  DescribeSourceRegionsCommandInput,
  DescribeSourceRegionsCommandOutput,
} from "../commands/DescribeSourceRegionsCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSourceRegionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeSourceRegionsCommandInput,
  ...args: any
): Promise<DescribeSourceRegionsCommandOutput> => {
  // @ts-ignore
  return await client.describeSourceRegions(input, ...args);
};
export async function* paginateDescribeSourceRegions(
  config: RDSPaginationConfiguration,
  input: DescribeSourceRegionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSourceRegionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSourceRegionsCommandOutput;
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
