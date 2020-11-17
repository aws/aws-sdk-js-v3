import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationInstancesCommand,
  DescribeReplicationInstancesCommandInput,
  DescribeReplicationInstancesCommandOutput,
} from "../commands/DescribeReplicationInstancesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationInstancesCommandInput,
  ...args: any
): Promise<DescribeReplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationInstancesCommandInput,
  ...args: any
): Promise<DescribeReplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationInstances(input, ...args);
};
export async function* paginateDescribeReplicationInstances(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationInstancesCommandOutput;
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
