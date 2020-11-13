import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SearchCommand, SearchCommandInput, SearchCommandOutput } from "../commands/SearchCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: SearchCommandInput,
  ...args: any
): Promise<SearchCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: SearchCommandInput,
  ...args: any
): Promise<SearchCommandOutput> => {
  // @ts-ignore
  return await client.search(input, ...args);
};
export async function* searchPaginate(
  config: SageMakerPaginationConfiguration,
  input: SearchCommandInput,
  ...additionalArguments: any
): Paginator<SearchCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchCommandOutput;
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
