// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListConfigurationPolicyAssociationsCommand,
  ListConfigurationPolicyAssociationsCommandInput,
  ListConfigurationPolicyAssociationsCommandOutput,
} from "../commands/ListConfigurationPolicyAssociationsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListConfigurationPolicyAssociationsCommandInput,
  ...args: any
): Promise<ListConfigurationPolicyAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListConfigurationPolicyAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListConfigurationPolicyAssociations(
  config: SecurityHubPaginationConfiguration,
  input: ListConfigurationPolicyAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListConfigurationPolicyAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListConfigurationPolicyAssociationsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
