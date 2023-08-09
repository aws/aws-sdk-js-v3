// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAssociatedGroupsCommand,
  ListAssociatedGroupsCommandInput,
  ListAssociatedGroupsCommandOutput,
} from "../commands/ListAssociatedGroupsCommand";
import { SyntheticsClient } from "../SyntheticsClient";
import { SyntheticsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SyntheticsClient,
  input: ListAssociatedGroupsCommandInput,
  ...args: any
): Promise<ListAssociatedGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssociatedGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAssociatedGroups(
  config: SyntheticsPaginationConfiguration,
  input: ListAssociatedGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListAssociatedGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssociatedGroupsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SyntheticsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Synthetics | SyntheticsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
