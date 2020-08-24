import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { ListTrialsCommand, ListTrialsCommandInput, ListTrialsCommandOutput } from "../commands/ListTrialsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListTrialsCommandInput,
  ...args: any
): Promise<ListTrialsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrialsCommand(input, ...args));
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListTrialsCommandInput,
  ...args: any
): Promise<ListTrialsCommandOutput> => {
  // @ts-ignore
  return await client.listTrials(input, ...args);
};
export async function* listTrialsPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListTrialsCommandInput,
  ...additionalArguments: any
): Paginator<ListTrialsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTrialsCommandOutput;
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
