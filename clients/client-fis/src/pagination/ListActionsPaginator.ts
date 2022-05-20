// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListActionsCommand, ListActionsCommandInput, ListActionsCommandOutput } from "../commands/ListActionsCommand";
import { Fis } from "../Fis";
import { FisClient } from "../FisClient";
import { FisPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: FisClient,
  input: ListActionsCommandInput,
  ...args: any
): Promise<ListActionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Fis,
  input: ListActionsCommandInput,
  ...args: any
): Promise<ListActionsCommandOutput> => {
  // @ts-ignore
  return await client.listActions(input, ...args);
};
export async function* paginateListActions(
  config: FisPaginationConfiguration,
  input: ListActionsCommandInput,
  ...additionalArguments: any
): Paginator<ListActionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Fis) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof FisClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Fis | FisClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
