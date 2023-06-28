// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStageSessionsCommand,
  ListStageSessionsCommandInput,
  ListStageSessionsCommandOutput,
} from "../commands/ListStageSessionsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IVSRealTimeClient,
  input: ListStageSessionsCommandInput,
  ...args: any
): Promise<ListStageSessionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStageSessionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStageSessions(
  config: IVSRealTimePaginationConfiguration,
  input: ListStageSessionsCommandInput,
  ...additionalArguments: any
): Paginator<ListStageSessionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStageSessionsCommandOutput;
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
