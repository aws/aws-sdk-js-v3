// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListServerCertificatesCommand,
  ListServerCertificatesCommandInput,
  ListServerCertificatesCommandOutput,
} from "../commands/ListServerCertificatesCommand";
import { IAMClient } from "../IAMClient";
import { IAMPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: IAMClient,
  input: ListServerCertificatesCommandInput,
  ...args: any
): Promise<ListServerCertificatesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServerCertificatesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServerCertificates(
  config: IAMPaginationConfiguration,
  input: ListServerCertificatesCommandInput,
  ...additionalArguments: any
): Paginator<ListServerCertificatesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServerCertificatesCommandOutput;
  while (hasNext) {
    input.Marker = token;
    input["MaxItems"] = config.pageSize;
    if (config.client instanceof IAMClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected IAM | IAMClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
