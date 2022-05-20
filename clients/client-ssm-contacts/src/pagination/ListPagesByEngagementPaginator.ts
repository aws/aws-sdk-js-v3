// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPagesByEngagementCommand,
  ListPagesByEngagementCommandInput,
  ListPagesByEngagementCommandOutput,
} from "../commands/ListPagesByEngagementCommand";
import { SSMContacts } from "../SSMContacts";
import { SSMContactsClient } from "../SSMContactsClient";
import { SSMContactsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SSMContactsClient,
  input: ListPagesByEngagementCommandInput,
  ...args: any
): Promise<ListPagesByEngagementCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPagesByEngagementCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SSMContacts,
  input: ListPagesByEngagementCommandInput,
  ...args: any
): Promise<ListPagesByEngagementCommandOutput> => {
  // @ts-ignore
  return await client.listPagesByEngagement(input, ...args);
};
export async function* paginateListPagesByEngagement(
  config: SSMContactsPaginationConfiguration,
  input: ListPagesByEngagementCommandInput,
  ...additionalArguments: any
): Paginator<ListPagesByEngagementCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPagesByEngagementCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SSMContacts) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SSMContactsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SSMContacts | SSMContactsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
