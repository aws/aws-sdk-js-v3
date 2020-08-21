import { KinesisVideo } from "../KinesisVideo";
import { KinesisVideoClient } from "../KinesisVideoClient";
import { ListStreamsCommand, ListStreamsCommandInput, ListStreamsCommandOutput } from "../commands/ListStreamsCommand";
import { KinesisVideoPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: KinesisVideoClient,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStreamsCommand(input, ...args));
};
const makePagedRequest = async (
  client: KinesisVideo,
  input: ListStreamsCommandInput,
  ...args: any
): Promise<ListStreamsCommandOutput> => {
  // @ts-ignore
  return await client.listStreams(input, ...args);
};
export async function* listStreamsPaginate(
  config: KinesisVideoPaginationConfiguration,
  input: ListStreamsCommandInput,
  ...additionalArguments: any
): Paginator<ListStreamsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListStreamsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof KinesisVideo) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof KinesisVideoClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected KinesisVideo | KinesisVideoClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
