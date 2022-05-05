// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEntitiesDetectionJobsCommand,
  ListEntitiesDetectionJobsCommandInput,
  ListEntitiesDetectionJobsCommandOutput,
} from "../commands/ListEntitiesDetectionJobsCommand";
import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import { ComprehendPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListEntitiesDetectionJobsCommandInput,
  ...args: any
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEntitiesDetectionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Comprehend,
  input: ListEntitiesDetectionJobsCommandInput,
  ...args: any
): Promise<ListEntitiesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listEntitiesDetectionJobs(input, ...args);
};
export async function* paginateListEntitiesDetectionJobs(
  config: ComprehendPaginationConfiguration,
  input: ListEntitiesDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListEntitiesDetectionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEntitiesDetectionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Comprehend) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ComprehendClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Comprehend | ComprehendClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
