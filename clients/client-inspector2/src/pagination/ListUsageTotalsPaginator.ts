// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListUsageTotalsCommand,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
} from "../commands/ListUsageTotalsCommand";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: Inspector2Client,
  input: ListUsageTotalsCommandInput,
  ...args: any
): Promise<ListUsageTotalsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListUsageTotalsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListUsageTotals(
  config: Inspector2PaginationConfiguration,
  input: ListUsageTotalsCommandInput,
  ...additionalArguments: any
): Paginator<ListUsageTotalsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListUsageTotalsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof Inspector2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Inspector2 | Inspector2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
