import { DataPipeline } from "../DataPipeline";
import { DataPipelineClient } from "../DataPipelineClient";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { DataPipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: DataPipelineClient,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelinesCommand(input, ...args));
};
const makePagedRequest = async (
  client: DataPipeline,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listPipelines(input, ...args);
};
export async function* listPipelinesPaginate(
  config: DataPipelinePaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelinesCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListPipelinesCommandOutput;
  while (hasNext) {
    input["marker"] = token;
    if (config.client instanceof DataPipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof DataPipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected DataPipeline | DataPipelineClient");
    }
    yield page;
    token = page["marker"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
