// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeFleetAdvisorLsaAnalysisCommand,
  DescribeFleetAdvisorLsaAnalysisCommandInput,
  DescribeFleetAdvisorLsaAnalysisCommandOutput,
} from "../commands/DescribeFleetAdvisorLsaAnalysisCommand";
import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeFleetAdvisorLsaAnalysisCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  ...args: any
): Promise<DescribeFleetAdvisorLsaAnalysisCommandOutput> => {
  // @ts-ignore
  return await client.describeFleetAdvisorLsaAnalysis(input, ...args);
};
export async function* paginateDescribeFleetAdvisorLsaAnalysis(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeFleetAdvisorLsaAnalysisCommandInput,
  ...additionalArguments: any
): Paginator<DescribeFleetAdvisorLsaAnalysisCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeFleetAdvisorLsaAnalysisCommandOutput;
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
