// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSourceServerActionsCommand,
  ListSourceServerActionsCommandInput,
  ListSourceServerActionsCommandOutput,
} from "../commands/ListSourceServerActionsCommand";
import { Mgn } from "../Mgn";
import { MgnClient } from "../MgnClient";
import { MgnPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MgnClient,
  input: ListSourceServerActionsCommandInput,
  ...args: any
): Promise<ListSourceServerActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSourceServerActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Mgn,
  input: ListSourceServerActionsCommandInput,
  ...args: any
): Promise<ListSourceServerActionsCommandOutput> => {
  // @ts-ignore
  return await client.listSourceServerActions(input, ...args);
};
export async function* paginateListSourceServerActions(
  config: MgnPaginationConfiguration,
  input: ListSourceServerActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListSourceServerActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSourceServerActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Mgn) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MgnClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Mgn | MgnClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
