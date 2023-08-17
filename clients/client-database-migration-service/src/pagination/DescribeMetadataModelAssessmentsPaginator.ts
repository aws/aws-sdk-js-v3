// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeMetadataModelAssessmentsCommand,
  DescribeMetadataModelAssessmentsCommandInput,
  DescribeMetadataModelAssessmentsCommandOutput,
} from "../commands/DescribeMetadataModelAssessmentsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeMetadataModelAssessmentsCommandInput,
  ...args: any
): Promise<DescribeMetadataModelAssessmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeMetadataModelAssessmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeMetadataModelAssessments(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeMetadataModelAssessmentsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeMetadataModelAssessmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeMetadataModelAssessmentsCommandOutput;
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
