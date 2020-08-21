import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import {
  ListMedicalTranscriptionJobsCommand,
  ListMedicalTranscriptionJobsCommandInput,
  ListMedicalTranscriptionJobsCommandOutput,
} from "../commands/ListMedicalTranscriptionJobsCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMedicalTranscriptionJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Transcribe,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...args: any
): Promise<ListMedicalTranscriptionJobsCommandOutput> => {
  // @ts-ignore
  return await client.listMedicalTranscriptionJobs(input, ...args);
};
export async function* listMedicalTranscriptionJobsPaginate(
  config: TranscribePaginationConfiguration,
  input: ListMedicalTranscriptionJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListMedicalTranscriptionJobsCommandOutput> {
  let token: string | undefined = config.startingToken || "";
  let hasNext = true;
  let page: ListMedicalTranscriptionJobsCommandOutput;
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
