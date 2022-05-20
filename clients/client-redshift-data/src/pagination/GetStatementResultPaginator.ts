// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "../commands/GetStatementResultCommand";
import { RedshiftData } from "../RedshiftData";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: RedshiftDataClient,
  input: GetStatementResultCommandInput,
  ...args: any
): Promise<GetStatementResultCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetStatementResultCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: RedshiftData,
  input: GetStatementResultCommandInput,
  ...args: any
): Promise<GetStatementResultCommandOutput> => {
  // @ts-ignore
  return await client.getStatementResult(input, ...args);
};
export async function* paginateGetStatementResult(
  config: RedshiftDataPaginationConfiguration,
  input: GetStatementResultCommandInput,
  ...additionalArguments: any
): Paginator<GetStatementResultCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetStatementResultCommandOutput;
  while (hasNext) {
    input.NextToken = token;
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
