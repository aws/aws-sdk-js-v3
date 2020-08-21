import { DatabaseMigrationService } from "../DatabaseMigrationService";
import { DatabaseMigrationServiceClient } from "../DatabaseMigrationServiceClient";
import {
  DescribeEventSubscriptionsCommand,
  DescribeEventSubscriptionsCommandInput,
  DescribeEventSubscriptionsCommandOutput,
} from "../commands/DescribeEventSubscriptionsCommand";
import { DatabaseMigrationServicePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DatabaseMigrationServiceClient,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new DescribeEventSubscriptionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: DatabaseMigrationService,
  input: DescribeEventSubscriptionsCommandInput,
  ...args: any
): Promise<DescribeEventSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.describeEventSubscriptions(input, ...args);
};
export async function* describeEventSubscriptionsPaginate(
  config: DatabaseMigrationServicePaginationConfiguration,
  input: DescribeEventSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<DescribeEventSubscriptionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: DescribeEventSubscriptionsCommandOutput;
  while (hasNext) {
    input["Marker"] = token;
    input["MaxRecords"] = config.pageSize;
    if (config.client instanceof DatabaseMigrationService) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DatabaseMigrationServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DatabaseMigrationService | DatabaseMigrationServiceClient");
    }
    yield page;
    token = page["Marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
