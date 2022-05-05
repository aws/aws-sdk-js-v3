// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListWorkforcesCommand,
  ListWorkforcesCommandInput,
  ListWorkforcesCommandOutput,
} from "../commands/ListWorkforcesCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListWorkforcesCommandInput,
  ...args: any
): Promise<ListWorkforcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkforcesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListWorkforcesCommandInput,
  ...args: any
): Promise<ListWorkforcesCommandOutput> => {
  // @ts-ignore
  return await client.listWorkforces(input, ...args);
};
export async function* paginateListWorkforces(
  config: SageMakerPaginationConfiguration,
  input: ListWorkforcesCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkforcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkforcesCommandOutput;
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
