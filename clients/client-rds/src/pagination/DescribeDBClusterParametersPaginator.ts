// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBClusterParametersCommand,
  DescribeDBClusterParametersCommandInput,
  DescribeDBClusterParametersCommandOutput,
} from "../commands/DescribeDBClusterParametersCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDBClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBClusterParametersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBClusterParametersCommandInput,
  ...args: any
): Promise<DescribeDBClusterParametersCommandOutput> => {
  // @ts-ignore
  return await client.describeDBClusterParameters(input, ...args);
};
export async function* paginateDescribeDBClusterParameters(
  config: RDSPaginationConfiguration,
  input: DescribeDBClusterParametersCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBClusterParametersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBClusterParametersCommandOutput;
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
