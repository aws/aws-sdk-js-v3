// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListDomainsCommand, ListDomainsCommandInput, ListDomainsCommandOutput } from "../commands/ListDomainsCommand";
import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDomainsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCases,
  input: ListDomainsCommandInput,
  ...args: any
): Promise<ListDomainsCommandOutput> => {
  // @ts-ignore
  return await client.listDomains(input, ...args);
};
export async function* paginateListDomains(
  config: ConnectCasesPaginationConfiguration,
  input: ListDomainsCommandInput,
  ...additionalArguments: any
): Paginator<ListDomainsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDomainsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ConnectCases) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectCasesClient) {
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
