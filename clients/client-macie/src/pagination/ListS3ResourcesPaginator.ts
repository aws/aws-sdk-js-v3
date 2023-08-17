// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListS3ResourcesCommand,
  ListS3ResourcesCommandInput,
  ListS3ResourcesCommandOutput,
} from "../commands/ListS3ResourcesCommand";
import { MacieClient } from "../MacieClient";
import { MaciePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MacieClient,
  input: ListS3ResourcesCommandInput,
  ...args: any
): Promise<ListS3ResourcesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListS3ResourcesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListS3Resources(
  config: MaciePaginationConfiguration,
  input: ListS3ResourcesCommandInput,
  ...additionalArguments: any
): Paginator<ListS3ResourcesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListS3ResourcesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MacieClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Macie | MacieClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
