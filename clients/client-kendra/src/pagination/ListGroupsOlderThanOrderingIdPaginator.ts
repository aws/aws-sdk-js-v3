// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListGroupsOlderThanOrderingIdCommand,
  ListGroupsOlderThanOrderingIdCommandInput,
  ListGroupsOlderThanOrderingIdCommandOutput,
} from "../commands/ListGroupsOlderThanOrderingIdCommand";
import { Kendra } from "../Kendra";
import { KendraClient } from "../KendraClient";
import { KendraPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KendraClient,
  input: ListGroupsOlderThanOrderingIdCommandInput,
  ...args: any
): Promise<ListGroupsOlderThanOrderingIdCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListGroupsOlderThanOrderingIdCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Kendra,
  input: ListGroupsOlderThanOrderingIdCommandInput,
  ...args: any
): Promise<ListGroupsOlderThanOrderingIdCommandOutput> => {
  // @ts-ignore
  return await client.listGroupsOlderThanOrderingId(input, ...args);
};
export async function* paginateListGroupsOlderThanOrderingId(
  config: KendraPaginationConfiguration,
  input: ListGroupsOlderThanOrderingIdCommandInput,
  ...additionalArguments: any
): Paginator<ListGroupsOlderThanOrderingIdCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListGroupsOlderThanOrderingIdCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Kendra) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KendraClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Kendra | KendraClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
