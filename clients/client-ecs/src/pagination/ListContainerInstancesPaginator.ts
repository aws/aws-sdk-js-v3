// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListContainerInstancesCommand,
  ListContainerInstancesCommandInput,
  ListContainerInstancesCommandOutput,
} from "../commands/ListContainerInstancesCommand";
import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListContainerInstancesCommandInput,
  ...args: any
): Promise<ListContainerInstancesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContainerInstancesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListContainerInstancesCommandInput,
  ...args: any
): Promise<ListContainerInstancesCommandOutput> => {
  // @ts-ignore
  return await client.listContainerInstances(input, ...args);
};
export async function* paginateListContainerInstances(
  config: ECSPaginationConfiguration,
  input: ListContainerInstancesCommandInput,
  ...additionalArguments: any
): Paginator<ListContainerInstancesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContainerInstancesCommandOutput;
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
