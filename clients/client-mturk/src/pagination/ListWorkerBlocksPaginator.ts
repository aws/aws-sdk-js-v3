// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWorkerBlocksCommand,
  ListWorkerBlocksCommandInput,
  ListWorkerBlocksCommandOutput,
} from "../commands/ListWorkerBlocksCommand";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListWorkerBlocksCommandInput,
  ...args: any
): Promise<ListWorkerBlocksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWorkerBlocksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWorkerBlocks(
  config: MTurkPaginationConfiguration,
  input: ListWorkerBlocksCommandInput,
  ...additionalArguments: any
): Paginator<ListWorkerBlocksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWorkerBlocksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
