// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListSipRulesCommand,
  ListSipRulesCommandInput,
  ListSipRulesCommandOutput,
} from "../commands/ListSipRulesCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListSipRulesCommandInput,
  ...args: any
): Promise<ListSipRulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSipRulesCommand(input), ...args);
};
export async function* paginateListSipRules(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListSipRulesCommandInput,
  ...additionalArguments: any
): Paginator<ListSipRulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSipRulesCommandOutput;
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
