// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKMeetings } from "../ChimeSDKMeetings";
import { ChimeSDKMeetingsClient } from "../ChimeSDKMeetingsClient";
import {
  ListAttendeesCommand,
  ListAttendeesCommandInput,
  ListAttendeesCommandOutput,
} from "../commands/ListAttendeesCommand";
import { ChimeSDKMeetingsPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKMeetingsClient,
  input: ListAttendeesCommandInput,
  ...args: any
): Promise<ListAttendeesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttendeesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKMeetings,
  input: ListAttendeesCommandInput,
  ...args: any
): Promise<ListAttendeesCommandOutput> => {
  // @ts-ignore
  return await client.listAttendees(input, ...args);
};
export async function* paginateListAttendees(
  config: ChimeSDKMeetingsPaginationConfiguration,
  input: ListAttendeesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttendeesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttendeesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKMeetings) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKMeetingsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKMeetings | ChimeSDKMeetingsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
