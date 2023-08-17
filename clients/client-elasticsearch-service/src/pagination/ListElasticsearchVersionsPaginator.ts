// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListElasticsearchVersionsCommand,
  ListElasticsearchVersionsCommandInput,
  ListElasticsearchVersionsCommandOutput,
} from "../commands/ListElasticsearchVersionsCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListElasticsearchVersionsCommandInput,
  ...args: any
): Promise<ListElasticsearchVersionsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListElasticsearchVersionsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListElasticsearchVersions(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListElasticsearchVersionsCommandInput,
  ...additionalArguments: any
): Paginator<ListElasticsearchVersionsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListElasticsearchVersionsCommandOutput;
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
