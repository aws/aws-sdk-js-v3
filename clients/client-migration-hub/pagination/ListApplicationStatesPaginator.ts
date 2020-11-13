import { MigrationHub } from "../MigrationHub";
import { MigrationHubClient } from "../MigrationHubClient";
import {
  ListApplicationStatesCommand,
  ListApplicationStatesCommandInput,
  ListApplicationStatesCommandOutput,
} from "../commands/ListApplicationStatesCommand";
import { MigrationHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

const makePagedClientRequest = async (
  client: MigrationHubClient,
  input: ListApplicationStatesCommandInput,
  ...args: any
): Promise<ListApplicationStatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListApplicationStatesCommand(input), ...args);
};
const makePagedRequest = async (
  client: MigrationHub,
  input: ListApplicationStatesCommandInput,
  ...args: any
): Promise<ListApplicationStatesCommandOutput> => {
  // @ts-ignore
  return await client.listApplicationStates(input, ...args);
};
export async function* listApplicationStatesPaginate(
  config: MigrationHubPaginationConfiguration,
  input: ListApplicationStatesCommandInput,
  ...additionalArguments: any
): Paginator<ListApplicationStatesCommandOutput> {
  let token: string | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListApplicationStatesCommandOutput;
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
