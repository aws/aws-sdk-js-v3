// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStoredQueriesCommand,
  ListStoredQueriesCommandInput,
  ListStoredQueriesCommandOutput,
} from "../commands/ListStoredQueriesCommand";
import { ConfigServiceClient } from "../ConfigServiceClient";
import { ConfigServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConfigServiceClient,
  input: ListStoredQueriesCommandInput,
  ...args: any
): Promise<ListStoredQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStoredQueriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStoredQueries(
  config: ConfigServicePaginationConfiguration,
  input: ListStoredQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListStoredQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStoredQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConfigServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ConfigService | ConfigServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
