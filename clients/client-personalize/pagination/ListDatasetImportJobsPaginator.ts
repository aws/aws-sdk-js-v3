import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import {
  ListDatasetImportJobsCommand,
  ListDatasetImportJobsCommandInput,
  ListDatasetImportJobsCommandOutput,
} from "../commands/ListDatasetImportJobsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Personalize,
  input: ListDatasetImportJobsCommandInput,
  ...args: any
): Promise<ListDatasetImportJobsCommandOutput> => {
  // @ts-ignore
  return await client.listDatasetImportJobs(input, ...args);
};
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
    if (config.client instanceof Personalize) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    token = page.nextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
