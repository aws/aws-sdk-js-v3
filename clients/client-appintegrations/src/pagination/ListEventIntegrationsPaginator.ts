// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListEventIntegrationsCommand,
  ListEventIntegrationsCommandInput,
  ListEventIntegrationsCommandOutput,
} from "../commands/ListEventIntegrationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppIntegrationsClient,
  input: ListEventIntegrationsCommandInput,
  ...args: any
): Promise<ListEventIntegrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventIntegrationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventIntegrations(
  config: AppIntegrationsPaginationConfiguration,
  input: ListEventIntegrationsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventIntegrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventIntegrationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof AppIntegrationsClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected AppIntegrations | AppIntegrationsClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
