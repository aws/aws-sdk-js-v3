import { ElasticTranscoder } from "../ElasticTranscoder";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import {
  ListJobsByStatusCommand,
  ListJobsByStatusCommandInput,
  ListJobsByStatusCommandOutput,
} from "../commands/ListJobsByStatusCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListJobsByStatusCommandInput,
  ...args: any
): Promise<ListJobsByStatusCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsByStatusCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticTranscoder,
  input: ListJobsByStatusCommandInput,
  ...args: any
): Promise<ListJobsByStatusCommandOutput> => {
  // @ts-ignore
  return await client.listJobsByStatus(input, ...args);
};
export async function* paginateListJobsByStatus(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByStatusCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsByStatusCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobsByStatusCommandOutput;
  while (hasNext) {
    input.PageToken = token;
    if (config.client instanceof ElasticTranscoder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticTranscoderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
    }
    yield page;
    token = page.NextPageToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
