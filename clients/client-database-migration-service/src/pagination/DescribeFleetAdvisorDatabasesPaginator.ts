// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeFleetAdvisorDatabasesCommand,
  DescribeFleetAdvisorDatabasesCommandInput,
  DescribeFleetAdvisorDatabasesCommandOutput,
} from "../commands/DescribeFleetAdvisorDatabasesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeFleetAdvisorDatabasesCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetAdvisorDatabasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeFleetAdvisorDatabases(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorDatabasesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetAdvisorDatabasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetAdvisorDatabasesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
