// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  DescribeExtensionPackAssociationsCommand,
  DescribeExtensionPackAssociationsCommandInput,
  DescribeExtensionPackAssociationsCommandOutput,
} from "../commands/DescribeExtensionPackAssociationsCommand";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeExtensionPackAssociationsCommandInput,
  ...args: any
): Promise<DescribeExtensionPackAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeExtensionPackAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateDescribeExtensionPackAssociations(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeExtensionPackAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeExtensionPackAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribeExtensionPackAssociationsCommandOutput;
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
