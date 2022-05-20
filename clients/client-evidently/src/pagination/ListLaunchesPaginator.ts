// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLaunchesCommand,
  ListLaunchesCommandInput,
  ListLaunchesCommandOutput,
} from "../commands/ListLaunchesCommand";
import { Evidently } from "../Evidently";
import { EvidentlyClient } from "../EvidentlyClient";
import { EvidentlyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: EvidentlyClient,
  input: ListLaunchesCommandInput,
  ...args: any
): Promise<ListLaunchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLaunchesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Evidently,
  input: ListLaunchesCommandInput,
  ...args: any
): Promise<ListLaunchesCommandOutput> => {
  // @ts-ignore
  return await client.listLaunches(input, ...args);
};
export async function* paginateListLaunches(
  config: EvidentlyPaginationConfiguration,
  input: ListLaunchesCommandInput,
  ...additionalArguments: any
): Paginator<ListLaunchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLaunchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Evidently) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof EvidentlyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Evidently | EvidentlyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
