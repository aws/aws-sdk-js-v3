import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTaskAssessmentRunsCommand,
  DescribeReplicationTaskAssessmentRunsCommandInput,
  DescribeReplicationTaskAssessmentRunsCommandOutput,
} from "../commands/DescribeReplicationTaskAssessmentRunsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTaskAssessmentRunsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskAssessmentRunsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTaskAssessmentRuns(input, ...args);
};
export async function* describeReplicationTaskAssessmentRunsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskAssessmentRunsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTaskAssessmentRunsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeReplicationTaskAssessmentRunsCommandOutput;
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
