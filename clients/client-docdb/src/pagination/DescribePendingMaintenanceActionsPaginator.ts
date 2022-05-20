// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { DocDB } from "../DocDB";
import { DocDBClient } from "../DocDBClient";
import { DocDBPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DocDBClient,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePendingMaintenanceActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DocDB,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.describePendingMaintenanceActions(input, ...args);
};
export async function* paginateDescribePendingMaintenanceActions(
  config: DocDBPaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePendingMaintenanceActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePendingMaintenanceActionsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DocDB) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DocDBClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DocDB | DocDBClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
