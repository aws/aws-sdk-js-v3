// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDestinationsCommand,
  ListDestinationsCommandInput,
  ListDestinationsCommandOutput,
} from "../commands/ListDestinationsCommand";
import { IoTRoboRunner } from "../IoTRoboRunner";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTRoboRunnerClient,
  input: ListDestinationsCommandInput,
  ...args: any
): Promise<ListDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDestinationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTRoboRunner,
  input: ListDestinationsCommandInput,
  ...args: any
): Promise<ListDestinationsCommandOutput> => {
  // @ts-ignore
  return await client.listDestinations(input, ...args);
};
export async function* paginateListDestinations(
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListDestinationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDestinationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDestinationsCommandOutput;
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
