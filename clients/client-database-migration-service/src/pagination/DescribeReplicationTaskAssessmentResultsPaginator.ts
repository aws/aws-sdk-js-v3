import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTaskAssessmentResultsCommand,
  DescribeReplicationTaskAssessmentResultsCommandInput,
  DescribeReplicationTaskAssessmentResultsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentResultsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTaskAssessmentResultsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentResultsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTaskAssessmentResults(input, ...args);
};
export async function* paginateDescribeReplicationTaskAssessmentResults(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskAssessmentResultsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTaskAssessmentResultsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationTaskAssessmentResultsCommandOutput;
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
