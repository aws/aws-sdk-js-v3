// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListWebsiteCertificateAuthoritiesCommand,
  ListWebsiteCertificateAuthoritiesCommandInput,
  ListWebsiteCertificateAuthoritiesCommandOutput,
} from "../commands/ListWebsiteCertificateAuthoritiesCommand";
import { WorkLinkClient } from "../WorkLinkClient";
import { WorkLinkPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkLinkClient,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListWebsiteCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListWebsiteCertificateAuthoritiesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListWebsiteCertificateAuthorities(
  config: WorkLinkPaginationConfiguration,
  input: ListWebsiteCertificateAuthoritiesCommandInput,
  ...additionalArguments: any
): Paginator<ListWebsiteCertificateAuthoritiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListWebsiteCertificateAuthoritiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkLinkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkLink | WorkLinkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
