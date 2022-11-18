// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkerFleetsCommand,
  ListWorkerFleetsCommandInput,
  ListWorkerFleetsCommandOutput,
} from "../commands/ListWorkerFleetsCommand";
import { IoTRoboRunner } from "../IoTRoboRunner";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTRoboRunnerClient,
  input: ListWorkerFleetsCommandInput,
  ...args: any
): Promise<ListWorkerFleetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkerFleetsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTRoboRunner,
  input: ListWorkerFleetsCommandInput,
  ...args: any
): Promise<ListWorkerFleetsCommandOutput> => {
  // @ts-ignore
  return await client.listWorkerFleets(input, ...args);
};
export async function* paginateListWorkerFleets(
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListWorkerFleetsCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkerFleetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkerFleetsCommandOutput;
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
