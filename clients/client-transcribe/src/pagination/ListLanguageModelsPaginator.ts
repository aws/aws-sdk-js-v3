// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLanguageModelsCommand,
  ListLanguageModelsCommandInput,
  ListLanguageModelsCommandOutput,
} from "../commands/ListLanguageModelsCommand";
import { TranscribeClient } from "../TranscribeClient";
import { TranscribePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TranscribeClient,
  input: ListLanguageModelsCommandInput,
  ...args: any
): Promise<ListLanguageModelsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLanguageModelsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLanguageModels(
  config: TranscribePaginationConfiguration,
  input: ListLanguageModelsCommandInput,
  ...additionalArguments: any
): Paginator<ListLanguageModelsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLanguageModelsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranscribeClient) {
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
