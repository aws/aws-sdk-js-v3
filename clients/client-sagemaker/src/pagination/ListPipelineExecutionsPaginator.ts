// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListPipelineExecutionsCommand,
  ListPipelineExecutionsCommandInput,
  ListPipelineExecutionsCommandOutput,
} from "../commands/ListPipelineExecutionsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListPipelineExecutionsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelineExecutionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListPipelineExecutionsCommandInput,
  ...args: any
): Promise<ListPipelineExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.listPipelineExecutions(input, ...args);
};
export async function* paginateListPipelineExecutions(
  config: SageMakerPaginationConfiguration,
  input: ListPipelineExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelineExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelineExecutionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
