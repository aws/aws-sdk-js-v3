// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListFindingsCommand,
  ListFindingsCommandInput,
  ListFindingsCommandOutput,
} from "../commands/ListFindingsCommand";
import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListFindingsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GuardDuty,
  input: ListFindingsCommandInput,
  ...args: any
): Promise<ListFindingsCommandOutput> => {
  // @ts-ignore
  return await client.listFindings(input, ...args);
};
export async function* paginateListFindings(
  config: GuardDutyPaginationConfiguration,
  input: ListFindingsCommandInput,
  ...additionalArguments: any
): Paginator<ListFindingsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListFindingsCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof GuardDuty) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof GuardDutyClient) {
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
