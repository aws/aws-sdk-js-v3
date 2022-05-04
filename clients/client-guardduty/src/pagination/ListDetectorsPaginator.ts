// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListDetectorsCommand,
  ListDetectorsCommandInput,
  ListDetectorsCommandOutput,
} from "../commands/ListDetectorsCommand";
import { GuardDuty } from "../GuardDuty";
import { GuardDutyClient } from "../GuardDutyClient";
import { GuardDutyPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: GuardDutyClient,
  input: ListDetectorsCommandInput,
  ...args: any
): Promise<ListDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListDetectorsCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: GuardDuty,
  input: ListDetectorsCommandInput,
  ...args: any
): Promise<ListDetectorsCommandOutput> => {
  // @ts-ignore
  return await client.listDetectors(input, ...args);
};
export async function* paginateListDetectors(
  config: GuardDutyPaginationConfiguration,
  input: ListDetectorsCommandInput,
  ...additionalArguments: any
): Paginator<ListDetectorsCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListDetectorsCommandOutput;
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
