// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AppIntegrationsClient } from "../AppIntegrationsClient";
import {
  ListDataIntegrationAssociationsCommand,
  ListDataIntegrationAssociationsCommandInput,
  ListDataIntegrationAssociationsCommandOutput,
} from "../commands/ListDataIntegrationAssociationsCommand";
import { AppIntegrationsPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AppIntegrationsClient,
  input: ListDataIntegrationAssociationsCommandInput,
  ...args: any
): Promise<ListDataIntegrationAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDataIntegrationAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDataIntegrationAssociations(
  config: AppIntegrationsPaginationConfiguration,
  input: ListDataIntegrationAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDataIntegrationAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDataIntegrationAssociationsCommandOutput;
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
