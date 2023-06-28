// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListPublishingDestinationsCommandInput,
  ...args: any
): Promise<ListPublishingDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPublishingDestinationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPublishingDestinations(
  config: GuardDutyPaginationConfiguration,
  input: ListPublishingDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListPublishingDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPublishingDestinationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
