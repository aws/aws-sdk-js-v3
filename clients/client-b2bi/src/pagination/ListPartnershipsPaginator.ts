// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { B2biClient } from "../B2biClient";
import {
  ListPartnershipsCommand,
  ListPartnershipsCommandInput,
  ListPartnershipsCommandOutput,
} from "../commands/ListPartnershipsCommand";
import { B2biPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: B2biClient,
  input: ListPartnershipsCommandInput,
  ...args: any
): Promise<ListPartnershipsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPartnershipsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPartnerships(
  config: B2biPaginationConfiguration,
  input: ListPartnershipsCommandInput,
  ...additionalArguments: any
): Paginator<ListPartnershipsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPartnershipsCommandOutput;
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
