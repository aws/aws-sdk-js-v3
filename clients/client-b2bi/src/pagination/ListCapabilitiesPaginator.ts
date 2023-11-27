// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListCapabilitiesCommand,
  ListCapabilitiesCommandInput,
  ListCapabilitiesCommandOutput,
} from "../commands/ListCapabilitiesCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: B2biClient,
  input: ListCapabilitiesCommandInput,
  ...args: any
): Promise<ListCapabilitiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCapabilitiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCapabilities(
  config: B2biPaginationConfiguration,
  input: ListCapabilitiesCommandInput,
  ...additionalArguments: any
): Paginator<ListCapabilitiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCapabilitiesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof B2biClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected B2bi | B2biClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
