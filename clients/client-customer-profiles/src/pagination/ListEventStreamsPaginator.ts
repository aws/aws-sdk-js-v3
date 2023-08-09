// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEventStreamsCommand,
  ListEventStreamsCommandInput,
  ListEventStreamsCommandOutput,
} from "../commands/ListEventStreamsCommand";
import { CustomerProfilesClient } from "../CustomerProfilesClient";
import { CustomerProfilesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CustomerProfilesClient,
  input: ListEventStreamsCommandInput,
  ...args: any
): Promise<ListEventStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventStreamsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventStreams(
  config: CustomerProfilesPaginationConfiguration,
  input: ListEventStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventStreamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventStreamsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof CustomerProfilesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CustomerProfiles | CustomerProfilesClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
