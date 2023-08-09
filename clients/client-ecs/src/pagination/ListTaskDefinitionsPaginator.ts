// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "../commands/ListTaskDefinitionsCommand";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListTaskDefinitionsCommandInput,
  ...args: any
): Promise<ListTaskDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTaskDefinitionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTaskDefinitions(
  config: ECSPaginationConfiguration,
  input: ListTaskDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListTaskDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTaskDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ECSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ECS | ECSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
