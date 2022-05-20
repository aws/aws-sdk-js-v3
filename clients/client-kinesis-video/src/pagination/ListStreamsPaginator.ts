// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisVideo } from "../KinesisVideo";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: KinesisVideoClient,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: KinesisVideo,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listStreams(input, ...args);
};
export async function* paginateListStreams(
  config: KinesisVideoPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStreamsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
