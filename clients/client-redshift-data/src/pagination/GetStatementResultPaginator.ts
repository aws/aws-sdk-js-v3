// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetStatementResultCommand,
  GetStatementResultCommandInput,
  GetStatementResultCommandOutput,
} from "../commands/GetStatementResultCommand";
import { RedshiftDataClient } from "../RedshiftDataClient";
import { RedshiftDataPaginationConfiguration } from "./Interfaces";

/**
 * @internal
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
 * @public
 */
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
    if (config.client instanceof RedshiftDataClient) {
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
