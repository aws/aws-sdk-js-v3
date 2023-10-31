// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { AmplifyClient } from "../AmplifyClient";
import {
  ListBranchesCommand,
  ListBranchesCommandInput,
  ListBranchesCommandOutput,
} from "../commands/ListBranchesCommand";
import { AmplifyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: AmplifyClient,
  input: ListBranchesCommandInput,
  ...args: any
): Promise<ListBranchesCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListBranchesCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListBranches(
  config: AmplifyPaginationConfiguration,
  input: ListBranchesCommandInput,
  ...additionalArguments: any
): Paginator<ListBranchesCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.nextToken
  let token: typeof input.nextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListBranchesCommandOutput;
  while (hasNext) {
    input.nextToken = token;
    input["maxResults"] = config.pageSize;
    if (config.client instanceof AmplifyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected Amplify | AmplifyClient");
    }
    yield page;
    const prevToken = token;
    token = page.nextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
