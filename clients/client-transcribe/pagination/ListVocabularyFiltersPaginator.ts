import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "../commands/ListVocabularyFiltersCommand";
import { TranscribePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListVocabularyFiltersCommandInput,
  ...args: any
): Promise<ListVocabularyFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVocabularyFiltersCommand(input), ...args);
};
const makePagedRequest = async (
  client: Transcribe,
  input: ListVocabularyFiltersCommandInput,
  ...args: any
): Promise<ListVocabularyFiltersCommandOutput> => {
  // @ts-ignore
  return await client.listVocabularyFilters(input, ...args);
};
export async function* listVocabularyFiltersPaginate(
  config: TranscribePaginationConfiguration,
  input: ListVocabularyFiltersCommandInput,
  ...additionalArguments: any
): Paginator<ListVocabularyFiltersCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListVocabularyFiltersCommandOutput;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
