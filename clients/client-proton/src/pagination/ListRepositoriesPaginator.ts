// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListRepositoriesCommand,
  ListRepositoriesCommandInput,
  ListRepositoriesCommandOutput,
} from "../commands/ListRepositoriesCommand";
import { ProtonClient } from "../ProtonClient";
import { ProtonPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ProtonClient,
  input: ListRepositoriesCommandInput,
  ...args: any
): Promise<ListRepositoriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRepositoriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListRepositories(
  config: ProtonPaginationConfiguration,
  input: ListRepositoriesCommandInput,
  ...additionalArguments: any
): Paginator<ListRepositoriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRepositoriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ProtonClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Proton | ProtonClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
