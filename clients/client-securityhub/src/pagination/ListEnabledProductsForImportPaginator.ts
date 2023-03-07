// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import { SecurityHubClient } from "../SecurityHubClient";
import { SecurityHubPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: SecurityHubClient,
  input: ListEnabledProductsForImportCommandInput,
  ...args: any
): Promise<ListEnabledProductsForImportCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEnabledProductsForImportCommand(input), ...args);
};
export async function* paginateListEnabledProductsForImport(
  config: SecurityHubPaginationConfiguration,
  input: ListEnabledProductsForImportCommandInput,
  ...additionalArguments: any
): Paginator<ListEnabledProductsForImportCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEnabledProductsForImportCommandOutput;
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
