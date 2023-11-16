// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCompositionsCommand,
  ListCompositionsCommandInput,
  ListCompositionsCommandOutput,
} from "../commands/ListCompositionsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IVSRealTimeClient,
  input: ListCompositionsCommandInput,
  ...args: any
): Promise<ListCompositionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCompositionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCompositions(
  config: IVSRealTimePaginationConfiguration,
  input: ListCompositionsCommandInput,
  ...additionalArguments: any
): Paginator<ListCompositionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCompositionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IVSRealTimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IVSRealTime | IVSRealTimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
