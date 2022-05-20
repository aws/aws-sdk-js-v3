// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTaskAssessmentRunsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTaskAssessmentRuns(input, ...args);
};
export async function* paginateDescribeReplicationTaskAssessmentRuns(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTaskAssessmentRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationTaskAssessmentRunsCommandOutput;
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
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
