// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListModelBiasJobDefinitionsCommand,
  ListModelBiasJobDefinitionsCommandInput,
  ListModelBiasJobDefinitionsCommandOutput,
} from "../commands/ListModelBiasJobDefinitionsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...args: any
): Promise<ListModelBiasJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListModelBiasJobDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListModelBiasJobDefinitions(
  config: SageMakerPaginationConfiguration,
  input: ListModelBiasJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListModelBiasJobDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListModelBiasJobDefinitionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SageMakerClient) {
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
