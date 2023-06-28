// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeRecommendationsCommand,
  DescribeRecommendationsCommandInput,
  DescribeRecommendationsCommandOutput,
} from "../commands/DescribeRecommendationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeRecommendationsCommandInput,
  ...args: any
): Promise<DescribeRecommendationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeRecommendationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeRecommendations(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeRecommendationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeRecommendationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeRecommendationsCommandOutput;
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
