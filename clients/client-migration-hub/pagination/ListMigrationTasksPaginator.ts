import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import {
  ListMigrationTasksCommand,
  ListMigrationTasksCommandInput,
  ListMigrationTasksCommandOutput,
} from "../commands/ListMigrationTasksCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListMigrationTasksCommand(input), ...args);
};
const makePagedRequest = async (
  client: MigrationHub,
  input: ListMigrationTasksCommandInput,
  ...args: any
): Promise<ListMigrationTasksCommandOutput> => {
  // @ts-ignore
  return await client.listMigrationTasks(input, ...args);
};
export async function* listMigrationTasksPaginate(
  config: MigrationHubPaginationConfiguration,
  input: ListMigrationTasksCommandInput,
  ...additionalArguments: any
): Paginator<ListMigrationTasksCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
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
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
