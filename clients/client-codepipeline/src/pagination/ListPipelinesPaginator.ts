// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { CodePipeline } from "../CodePipeline";
import { CodePipelineClient } from "../CodePipelineClient";
import {
  ListPipelinesCommand,
  ListPipelinesCommandInput,
  ListPipelinesCommandOutput,
} from "../commands/ListPipelinesCommand";
import { CodePipelinePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: CodePipelineClient,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelinesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: CodePipeline,
  input: ListPipelinesCommandInput,
  ...args: any
): Promise<ListPipelinesCommandOutput> => {
  // @ts-ignore
  return await client.listPipelines(input, ...args);
};
export async function* paginateListPipelines(
  config: CodePipelinePaginationConfiguration,
  input: ListPipelinesCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelinesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelinesCommandOutput;
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
