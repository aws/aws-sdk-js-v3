// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTemplatesCommand,
  ListTemplatesCommandInput,
  ListTemplatesCommandOutput,
} from "../commands/ListTemplatesCommand";
import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListTemplatesCommandInput,
  ...args: any
): Promise<ListTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCases,
  input: ListTemplatesCommandInput,
  ...args: any
): Promise<ListTemplatesCommandOutput> => {
  // @ts-ignore
  return await client.listTemplates(input, ...args);
};
export async function* paginateListTemplates(
  config: ConnectCasesPaginationConfiguration,
  input: ListTemplatesCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplatesCommandOutput;
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
