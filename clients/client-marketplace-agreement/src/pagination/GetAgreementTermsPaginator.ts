// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  GetAgreementTermsCommand,
  GetAgreementTermsCommandInput,
  GetAgreementTermsCommandOutput,
} from "../commands/GetAgreementTermsCommand";
import { MarketplaceAgreementClient } from "../MarketplaceAgreementClient";
import { MarketplaceAgreementPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: MarketplaceAgreementClient,
  input: GetAgreementTermsCommandInput,
  ...args: any
): Promise<GetAgreementTermsCommandOutput> => {
  // @ts-ignore
  return await client.send(new GetAgreementTermsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateGetAgreementTerms(
  config: MarketplaceAgreementPaginationConfiguration,
  input: GetAgreementTermsCommandInput,
  ...additionalArguments: any
): Paginator<GetAgreementTermsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: GetAgreementTermsCommandOutput;
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
