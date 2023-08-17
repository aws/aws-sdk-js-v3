// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRecommendersCommand,
  ListRecommendersCommandInput,
  ListRecommendersCommandOutput,
} from "../commands/ListRecommendersCommand";
import { PersonalizeClient } from "../PersonalizeClient";
import { PersonalizePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PersonalizeClient,
  input: ListRecommendersCommandInput,
  ...args: any
): Promise<ListRecommendersCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRecommendersCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRecommenders(
  config: PersonalizePaginationConfiguration,
  input: ListRecommendersCommandInput,
  ...additionalArguments: any
): Paginator<ListRecommendersCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRecommendersCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof PersonalizeClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Personalize | PersonalizeClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
