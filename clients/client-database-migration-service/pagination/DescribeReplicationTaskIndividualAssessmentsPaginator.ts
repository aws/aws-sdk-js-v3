import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationTaskIndividualAssessmentsCommand,
  DescribeReplicationTaskIndividualAssessmentsCommandInput,
  DescribeReplicationTaskIndividualAssessmentsCommandOutput,
} from "../commands/DescribeReplicationTaskIndividualAssessmentsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeReplicationTaskIndividualAssessmentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  ...args: any
): Promise<DescribeReplicationTaskIndividualAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.describeReplicationTaskIndividualAssessments(input, ...args);
};
export async function* paginateDescribeReplicationTaskIndividualAssessments(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeReplicationTaskIndividualAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeReplicationTaskIndividualAssessmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeReplicationTaskIndividualAssessmentsCommandOutput;
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
