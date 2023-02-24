// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKVoice } from "../ChimeSDKVoice";
import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListVoiceConnectorsCommand,
  ListVoiceConnectorsCommandInput,
  ListVoiceConnectorsCommandOutput,
} from "../commands/ListVoiceConnectorsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListVoiceConnectorsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVoiceConnectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKVoice,
  input: ListVoiceConnectorsCommandInput,
  ...args: any
): Promise<ListVoiceConnectorsCommandOutput> => {
  // @ts-ignore
  return await client.listVoiceConnectors(input, ...args);
};
export async function* paginateListVoiceConnectors(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListVoiceConnectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListVoiceConnectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVoiceConnectorsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ChimeSDKVoice) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ChimeSDKVoiceClient) {
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
