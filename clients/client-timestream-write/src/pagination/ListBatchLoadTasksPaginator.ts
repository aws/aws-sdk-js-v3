// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListBatchLoadTasksCommand,
  ListBatchLoadTasksCommandInput,
  ListBatchLoadTasksCommandOutput,
} from "../commands/ListBatchLoadTasksCommand";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TimestreamWriteClient,
  input: ListBatchLoadTasksCommandInput,
  ...args: any
): Promise<ListBatchLoadTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBatchLoadTasksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBatchLoadTasks(
  config: TimestreamWritePaginationConfiguration,
  input: ListBatchLoadTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListBatchLoadTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBatchLoadTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof TimestreamWriteClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected TimestreamWrite | TimestreamWriteClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
