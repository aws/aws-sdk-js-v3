import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListFlowDefinitionsCommand,
  ListFlowDefinitionsCommandInput,
  ListFlowDefinitionsCommandOutput,
} from "../commands/ListFlowDefinitionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListFlowDefinitionsCommandInput,
  ...args: any
): Promise<ListFlowDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFlowDefinitionsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListFlowDefinitionsCommandInput,
  ...args: any
): Promise<ListFlowDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listFlowDefinitions(input, ...args);
};
export async function* listFlowDefinitionsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListFlowDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListFlowDefinitionsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFlowDefinitionsCommandOutput;
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
