// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListHumanTaskUisCommand,
  ListHumanTaskUisCommandInput,
  ListHumanTaskUisCommandOutput,
} from "../commands/ListHumanTaskUisCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListHumanTaskUisCommandInput,
  ...args: any
): Promise<ListHumanTaskUisCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListHumanTaskUisCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListHumanTaskUisCommandInput,
  ...args: any
): Promise<ListHumanTaskUisCommandOutput> => {
  // @ts-ignore
  return await client.listHumanTaskUis(input, ...args);
};
export async function* paginateListHumanTaskUis(
  config: SageMakerPaginationConfiguration,
  input: ListHumanTaskUisCommandInput,
  ...additionalArguments: any
): Paginator<ListHumanTaskUisCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
