// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTranscriptionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transcribe,
  input: ListTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTranscriptionJobs(input, ...args);
};
export async function* paginateListTranscriptionJobs(
  config: TranscribePaginationConfiguration,
  input: ListTranscriptionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTranscriptionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTranscriptionJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transcribe) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
