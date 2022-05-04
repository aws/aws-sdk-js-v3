// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListUsageTotalsCommand,
  ListUsageTotalsCommandInput,
  ListUsageTotalsCommandOutput,
} from "../commands/ListUsageTotalsCommand";
import { Inspector2 } from "../Inspector2";
import { Inspector2Client } from "../Inspector2Client";
import { Inspector2PaginationConfiguration } from "./Interfaces";

/**
 * @private
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
 * @private
 */
const makePagedRequest = async (
  client: Inspector2,
  input: ListUsageTotalsCommandInput,
  ...args: any
): Promise<ListUsageTotalsCommandOutput> => {
  // @ts-ignore
  return await client.listUsageTotals(input, ...args);
};
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
    if (config.client instanceof Inspector2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof Inspector2Client) {
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
