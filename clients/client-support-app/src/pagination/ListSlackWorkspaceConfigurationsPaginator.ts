// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListSlackWorkspaceConfigurationsCommand,
  ListSlackWorkspaceConfigurationsCommandInput,
  ListSlackWorkspaceConfigurationsCommandOutput,
} from "../commands/ListSlackWorkspaceConfigurationsCommand";
import { SupportAppClient } from "../SupportAppClient";
import { SupportAppPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SupportAppClient,
  input: ListSlackWorkspaceConfigurationsCommandInput,
  ...args: any
): Promise<ListSlackWorkspaceConfigurationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListSlackWorkspaceConfigurationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListSlackWorkspaceConfigurations(
  config: SupportAppPaginationConfiguration,
  input: ListSlackWorkspaceConfigurationsCommandInput,
  ...additionalArguments: any
): Paginator<ListSlackWorkspaceConfigurationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListSlackWorkspaceConfigurationsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    if (config.client instanceof SupportAppClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SupportApp | SupportAppClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
