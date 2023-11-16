// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListLifecycleExecutionsCommand,
  ListLifecycleExecutionsCommandInput,
  ListLifecycleExecutionsCommandOutput,
} from "../commands/ListLifecycleExecutionsCommand";
import { ImagebuilderClient } from "../ImagebuilderClient";
import { ImagebuilderPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ImagebuilderClient,
  input: ListLifecycleExecutionsCommandInput,
  ...args: any
): Promise<ListLifecycleExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListLifecycleExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListLifecycleExecutions(
  config: ImagebuilderPaginationConfiguration,
  input: ListLifecycleExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListLifecycleExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListLifecycleExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof ImagebuilderClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Imagebuilder | ImagebuilderClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
