// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPublishingDestinationsCommand,
  ListPublishingDestinationsCommandInput,
  ListPublishingDestinationsCommandOutput,
} from "../commands/ListPublishingDestinationsCommand";
import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: GuardDuty,
  input: ListPublishingDestinationsCommandInput,
  ...args: any
): Promise<ListPublishingDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listPublishingDestinations(input, ...args);
};
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
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
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
