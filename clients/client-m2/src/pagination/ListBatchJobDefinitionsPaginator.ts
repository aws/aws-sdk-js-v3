// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListBatchJobDefinitionsCommand,
  ListBatchJobDefinitionsCommandInput,
  ListBatchJobDefinitionsCommandOutput,
} from "../commands/ListBatchJobDefinitionsCommand";
import { M2 } from "../M2";
import { M2Client } from "../M2Client";
import { M2PaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: M2Client,
  input: ListBatchJobDefinitionsCommandInput,
  ...args: any
): Promise<ListBatchJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchJobDefinitionsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: M2,
  input: ListBatchJobDefinitionsCommandInput,
  ...args: any
): Promise<ListBatchJobDefinitionsCommandOutput> => {
  // @ts-ignore
  return await client.listBatchJobDefinitions(input, ...args);
};
export async function* paginateListBatchJobDefinitions(
  config: M2PaginationConfiguration,
  input: ListBatchJobDefinitionsCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchJobDefinitionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchJobDefinitionsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof M2) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof M2Client) {
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
