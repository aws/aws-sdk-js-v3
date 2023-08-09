// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListIAMPolicyAssignmentsCommand,
  ListIAMPolicyAssignmentsCommandInput,
  ListIAMPolicyAssignmentsCommandOutput,
} from "../commands/ListIAMPolicyAssignmentsCommand";
import { QuickSightClient } from "../QuickSightClient";
import { QuickSightPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: QuickSightClient,
  input: ListIAMPolicyAssignmentsCommandInput,
  ...args: any
): Promise<ListIAMPolicyAssignmentsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIAMPolicyAssignmentsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIAMPolicyAssignments(
  config: QuickSightPaginationConfiguration,
  input: ListIAMPolicyAssignmentsCommandInput,
  ...additionalArguments: any
): Paginator<ListIAMPolicyAssignmentsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIAMPolicyAssignmentsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof QuickSightClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected QuickSight | QuickSightClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
