import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListAlgorithmsCommand,
  ListAlgorithmsCommandInput,
  ListAlgorithmsCommandOutput,
} from "../commands/ListAlgorithmsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListAlgorithmsCommandInput,
  ...args: any
): Promise<ListAlgorithmsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAlgorithmsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListAlgorithmsCommandInput,
  ...args: any
): Promise<ListAlgorithmsCommandOutput> => {
  // @ts-ignore
  return await client.listAlgorithms(input, ...args);
};
export async function* listAlgorithmsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListAlgorithmsCommandInput,
  ...additionalArguments: any
): Paginator<ListAlgorithmsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAlgorithmsCommandOutput;
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
