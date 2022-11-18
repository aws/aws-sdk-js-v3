// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ChimeSDKVoice } from "../ChimeSDKVoice";
import { ChimeSDKVoiceClient } from "../ChimeSDKVoiceClient";
import {
  ListSipMediaApplicationsCommand,
  ListSipMediaApplicationsCommandInput,
  ListSipMediaApplicationsCommandOutput,
} from "../commands/ListSipMediaApplicationsCommand";
import { ChimeSDKVoicePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ChimeSDKVoiceClient,
  input: ListSipMediaApplicationsCommandInput,
  ...args: any
): Promise<ListSipMediaApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSipMediaApplicationsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ChimeSDKVoice,
  input: ListSipMediaApplicationsCommandInput,
  ...args: any
): Promise<ListSipMediaApplicationsCommandOutput> => {
  // @ts-ignore
  return await client.listSipMediaApplications(input, ...args);
};
export async function* paginateListSipMediaApplications(
  config: ChimeSDKVoicePaginationConfiguration,
  input: ListSipMediaApplicationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSipMediaApplicationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSipMediaApplicationsCommandOutput;
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
