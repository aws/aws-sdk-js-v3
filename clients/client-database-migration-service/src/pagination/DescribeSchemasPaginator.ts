// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput,
} from "../commands/DescribeSchemasCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeSchemasCommandInput,
  ...args: any
): Promise<DescribeSchemasCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeSchemasCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeSchemas(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeSchemasCommandInput,
  ...additionalArguments: any
): Paginator<DescribeSchemasCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeSchemasCommandOutput;
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
