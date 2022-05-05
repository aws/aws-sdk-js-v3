// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListSpeakersCommand,
  ListSpeakersCommandInput,
  ListSpeakersCommandOutput,
} from "../commands/ListSpeakersCommand";
import { VoiceID } from "../VoiceID";
import { VoiceIDClient } from "../VoiceIDClient";
import { VoiceIDPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: VoiceIDClient,
  input: ListSpeakersCommandInput,
  ...args: any
): Promise<ListSpeakersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSpeakersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: VoiceID,
  input: ListSpeakersCommandInput,
  ...args: any
): Promise<ListSpeakersCommandOutput> => {
  // @ts-ignore
  return await client.listSpeakers(input, ...args);
};
export async function* paginateListSpeakers(
  config: VoiceIDPaginationConfiguration,
  input: ListSpeakersCommandInput,
  ...additionalArguments: any
): Paginator<ListSpeakersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSpeakersCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof VoiceID) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof VoiceIDClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected VoiceID | VoiceIDClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
