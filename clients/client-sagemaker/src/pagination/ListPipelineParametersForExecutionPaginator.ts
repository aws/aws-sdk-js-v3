import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListPipelineParametersForExecutionCommand,
  ListPipelineParametersForExecutionCommandInput,
  ListPipelineParametersForExecutionCommandOutput,
} from "../commands/ListPipelineParametersForExecutionCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListPipelineParametersForExecutionCommandInput,
  ...args: any
): Promise<ListPipelineParametersForExecutionCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPipelineParametersForExecutionCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListPipelineParametersForExecutionCommandInput,
  ...args: any
): Promise<ListPipelineParametersForExecutionCommandOutput> => {
  // @ts-ignore
  return await client.listPipelineParametersForExecution(input, ...args);
};
export async function* paginateListPipelineParametersForExecution(
  config: SageMakerPaginationConfiguration,
  input: ListPipelineParametersForExecutionCommandInput,
  ...additionalArguments: any
): Paginator<ListPipelineParametersForExecutionCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPipelineParametersForExecutionCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
