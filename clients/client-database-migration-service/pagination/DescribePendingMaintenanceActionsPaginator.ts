import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribePendingMaintenanceActionsCommand,
  DescribePendingMaintenanceActionsCommandInput,
  DescribePendingMaintenanceActionsCommandOutput,
} from "../commands/DescribePendingMaintenanceActionsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribePendingMaintenanceActionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...args: any
): Promise<DescribePendingMaintenanceActionsCommandOutput> => {
  // @ts-ignore
  return await client.describePendingMaintenanceActions(input, ...args);
};
export async function* describePendingMaintenanceActionsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribePendingMaintenanceActionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribePendingMaintenanceActionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: DescribePendingMaintenanceActionsCommandOutput;
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
