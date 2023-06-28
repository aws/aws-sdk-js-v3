// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListCoverageCommand,
  ListCoverageCommandInput,
  ListCoverageCommandOutput,
} from "../commands/ListCoverageCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListCoverageCommandInput,
  ...args: any
): Promise<ListCoverageCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListCoverageCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListCoverage(
  config: GuardDutyPaginationConfiguration,
  input: ListCoverageCommandInput,
  ...additionalArguments: any
): Paginator<ListCoverageCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListCoverageCommandOutput;
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
