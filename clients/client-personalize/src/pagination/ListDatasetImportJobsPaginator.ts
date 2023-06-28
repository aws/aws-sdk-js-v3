// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatasetImportJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatasetImportJobs(
  config: PersonalizePaginationConfiguration,
  input: ListDatasetImportJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListDatasetImportJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatasetImportJobsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
