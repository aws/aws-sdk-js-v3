import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListCodeRepositoriesCommand,
  ListCodeRepositoriesCommandInput,
  ListCodeRepositoriesCommandOutput,
} from "../commands/ListCodeRepositoriesCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListCodeRepositoriesCommandInput,
  ...args: any
): Promise<ListCodeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCodeRepositoriesCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListCodeRepositoriesCommandInput,
  ...args: any
): Promise<ListCodeRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.listCodeRepositories(input, ...args);
};
export async function* paginateListCodeRepositories(
  config: SageMakerPaginationConfiguration,
  input: ListCodeRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListCodeRepositoriesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCodeRepositoriesCommandOutput;
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
