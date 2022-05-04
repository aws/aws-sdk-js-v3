// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListTablesCommand, ListTablesCommandInput, ListTablesCommandOutput } from "../commands/ListTablesCommand";
import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTablesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftData,
  input: ListTablesCommandInput,
  ...args: any
): Promise<ListTablesCommandOutput> => {
  // @ts-ignore
  return await client.listTables(input, ...args);
};
export async function* paginateListTables(
  config: RedshiftDataPaginationConfiguration,
  input: ListTablesCommandInput,
  ...additionalArguments: any
): Paginator<ListTablesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTablesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof RedshiftData) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof RedshiftDataClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftData | RedshiftDataClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
