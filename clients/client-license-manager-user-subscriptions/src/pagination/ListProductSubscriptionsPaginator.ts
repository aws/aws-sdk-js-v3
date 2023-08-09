// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListProductSubscriptionsCommand,
  ListProductSubscriptionsCommandInput,
  ListProductSubscriptionsCommandOutput,
} from "../commands/ListProductSubscriptionsCommand";
import { LicenseManagerUserSubscriptionsClient } from "../LicenseManagerUserSubscriptionsClient";
import { LicenseManagerUserSubscriptionsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: LicenseManagerUserSubscriptionsClient,
  input: ListProductSubscriptionsCommandInput,
  ...args: any
): Promise<ListProductSubscriptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProductSubscriptionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProductSubscriptions(
  config: LicenseManagerUserSubscriptionsPaginationConfiguration,
  input: ListProductSubscriptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListProductSubscriptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProductSubscriptionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof LicenseManagerUserSubscriptionsClient) {
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
