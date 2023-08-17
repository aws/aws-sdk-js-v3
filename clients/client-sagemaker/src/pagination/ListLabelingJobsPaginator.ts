// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLabelingJobsCommand,
  ListLabelingJobsCommandInput,
  ListLabelingJobsCommandOutput,
} from "../commands/ListLabelingJobsCommand";
import { SageMakerClient } from "../SageMakerClient";
import { SageMakerPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SageMakerClient,
  input: ListLabelingJobsCommandInput,
  ...args: any
): Promise<ListLabelingJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLabelingJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLabelingJobs(
  config: SageMakerPaginationConfiguration,
  input: ListLabelingJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListLabelingJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLabelingJobsCommandOutput;
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
