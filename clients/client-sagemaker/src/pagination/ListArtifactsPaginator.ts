// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListArtifactsCommand,
  ListArtifactsCommandInput,
  ListArtifactsCommandOutput,
} from "../commands/ListArtifactsCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListArtifactsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListArtifactsCommandInput,
  ...args: any
): Promise<ListArtifactsCommandOutput> => {
  // @ts-ignore
  return await client.listArtifacts(input, ...args);
};
export async function* paginateListArtifacts(
  config: SageMakerPaginationConfiguration,
  input: ListArtifactsCommandInput,
  ...additionalArguments: any
): Paginator<ListArtifactsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListArtifactsCommandOutput;
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
