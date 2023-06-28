// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListApplicationStatesCommand,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "../commands/ListApplicationStatesCommand";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListApplicationStatesCommandInput,
  ...args: any
): Promise<ListApplicationStatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationStatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListApplicationStates(
  config: MigrationHubPaginationConfiguration,
  input: ListApplicationStatesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationStatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationStatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHub | MigrationHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
