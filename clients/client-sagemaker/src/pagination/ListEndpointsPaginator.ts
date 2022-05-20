// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEndpointsCommand,
  ListEndpointsCommandInput,
  ListEndpointsCommandOutput,
} from "../commands/ListEndpointsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListEndpointsCommandInput,
  ...args: any
): Promise<ListEndpointsCommandOutput> => {
  // @ts-ignore
  return await client.listEndpoints(input, ...args);
};
export async function* paginateListEndpoints(
  config: SageMakerPaginationConfiguration,
  input: ListEndpointsCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointsCommandOutput;
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
