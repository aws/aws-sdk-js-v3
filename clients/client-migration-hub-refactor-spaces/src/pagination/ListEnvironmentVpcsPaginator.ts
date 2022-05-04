// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnvironmentVpcsCommand,
  ListEnvironmentVpcsCommandInput,
  ListEnvironmentVpcsCommandOutput,
} from "../commands/ListEnvironmentVpcsCommand";
import { MigrationHubRefactorSpaces } from "../MigrationHubRefactorSpaces";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubRefactorSpacesClient,
  input: ListEnvironmentVpcsCommandInput,
  ...args: any
): Promise<ListEnvironmentVpcsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnvironmentVpcsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubRefactorSpaces,
  input: ListEnvironmentVpcsCommandInput,
  ...args: any
): Promise<ListEnvironmentVpcsCommandOutput> => {
  // @ts-ignore
  return await client.listEnvironmentVpcs(input, ...args);
};
export async function* paginateListEnvironmentVpcs(
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListEnvironmentVpcsCommandInput,
  ...additionalArguments: any
): Paginator<ListEnvironmentVpcsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnvironmentVpcsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MigrationHubRefactorSpaces) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MigrationHubRefactorSpacesClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MigrationHubRefactorSpaces | MigrationHubRefactorSpacesClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
