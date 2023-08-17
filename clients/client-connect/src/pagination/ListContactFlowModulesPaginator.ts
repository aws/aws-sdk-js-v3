// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListContactFlowModulesCommand,
  ListContactFlowModulesCommandInput,
  ListContactFlowModulesCommandOutput,
} from "../commands/ListContactFlowModulesCommand";
import { ConnectClient } from "../ConnectClient";
import { ConnectPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: ConnectClient,
  input: ListContactFlowModulesCommandInput,
  ...args: any
): Promise<ListContactFlowModulesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListContactFlowModulesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListContactFlowModules(
  config: ConnectPaginationConfiguration,
  input: ListContactFlowModulesCommandInput,
  ...additionalArguments: any
): Paginator<ListContactFlowModulesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListContactFlowModulesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof ConnectClient) {
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
