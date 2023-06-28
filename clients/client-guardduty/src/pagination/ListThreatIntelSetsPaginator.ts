// smithy-typescript generated code
import { Paginator } from "@smithy/types";

import {
  ListThreatIntelSetsCommand,
  ListThreatIntelSetsCommandInput,
  ListThreatIntelSetsCommandOutput,
} from "../commands/ListThreatIntelSetsCommand";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @internal
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListThreatIntelSetsCommandInput,
  ...args: any
): Promise<ListThreatIntelSetsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListThreatIntelSetsCommand(input), ...args);
};
/**
 * @public
 */
export async function* paginateListThreatIntelSets(
  config: GuardDutyPaginationConfiguration,
  input: ListThreatIntelSetsCommandInput,
  ...additionalArguments: any
): Paginator<ListThreatIntelSetsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListThreatIntelSetsCommandOutput;
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
