// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListWorkersCommand, ListWorkersCommandInput, ListWorkersCommandOutput } from "../commands/ListWorkersCommand";
import { IoTRoboRunner } from "../IoTRoboRunner";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: IoTRoboRunner,
  input: ListWorkersCommandInput,
  ...args: any
): Promise<ListWorkersCommandOutput> => {
  // @ts-ignore
  return await client.listWorkers(input, ...args);
};
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
    if (config.client instanceof IoTRoboRunner) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof IoTRoboRunnerClient) {
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
