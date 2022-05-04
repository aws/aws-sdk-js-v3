// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListStatementsCommand,
  ListStatementsCommandInput,
  ListStatementsCommandOutput,
} from "../commands/ListStatementsCommand";
import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: ListStatementsCommandInput,
  ...args: any
): Promise<ListStatementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStatementsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftData,
  input: ListStatementsCommandInput,
  ...args: any
): Promise<ListStatementsCommandOutput> => {
  // @ts-ignore
  return await client.listStatements(input, ...args);
};
export async function* paginateListStatements(
  config: RedshiftDataPaginationConfiguration,
  input: ListStatementsCommandInput,
  ...additionalArguments: any
): Paginator<ListStatementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStatementsCommandOutput;
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
