// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListUserAssociationsCommand,
  ListUserAssociationsCommandInput,
  ListUserAssociationsCommandOutput,
} from "../commands/ListUserAssociationsCommand";
import { LicenseManagerUserSubscriptions } from "../LicenseManagerUserSubscriptions";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: LicenseManagerUserSubscriptionsClient,
  input: ListUserAssociationsCommandInput,
  ...args: any
): Promise<ListUserAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUserAssociationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: LicenseManagerUserSubscriptions,
  input: ListUserAssociationsCommandInput,
  ...args: any
): Promise<ListUserAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.listUserAssociations(input, ...args);
};
export async function* paginateListUserAssociations(
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListUserAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListUserAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUserAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LicenseManagerUserSubscriptions) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof LicenseManagerUserSubscriptionsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error(
        "Invalid client, expected LicenseManagerUserSubscriptions | LicenseManagerUserSubscriptionsClient"
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
