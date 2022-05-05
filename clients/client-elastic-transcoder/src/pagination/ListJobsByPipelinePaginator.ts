// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListJobsByPipelineCommand,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
} from "../commands/ListJobsByPipelineCommand";
import { ElasticTranscoder } from "../ElasticTranscoder";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListJobsByPipelineCommandInput,
  ...args: any
): Promise<ListJobsByPipelineCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsByPipelineCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ElasticTranscoder,
  input: ListJobsByPipelineCommandInput,
  ...args: any
): Promise<ListJobsByPipelineCommandOutput> => {
  // @ts-ignore
  return await client.listJobsByPipeline(input, ...args);
};
export async function* paginateListJobsByPipeline(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByPipelineCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsByPipelineCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.PageToken
  let token: typeof input.PageToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListJobsByPipelineCommandOutput;
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
    const prevToken = token;
    token = page.NextPageToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
