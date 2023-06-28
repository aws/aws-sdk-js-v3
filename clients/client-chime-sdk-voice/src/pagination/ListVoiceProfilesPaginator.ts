// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceProfilesCommand,
  ListVoiceProfilesCommandInput,
  ListVoiceProfilesCommandOutput,
} from "../commands/ListVoiceProfilesCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListVoiceProfilesCommandInput,
  ...args: any
): Promise<ListVoiceProfilesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVoiceProfilesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVoiceProfiles(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceProfilesCommandInput,
  ...additionalArguments: any
): Paginator<ListVoiceProfilesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVoiceProfilesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKVoiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ChimeSDKVoice | ChimeSDKVoiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
