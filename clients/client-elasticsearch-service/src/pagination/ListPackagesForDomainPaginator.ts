// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListPackagesForDomainCommand,
  ListPackagesForDomainCommandInput,
  ListPackagesForDomainCommandOutput,
} from "../commands/ListPackagesForDomainCommand";
import { ElasticsearchServiceClient } from "../ElasticsearchServiceClient";
import { ElasticsearchServicePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ElasticsearchServiceClient,
  input: ListPackagesForDomainCommandInput,
  ...args: any
): Promise<ListPackagesForDomainCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListPackagesForDomainCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListPackagesForDomain(
  config: ElasticsearchServicePaginationConfiguration,
  input: ListPackagesForDomainCommandInput,
  ...additionalArguments: any
): Paginator<ListPackagesForDomainCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListPackagesForDomainCommandOutput;
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
