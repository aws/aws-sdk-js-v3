// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListLanguagesCommand,
  ListLanguagesCommandInput,
  ListLanguagesCommandOutput,
} from "../commands/ListLanguagesCommand";
import { Translate } from "../Translate";
import { TranslateClient } from "../TranslateClient";
import { TranslatePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: TranslateClient,
  input: ListLanguagesCommandInput,
  ...args: any
): Promise<ListLanguagesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLanguagesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Translate,
  input: ListLanguagesCommandInput,
  ...args: any
): Promise<ListLanguagesCommandOutput> => {
  // @ts-ignore
  return await client.listLanguages(input, ...args);
};
export async function* paginateListLanguages(
  config: TranslatePaginationConfiguration,
  input: ListLanguagesCommandInput,
  ...additionalArguments: any
): Paginator<ListLanguagesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLanguagesCommandOutput;
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
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
