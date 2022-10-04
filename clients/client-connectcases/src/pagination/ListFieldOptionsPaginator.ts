// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFieldOptionsCommand,
  ListFieldOptionsCommandInput,
  ListFieldOptionsCommandOutput,
} from "../commands/ListFieldOptionsCommand";
import { ConnectCases } from "../ConnectCases";
import { ConnectCasesClient } from "../ConnectCasesClient";
import { ConnectCasesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectCasesClient,
  input: ListFieldOptionsCommandInput,
  ...args: any
): Promise<ListFieldOptionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFieldOptionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ConnectCases,
  input: ListFieldOptionsCommandInput,
  ...args: any
): Promise<ListFieldOptionsCommandOutput> => {
  // @ts-ignore
  return await client.listFieldOptions(input, ...args);
};
export async function* paginateListFieldOptions(
  config: ConnectCasesPaginationConfiguration,
  input: ListFieldOptionsCommandInput,
  ...additionalArguments: any
): Paginator<ListFieldOptionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFieldOptionsCommandOutput;
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
