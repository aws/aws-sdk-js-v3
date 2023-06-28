// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAppVersionsCommand,
  ListAppVersionsCommandInput,
  ListAppVersionsCommandOutput,
} from "../commands/ListAppVersionsCommand";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListAppVersionsCommandInput,
  ...args: any
): Promise<ListAppVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAppVersions(
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppVersionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ResiliencehubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Resiliencehub | ResiliencehubClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
