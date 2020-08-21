import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionExecutionsCommand,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "../commands/ListActionExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListActionExecutionsCommandInput,
  ...args: any
): Promise<ListActionExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionExecutionsCommand(input, ...args));
};
const makePagedRequest = async (
  client: CodePipeline,
  input: ListActionExecutionsCommandInput,
  ...args: any
): Promise<ListActionExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listActionExecutions(input, ...args);
};
export async function* listActionExecutionsPaginate(
  config: CodePipelinePaginationConfiguration,
  input: ListActionExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListActionExecutionsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListActionExecutionsCommandOutput;
  while (hasNext) {
    input["nextToken"] = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodePipeline) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof CodePipelineClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodePipeline | CodePipelineClient");
    }
    yield page;
    token = page["nextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
