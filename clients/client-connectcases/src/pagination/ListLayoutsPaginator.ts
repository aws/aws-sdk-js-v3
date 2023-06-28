// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListLayoutsCommand, ListLayoutsCommandInput, ListLayoutsCommandOutput } from "../commands/ListLayoutsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListLayoutsCommandInput,
  ...args: any
): Promise<ListLayoutsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLayoutsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLayouts(
  config: ConnectCasesPaginationConfiguration,
  input: ListLayoutsCommandInput,
  ...additionalArguments: any
): Paginator<ListLayoutsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLayoutsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ConnectCasesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConnectCases | ConnectCasesClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
