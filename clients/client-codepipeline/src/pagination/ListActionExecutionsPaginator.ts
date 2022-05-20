// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListActionExecutionsCommand,
  ListActionExecutionsCommandInput,
  ListActionExecutionsCommandOutput,
} from "../commands/ListActionExecutionsCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListActionExecutionsCommandInput,
  ...args: any
): Promise<ListActionExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListActionExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodePipeline,
  input: ListActionExecutionsCommandInput,
  ...args: any
): Promise<ListActionExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listActionExecutions(input, ...args);
};
export async function* paginateListActionExecutions(
  config: CodePipelinePaginationConfiguration,
  input: ListActionExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListActionExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListActionExecutionsCommandOutput;
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
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
