// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CodeGuruSecurityClient } from "../CodeGuruSecurityClient";
import { ListScansCommand, ListScansCommandInput, ListScansCommandOutput } from "../commands/ListScansCommand";
import { CodeGuruSecurityPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CodeGuruSecurityClient,
  input: ListScansCommandInput,
  ...args: any
): Promise<ListScansCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListScansCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListScans(
  config: CodeGuruSecurityPaginationConfiguration,
  input: ListScansCommandInput,
  ...additionalArguments: any
): Paginator<ListScansCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListScansCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof CodeGuruSecurityClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CodeGuruSecurity | CodeGuruSecurityClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
