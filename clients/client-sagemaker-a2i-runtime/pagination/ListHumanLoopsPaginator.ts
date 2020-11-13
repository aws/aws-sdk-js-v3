import { SageMakerA2IRuntime } from "../SageMakerA2IRuntime";
import { SageMakerA2IRuntimeClient } from "../SageMakerA2IRuntimeClient";
import {
  ListHumanLoopsCommand,
  ListHumanLoopsCommandInput,
  ListHumanLoopsCommandOutput,
} from "../commands/ListHumanLoopsCommand";
import { SageMakerA2IRuntimePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerA2IRuntimeClient,
  input: ListHumanLoopsCommandInput,
  ...args: any
): Promise<ListHumanLoopsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHumanLoopsCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMakerA2IRuntime,
  input: ListHumanLoopsCommandInput,
  ...args: any
): Promise<ListHumanLoopsCommandOutput> => {
  // @ts-ignore
  return await client.listHumanLoops(input, ...args);
};
export async function* listHumanLoopsPaginate(
  config: SageMakerA2IRuntimePaginationConfiguration,
  input: ListHumanLoopsCommandInput,
  ...additionalArguments: any
): Paginator<ListHumanLoopsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHumanLoopsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerA2IRuntime) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerA2IRuntimeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMakerA2IRuntime | SageMakerA2IRuntimeClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
