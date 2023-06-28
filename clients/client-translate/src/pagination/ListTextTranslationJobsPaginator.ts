// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTextTranslationJobsCommand,
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "../commands/ListTextTranslationJobsCommand";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TranslateClient,
  input: ListTextTranslationJobsCommandInput,
  ...args: any
): Promise<ListTextTranslationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTextTranslationJobsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTextTranslationJobs(
  config: TranslatePaginationConfiguration,
  input: ListTextTranslationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTextTranslationJobsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTextTranslationJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TranslateClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Translate | TranslateClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
