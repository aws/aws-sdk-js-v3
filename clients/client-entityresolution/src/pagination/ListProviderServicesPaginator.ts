// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListProviderServicesCommand,
  ListProviderServicesCommandInput,
  ListProviderServicesCommandOutput,
} from "../commands/ListProviderServicesCommand";
import { EntityResolutionClient } from "../EntityResolutionClient";
import { EntityResolutionPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EntityResolutionClient,
  input: ListProviderServicesCommandInput,
  ...args: any
): Promise<ListProviderServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListProviderServicesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListProviderServices(
  config: EntityResolutionPaginationConfiguration,
  input: ListProviderServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListProviderServicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListProviderServicesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EntityResolutionClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EntityResolution | EntityResolutionClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
