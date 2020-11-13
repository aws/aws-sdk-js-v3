import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListPipelineExecutionsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelineExecutionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: CodePipeline,
  input: ListPipelineExecutionsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listPipelineExecutions(input, ...args);
};
export async function* listPipelineExecutionsPaginate(
  config: CodePipelinePaginationConfiguration,
  input: ListPipelineExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelineExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelineExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodePipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
