import { OpenSearch } from "../OpenSearch";
import { OpenSearchClient } from "../OpenSearchClient";
import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "../commands/GetUpgradeHistoryCommand";
import { OpenSearchPaginationConfiguration } from "./Interfaces";
import { Paginator } from "@aws-sdk/types";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: OpenSearchClient,
  input: GetUpgradeHistoryCommandInput,
  ...args: any
): Promise<GetUpgradeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUpgradeHistoryCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: OpenSearch,
  input: GetUpgradeHistoryCommandInput,
  ...args: any
): Promise<GetUpgradeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.getUpgradeHistory(input, ...args);
};
export async function* paginateGetUpgradeHistory(
  config: OpenSearchPaginationConfiguration,
  input: GetUpgradeHistoryCommandInput,
  ...additionalArguments: any
): Paginator<GetUpgradeHistoryCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetUpgradeHistoryCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof OpenSearch) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof OpenSearchClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected OpenSearch | OpenSearchClient");
    }
    yield page;
    token = page.NextToken;
    hasNext = !!token;
  }
  // @ts-ignore
  return undefined;
}
