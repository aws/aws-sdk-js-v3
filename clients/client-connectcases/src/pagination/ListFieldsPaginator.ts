// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListFieldsCommand, ListFieldsCommandInput, ListFieldsCommandOutput } from "../commands/ListFieldsCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListFieldsCommandInput,
  ...args: any
): Promise<ListFieldsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFieldsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListFields(
  config: ConnectCasesPaginationConfiguration,
  input: ListFieldsCommandInput,
  ...additionalArguments: any
): Paginator<ListFieldsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFieldsCommandOutput;
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
