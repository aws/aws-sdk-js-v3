// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AthenaClient } from "../AthenaClient";
import {
  ListNamedQueriesCommand,
  ListNamedQueriesCommandInput,
  ListNamedQueriesCommandOutput,
} from "../commands/ListNamedQueriesCommand";
import { AthenaPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AthenaClient,
  input: ListNamedQueriesCommandInput,
  ...args: any
): Promise<ListNamedQueriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListNamedQueriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListNamedQueries(
  config: AthenaPaginationConfiguration,
  input: ListNamedQueriesCommandInput,
  ...additionalArguments: any
): Paginator<ListNamedQueriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListNamedQueriesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AthenaClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Athena | AthenaClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
