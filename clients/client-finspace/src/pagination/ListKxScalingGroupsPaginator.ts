// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListKxScalingGroupsCommand,
  ListKxScalingGroupsCommandInput,
  ListKxScalingGroupsCommandOutput,
} from "../commands/ListKxScalingGroupsCommand";
import { FinspaceClient } from "../FinspaceClient";
import { FinspacePaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: FinspaceClient,
  input: ListKxScalingGroupsCommandInput,
  ...args: any
): Promise<ListKxScalingGroupsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListKxScalingGroupsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListKxScalingGroups(
  config: FinspacePaginationConfiguration,
  input: ListKxScalingGroupsCommandInput,
  ...additionalArguments: any
): Paginator<ListKxScalingGroupsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListKxScalingGroupsCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof FinspaceClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Finspace | FinspaceClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
