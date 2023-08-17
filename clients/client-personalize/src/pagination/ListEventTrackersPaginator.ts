// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEventTrackersCommand,
  ListEventTrackersCommandInput,
  ListEventTrackersCommandOutput,
} from "../commands/ListEventTrackersCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListEventTrackersCommandInput,
  ...args: any
): Promise<ListEventTrackersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventTrackersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventTrackers(
  config: PersonalizePaginationConfiguration,
  input: ListEventTrackersCommandInput,
  ...additionalArguments: any
): Paginator<ListEventTrackersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventTrackersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
