// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListServicesCommand,
  ListServicesCommandInput,
  ListServicesCommandOutput,
} from "../commands/ListServicesCommand";
import { MigrationHubRefactorSpaces } from "../MigrationHubRefactorSpaces";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubRefactorSpacesClient,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubRefactorSpaces,
  input: ListServicesCommandInput,
  ...args: any
): Promise<ListServicesCommandOutput> => {
  // @ts-ignore
  return await client.listServices(input, ...args);
};
export async function* paginateListServices(
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListServicesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicesCommandOutput;
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
