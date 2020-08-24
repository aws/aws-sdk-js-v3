import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListExperimentsCommand,
  ListExperimentsCommandInput,
  ListExperimentsCommandOutput,
} from "../commands/ListExperimentsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListExperimentsCommandInput,
  ...args: any
): Promise<ListExperimentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExperimentsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListExperimentsCommandInput,
  ...args: any
): Promise<ListExperimentsCommandOutput> => {
  // @ts-ignore
  return await client.listExperiments(input, ...args);
};
export async function* listExperimentsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListExperimentsCommandInput,
  ...additionalArguments: any
): Paginator<ListExperimentsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListExperimentsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMaker) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SageMakerClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SageMaker | SageMakerClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
