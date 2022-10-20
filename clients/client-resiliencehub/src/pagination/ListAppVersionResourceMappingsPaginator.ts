// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAppVersionResourceMappingsCommand,
  ListAppVersionResourceMappingsCommandInput,
  ListAppVersionResourceMappingsCommandOutput,
} from "../commands/ListAppVersionResourceMappingsCommand";
import { Resiliencehub } from "../Resiliencehub";
import { ResiliencehubClient } from "../ResiliencehubClient";
import { ResiliencehubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ResiliencehubClient,
  input: ListAppVersionResourceMappingsCommandInput,
  ...args: any
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAppVersionResourceMappingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Resiliencehub,
  input: ListAppVersionResourceMappingsCommandInput,
  ...args: any
): Promise<ListAppVersionResourceMappingsCommandOutput> => {
  // @ts-ignore
  return await client.listAppVersionResourceMappings(input, ...args);
};
export async function* paginateListAppVersionResourceMappings(
  config: ResiliencehubPaginationConfiguration,
  input: ListAppVersionResourceMappingsCommandInput,
  ...additionalArguments: any
): Paginator<ListAppVersionResourceMappingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAppVersionResourceMappingsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Resiliencehub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ResiliencehubClient) {
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
