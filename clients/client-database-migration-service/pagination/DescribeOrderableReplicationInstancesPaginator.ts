import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeOrderableReplicationInstancesCommand,
  DescribeOrderableReplicationInstancesCommandInput,
  DescribeOrderableReplicationInstancesCommandOutput,
} from "../commands/DescribeOrderableReplicationInstancesCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeOrderableReplicationInstancesCommandInput,
  ...args: any
): Promise<DescribeOrderableReplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeOrderableReplicationInstancesCommand(input), ...args);
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeOrderableReplicationInstancesCommandInput,
  ...args: any
): Promise<DescribeOrderableReplicationInstancesCommandOutput> => {
  // @ts-ignore
  return await client.describeOrderableReplicationInstances(input, ...args);
};
export async function* paginateDescribeOrderableReplicationInstances(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeOrderableReplicationInstancesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeOrderableReplicationInstancesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeOrderableReplicationInstancesCommandOutput;
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
