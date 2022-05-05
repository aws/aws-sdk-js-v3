// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import { ACM } from "../ACM";
import { ACMClient } from "../ACMClient";
import {
  ListCertificatesCommand,
  ListCertificatesCommandInput,
  ListCertificatesCommandOutput,
} from "../commands/ListCertificatesCommand";
import { ACMPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ACMClient,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCertificatesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: ACM,
  input: ListCertificatesCommandInput,
  ...args: any
): Promise<ListCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.listCertificates(input, ...args);
};
export async function* paginateListCertificates(
  config: ACMPaginationConfiguration,
  input: ListCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCertificatesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof ACM) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ACMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected ACM | ACMClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
