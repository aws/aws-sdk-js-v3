import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationSubnetGroupsCommand,
  DescribeReplicationSubnetGroupsCommandInput,
  DescribeReplicationSubnetGroupsCommandOutput,
} from "../commands/DescribeReplicationSubnetGroupsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationSubnetGroupsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...args: any
): Promise<DescribeReplicationSubnetGroupsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationSubnetGroups(input, ...args);
};
export async function* describeReplicationSubnetGroupsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationSubnetGroupsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationSubnetGroupsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationSubnetGroupsCommandOutput;
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
