// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTrustStoreCertificatesCommand,
  ListTrustStoreCertificatesCommandInput,
  ListTrustStoreCertificatesCommandOutput,
} from "../commands/ListTrustStoreCertificatesCommand";
import { WorkSpacesWebClient } from "../WorkSpacesWebClient";
import { WorkSpacesWebPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkSpacesWebClient,
  input: ListTrustStoreCertificatesCommandInput,
  ...args: any
): Promise<ListTrustStoreCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTrustStoreCertificatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTrustStoreCertificates(
  config: WorkSpacesWebPaginationConfiguration,
  input: ListTrustStoreCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListTrustStoreCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTrustStoreCertificatesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof WorkSpacesWebClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkSpacesWeb | WorkSpacesWebClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
