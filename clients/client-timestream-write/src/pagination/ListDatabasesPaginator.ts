// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDatabasesCommand,
  ListDatabasesCommandInput,
  ListDatabasesCommandOutput,
} from "../commands/ListDatabasesCommand";
import { TimestreamWriteClient } from "../TimestreamWriteClient";
import { TimestreamWritePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: TimestreamWriteClient,
  input: ListDatabasesCommandInput,
  ...args: any
): Promise<ListDatabasesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDatabasesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDatabases(
  config: TimestreamWritePaginationConfiguration,
  input: ListDatabasesCommandInput,
  ...additionalArguments: any
): Paginator<ListDatabasesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDatabasesCommandOutput;
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
