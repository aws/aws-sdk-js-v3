// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListVocabularyFiltersCommand,
  ListVocabularyFiltersCommandInput,
  ListVocabularyFiltersCommandOutput,
} from "../commands/ListVocabularyFiltersCommand";
import { Transcribe } from "../Transcribe";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListVocabularyFiltersCommandInput,
  ...args: any
): Promise<ListVocabularyFiltersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListVocabularyFiltersCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Transcribe,
  input: ListVocabularyFiltersCommandInput,
  ...args: any
): Promise<ListVocabularyFiltersCommandOutput> => {
  // @ts-ignore
  return await client.listVocabularyFilters(input, ...args);
};
export async function* paginateListVocabularyFilters(
  config: TranscribePaginationConfiguration,
  input: ListVocabularyFiltersCommandInput,
  ...additionalArguments: any
): Paginator<ListVocabularyFiltersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
