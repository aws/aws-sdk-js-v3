// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListIngestionsCommand,
  ListIngestionsCommandInput,
  ListIngestionsCommandOutput,
} from "../commands/ListIngestionsCommand";
import { QuickSight } from "../QuickSight";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListIngestionsCommandInput,
  ...args: any
): Promise<ListIngestionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIngestionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: QuickSight,
  input: ListIngestionsCommandInput,
  ...args: any
): Promise<ListIngestionsCommandOutput> => {
  // @ts-ignore
  return await client.listIngestions(input, ...args);
};
export async function* paginateListIngestions(
  config: QuickSightPaginationConfiguration,
  input: ListIngestionsCommandInput,
  ...additionalArguments: any
): Paginator<ListIngestionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIngestionsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSight) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
