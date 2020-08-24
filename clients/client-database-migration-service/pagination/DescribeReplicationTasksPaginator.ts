import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTasksCommand,
  DescribeReplicationTasksCommandInput,
  DescribeReplicationTasksCommandOutput,
} from "../commands/DescribeReplicationTasksCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTasksCommandInput,
  ...args: any
): Promise<DescribeReplicationTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTasksCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTasksCommandInput,
  ...args: any
): Promise<DescribeReplicationTasksCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTasks(input, ...args);
};
export async function* describeReplicationTasksPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTasksCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTasksCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReplicationTasksCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
