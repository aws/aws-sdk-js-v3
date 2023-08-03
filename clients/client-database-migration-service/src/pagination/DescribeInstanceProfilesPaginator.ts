// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeInstanceProfilesCommand,
  DescribeInstanceProfilesCommandInput,
  DescribeInstanceProfilesCommandOutput,
} from "../commands/DescribeInstanceProfilesCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeInstanceProfilesCommandInput,
  ...args: any
): Promise<DescribeInstanceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeInstanceProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeInstanceProfiles(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeInstanceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<DescribeInstanceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeInstanceProfilesCommandOutput;
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
