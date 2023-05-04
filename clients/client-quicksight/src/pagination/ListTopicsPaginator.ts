// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListTopicsCommand, ListTopicsCommandInput, ListTopicsCommandOutput } from "../commands/ListTopicsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListTopicsCommandInput,
  ...args: any
): Promise<ListTopicsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTopicsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTopics(
  config: QuickSightPaginationConfiguration,
  input: ListTopicsCommandInput,
  ...additionalArguments: any
): Paginator<ListTopicsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTopicsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
