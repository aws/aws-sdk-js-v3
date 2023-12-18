// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListAccessEntriesCommand,
  ListAccessEntriesCommandInput,
  ListAccessEntriesCommandOutput,
} from "../commands/ListAccessEntriesCommand";
import { EKSClient } from "../EKSClient";
import { EKSPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EKSClient,
  input: ListAccessEntriesCommandInput,
  ...args: any
): Promise<ListAccessEntriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAccessEntriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListAccessEntries(
  config: EKSPaginationConfiguration,
  input: ListAccessEntriesCommandInput,
  ...additionalArguments: any
): Paginator<ListAccessEntriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAccessEntriesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof EKSClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EKS | EKSClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
