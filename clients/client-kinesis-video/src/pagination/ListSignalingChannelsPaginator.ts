import { KinesisVideo } from "../KinesisVideo";
import { KinesisVideoClient } from "../KinesisVideoClient";
import {
  ListSignalingChannelsCommand,
  ListSignalingChannelsCommandInput,
  ListSignalingChannelsCommandOutput,
} from "../commands/ListSignalingChannelsCommand";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KinesisVideoClient,
  input: ListSignalingChannelsCommandInput,
  ...args: any
): Promise<ListSignalingChannelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSignalingChannelsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KinesisVideo,
  input: ListSignalingChannelsCommandInput,
  ...args: any
): Promise<ListSignalingChannelsCommandOutput> => {
  // @ts-ignore
  return await client.listSignalingChannels(input, ...args);
};
export async function* paginateListSignalingChannels(
  config: KinesisVideoPaginationConfiguration,
  input: ListSignalingChannelsCommandInput,
  ...additionalArguments: any
): Paginator<ListSignalingChannelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSignalingChannelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KinesisVideo) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KinesisVideoClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KinesisVideo | KinesisVideoClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
