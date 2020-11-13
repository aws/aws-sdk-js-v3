import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListHumanTaskUisCommand,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
} from "../commands/ListHumanTaskUisCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListHumanTaskUisCommandInput,
  ...args: any
): Promise<ListHumanTaskUisCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHumanTaskUisCommand(input), ...args);
};
const makePagedRequest = async (
  client: SageMaker,
  input: ListHumanTaskUisCommandInput,
  ...args: any
): Promise<ListHumanTaskUisCommandOutput> => {
  // @ts-ignore
  return await client.listHumanTaskUis(input, ...args);
};
export async function* listHumanTaskUisPaginate(
  config: SageMakerPaginationConfiguration,
  input: ListHumanTaskUisCommandInput,
  ...additionalArguments: any
): Paginator<ListHumanTaskUisCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListHumanTaskUisCommandOutput;
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
