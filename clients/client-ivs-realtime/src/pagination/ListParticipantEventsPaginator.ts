// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListParticipantEventsCommand,
  ListParticipantEventsCommandInput,
  ListParticipantEventsCommandOutput,
} from "../commands/ListParticipantEventsCommand";
import { IVSRealTimeClient } from "../IVSRealTimeClient";
import { IVSRealTimePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IVSRealTimeClient,
  input: ListParticipantEventsCommandInput,
  ...args: any
): Promise<ListParticipantEventsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListParticipantEventsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListParticipantEvents(
  config: IVSRealTimePaginationConfiguration,
  input: ListParticipantEventsCommandInput,
  ...additionalArguments: any
): Paginator<ListParticipantEventsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListParticipantEventsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof IVSRealTimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IVSRealTime | IVSRealTimeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
