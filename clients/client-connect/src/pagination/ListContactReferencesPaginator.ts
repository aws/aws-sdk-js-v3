// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListContactReferencesCommand,
  ListContactReferencesCommandInput,
  ListContactReferencesCommandOutput,
} from "../commands/ListContactReferencesCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListContactReferencesCommandInput,
  ...args: any
): Promise<ListContactReferencesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactReferencesCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListContactReferencesCommandInput,
  ...args: any
): Promise<ListContactReferencesCommandOutput> => {
  // @ts-ignore
  return await client.listContactReferences(input, ...args);
};
export async function* paginateListContactReferences(
  config: ConnectPaginationConfiguration,
  input: ListContactReferencesCommandInput,
  ...additionalArguments: any
): Paginator<ListContactReferencesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactReferencesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof Connect) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof ConnectClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Connect | ConnectClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
