// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListContactFlowsCommand,
  ListContactFlowsCommandInput,
  ListContactFlowsCommandOutput,
} from "../commands/ListContactFlowsCommand";
import { Connect } from "../Connect";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListContactFlowsCommandInput,
  ...args: any
): Promise<ListContactFlowsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactFlowsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: Connect,
  input: ListContactFlowsCommandInput,
  ...args: any
): Promise<ListContactFlowsCommandOutput> => {
  // @ts-ignore
  return await client.listContactFlows(input, ...args);
};
export async function* paginateListContactFlows(
  config: ConnectPaginationConfiguration,
  input: ListContactFlowsCommandInput,
  ...additionalArguments: any
): Paginator<ListContactFlowsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactFlowsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
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
