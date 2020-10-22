import { Translate } from "../Translate";
import { TranslateClient } from "../TranslateClient";
import {
  ListTextTranslationJobsCommand,
  ListTextTranslationJobsCommandInput,
  ListTextTranslationJobsCommandOutput,
} from "../commands/ListTextTranslationJobsCommand";
import { TranslatePaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: TranslateClient,
  input: ListTextTranslationJobsCommandInput,
  ...args: any
): Promise<ListTextTranslationJobsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTextTranslationJobsCommand(input, ...args));
};
const makePagedRequest = async (
  client: Translate,
  input: ListTextTranslationJobsCommandInput,
  ...args: any
): Promise<ListTextTranslationJobsCommandOutput> => {
  // @ts-ignore
  return await client.listTextTranslationJobs(input, ...args);
};
export async function* listTextTranslationJobsPaginate(
  config: TranslatePaginationConfiguration,
  input: ListTextTranslationJobsCommandInput,
  ...additionalArguments: any
): Paginator<ListTextTranslationJobsCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTextTranslationJobsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof Translate) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof TranslateClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Translate | TranslateClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
