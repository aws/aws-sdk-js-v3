// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListServicePrincipalNamesCommand,
  ListServicePrincipalNamesCommandInput,
  ListServicePrincipalNamesCommandOutput,
} from "../commands/ListServicePrincipalNamesCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PcaConnectorAdClient,
  input: ListServicePrincipalNamesCommandInput,
  ...args: any
): Promise<ListServicePrincipalNamesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListServicePrincipalNamesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListServicePrincipalNames(
  config: PcaConnectorAdPaginationConfiguration,
  input: ListServicePrincipalNamesCommandInput,
  ...additionalArguments: any
): Paginator<ListServicePrincipalNamesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListServicePrincipalNamesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof PcaConnectorAdClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected PcaConnectorAd | PcaConnectorAdClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
