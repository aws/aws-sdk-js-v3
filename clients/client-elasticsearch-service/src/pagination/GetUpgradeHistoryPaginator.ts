// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetUpgradeHistoryCommand,
  GetUpgradeHistoryCommandInput,
  GetUpgradeHistoryCommandOutput,
} from "../commands/GetUpgradeHistoryCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: GetUpgradeHistoryCommandInput,
  ...args: any
): Promise<GetUpgradeHistoryCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetUpgradeHistoryCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetUpgradeHistory(
  config: ElasticsearchServicePaginationConfiguration,
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
    if (config.client instanceof ElasticsearchServiceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ElasticsearchService | ElasticsearchServiceClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
