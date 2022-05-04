// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListCandidatesForAutoMLJobCommand,
  ListCandidatesForAutoMLJobCommandInput,
  ListCandidatesForAutoMLJobCommandOutput,
} from "../commands/ListCandidatesForAutoMLJobCommand";
import { SageMaker } from "../SageMaker";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...args: any
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCandidatesForAutoMLJobCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: SageMaker,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...args: any
): Promise<ListCandidatesForAutoMLJobCommandOutput> => {
  // @ts-ignore
  return await client.listCandidatesForAutoMLJob(input, ...args);
};
export async function* paginateListCandidatesForAutoMLJob(
  config: SageMakerPaginationConfiguration,
  input: ListCandidatesForAutoMLJobCommandInput,
  ...additionalArguments: any
): Paginator<ListCandidatesForAutoMLJobCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCandidatesForAutoMLJobCommandOutput;
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
