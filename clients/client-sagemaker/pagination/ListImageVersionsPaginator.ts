import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import {
  ListImageVersionsCommand,
  ListImageVersionsCommandInput,
  ListImageVersionsCommandOutput,
} from "../commands/ListImageVersionsCommand";
import { SageMakerPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListImageVersionsCommandInput,
  ...args: any
): Promise<ListImageVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImageVersionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListImageVersionsCommandInput,
  ...args: any
): Promise<ListImageVersionsCommandOutput> => {
  // @ts-ignore
  return await client.listImageVersions(input, ...args);
};
export async function* paginateListImageVersions(
  config: SageMakerPaginationConfiguration,
  input: ListImageVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListImageVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImageVersionsCommandOutput;
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
