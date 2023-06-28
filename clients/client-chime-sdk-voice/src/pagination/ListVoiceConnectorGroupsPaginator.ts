// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceConnectorGroupsCommand,
  ListVoiceConnectorGroupsCommandInput,
  ListVoiceConnectorGroupsCommandOutput,
} from "../commands/ListVoiceConnectorGroupsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListVoiceConnectorGroupsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVoiceConnectorGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListVoiceConnectorGroups(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceConnectorGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListVoiceConnectorGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVoiceConnectorGroupsCommandOutput;
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
