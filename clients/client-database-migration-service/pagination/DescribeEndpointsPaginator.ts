import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeEndpointsCommand,
  DescribeEndpointsCommandInput,
  DescribeEndpointsCommandOutput,
} from "../commands/DescribeEndpointsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointsCommandInput,
  ...args: any
): Promise<DescribeEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeEndpointsCommandInput,
  ...args: any
): Promise<DescribeEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.describeEndpoints(input, ...args);
};
export async function* paginateDescribeEndpoints(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page.Marker;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
