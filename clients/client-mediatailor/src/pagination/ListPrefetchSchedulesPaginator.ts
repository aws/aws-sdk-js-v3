// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPrefetchSchedulesCommand,
  ListPrefetchSchedulesCommandInput,
  ListPrefetchSchedulesCommandOutput,
} from "../commands/ListPrefetchSchedulesCommand";
import { MediaTailor } from "../MediaTailor";
import { MediaTailorClient } from "../MediaTailorClient";
import { MediaTailorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MediaTailorClient,
  input: ListPrefetchSchedulesCommandInput,
  ...args: any
): Promise<ListPrefetchSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPrefetchSchedulesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MediaTailor,
  input: ListPrefetchSchedulesCommandInput,
  ...args: any
): Promise<ListPrefetchSchedulesCommandOutput> => {
  // @ts-ignore
  return await client.listPrefetchSchedules(input, ...args);
};
export async function* paginateListPrefetchSchedules(
  config: MediaTailorPaginationConfiguration,
  input: ListPrefetchSchedulesCommandInput,
  ...additionalArguments: any
): Paginator<ListPrefetchSchedulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPrefetchSchedulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MediaTailor) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MediaTailorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MediaTailor | MediaTailorClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
