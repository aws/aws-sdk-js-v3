// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListTemplateGroupAccessControlEntriesCommand,
  ListTemplateGroupAccessControlEntriesCommandInput,
  ListTemplateGroupAccessControlEntriesCommandOutput,
} from "../commands/ListTemplateGroupAccessControlEntriesCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PcaConnectorAdClient,
  input: ListTemplateGroupAccessControlEntriesCommandInput,
  ...args: any
): Promise<ListTemplateGroupAccessControlEntriesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListTemplateGroupAccessControlEntriesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListTemplateGroupAccessControlEntries(
  config: PcaConnectorAdPaginationConfiguration,
  input: ListTemplateGroupAccessControlEntriesCommandInput,
  ...additionalArguments: any
): Paginator<ListTemplateGroupAccessControlEntriesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListTemplateGroupAccessControlEntriesCommandOutput;
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
