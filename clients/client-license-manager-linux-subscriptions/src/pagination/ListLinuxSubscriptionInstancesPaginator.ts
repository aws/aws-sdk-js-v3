// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLinuxSubscriptionInstancesCommand,
  ListLinuxSubscriptionInstancesCommandInput,
  ListLinuxSubscriptionInstancesCommandOutput,
} from "../commands/ListLinuxSubscriptionInstancesCommand";
import { LicenseManagerLinuxSubscriptionsClient } from "../LicenseManagerLinuxSubscriptionsClient";
import { LicenseManagerLinuxSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LicenseManagerLinuxSubscriptionsClient,
  input: ListLinuxSubscriptionInstancesCommandInput,
  ...args: any
): Promise<ListLinuxSubscriptionInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLinuxSubscriptionInstancesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLinuxSubscriptionInstances(
  config: LicenseManagerLinuxSubscriptionsPaginationConfiguration,
  input: ListLinuxSubscriptionInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListLinuxSubscriptionInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLinuxSubscriptionInstancesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LicenseManagerLinuxSubscriptionsClient) {
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
