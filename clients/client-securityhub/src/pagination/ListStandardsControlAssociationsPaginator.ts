// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListStandardsControlAssociationsCommand,
  ListStandardsControlAssociationsCommandInput,
  ListStandardsControlAssociationsCommandOutput,
} from "../commands/ListStandardsControlAssociationsCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListStandardsControlAssociationsCommandInput,
  ...args: any
): Promise<ListStandardsControlAssociationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStandardsControlAssociationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStandardsControlAssociations(
  config: SecurityHubPaginationConfiguration,
  input: ListStandardsControlAssociationsCommandInput,
  ...additionalArguments: any
): Paginator<ListStandardsControlAssociationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStandardsControlAssociationsCommandOutput;
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
