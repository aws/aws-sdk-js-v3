// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListTaskDefinitionsCommand,
  ListTaskDefinitionsCommandInput,
  ListTaskDefinitionsCommandOutput,
} from "../commands/ListTaskDefinitionsCommand";
import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListTaskDefinitionsCommandInput,
  ...args: any
): Promise<ListTaskDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listTaskDefinitions(input, ...args);
};
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
    if (config.client instanceof ECS) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ECSClient) {
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
