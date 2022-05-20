// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTestGridProjectsCommand,
  ListTestGridProjectsCommandInput,
  ListTestGridProjectsCommandOutput,
} from "../commands/ListTestGridProjectsCommand";
import { DeviceFarm } from "../DeviceFarm";
import { DeviceFarmClient } from "../DeviceFarmClient";
import { DeviceFarmPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: DeviceFarmClient,
  input: ListTestGridProjectsCommandInput,
  ...args: any
): Promise<ListTestGridProjectsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTestGridProjectsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: DeviceFarm,
  input: ListTestGridProjectsCommandInput,
  ...args: any
): Promise<ListTestGridProjectsCommandOutput> => {
  // @ts-ignore
  return await client.listTestGridProjects(input, ...args);
};
export async function* paginateListTestGridProjects(
  config: DeviceFarmPaginationConfiguration,
  input: ListTestGridProjectsCommandInput,
  ...additionalArguments: any
): Paginator<ListTestGridProjectsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTestGridProjectsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResult"] = config.pageSize;
    if (config.client instanceof DeviceFarm) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DeviceFarmClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DeviceFarm | DeviceFarmClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
