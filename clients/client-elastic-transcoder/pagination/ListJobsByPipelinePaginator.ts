import { ElasticTranscoder } from "../ElasticTranscoder";
import { ElasticTranscoderClient } from "../ElasticTranscoderClient";
import {
  ListJobsByPipelineCommand,
  ListJobsByPipelineCommandInput,
  ListJobsByPipelineCommandOutput,
} from "../commands/ListJobsByPipelineCommand";
import { ElasticTranscoderPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ElasticTranscoderClient,
  input: ListJobsByPipelineCommandInput,
  ...args: any
): Promise<ListJobsByPipelineCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListJobsByPipelineCommand(input, ...args));
};
const makePagedRequest = async (
  client: ElasticTranscoder,
  input: ListJobsByPipelineCommandInput,
  ...args: any
): Promise<ListJobsByPipelineCommandOutput> => {
  // @ts-ignore
  return await client.listJobsByPipeline(input, ...args);
};
export async function* listJobsByPipelinePaginate(
  config: ElasticTranscoderPaginationConfiguration,
  input: ListJobsByPipelineCommandInput,
  ...additionalArguments: any
): Paginator<ListJobsByPipelineCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListJobsByPipelineCommandOutput;
  while (hasNext) {
    input["PageToken"] = token;
    if (config.client instanceof ElasticTranscoder) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ElasticTranscoderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticTranscoder | ElasticTranscoderClient");
    }
    yield page;
    token = page["NextPageToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
