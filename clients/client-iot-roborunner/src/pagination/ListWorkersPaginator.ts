// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IoTRoboRunnerClient,
  input: ListWorkersCommandInput,
  ...args: any
): Promise<ListWorkersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkers(
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListWorkersCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IoTRoboRunnerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IoTRoboRunner | IoTRoboRunnerClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
