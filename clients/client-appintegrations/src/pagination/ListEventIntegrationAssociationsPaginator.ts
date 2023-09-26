// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListEventIntegrationAssociationsCommand,
  ListEventIntegrationAssociationsCommandInput,
  ListEventIntegrationAssociationsCommandOutput,
} from "../commands/ListEventIntegrationAssociationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppIntegrationsClient,
  input: ListEventIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListEventIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEventIntegrationAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEventIntegrationAssociations(
  config: AppIntegrationsPaginationConfiguration,
  input: ListEventIntegrationAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListEventIntegrationAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEventIntegrationAssociationsCommandOutput;
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
