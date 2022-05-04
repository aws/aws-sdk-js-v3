// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListExclusionsCommand,
  ListExclusionsCommandInput,
  ListExclusionsCommandOutput,
} from "../commands/ListExclusionsCommand";
import { Inspector } from "../Inspector";
import { InspectorClient } from "../InspectorClient";
import { InspectorPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: InspectorClient,
  input: ListExclusionsCommandInput,
  ...args: any
): Promise<ListExclusionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListExclusionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Inspector,
  input: ListExclusionsCommandInput,
  ...args: any
): Promise<ListExclusionsCommandOutput> => {
  // @ts-ignore
  return await client.listExclusions(input, ...args);
};
export async function* paginateListExclusions(
  config: InspectorPaginationConfiguration,
  input: ListExclusionsCommandInput,
  ...additionalArguments: any
): Paginator<ListExclusionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListExclusionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof InspectorClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector | InspectorClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
