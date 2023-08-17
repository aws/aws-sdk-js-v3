// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetServerDetailsCommand,
  GetServerDetailsCommandInput,
  GetServerDetailsCommandOutput,
} from "../commands/GetServerDetailsCommand";
import { MigrationHubStrategyClient } from "../MigrationHubStrategyClient";
import { MigrationHubStrategyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MigrationHubStrategyClient,
  input: GetServerDetailsCommandInput,
  ...args: any
): Promise<GetServerDetailsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetServerDetailsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetServerDetails(
  config: MigrationHubStrategyPaginationConfiguration,
  input: GetServerDetailsCommandInput,
  ...additionalArguments: any
): Paginator<GetServerDetailsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetServerDetailsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubStrategyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubStrategy | MigrationHubStrategyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
