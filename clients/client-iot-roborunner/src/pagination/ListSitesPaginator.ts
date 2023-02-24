// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListSitesCommand, ListSitesCommandInput, ListSitesCommandOutput } from "../commands/ListSitesCommand";
import { IoTRoboRunner } from "../IoTRoboRunner";
import { IoTRoboRunnerClient } from "../IoTRoboRunnerClient";
import { IoTRoboRunnerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: IoTRoboRunnerClient,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSitesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: IoTRoboRunner,
  input: ListSitesCommandInput,
  ...args: any
): Promise<ListSitesCommandOutput> => {
  // @ts-ignore
  return await client.listSites(input, ...args);
};
export async function* paginateListSites(
  config: IoTRoboRunnerPaginationConfiguration,
  input: ListSitesCommandInput,
  ...additionalArguments: any
): Paginator<ListSitesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSitesCommandOutput;
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
