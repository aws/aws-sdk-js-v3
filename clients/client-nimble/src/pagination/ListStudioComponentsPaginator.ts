// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStudioComponentsCommand,
  ListStudioComponentsCommandInput,
  ListStudioComponentsCommandOutput,
} from "../commands/ListStudioComponentsCommand";
import { Nimble } from "../Nimble";
import { NimbleClient } from "../NimbleClient";
import { NimblePaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: NimbleClient,
  input: ListStudioComponentsCommandInput,
  ...args: any
): Promise<ListStudioComponentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStudioComponentsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Nimble,
  input: ListStudioComponentsCommandInput,
  ...args: any
): Promise<ListStudioComponentsCommandOutput> => {
  // @ts-ignore
  return await client.listStudioComponents(input, ...args);
};
export async function* paginateListStudioComponents(
  config: NimblePaginationConfiguration,
  input: ListStudioComponentsCommandInput,
  ...additionalArguments: any
): Paginator<ListStudioComponentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStudioComponentsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Nimble) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof NimbleClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Nimble | NimbleClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
