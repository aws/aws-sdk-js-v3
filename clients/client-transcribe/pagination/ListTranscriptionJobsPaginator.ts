import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import {
  ListTranscriptionJobsCommand,
  ListTranscriptionJobsCommandInput,
  ListTranscriptionJobsCommandOutput,
} from "../commands/ListTranscriptionJobsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTranscriptionJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Transcribe,
  input: ListTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTranscriptionJobs(input, ...args);
};
export async function* listTranscriptionJobsPaginate(
  config: TranscribePaginationConfiguration,
  input: ListTranscriptionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTranscriptionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListTranscriptionJobsCommandOutput;
  while (hasNext) {
    input["NextToken"] = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Transcribe) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranscribeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Transcribe | TranscribeClient");
    }
    yield page;
    token = page["NextToken"];
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
