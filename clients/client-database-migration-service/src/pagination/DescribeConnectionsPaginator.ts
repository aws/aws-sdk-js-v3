// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeConnectionsCommand,
  DescribeConnectionsCommandInput,
  DescribeConnectionsCommandOutput,
} from "../commands/DescribeConnectionsCommand";
import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeConnectionsCommandInput,
  ...args: any
): Promise<DescribeConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeConnectionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeConnectionsCommandInput,
  ...args: any
): Promise<DescribeConnectionsCommandOutput> => {
  // @ts-ignore
  return await client.describeConnections(input, ...args);
};
export async function* paginateDescribeConnections(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeConnectionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeConnectionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeConnectionsCommandOutput;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
