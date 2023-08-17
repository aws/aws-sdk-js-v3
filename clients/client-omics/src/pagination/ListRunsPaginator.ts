// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListRunsCommand, ListRunsCommandInput, ListRunsCommandOutput } from "../commands/ListRunsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListRunsCommandInput,
  ...args: any
): Promise<ListRunsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRunsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRuns(
  config: OmicsPaginationConfiguration,
  input: ListRunsCommandInput,
  ...additionalArguments: any
): Paginator<ListRunsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.startingToken
  let token: typeof input.startingToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRunsCommandOutput;
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
