import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListContextsCommand,
  ListContextsCommandInput,
  ListContextsCommandOutput,
} from "../commands/ListContextsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListContextsCommandInput,
  ...args: any
): Promise<ListContextsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContextsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListContextsCommandInput,
  ...args: any
): Promise<ListContextsCommandOutput> => {
  // @ts-ignore
  return await client.listContexts(input, ...args);
};
export async function* paginateListContexts(
  config: SageMakerPaginationConfiguration,
  input: ListContextsCommandInput,
  ...additionalArguments: any
): Paginator<ListContextsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContextsCommandOutput;
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
