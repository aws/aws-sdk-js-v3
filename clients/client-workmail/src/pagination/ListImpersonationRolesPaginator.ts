// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListImpersonationRolesCommand,
  ListImpersonationRolesCommandInput,
  ListImpersonationRolesCommandOutput,
} from "../commands/ListImpersonationRolesCommand";
import { WorkMailClient } from "../WorkMailClient";
import { WorkMailPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: WorkMailClient,
  input: ListImpersonationRolesCommandInput,
  ...args: any
): Promise<ListImpersonationRolesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListImpersonationRolesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListImpersonationRoles(
  config: WorkMailPaginationConfiguration,
  input: ListImpersonationRolesCommandInput,
  ...additionalArguments: any
): Paginator<ListImpersonationRolesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListImpersonationRolesCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof WorkMailClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected WorkMail | WorkMailClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
