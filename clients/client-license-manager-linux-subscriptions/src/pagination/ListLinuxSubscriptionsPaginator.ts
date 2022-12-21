// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLinuxSubscriptionsCommand,
  ListLinuxSubscriptionsCommandInput,
  ListLinuxSubscriptionsCommandOutput,
} from "../commands/ListLinuxSubscriptionsCommand";
import { LicenseManagerLinuxSubscriptions } from "../LicenseManagerLinuxSubscriptions";
import { LicenseManagerLinuxSubscriptionsClient } from "../LicenseManagerLinuxSubscriptionsClient";
import { LicenseManagerLinuxSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LicenseManagerLinuxSubscriptionsClient,
  input: ListLinuxSubscriptionsCommandInput,
  ...args: any
): Promise<ListLinuxSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLinuxSubscriptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LicenseManagerLinuxSubscriptions,
  input: ListLinuxSubscriptionsCommandInput,
  ...args: any
): Promise<ListLinuxSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.listLinuxSubscriptions(input, ...args);
};
export async function* paginateListLinuxSubscriptions(
  config: LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  input: ListLinuxSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLinuxSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLinuxSubscriptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LicenseManagerLinuxSubscriptions) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LicenseManagerLinuxSubscriptionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error(
        "Invalid client, expected LicenseManagerLinuxSubscriptions | LicenseManagerLinuxSubscriptionsClient"
      );
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
