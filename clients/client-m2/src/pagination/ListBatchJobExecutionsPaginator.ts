// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListBatchJobExecutionsCommand,
  ListBatchJobExecutionsCommandInput,
  ListBatchJobExecutionsCommandOutput,
} from "../commands/ListBatchJobExecutionsCommand";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: M2Client,
  input: ListBatchJobExecutionsCommandInput,
  ...args: any
): Promise<ListBatchJobExecutionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchJobExecutionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBatchJobExecutions(
  config: M2PaginationConfiguration,
  input: ListBatchJobExecutionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchJobExecutionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchJobExecutionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof M2Client) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected M2 | M2Client");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
