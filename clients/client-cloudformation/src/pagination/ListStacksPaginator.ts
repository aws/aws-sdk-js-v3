// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { CloudFormationClient } from "../CloudFormationClient";
import { ListStacksCommand, ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import { CloudFormationPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: CloudFormationClient,
  input: ListStacksCommandInput,
  ...args: any
): Promise<ListStacksCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListStacksCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListStacks(
  config: CloudFormationPaginationConfiguration,
  input: ListStacksCommandInput,
  ...additionalArguments: any
): Paginator<ListStacksCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListStacksCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    if (config.client instanceof CloudFormationClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected CloudFormation | CloudFormationClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
