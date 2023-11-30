// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  SearchAgreementsCommand,
  SearchAgreementsCommandInput,
  SearchAgreementsCommandOutput,
} from "../commands/SearchAgreementsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MarketplaceAgreementClient,
  input: SearchAgreementsCommandInput,
  ...args: any
): Promise<SearchAgreementsCommandOutput> => {
  // @ts-ignore
  return await client.send(new SearchAgreementsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateSearchAgreements(
  config: MarketplaceAgreementPaginationConfiguration,
  input: SearchAgreementsCommandInput,
  ...additionalArguments: any
): Paginator<SearchAgreementsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: SearchAgreementsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof MarketplaceAgreementClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MarketplaceAgreement | MarketplaceAgreementClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
