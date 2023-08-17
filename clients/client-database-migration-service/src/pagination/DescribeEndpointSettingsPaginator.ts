// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeEndpointSettingsCommand,
  DescribeEndpointSettingsCommandInput,
  DescribeEndpointSettingsCommandOutput,
} from "../commands/DescribeEndpointSettingsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEndpointSettingsCommandInput,
  ...args: any
): Promise<DescribeEndpointSettingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEndpointSettingsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeEndpointSettings(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEndpointSettingsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEndpointSettingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeEndpointSettingsCommandOutput;
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
