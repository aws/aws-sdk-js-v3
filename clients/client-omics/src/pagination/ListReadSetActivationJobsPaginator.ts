// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListReadSetActivationJobsCommand,
  ListReadSetActivationJobsCommandInput,
  ListReadSetActivationJobsCommandOutput,
} from "../commands/ListReadSetActivationJobsCommand";
import { OmicsClient } from "../OmicsClient";
import { OmicsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: OmicsClient,
  input: ListReadSetActivationJobsCommandInput,
  ...args: any
): Promise<ListReadSetActivationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListReadSetActivationJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListReadSetActivationJobs(
  config: OmicsPaginationConfiguration,
  input: ListReadSetActivationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListReadSetActivationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListReadSetActivationJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof OmicsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Omics | OmicsClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
