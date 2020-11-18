import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationInstanceTaskLogsCommand,
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
} from "../commands/DescribeReplicationInstanceTaskLogsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  ...args: any
): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationInstanceTaskLogsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  ...args: any
): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationInstanceTaskLogs(input, ...args);
};
export async function* paginateDescribeReplicationInstanceTaskLogs(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationInstanceTaskLogsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationInstanceTaskLogsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationInstanceTaskLogsCommandOutput;
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
