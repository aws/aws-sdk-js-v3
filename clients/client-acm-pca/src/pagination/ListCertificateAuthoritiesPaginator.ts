// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ACMPCA } from "../ACMPCA";
import { ACMPCAClient } from "../ACMPCAClient";
import {
  ListCertificateAuthoritiesCommand,
  ListCertificateAuthoritiesCommandInput,
  ListCertificateAuthoritiesCommandOutput,
} from "../commands/ListCertificateAuthoritiesCommand";
import { ACMPCAPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ACMPCAClient,
  input: ListCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificateAuthoritiesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ACMPCA,
  input: ListCertificateAuthoritiesCommandInput,
  ...args: any
): Promise<ListCertificateAuthoritiesCommandOutput> => {
  // @ts-ignore
  return await client.listCertificateAuthorities(input, ...args);
};
export async function* paginateListCertificateAuthorities(
  config: ACMPCAPaginationConfiguration,
  input: ListCertificateAuthoritiesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificateAuthoritiesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificateAuthoritiesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ACMPCA) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMPCAClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACMPCA | ACMPCAClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
