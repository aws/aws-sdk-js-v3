// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListDirectoryRegistrationsCommand,
  ListDirectoryRegistrationsCommandInput,
  ListDirectoryRegistrationsCommandOutput,
} from "../commands/ListDirectoryRegistrationsCommand";
import { PcaConnectorAdClient } from "../PcaConnectorAdClient";
import { PcaConnectorAdPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: PcaConnectorAdClient,
  input: ListDirectoryRegistrationsCommandInput,
  ...args: any
): Promise<ListDirectoryRegistrationsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDirectoryRegistrationsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListDirectoryRegistrations(
  config: PcaConnectorAdPaginationConfiguration,
  input: ListDirectoryRegistrationsCommandInput,
  ...additionalArguments: any
): Paginator<ListDirectoryRegistrationsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDirectoryRegistrationsCommandOutput;
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
