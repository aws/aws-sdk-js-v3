// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeApplicableIndividualAssessmentsCommand,
  DescribeApplicableIndividualAssessmentsCommandInput,
  DescribeApplicableIndividualAssessmentsCommandOutput,
} from "../commands/DescribeApplicableIndividualAssessmentsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...args: any
): Promise<DescribeApplicableIndividualAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeApplicableIndividualAssessmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeApplicableIndividualAssessments(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeApplicableIndividualAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeApplicableIndividualAssessmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeApplicableIndividualAssessmentsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationServiceClient) {
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
