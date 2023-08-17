// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import { ListIPSetsCommand, ListIPSetsCommandInput, ListIPSetsCommandOutput } from "../commands/ListIPSetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListIPSetsCommandInput,
  ...args: any
): Promise<ListIPSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListIPSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListIPSets(
  config: GuardDutyPaginationConfiguration,
  input: ListIPSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListIPSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListIPSetsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDutyClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected GuardDuty | GuardDutyClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
