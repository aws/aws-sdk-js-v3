import { Personalize } from "../Personalize";
import { PersonalizeClient } from "../PersonalizeClient";
import {
  ListBatchInferenceJobsCommand,
  ListBatchInferenceJobsCommandInput,
  ListBatchInferenceJobsCommandOutput,
} from "../commands/ListBatchInferenceJobsCommand";
import { PersonalizePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListBatchInferenceJobsCommandInput,
  ...args: any
): Promise<ListBatchInferenceJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchInferenceJobsCommand(input), ...args);
};
const makePagedRequest = async (
  client: Personalize,
  input: ListBatchInferenceJobsCommandInput,
  ...args: any
): Promise<ListBatchInferenceJobsCommandOutput> => {
  // @ts-ignore
  return await client.listBatchInferenceJobs(input, ...args);
};
export async function* listBatchInferenceJobsPaginate(
  config: PersonalizePaginationConfiguration,
  input: ListBatchInferenceJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchInferenceJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchInferenceJobsCommandOutput;
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
