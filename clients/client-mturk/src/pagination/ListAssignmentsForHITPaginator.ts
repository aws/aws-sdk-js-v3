// smithy-typescript generated code
import { Paginator } from "@aws-sdk/types";

import {
  ListAssignmentsForHITCommand,
  ListAssignmentsForHITCommandInput,
  ListAssignmentsForHITCommandOutput,
} from "../commands/ListAssignmentsForHITCommand";
import { MTurk } from "../MTurk";
import { MTurkClient } from "../MTurkClient";
import { MTurkPaginationConfiguration } from "./Interfaces";

/**
 * @private
 */
const makePagedClientRequest = async (
  client: MTurkClient,
  input: ListAssignmentsForHITCommandInput,
  ...args: any
): Promise<ListAssignmentsForHITCommandOutput> => {
  // @ts-ignore
  return await client.send(new ListAssignmentsForHITCommand(input), ...args);
};
/**
 * @private
 */
const makePagedRequest = async (
  client: MTurk,
  input: ListAssignmentsForHITCommandInput,
  ...args: any
): Promise<ListAssignmentsForHITCommandOutput> => {
  // @ts-ignore
  return await client.listAssignmentsForHIT(input, ...args);
};
export async function* paginateListAssignmentsForHIT(
  config: MTurkPaginationConfiguration,
  input: ListAssignmentsForHITCommandInput,
  ...additionalArguments: any
): Paginator<ListAssignmentsForHITCommandOutput> {
  // ToDo: replace with actual type instead of typeof input.NextToken
  let token: typeof input.NextToken | undefined = config.startingToken || undefined;
  let hasNext = true;
  let page: ListAssignmentsForHITCommandOutput;
  while (hasNext) {
    input.NextToken = token;
    input["MaxResults"] = config.pageSize;
    if (config.client instanceof MTurk) {
      page = await makePagedRequest(config.client, input, ...additionalArguments);
    } else if (config.client instanceof MTurkClient) {
      page = await makePagedClientRequest(config.client, input, ...additionalArguments);
    } else {
      throw new Error("Invalid client, expected MTurk | MTurkClient");
    }
    yield page;
    const prevToken = token;
    token = page.NextToken;
    hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
  }
  // @ts-ignore
  return undefined;
}
