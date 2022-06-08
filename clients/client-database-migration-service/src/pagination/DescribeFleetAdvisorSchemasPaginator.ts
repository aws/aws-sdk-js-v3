// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFleetAdvisorSchemasCommand,
  DescribeFleetAdvisorSchemasCommandInput,
  DescribeFleetAdvisorSchemasCommandOutput,
} from "../commands/DescribeFleetAdvisorSchemasCommand";
import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeFleetAdvisorSchemasCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetAdvisorSchemasCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeFleetAdvisorSchemasCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorSchemasCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetAdvisorSchemas(input, ...args);
};
export async function* paginateDescribeFleetAdvisorSchemas(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorSchemasCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetAdvisorSchemasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetAdvisorSchemasCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
