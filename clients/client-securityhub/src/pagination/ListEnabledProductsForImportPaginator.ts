import { SecurityHub } from "../SecurityHub";
import { SecurityHubClient } from "../SecurityHubClient";
import {
  ListEnabledProductsForImportCommand,
  ListEnabledProductsForImportCommandInput,
  ListEnabledProductsForImportCommandOutput,
} from "../commands/ListEnabledProductsForImportCommand";
import { SecurityHubPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

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
/**
 * @private
 */
const makePagedRequest = async (
  client: SecurityHub,
  input: ListEnabledProductsForImportCommandInput,
  ...args: any
): Promise<ListEnabledProductsForImportCommandOutput> => {
  // @ts-ignore
  return await client.listEnabledProductsForImport(input, ...args);
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
    if (config.client instanceof SecurityHub) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof SecurityHubClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected SecurityHub | SecurityHubClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
