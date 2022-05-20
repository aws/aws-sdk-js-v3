// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAttributesCommand,
  ListAttributesCommandInput,
  ListAttributesCommandOutput,
} from "../commands/ListAttributesCommand";
import { ECS } from "../ECS";
import { ECSClient } from "../ECSClient";
import { ECSPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ECSClient,
  input: ListAttributesCommandInput,
  ...args: any
): Promise<ListAttributesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAttributesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ECS,
  input: ListAttributesCommandInput,
  ...args: any
): Promise<ListAttributesCommandOutput> => {
  // @ts-ignore
  return await client.listAttributes(input, ...args);
};
export async function* paginateListAttributes(
  config: ECSPaginationConfiguration,
  input: ListAttributesCommandInput,
  ...additionalArguments: any
): Paginator<ListAttributesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAttributesCommandOutput;
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
