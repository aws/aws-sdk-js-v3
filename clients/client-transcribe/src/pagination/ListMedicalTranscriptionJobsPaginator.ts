// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "../commands/ListMedicalTranscriptionJobsCommand";
import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMedicalTranscriptionJobsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transcribe,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listMedicalTranscriptionJobs(input, ...args);
};
export async function* paginateListMedicalTranscriptionJobs(
  config: TranscribePaginationConfiguration,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListMedicalTranscriptionJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMedicalTranscriptionJobsCommandOutput;
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
