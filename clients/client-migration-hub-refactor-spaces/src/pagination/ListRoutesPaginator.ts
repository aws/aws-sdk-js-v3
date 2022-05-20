// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ListRoutesCommand, ListRoutesCommandInput, ListRoutesCommandOutput } from "../commands/ListRoutesCommand";
import { MigrationHubRefactorSpaces } from "../MigrationHubRefactorSpaces";
import { MigrationHubRefactorSpacesClient } from "../MigrationHubRefactorSpacesClient";
import { MigrationHubRefactorSpacesPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MigrationHubRefactorSpacesClient,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListRoutesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MigrationHubRefactorSpaces,
  input: ListRoutesCommandInput,
  ...args: any
): Promise<ListRoutesCommandOutput> => {
  // @ts-ignore
  return await client.listRoutes(input, ...args);
};
export async function* paginateListRoutes(
  config: MigrationHubRefactorSpacesPaginationConfiguration,
  input: ListRoutesCommandInput,
  ...additionalArguments: any
): Paginator<ListRoutesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListRoutesCommandOutput;
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
