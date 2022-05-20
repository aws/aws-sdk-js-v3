// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "../commands/ListMigrationTasksCommand";
import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import { MigrationHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMigrationTasksCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHub,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.listMigrationTasks(input, ...args);
};
export async function* paginateListMigrationTasks(
  config: MigrationHubPaginationConfiguration,
  input: ListMigrationTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListMigrationTasksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListMigrationTasksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubClient) {
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
