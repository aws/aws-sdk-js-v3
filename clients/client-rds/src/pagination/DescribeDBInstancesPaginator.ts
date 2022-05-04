// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeDBInstancesCommand,
  DescribeDBInstancesCommandInput,
  DescribeDBInstancesCommandOutput,
} from "../commands/DescribeDBInstancesCommand";
import { RDS } from "../RDS";
import { RDSClient } from "../RDSClient";
import { RDSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RDSClient,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeDBInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RDS,
  input: DescribeDBInstancesCommandInput,
  ...args: any
): Promise<DescribeDBInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeDBInstances(input, ...args);
};
export async function* paginateDescribeDBInstances(
  config: RDSPaginationConfiguration,
  input: DescribeDBInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeDBInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeDBInstancesCommandOutput;
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
