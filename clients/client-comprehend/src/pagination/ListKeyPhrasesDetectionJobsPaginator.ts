import { Comprehend } from "../Comprehend";
import { ComprehendClient } from "../ComprehendClient";
import {
  ListKeyPhrasesDetectionJobsCommand,
  ListKeyPhrasesDetectionJobsCommandInput,
  ListKeyPhrasesDetectionJobsCommandOutput,
} from "../commands/ListKeyPhrasesDetectionJobsCommand";
import { ComprehendPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: ComprehendClient,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...args: any
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKeyPhrasesDetectionJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Comprehend,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...args: any
): Promise<ListKeyPhrasesDetectionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listKeyPhrasesDetectionJobs(input, ...args);
};
export async function* listKeyPhrasesDetectionJobsPaginate(
  config: ComprehendPaginationConfiguration,
  input: ListKeyPhrasesDetectionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListKeyPhrasesDetectionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKeyPhrasesDetectionJobsCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
