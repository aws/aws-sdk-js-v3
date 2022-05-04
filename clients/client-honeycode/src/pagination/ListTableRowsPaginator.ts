// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTableRowsCommand,
  ListTableRowsCommandInput,
  ListTableRowsCommandOutput,
} from "../commands/ListTableRowsCommand";
import { Honeycode } from "../Honeycode";
import { HoneycodeClient } from "../HoneycodeClient";
import { HoneycodePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: HoneycodeClient,
  input: ListTableRowsCommandInput,
  ...args: any
): Promise<ListTableRowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTableRowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Honeycode,
  input: ListTableRowsCommandInput,
  ...args: any
): Promise<ListTableRowsCommandOutput> => {
  // @ts-ignore
  return await client.listTableRows(input, ...args);
};
export async function* paginateListTableRows(
  config: HoneycodePaginationConfiguration,
  input: ListTableRowsCommandInput,
  ...additionalArguments: any
): Paginator<ListTableRowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTableRowsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Honeycode) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof HoneycodeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Honeycode | HoneycodeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
