// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRunGroupsCommand,
  ListRunGroupsCommandInput,
  ListRunGroupsCommandOutput,
} from "../commands/ListRunGroupsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListRunGroupsCommandInput,
  ...args: any
): Promise<ListRunGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRunGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRunGroups(
  config: OmicsPaginationConfiguration,
  input: ListRunGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListRunGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startingToken
  let token: typeof input.startingToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRunGroupsCommandOutput;
  while (hasNext) {
    input.startingToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
