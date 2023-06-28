// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCasesForContactCommand,
  ListCasesForContactCommandInput,
  ListCasesForContactCommandOutput,
} from "../commands/ListCasesForContactCommand";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListCasesForContactCommandInput,
  ...args: any
): Promise<ListCasesForContactCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCasesForContactCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCasesForContact(
  config: ConnectCasesPaginationConfiguration,
  input: ListCasesForContactCommandInput,
  ...additionalArguments: any
): Paginator<ListCasesForContactCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCasesForContactCommandOutput;
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
