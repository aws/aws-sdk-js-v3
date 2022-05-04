// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListActivitiesCommand,
  ListActivitiesCommandInput,
  ListActivitiesCommandOutput,
} from "../commands/ListActivitiesCommand";
import { SFN } from "../SFN";
import { SFNClient } from "../SFNClient";
import { SFNPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SFNClient,
  input: ListActivitiesCommandInput,
  ...args: any
): Promise<ListActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActivitiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SFN,
  input: ListActivitiesCommandInput,
  ...args: any
): Promise<ListActivitiesCommandOutput> => {
  // @ts-ignore
  return await client.listActivities(input, ...args);
};
export async function* paginateListActivities(
  config: SFNPaginationConfiguration,
  input: ListActivitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListActivitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActivitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof SFN) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SFNClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SFN | SFNClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
