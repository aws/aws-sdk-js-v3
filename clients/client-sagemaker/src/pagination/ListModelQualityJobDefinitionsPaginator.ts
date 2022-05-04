// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListModelQualityJobDefinitionsCommand,
  ListModelQualityJobDefinitionsCommandInput,
  ListModelQualityJobDefinitionsCommandOutput,
} from "../commands/ListModelQualityJobDefinitionsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelQualityJobDefinitionsCommandInput,
  ...args: any
): Promise<ListModelQualityJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelQualityJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListModelQualityJobDefinitionsCommandInput,
  ...args: any
): Promise<ListModelQualityJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listModelQualityJobDefinitions(input, ...args);
};
export async function* paginateListModelQualityJobDefinitions(
  config: SageMakerPaginationConfiguration,
  input: ListModelQualityJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelQualityJobDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelQualityJobDefinitionsCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
