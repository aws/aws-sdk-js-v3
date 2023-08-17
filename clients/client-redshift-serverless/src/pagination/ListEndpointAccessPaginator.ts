// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListEndpointAccessCommand,
  ListEndpointAccessCommandInput,
  ListEndpointAccessCommandOutput,
} from "../commands/ListEndpointAccessCommand";
import { RedshiftServerlessClient } from "../RedshiftServerlessClient";
import { RedshiftServerlessPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: RedshiftServerlessClient,
  input: ListEndpointAccessCommandInput,
  ...args: any
): Promise<ListEndpointAccessCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListEndpointAccessCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListEndpointAccess(
  config: RedshiftServerlessPaginationConfiguration,
  input: ListEndpointAccessCommandInput,
  ...additionalArguments: any
): Paginator<ListEndpointAccessCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListEndpointAccessCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof RedshiftServerlessClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected RedshiftServerless | RedshiftServerlessClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
