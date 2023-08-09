// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListInstanceGroupsCommand,
  ListInstanceGroupsCommandInput,
  ListInstanceGroupsCommandOutput,
} from "../commands/ListInstanceGroupsCommand";
import { EMRClient } from "../EMRClient";
import { EMRPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: EMRClient,
  input: ListInstanceGroupsCommandInput,
  ...args: any
): Promise<ListInstanceGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListInstanceGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListInstanceGroups(
  config: EMRPaginationConfiguration,
  input: ListInstanceGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListInstanceGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.Marker
  let token: typeof input.Marker | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListInstanceGroupsCommandOutput;
  while (hasNext) {
    input.Marker = token;
    if (config.client instanceof EMRClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected EMR | EMRClient");
    }
    yield page;
    const prevToken = token;
    token = page.Marker;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
