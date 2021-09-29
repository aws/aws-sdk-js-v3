import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeSchemasCommand,
  DescribeSchemasCommandInput,
  DescribeSchemasCommandOutput,
} from "../commands/DescribeSchemasCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeSchemasCommandInput,
  ...args: any
): Promise<DescribeSchemasCommandOutput> => {
  // @ts-ignore
  return await client.describeSchemas(input, ...args);
};
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
